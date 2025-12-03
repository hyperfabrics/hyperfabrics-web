#!/bin/bash

# AWS S3 + CloudFront Deployment Script
# This script builds and deploys Next.js app to S3 with CloudFront
#
# NOTE: This app uses dynamic routes (sitemap.ts, robots.ts) which require
# server-side rendering. For full SSR support, consider:
# - AWS Amplify (handles Next.js SSR automatically)
# - ECS/Fargate with Docker (use deploy-aws-ecs.sh)
# - Lambda@Edge functions for dynamic routes
#
# For static-only deployment, configure next.config.ts with:
#   output: 'export'
#   trailingSlash: true
#
# Prerequisites: AWS CLI configured, S3 bucket and CloudFront distribution created

set -e

echo "🚀 Deploying to AWS S3 + CloudFront"
echo "===================================="
echo ""

# Configuration (update these values or set as environment variables)
S3_BUCKET="${AWS_S3_BUCKET:-fazezero-website}"
CLOUDFRONT_DISTRIBUTION_ID="${AWS_CLOUDFRONT_DIST_ID:-}"
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

# Build the project
echo "📦 Building project..."
npm run build

# Determine build output type
BUILD_OUTPUT=""
if [ -d "out" ]; then
    # Static export output
    BUILD_OUTPUT="out"
    echo "✓ Found static export output (out/)"
elif [ -d ".next/standalone" ]; then
    # Standalone build (for server deployment)
    echo "⚠️  Standalone build detected - this requires a Node.js server"
    echo "   Consider using deploy-aws-ecs.sh for server-side deployment"
    echo "   Or configure next.config.ts with 'output: export' for static export"
    BUILD_OUTPUT=".next/standalone"
elif [ -d ".next" ]; then
    # Standard Next.js build
    echo "⚠️  Standard Next.js build detected"
    echo "   This build requires server-side rendering"
    echo "   Consider using AWS Amplify or ECS/Fargate deployment"
    BUILD_OUTPUT=".next"
else
    echo "❌ Build output not found"
    exit 1
fi

# Upload build output
echo "📤 Uploading build to S3..."
if [ "$BUILD_OUTPUT" = "out" ]; then
    # Static export - upload everything from out directory
    aws s3 sync "${BUILD_OUTPUT}/" "s3://${S3_BUCKET}" \
        --delete \
        --region "${AWS_REGION}" \
        --cache-control "public, max-age=31536000, immutable" \
        --exclude "*.html" \
        --exclude "*.json"

    # Upload HTML files with shorter cache
    aws s3 sync "${BUILD_OUTPUT}/" "s3://${S3_BUCKET}" \
        --delete \
        --region "${AWS_REGION}" \
        --cache-control "public, max-age=0, must-revalidate" \
        --include "*.html" \
        --include "*.json"
else
    # Server build - upload static assets only
    echo "   Uploading static assets..."
    if [ -d ".next/static" ]; then
        aws s3 sync .next/static "s3://${S3_BUCKET}/_next/static" \
            --delete \
            --region "${AWS_REGION}" \
            --cache-control "public, max-age=31536000, immutable"
    fi
fi

# Upload public assets
if [ -d "public" ]; then
    echo "📤 Uploading public assets..."
    aws s3 sync public/ "s3://${S3_BUCKET}/" \
        --delete \
        --region "${AWS_REGION}" \
        --exclude "*.html" \
        --cache-control "public, max-age=31536000, immutable"

    # Upload HTML files from public with shorter cache
    aws s3 sync public/ "s3://${S3_BUCKET}/" \
        --delete \
        --region "${AWS_REGION}" \
        --include "*.html" \
        --cache-control "public, max-age=0, must-revalidate"
fi

# Set proper content types
echo "🔧 Setting content types..."
aws s3 cp "s3://${S3_BUCKET}" "s3://${S3_BUCKET}" \
    --recursive \
    --region "${AWS_REGION}" \
    --metadata-directive REPLACE \
    --exclude "*" \
    --include "*.html" \
    --content-type "text/html; charset=utf-8" 2>/dev/null || true

aws s3 cp "s3://${S3_BUCKET}" "s3://${S3_BUCKET}" \
    --recursive \
    --region "${AWS_REGION}" \
    --metadata-directive REPLACE \
    --exclude "*" \
    --include "*.xml" \
    --content-type "application/xml; charset=utf-8" 2>/dev/null || true

aws s3 cp "s3://${S3_BUCKET}" "s3://${S3_BUCKET}" \
    --recursive \
    --region "${AWS_REGION}" \
    --metadata-directive REPLACE \
    --exclude "*" \
    --include "*.json" \
    --content-type "application/json; charset=utf-8" 2>/dev/null || true

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

echo ""
echo "✅ Deployment complete!"
echo "   S3 Bucket: s3://${S3_BUCKET}"
if [ -n "${CLOUDFRONT_DISTRIBUTION_ID}" ]; then
    echo "   CloudFront Distribution: ${CLOUDFRONT_DISTRIBUTION_ID}"
fi
echo ""
if [ "$BUILD_OUTPUT" != "out" ]; then
    echo "⚠️  NOTE: This deployment only includes static assets."
    echo "   For full SSR support, use AWS Amplify or ECS/Fargate deployment."
fi
