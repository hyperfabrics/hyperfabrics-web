# AWS Deployment Guide

This guide covers different AWS deployment options for the fazezero website.

## 🚀 Deployment Options

### 1. AWS Amplify (Recommended for Next.js SSR)

**Best for**: Full Next.js features including SSR, API routes, and dynamic routes

```bash
npm run deploy:aws:amplify
```

**Prerequisites:**
- AWS CLI configured (`aws configure`)
- AWS Amplify CLI installed (`npm install -g @aws-amplify/cli`)

**Features:**
- Automatic SSR support
- Built-in CI/CD
- Preview deployments
- Custom domains
- SSL certificates

---

### 2. S3 + CloudFront (Static Export)

**Best for**: Static websites with pre-generated content

```bash
npm run deploy:aws:s3:static
```

**Prerequisites:**
- AWS CLI configured
- S3 bucket created (or will be created automatically)
- CloudFront distribution (optional, for CDN)

**Environment Variables:**
```bash
export AWS_S3_BUCKET=fazezero-website
export AWS_CLOUDFRONT_DIST_ID=E1234567890ABC
export AWS_REGION=us-east-1
export NEXT_PUBLIC_SITE_URL=https://fazezero.com
```

**Features:**
- Low cost
- High performance with CloudFront
- Pre-generated static files
- Automatic sitemap generation

**Limitations:**
- No server-side rendering
- No API routes
- Dynamic routes must be pre-generated

---

### 3. S3 + CloudFront (Server Build)

**Best for**: Static assets only (requires separate server for SSR)

```bash
npm run deploy:aws:s3
```

**Note**: This only uploads static assets. You'll need a separate server (ECS, Lambda, etc.) for SSR.

---

### 4. ECS/Fargate (Docker)

**Best for**: Full control, containerized deployments

```bash
npm run deploy:aws:ecs
```

**Prerequisites:**
- AWS CLI configured
- Docker installed and running
- ECR repository created
- ECS cluster and service configured

**Environment Variables:**
```bash
export AWS_ECR_REPO=fazezero-website
export AWS_ECS_CLUSTER=fazezero-cluster
export AWS_ECS_SERVICE=fazezero-service
export AWS_REGION=us-east-1
```

**Features:**
- Full Next.js SSR support
- Scalable containerized deployment
- Custom infrastructure control

---

## 📋 Quick Start

### Option 1: Static Export to S3 (Easiest)

1. **Set environment variables:**
   ```bash
   export AWS_S3_BUCKET=fazezero-website
   export AWS_CLOUDFRONT_DIST_ID=your-distribution-id
   export NEXT_PUBLIC_SITE_URL=https://fazezero.com
   ```

2. **Deploy:**
   ```bash
   npm run deploy:aws:s3:static
   ```

3. **Configure CloudFront:**
   - Set S3 bucket as origin
   - Configure custom domain (optional)
   - Set up SSL certificate

### Option 2: AWS Amplify (Full SSR)

1. **Install Amplify CLI:**
   ```bash
   npm install -g @aws-amplify/cli
   amplify configure
   ```

2. **Deploy:**
   ```bash
   npm run deploy:aws:amplify
   ```

3. **Follow prompts** to set up your Amplify app

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

## 💡 Recommendations

**For Production:**
- Use **AWS Amplify** for full Next.js features
- Or use **ECS/Fargate** for maximum control

**For Static Sites:**
- Use **S3 + CloudFront** static export
- Pre-generate all routes
- Use CloudFront for CDN and caching

**For Development/Staging:**
- Use **AWS Amplify** preview deployments
- Or use **S3** for quick static deployments
