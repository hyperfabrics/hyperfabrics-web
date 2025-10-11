# fazezero Website

Enterprise blockchain infrastructure website built with Next.js 15, React 19, and TailwindCSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.

## 📦 Features

- ⚡ **Next.js 15** with App Router and Turbopack
- ⚛️ **React 19** with Server Components
- 🎨 **TailwindCSS 4** for styling
- 🌗 **Dark Mode** support
- 🎭 **Framer Motion** for animations
- 🔍 **SEO Optimized** with sitemap, robots.txt, and structured data
- 📱 **Responsive Design** for all devices
- ♿ **Accessible** components

## 🔍 SEO Features

This website includes comprehensive SEO enhancements:

- ✅ **Dynamic Sitemap** (`/sitemap.xml`)
- ✅ **Robots.txt** configuration (`/robots.txt`)
- ✅ **Enhanced Metadata** for all pages
- ✅ **OpenGraph** tags for social media
- ✅ **Twitter Cards** support
- ✅ **JSON-LD Structured Data** (Organization, Website schemas)
- ✅ **PWA Manifest** for installability

### SEO Documentation

- 📖 [SEO.md](./SEO.md) - Complete SEO documentation
- ✅ [SEO-CHECKLIST.md](./SEO-CHECKLIST.md) - Implementation checklist
- 📋 [SEO-SUMMARY.md](./SEO-SUMMARY.md) - Quick overview
- 🎯 [SEO-QUICK-REF.md](./SEO-QUICK-REF.md) - Quick reference guide

### Verify SEO Setup

```bash
npm run verify-seo
```

Or test manually:

```bash
# Test sitemap
curl http://localhost:3000/sitemap.xml

# Test robots.txt
curl http://localhost:3000/robots.txt
```

## 📁 Project Structure

```
fazezero-website/
├── src/
│   ├── app/                    # App Router pages
│   │   ├── layout.tsx          # Root layout with SEO
│   │   ├── page.tsx            # Homepage
│   │   ├── sitemap.ts          # Dynamic sitemap
│   │   ├── robots.ts           # Robots.txt config
│   │   ├── platform/           # Platform page
│   │   ├── solutions/          # Solutions page
│   │   ├── industries/         # Industries page
│   │   ├── developers/         # Developers page
│   │   ├── compliance/         # Compliance page
│   │   └── contact/            # Contact page
│   ├── components/             # React components
│   │   ├── sections/           # Page sections
│   │   └── ui/                 # UI components
│   ├── data/                   # Static data
│   ├── types/                  # TypeScript types
│   └── utils/                  # Utilities
│       ├── cn.ts               # Class name utility
│       ├── schema.ts           # JSON-LD schemas
│       └── seo.ts              # SEO helpers
├── public/                     # Static assets
│   └── site.webmanifest       # PWA manifest
├── scripts/                    # Utility scripts
│   └── verify-seo.sh          # SEO verification
└── [config files]
```

## 🌐 Pages

| Route         | Description                                     |
| ------------- | ----------------------------------------------- |
| `/`           | Homepage with hero, solutions, and social proof |
| `/platform`   | Platform features and capabilities              |
| `/solutions`  | Blockchain solutions overview                   |
| `/industries` | Industry-specific use cases                     |
| `/developers` | Developer resources and documentation           |
| `/compliance` | Compliance and regulatory information           |
| `/contact`    | Contact form and information                    |

## ⚙️ Environment Variables

Create a `.env.local` file from the template:

```bash
cp .env.example .env.local
```

Required variables:

```bash
NEXT_PUBLIC_SITE_URL=https://fazezero.com
NEXT_PUBLIC_SITE_NAME=fazezero
NEXT_PUBLIC_TWITTER_HANDLE=@fazezero
```

## 🎨 Required Assets

To complete the SEO setup, add these assets to the `public/` directory:

### Favicons

- `favicon.ico` (32x32)
- `favicon-16x16.png`
- `apple-touch-icon.png` (180x180)
- `icon-192.png` (192x192)
- `icon-512.png` (512x512)

### Open Graph Images (1200x630px)

- `og-image.png` (homepage)
- `og-platform.png`
- `og-solutions.png`
- `og-industries.png`
- `og-developers.png`
- `og-compliance.png`
- `og-contact.png`

### Other

- `logo.png` (company logo)

**Tip**: Use [Real Favicon Generator](https://realfavicongenerator.net/) to create favicons.

## 🧪 Testing

### Development

```bash
npm run dev
```

### Build & Test Production

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

### SEO Verification

```bash
npm run verify-seo
```

## 🚀 Deployment

This project is optimized for [Vercel](https://vercel.com):

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Post-Deployment Checklist

1. ✅ Submit sitemap to [Google Search Console](https://search.google.com/search-console)
2. ✅ Submit sitemap to [Bing Webmaster Tools](https://www.bing.com/webmasters)
3. ✅ Test OpenGraph with [OG Preview](https://www.opengraph.xyz/)
4. ✅ Test Twitter Cards with [Card Validator](https://cards-dev.twitter.com/validator)
5. ✅ Validate structured data with [Rich Results Test](https://search.google.com/test/rich-results)
6. ✅ Set up Google Analytics
7. ✅ Monitor performance with [PageSpeed Insights](https://pagespeed.web.dev/)

## 📊 Tech Stack

- **Framework**: Next.js 15.5.4
- **React**: 19.1.0
- **Styling**: TailwindCSS 4.1.14
- **Animations**: Framer Motion 12.23.24
- **Icons**: Lucide React 0.545.0
- **Language**: TypeScript 5
- **Build Tool**: Turbopack

## 📝 Scripts

| Script               | Description              |
| -------------------- | ------------------------ |
| `npm run dev`        | Start development server |
| `npm run build`      | Build for production     |
| `npm run start`      | Start production server  |
| `npm run lint`       | Run ESLint               |
| `npm run verify-seo` | Verify SEO setup         |

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

See [LICENSE](./LICENSE) file for details.

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [SEO Best Practices](./SEO.md)

---

**Built with ❤️ by fazezero**
