# 🎯 SEO Quick Reference

## Test Your SEO Locally

```bash
# Start dev server
npm run dev

# View sitemap
open http://localhost:3000/sitemap.xml

# View robots.txt
open http://localhost:3000/robots.txt

# Check page source (any page)
open http://localhost:3000
# Then: Right-click → View Page Source → Check <head> section
```

## Create Required Assets

### 1. Favicons (Use: https://realfavicongenerator.net/)

```
public/
  ├── favicon.ico (32x32)
  ├── favicon-16x16.png
  ├── apple-touch-icon.png (180x180)
  ├── icon-192.png (192x192)
  └── icon-512.png (512x512)
```

### 2. Open Graph Images (1200x630px)

```
public/
  ├── og-image.png (homepage)
  ├── og-platform.png
  ├── og-solutions.png
  ├── og-industries.png
  ├── og-developers.png
  ├── og-compliance.png
  └── og-contact.png
```

### 3. Logo

```
public/
  └── logo.png
```

## Environment Variables

Create `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://fazezero.com
NEXT_PUBLIC_SITE_NAME=fazezero
NEXT_PUBLIC_TWITTER_HANDLE=@fazezero
```

## Deploy & Test

```bash
# Build
npm run build

# Test production build
npm run start

# Deploy to Vercel
vercel --prod
```

## Validation Tools

| Tool                   | URL                                         | Purpose              |
| ---------------------- | ------------------------------------------- | -------------------- |
| OpenGraph Preview      | https://www.opengraph.xyz/                  | Test social cards    |
| Twitter Card Validator | https://cards-dev.twitter.com/validator     | Test Twitter cards   |
| Rich Results Test      | https://search.google.com/test/rich-results | Test structured data |
| Schema Validator       | https://validator.schema.org/               | Validate JSON-LD     |
| PageSpeed Insights     | https://pagespeed.web.dev/                  | Performance check    |

## Post-Deployment Checklist

- [ ] Add site to Google Search Console
- [ ] Submit sitemap to Google
- [ ] Add site to Bing Webmaster Tools
- [ ] Submit sitemap to Bing
- [ ] Test OG preview on Facebook
- [ ] Test Twitter card
- [ ] Set up Google Analytics
- [ ] Monitor for 48 hours

## Common Commands

```bash
# Install dependencies
npm install

# Run development
npm run dev

# Build for production
npm run build

# Run production build
npm run start

# Run linter
npm run lint
```

## File Structure

```
fazezero-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # ← Enhanced with SEO
│   │   ├── sitemap.ts          # ← NEW: Sitemap generator
│   │   ├── robots.ts           # ← NEW: Robots.txt
│   │   ├── platform/
│   │   │   └── metadata.ts     # ← NEW: Page metadata
│   │   ├── solutions/
│   │   │   └── metadata.ts     # ← NEW
│   │   └── [other pages]/
│   │       └── metadata.ts     # ← NEW
│   └── utils/
│       ├── schema.ts           # ← NEW: JSON-LD schemas
│       └── seo.ts              # ← NEW: SEO helpers
├── public/
│   ├── site.webmanifest       # ← NEW: PWA manifest
│   └── [assets needed]        # ← TODO: Add images
├── .env.example               # ← NEW: Template
├── SEO.md                     # ← NEW: Full docs
├── SEO-CHECKLIST.md           # ← NEW: Checklist
└── SEO-SUMMARY.md             # ← NEW: Summary
```

## SEO Score Targets

| Metric          | Target | Tool           |
| --------------- | ------ | -------------- |
| Performance     | 90+    | Lighthouse     |
| Accessibility   | 95+    | Lighthouse     |
| Best Practices  | 95+    | Lighthouse     |
| SEO             | 100    | Lighthouse     |
| Core Web Vitals | Pass   | Search Console |

## Keywords by Page

| Page       | Primary Keywords                                 |
| ---------- | ------------------------------------------------ |
| Homepage   | enterprise blockchain, blockchain infrastructure |
| Platform   | blockchain platform, tokenization platform       |
| Solutions  | blockchain solutions, institutional Web3         |
| Industries | blockchain for finance, regulated blockchain     |
| Developers | blockchain API, Web3 development                 |
| Compliance | blockchain compliance, regulatory blockchain     |
| Contact    | blockchain demo, enterprise blockchain           |

## Support

- **Documentation**: See `SEO.md` for detailed information
- **Checklist**: See `SEO-CHECKLIST.md` for complete tasks
- **Summary**: See `SEO-SUMMARY.md` for overview

---

**Last Updated**: October 2025
**Status**: ✅ SEO Implementation Complete
**Next Step**: Create required assets (images/favicons)
