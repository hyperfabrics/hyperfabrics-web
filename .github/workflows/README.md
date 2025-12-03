# GitHub Actions Workflows

This directory contains GitHub Actions workflows for automated CI/CD.

## Workflows

### 1. `deploy.yml` - Build and Deploy to AWS S3

**Triggers:**
- Push to `main` or `master` branch
- Manual workflow dispatch

**What it does:**
1. Builds Next.js static export
2. Generates sitemap.xml and robots.txt
3. Uploads files to S3 with proper cache headers
4. Sets S3 bucket policy for public access
5. Invalidates CloudFront cache
6. Optionally purges Cloudflare cache

**Required Secrets:**
- `AWS_ACCESS_KEY_ID` - AWS access key
- `AWS_SECRET_ACCESS_KEY` - AWS secret key
- `NEXT_PUBLIC_SITE_URL` (optional) - Site URL, defaults to https://fazezero.com
- `CLOUDFLARE_ZONE_ID` (optional) - Cloudflare zone ID for cache purging
- `CLOUDFLARE_API_TOKEN` (optional) - Cloudflare API token

**Manual Dispatch Options:**
- `skip_cloudfront` - Skip CloudFront invalidation (useful for testing)

### 2. `test.yml` - Test and Lint

**Triggers:**
- Pull requests to `main` or `master`
- Push to `main` or `master`

**What it does:**
1. Runs ESLint
2. Builds the project
3. Verifies build output

## Setup Instructions

### 1. Configure GitHub Secrets

Go to your repository → Settings → Secrets and variables → Actions → New repository secret

Add these secrets:

```
AWS_ACCESS_KEY_ID=your-aws-access-key
AWS_SECRET_ACCESS_KEY=your-aws-secret-key
NEXT_PUBLIC_SITE_URL=https://fazezero.com
CLOUDFLARE_ZONE_ID=your-cloudflare-zone-id (optional)
CLOUDFLARE_API_TOKEN=your-cloudflare-api-token (optional)
```

### 2. AWS IAM Permissions

Your AWS user needs these permissions:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:GetObject",
        "s3:DeleteObject",
        "s3:ListBucket",
        "s3:PutBucketPolicy"
      ],
      "Resource": [
        "arn:aws:s3:::fazezero.com",
        "arn:aws:s3:::fazezero.com/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "cloudfront:CreateInvalidation",
        "cloudfront:GetInvalidation"
      ],
      "Resource": "*"
    }
  ]
}
```

### 3. Cloudflare Setup (Optional)

If you want Cloudflare cache purging:

1. Get your Zone ID from Cloudflare dashboard
2. Create an API token with `Zone.Cache Purge` permission
3. Add secrets: `CLOUDFLARE_ZONE_ID` and `CLOUDFLARE_API_TOKEN`

## Usage

### Automatic Deployment

Push to `main` branch:
```bash
git push origin main
```

The workflow will automatically:
- Build the site
- Deploy to S3
- Invalidate CloudFront cache

### Manual Deployment

1. Go to Actions tab in GitHub
2. Select "Build and Deploy to AWS S3"
3. Click "Run workflow"
4. Optionally check "Skip CloudFront invalidation"
5. Click "Run workflow"

### Testing

Create a pull request - the test workflow will automatically:
- Run linting
- Build the project
- Verify everything works

## Monitoring

- Check workflow status in the Actions tab
- View deployment logs for any errors
- CloudFront invalidation takes 1-5 minutes to complete

## Troubleshooting

### Build Fails
- Check Node.js version compatibility
- Verify all dependencies are in package.json
- Check for TypeScript errors

### S3 Upload Fails
- Verify AWS credentials are correct
- Check S3 bucket permissions
- Ensure bucket exists in correct region

### CloudFront Invalidation Fails
- Verify distribution ID is correct
- Check AWS permissions include CloudFront access

### Cloudflare Purge Fails
- Verify zone ID and API token are correct
- Check API token has cache purge permissions
