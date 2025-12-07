#!/bin/bash

# AWS S3 + CloudFront Static Export Deployment Script
# This script builds a static export and deploys to S3 with CloudFront
# Prerequisites: AWS CLI configured, S3 bucket and CloudFront distribution created

set -e

echo "🚀 Deploying Static Export to AWS S3 + CloudFront"
echo "=================================================="
echo ""

# Configuration (update these values or set as environment variables)
S3_BUCKET="${AWS_S3_BUCKET:-hyperfabrics.com}"
CLOUDFRONT_DISTRIBUTION_ID="${AWS_CLOUDFRONT_DIST_ID:-E3SE8P2WZP6BAD}"
CLOUDFLARE_ZONE_ID="${CLOUDFLARE_ZONE_ID:-}"
CLOUDFLARE_API_TOKEN="${CLOUDFLARE_API_TOKEN:-}"
AWS_REGION="${AWS_REGION:-us-east-1}"

# Check if AWS CLI is configured
if ! aws sts get-caller-identity &> /dev/null; then
    echo "❌ AWS CLI not configured"
    echo "   Run: aws configure"
    exit 1
fi

# Check if bucket exists, create if it doesn't
if ! aws s3 ls "s3://${S3_BUCKET}" &> /dev/null; then
    echo "⚠️  S3 bucket '${S3_BUCKET}' not found"
    echo "   Creating bucket..."
    aws s3 mb "s3://${S3_BUCKET}" --region "${AWS_REGION}"

    # Enable static website hosting
    echo "   Enabling static website hosting..."
    aws s3 website "s3://${S3_BUCKET}" \
        --index-document index.html \
        --error-document 404.html \
        --region "${AWS_REGION}"
fi

# Backup current next.config.ts if it exists
if [ -f "next.config.ts" ]; then
    echo "💾 Backing up next.config.ts..."
    cp next.config.ts next.config.ts.backup
fi

# Create temporary next.config.ts for static export
echo "⚙️  Configuring Next.js for static export..."
cat > next.config.static.ts << 'EOF'
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export configuration
  output: 'export',
  trailingSlash: true,

  // Optimize for production
  poweredByHeader: false,

  // Image optimization (disabled for static export)
  images: {
    unoptimized: true,
  },

  // Headers for SEO and security (will be set via CloudFront)
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
EOF

# Replace next.config.ts temporarily
mv next.config.static.ts next.config.ts

# Build static export
echo "📦 Building static export..."
npm run build

# Restore original next.config.ts
if [ -f "next.config.ts.backup" ]; then
    echo "🔄 Restoring original next.config.ts..."
    mv next.config.ts.backup next.config.ts
fi

# Check if static export was created
if [ ! -d "out" ]; then
    echo "❌ Static export failed - 'out' directory not found"
    exit 1
fi

# Pre-generate sitemap.xml and robots.txt if they don't exist
echo "🗺️  Checking sitemap and robots.txt..."
if [ ! -f "out/sitemap.xml" ]; then
    echo "   Generating sitemap.xml..."
    # Create a basic sitemap from the static export
    BASE_URL="${NEXT_PUBLIC_SITE_URL:-https://hyperfabrics.com}"
    cat > out/sitemap.xml << SITEMAP
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
SITEMAP

    # Find all HTML files and add them to sitemap
    find out -name "index.html" -type f | while read file; do
        path=$(echo "$file" | sed 's|out/||' | sed 's|/index.html||' | sed 's|^|/|')
        if [ "$path" = "/" ]; then
            path=""
        fi
        echo "  <url>" >> out/sitemap.xml
        echo "    <loc>${BASE_URL}${path}</loc>" >> out/sitemap.xml
        echo "    <changefreq>weekly</changefreq>" >> out/sitemap.xml
        echo "    <priority>0.8</priority>" >> out/sitemap.xml
        echo "  </url>" >> out/sitemap.xml
    done

    echo "</urlset>" >> out/sitemap.xml
fi

if [ ! -f "out/robots.txt" ]; then
    echo "   Generating robots.txt..."
    BASE_URL="${NEXT_PUBLIC_SITE_URL:-https://hyperfabrics.com}"
    cat > out/robots.txt << ROBOTS
User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
ROBOTS
fi

# Upload static export to S3
echo "📤 Uploading static export to S3..."

# Upload non-HTML files with long cache
aws s3 sync out/ "s3://${S3_BUCKET}" \
    --delete \
    --region "${AWS_REGION}" \
    --exclude "*.html" \
    --exclude "*.xml" \
    --exclude "*.txt" \
    --exclude "*.json" \
    --cache-control "public, max-age=31536000, immutable"

# Upload HTML files with shorter cache
aws s3 sync out/ "s3://${S3_BUCKET}" \
    --delete \
    --region "${AWS_REGION}" \
    --include "*.html" \
    --cache-control "public, max-age=0, must-revalidate" \
    --content-type "text/html; charset=utf-8"

# Upload XML files (sitemap)
aws s3 sync out/ "s3://${S3_BUCKET}" \
    --delete \
    --region "${AWS_REGION}" \
    --include "*.xml" \
    --cache-control "public, max-age=3600" \
    --content-type "application/xml; charset=utf-8"

# Upload robots.txt and other text files
aws s3 sync out/ "s3://${S3_BUCKET}" \
    --delete \
    --region "${AWS_REGION}" \
    --include "robots.txt" \
    --include "*.txt" \
    --cache-control "public, max-age=3600" \
    --content-type "text/plain; charset=utf-8"

# Upload JSON files
aws s3 sync out/ "s3://${S3_BUCKET}" \
    --delete \
    --region "${AWS_REGION}" \
    --include "*.json" \
    --cache-control "public, max-age=3600" \
    --content-type "application/json; charset=utf-8"

# Set bucket policy for public read access
echo "🔐 Setting bucket policy..."
cat > /tmp/bucket-policy.json << POLICY
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::${S3_BUCKET}/*"
    }
  ]
}
POLICY

aws s3api put-bucket-policy \
    --bucket "${S3_BUCKET}" \
    --policy file:///tmp/bucket-policy.json \
    --region "${AWS_REGION}" 2>/dev/null || echo "   (Bucket policy may already be set)"

rm -f /tmp/bucket-policy.json

# Invalidate CloudFront cache if distribution ID is provided
if [ -n "${CLOUDFRONT_DISTRIBUTION_ID}" ]; then
    echo "🔄 Invalidating CloudFront cache..."
    INVALIDATION_ID=$(aws cloudfront create-invalidation \
        --distribution-id "${CLOUDFRONT_DISTRIBUTION_ID}" \
        --paths "/*" \
        --query 'Invalidation.Id' \
        --output text)
    echo "   Invalidation ID: ${INVALIDATION_ID}"
fi

# Invalidate Cloudflare cache if zone ID and API token are provided
if [ -n "${CLOUDFLARE_ZONE_ID}" ] && [ -n "${CLOUDFLARE_API_TOKEN}" ]; then
    echo "🔄 Purging Cloudflare cache..."
    RESPONSE=$(curl -s -X POST \
        "https://api.cloudflare.com/client/v4/zones/${CLOUDFLARE_ZONE_ID}/purge_cache" \
        -H "Authorization: Bearer ${CLOUDFLARE_API_TOKEN}" \
        -H "Content-Type: application/json" \
        --data '{"purge_everything":true}')

    SUCCESS=$(echo "$RESPONSE" | grep -o '"success":[^,]*' | cut -d: -f2)
    if [ "$SUCCESS" = "true" ]; then
        echo "   ✓ Cloudflare cache purged successfully"
    else
        ERRORS=$(echo "$RESPONSE" | grep -o '"errors":\[.*\]' || echo "Unknown error")
        echo "   ⚠ Cloudflare cache purge failed: ${ERRORS}"
    fi
elif [ -n "${CLOUDFLARE_ZONE_ID}" ] || [ -n "${CLOUDFLARE_API_TOKEN}" ]; then
    echo "⚠️  Cloudflare zone ID or API token missing - skipping Cloudflare cache purge"
fi

echo ""
echo "✅ Static export deployment complete!"
echo "   S3 Bucket: s3://${S3_BUCKET}"
if [ -n "${CLOUDFRONT_DISTRIBUTION_ID}" ]; then
    echo "   CloudFront Distribution: ${CLOUDFRONT_DISTRIBUTION_ID}"
    echo "   Website URL: https://${CLOUDFRONT_DISTRIBUTION_ID}.cloudfront.net"
fi
echo "   S3 Website URL: http://${S3_BUCKET}.s3-website-${AWS_REGION}.amazonaws.com"
echo ""
echo "📝 Next steps:"
echo "   1. Configure CloudFront to use S3 bucket as origin"
echo "   2. Set up custom domain (optional)"
echo "   3. Submit sitemap to Google Search Console"
