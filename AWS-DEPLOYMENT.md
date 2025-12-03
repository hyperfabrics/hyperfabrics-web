# AWS Deployment Guide

This guide covers AWS deployment for the fazezero website.

## 🚀 Deployment

### S3 + CloudFront (Static Export)

**Best for**: Static websites with pre-generated content

```bash
npm run deploy
```

Or directly:
```bash
./scripts/deploy-aws-s3-static.sh
```

**Prerequisites:**
- AWS CLI configured
- S3 bucket created (or will be created automatically)
- CloudFront distribution configured

**Environment Variables:**
```bash
export AWS_S3_BUCKET=fazezero.com
export AWS_CLOUDFRONT_DIST_ID=E3SE8P2WZP6BAD
export AWS_REGION=us-east-1
export NEXT_PUBLIC_SITE_URL=https://fazezero.com
```

**Features:**
- Low cost
- High performance with CloudFront
- Pre-generated static files
- Automatic sitemap generation
- Automatic CloudFront cache invalidation
- Optional Cloudflare cache purge

**Limitations:**
- No server-side rendering
- No API routes
- Dynamic routes must be pre-generated

---

## 📋 Quick Start

1. **Set environment variables:**
   ```bash
   export AWS_S3_BUCKET=fazezero.com
   export AWS_CLOUDFRONT_DIST_ID=E3SE8P2WZP6BAD
   export NEXT_PUBLIC_SITE_URL=https://fazezero.com
   ```

2. **Deploy:**
   ```bash
   npm run deploy
   ```

3. **The script will:**
   - Build static export
   - Upload to S3
   - Invalidate CloudFront cache
   - Optionally purge Cloudflare cache

---

## 🔧 Configuration

### Static Export Configuration

The static export script temporarily modifies `next.config.ts` to:
- Enable `output: 'export'`
- Set `trailingSlash: true`
- Disable image optimization
- Generate static HTML files

The original config is restored after deployment.

### Environment Variables

Create a `.env.production` file:

```bash
NEXT_PUBLIC_SITE_URL=https://fazezero.com
NEXT_PUBLIC_SITE_NAME=fazezero
NEXT_PUBLIC_TWITTER_HANDLE=@fazezero
```

---

## 📝 Post-Deployment Checklist

- [ ] Verify site is accessible
- [ ] Test all pages load correctly
- [ ] Check sitemap.xml is accessible
- [ ] Verify robots.txt is correct
- [ ] Submit sitemap to Google Search Console
- [ ] Test OpenGraph tags with [OG Preview](https://www.opengraph.xyz/)
- [ ] Set up CloudFront custom domain (if using)
- [ ] Configure SSL certificate
- [ ] Set up monitoring and alerts

---

## 🐛 Troubleshooting

### Build Fails

- Check Node.js version (requires 18+)
- Ensure all dependencies are installed (`npm install`)
- Check for TypeScript errors (`npm run lint`)

### S3 Upload Fails

- Verify AWS credentials (`aws sts get-caller-identity`)
- Check S3 bucket permissions
- Ensure bucket exists in the correct region

### CloudFront Not Updating

- Check invalidation status
- Verify distribution is using correct S3 origin
- Clear browser cache

### Static Export Missing Pages

- Ensure all routes are statically generatable
- Check for dynamic routes that need `generateStaticParams`
- Review build output for warnings

---

## 📚 Additional Resources

- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [AWS Amplify Documentation](https://docs.amplify.aws/)
- [AWS S3 Static Website Hosting](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)
- [CloudFront Documentation](https://docs.aws.amazon.com/cloudfront/)

---

## 💡 Notes

**Current Setup:**
- Static export to S3 + CloudFront
- Automated via GitHub Actions
- CloudFront cache invalidation on deploy
- Cloudflare cache purge (optional)

**For Development:**
- Run `npm run dev` for local development
- Run `npm run verify-seo` to verify SEO setup
