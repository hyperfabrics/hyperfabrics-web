#!/bin/bash

# SEO Setup Verification Script
# Run this after implementing SEO to verify everything is working

echo "🔍 fazezero SEO Verification Script"
echo "===================================="
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if server is running
echo "📡 Checking if dev server is running..."
if curl -s http://localhost:3000 > /dev/null; then
    echo -e "${GREEN}✓${NC} Dev server is running"
else
    echo -e "${RED}✗${NC} Dev server is NOT running"
    echo "   Run: npm run dev"
    exit 1
fi
echo ""

# Check sitemap
echo "🗺️  Checking sitemap..."
if curl -s http://localhost:3000/sitemap.xml | grep -q "<?xml"; then
    echo -e "${GREEN}✓${NC} Sitemap is accessible at /sitemap.xml"
    echo "   Pages found:"
    curl -s http://localhost:3000/sitemap.xml | grep -o "<loc>[^<]*" | sed 's/<loc>/   - /'
else
    echo -e "${RED}✗${NC} Sitemap not accessible"
fi
echo ""

# Check robots.txt
echo "🤖 Checking robots.txt..."
if curl -s http://localhost:3000/robots.txt | grep -q "User-Agent"; then
    echo -e "${GREEN}✓${NC} Robots.txt is accessible at /robots.txt"
    curl -s http://localhost:3000/robots.txt | sed 's/^/   /'
else
    echo -e "${RED}✗${NC} Robots.txt not accessible"
fi
echo ""

# Check environment variables
echo "⚙️  Checking environment variables..."
if [ -f .env.local ]; then
    echo -e "${GREEN}✓${NC} .env.local exists"

    if grep -q "NEXT_PUBLIC_SITE_URL" .env.local; then
        echo -e "${GREEN}✓${NC} NEXT_PUBLIC_SITE_URL is set"
    else
        echo -e "${YELLOW}⚠${NC} NEXT_PUBLIC_SITE_URL is not set"
    fi
else
    echo -e "${YELLOW}⚠${NC} .env.local does not exist"
    echo "   Create it from .env.example"
fi
echo ""

# Check for required files
echo "📁 Checking required files..."
FILES=(
    "src/app/sitemap.ts"
    "src/app/robots.ts"
    "src/utils/schema.ts"
    "src/utils/seo.ts"
    "public/site.webmanifest"
)

for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✓${NC} $file"
    else
        echo -e "${RED}✗${NC} $file is missing"
    fi
done
echo ""

# Check for assets
echo "🖼️  Checking for required assets..."
ASSETS=(
    "public/favicon.ico"
    "public/favicon-16x16.png"
    "public/apple-touch-icon.png"
    "public/icon-192.png"
    "public/icon-512.png"
    "public/logo.png"
    "public/og-image.png"
    "public/og-platform.png"
    "public/og-solutions.png"
    "public/og-industries.png"
    "public/og-developers.png"
    "public/og-compliance.png"
    "public/og-contact.png"
)

missing_count=0
for asset in "${ASSETS[@]}"; do
    if [ -f "$asset" ]; then
        echo -e "${GREEN}✓${NC} $asset"
    else
        echo -e "${YELLOW}⚠${NC} $asset is missing"
        ((missing_count++))
    fi
done

if [ $missing_count -gt 0 ]; then
    echo ""
    echo -e "${YELLOW}Note:${NC} $missing_count asset(s) missing. These are required for full SEO functionality."
fi
echo ""

# Check metadata
echo "📝 Checking page metadata..."
PAGES=("" "platform" "solutions" "industries" "developers" "compliance" "contact")

for page in "${PAGES[@]}"; do
    url="http://localhost:3000/$page"
    if curl -s "$url" | grep -q "<meta"; then
        echo -e "${GREEN}✓${NC} /$page has metadata"
    else
        echo -e "${RED}✗${NC} /$page missing metadata"
    fi
done
echo ""

# Summary
echo "======================================"
echo "📊 Verification Summary"
echo "======================================"
echo ""
echo "Next steps:"
echo "1. Create missing assets (favicons and OG images)"
echo "2. Set up .env.local with your site URL"
echo "3. Test social sharing previews"
echo "4. Deploy and submit sitemap to search engines"
echo ""
echo "📚 Documentation:"
echo "   - SEO.md - Full documentation"
echo "   - SEO-CHECKLIST.md - Complete checklist"
echo "   - SEO-SUMMARY.md - Quick overview"
echo "   - SEO-QUICK-REF.md - Quick reference"
echo ""
echo "🚀 Ready to deploy!"
