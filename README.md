# fazezero Website

Enterprise blockchain infrastructure website for fazeZERO - providing secure, scalable, and compliant blockchain infrastructure for financial institutions, governments, and enterprises worldwide.

Built with Next.js 15, React 19, TailwindCSS 4, and deployed to AWS S3 + CloudFront.

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
├── .github/
│   └── workflows/              # GitHub Actions CI/CD
│       ├── deploy.yml          # Automated deployment workflow
│       └── test.yml            # Testing workflow
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout with SEO
│   │   ├── page.tsx            # Homepage
│   │   ├── sitemap.ts          # Dynamic sitemap
│   │   ├── robots.ts           # Robots.txt config
│   │   ├── platform/           # Platform features pages
│   │   ├── solutions/          # Solutions pages
│   │   ├── industries/         # Industry pages
│   │   ├── developers/         # Developer resources
│   │   ├── company/            # Company pages
│   │   │   ├── about/          # About page
│   │   │   ├── careers/        # Careers page
│   │   │   ├── press/          # Press page
│   │   │   └── privacy/        # Privacy Policy
│   │   ├── compliance/         # Compliance page
│   │   ├── contact/            # Contact page
│   │   └── resources/          # Resources pages
│   ├── components/             # React components
│   │   ├── sections/           # Page sections (Header, Footer, Hero, etc.)
│   │   └── ui/                 # Reusable UI components
│   ├── data/                   # Static data and content
│   ├── types/                  # TypeScript type definitions
│   └── utils/                  # Utility functions
│       ├── cn.ts               # Class name utility
│       └── schema.ts           # JSON-LD structured data schemas
├── public/                     # Static assets
│   ├── icons/                  # Favicons and app icons
│   ├── og/                     # Open Graph images
│   └── site.webmanifest       # PWA manifest
├── scripts/                    # Deployment and utility scripts
│   ├── deploy-aws-s3-static.sh # AWS S3 static deployment
│   └── verify-seo.sh          # SEO verification script
├── AWS-DEPLOYMENT.md           # AWS deployment guide
├── Dockerfile                  # Docker configuration (for ECS)
├── amplify.yml                 # AWS Amplify config
└── [config files]              # Next.js, TypeScript, ESLint configs
```

## 🌐 Pages

### Main Pages
| Route         | Description                                     |
| ------------- | ----------------------------------------------- |
| `/`           | Homepage with hero, solutions, and social proof |
| `/platform`   | Platform features and capabilities              |
| `/solutions`  | Blockchain solutions overview                   |
| `/industries` | Industry-specific use cases                     |
| `/developers` | Developer resources and documentation           |
| `/compliance` | Compliance and regulatory information           |
| `/contact`    | Contact form and information                    |

### Company Pages
| Route                | Description                          |
| -------------------- | ------------------------------------ |
| `/company/about`     | About fazeZERO and company mission   |
| `/company/careers`   | Career opportunities                 |
| `/company/press`     | Press releases and media resources   |
| `/company/privacy`   | Privacy Policy (GDPR/CCPA compliant) |

### Platform Pages
- `/platform/digital-assets` - Digital asset management
- `/platform/mpc` - Multi-Party Computation
- `/platform/payment-platform` - Payment infrastructure
- `/platform/api` - API documentation
- `/platform/dashboard` - Platform dashboard
- `/platform/analytics` - Analytics and reporting
- `/platform/audit` - Audit capabilities
- `/platform/sandbox` - Sandbox environment
- `/platform/studio` - Development studio

### Developer Resources
- `/developers/docs` - Documentation
- `/developers/api` - API reference
- `/developers/sdks` - SDKs and libraries
- `/developers/tutorials` - Tutorials and guides
- `/developers/status` - Service status
- `/developers/support` - Support resources

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

This project is deployed to **AWS S3 + CloudFront** for static hosting.

### Automated Deployment (GitHub Actions)

The project includes automated CI/CD via GitHub Actions:

- **Automatic deployment** on push to `main` branch
- **Testing workflow** on pull requests
- **CloudFront cache invalidation** after deployment
- **Optional Cloudflare cache purge**

See [`.github/workflows/README.md`](.github/workflows/README.md) for setup instructions.

### Manual Deployment

```bash
# Set environment variables
export AWS_S3_BUCKET=fazezero.com
export AWS_CLOUDFRONT_DIST_ID=E3SE8P2WZP6BAD
export AWS_REGION=us-east-1
export NEXT_PUBLIC_SITE_URL=https://fazezero.com

# Deploy
npm run deploy
```

Or use the script directly:
```bash
./scripts/deploy-aws-s3-static.sh
```

### Deployment Features

- ✅ Static export build optimization
- ✅ Automatic S3 upload with proper cache headers
- ✅ CloudFront cache invalidation
- ✅ Cloudflare cache purge (optional)
- ✅ Sitemap and robots.txt generation
- ✅ Public bucket policy configuration

For detailed deployment information, see [AWS-DEPLOYMENT.md](./AWS-DEPLOYMENT.md).

### Post-Deployment Checklist

1. ✅ Verify site is accessible at https://fazezero.com
2. ✅ Test all pages load correctly
3. ✅ Check sitemap.xml is accessible: https://fazezero.com/sitemap.xml
4. ✅ Verify robots.txt: https://fazezero.com/robots.txt
5. ✅ Submit sitemap to [Google Search Console](https://search.google.com/search-console)
6. ✅ Submit sitemap to [Bing Webmaster Tools](https://www.bing.com/webmasters)
7. ✅ Test OpenGraph with [OG Preview](https://www.opengraph.xyz/)
8. ✅ Test Twitter Cards with [Card Validator](https://cards-dev.twitter.com/validator)
9. ✅ Validate structured data with [Rich Results Test](https://search.google.com/test/rich-results)
10. ✅ Monitor CloudFront invalidation status
11. ✅ Set up monitoring and alerts

## 📊 Tech Stack

- **Framework**: Next.js 15.5.4
- **React**: 19.1.0
- **Styling**: TailwindCSS 4.1.14
- **Animations**: Framer Motion 12.23.24
- **Icons**: Lucide React 0.545.0
- **Language**: TypeScript 5
- **Build Tool**: Turbopack

## 📝 Scripts

| Script               | Description                              |
| -------------------- | ---------------------------------------- |
| `npm run dev`        | Start development server with Turbopack  |
| `npm run build`      | Build for production with Turbopack     |
| `npm run start`      | Start production server                  |
| `npm run lint`       | Run ESLint                               |
| `npm run verify-seo` | Verify SEO setup (requires dev server)  |
| `npm run deploy`     | Deploy to AWS S3 + CloudFront           |

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

See [LICENSE](./LICENSE) file for details.

## 🔒 Privacy & Compliance

- **Privacy Policy**: Comprehensive GDPR/CCPA compliant privacy policy at `/company/privacy`
- **Certifications**: ISO 27001 and SOC 2 Type 2 certified infrastructure
- **Data Protection**: Enterprise-grade security with MPC and Intel SGX technology
- **Compliance**: Built-in KYC/AML compliance frameworks

## 🛠️ Development

### Prerequisites

- Node.js 20+
- npm or yarn
- AWS CLI (for deployment)
- Git

### Local Development

```bash
# Clone repository
git clone https://github.com/fazezero/fazezero-website.git
cd fazezero-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.

### Code Quality

- **TypeScript** for type safety
- **ESLint** for code linting
- **Next.js** built-in optimizations
- **Turbopack** for fast builds

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [SEO Best Practices](./SEO.md)
- [AWS Deployment Guide](./AWS-DEPLOYMENT.md)
- [GitHub Actions Workflows](.github/workflows/README.md)

## 🤝 Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Test thoroughly (`npm run build`, `npm run lint`)
4. Submit a pull request
5. GitHub Actions will automatically test your changes

## 📄 License

See [LICENSE](./LICENSE) file for details.

---

**Built with ❤️ by fazezero**

Enterprise blockchain infrastructure for the future of digital assets.
