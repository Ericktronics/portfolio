# Deployment Guide for AWS S3

## Quick Start

1. **Update your domain** in these files before building:
   - `src/index.html` - Replace all instances of `https://henrick-portfolio.jhrp-ph.com` with your actual domain
   - `src/app/services/seo.service.ts` - Update the `baseUrl` property

2. **Build the pre-rendered version:**
   ```bash
   npm run build:prerender
   ```

3. **Deploy to S3:**
   ```bash
   aws s3 sync dist/portfolio/browser/ s3://your-bucket-name/ --delete
   ```

## S3 Bucket Configuration

### Static Website Hosting
1. Go to your S3 bucket → **Properties** tab
2. Scroll to **Static website hosting**
3. Click **Edit**
4. Enable static website hosting
5. Set:
   - **Index document**: `index.html`
   - **Error document**: `index.html` (important for Angular routing)
6. Save changes

### Bucket Policy (Public Read Access)
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
  ]
}
```

### Block Public Access Settings
1. Go to **Permissions** tab
2. Click **Edit** on "Block public access"
3. Uncheck "Block all public access" (or configure as needed)
4. Save changes

## CloudFront Setup (Recommended)

For HTTPS and better performance:

1. Create a CloudFront distribution
2. Set **Origin Domain** to your S3 bucket (website endpoint, not REST API endpoint)
3. Set **Default Root Object** to `index.html`
4. Configure **Custom Error Responses**:
   - **403 Forbidden** → **HTTP Error Code**: 200, **Response Page Path**: `/index.html`
   - **404 Not Found** → **HTTP Error Code**: 200, **Response Page Path**: `/index.html`
5. Update your domain in `index.html` and `seo.service.ts` to use the CloudFront URL

## Testing Locally

To test the pre-rendered build locally:

```bash
# Build
npm run build:prerender

# Serve the static files (requires http-server or similar)
npx http-server dist/portfolio/browser -p 8080
```

## SEO Verification

After deployment, verify your SEO setup:

1. **Google Search Console**: Submit your sitemap and verify ownership
2. **Facebook Debugger**: https://developers.facebook.com/tools/debug/ - Test Open Graph tags
3. **Twitter Card Validator**: https://cards-dev.twitter.com/validator - Test Twitter cards
4. **Google Rich Results Test**: https://search.google.com/test/rich-results - Test structured data

## Troubleshooting

### 404 Errors on Refresh
- Ensure S3 static website hosting is configured with error document set to `index.html`
- If using CloudFront, configure custom error responses as mentioned above

### Meta Tags Not Showing
- Verify the domain in `index.html` matches your actual domain
- Clear browser cache and test with incognito mode
- Use social media debuggers to verify meta tags

### Build Errors
- Ensure all dependencies are installed: `npm install`
- Check Node.js version (Angular 16 requires Node 16+)
- Clear build cache: `rm -rf dist/` and rebuild

