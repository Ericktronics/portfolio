# Portfolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.4.

## SEO-Friendly Setup

This portfolio is configured with Angular Universal for Server-Side Rendering (SSR) and pre-rendering, making it SEO-friendly while still being deployable to static hosting like AWS S3.

### Features
- ✅ Server-Side Rendering (SSR) with Angular Universal
- ✅ Pre-rendering for static HTML generation
- ✅ Comprehensive SEO meta tags (Open Graph, Twitter Cards)
- ✅ Structured data (JSON-LD) for search engines
- ✅ Dynamic meta tag management via SEO service
- ✅ S3-compatible static file output

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

### Standard Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/portfolio/browser/` directory.

### SSR Build (for testing)
Run `npm run build:ssr` to build both the browser and server versions.

### Pre-rendered Build (for S3 deployment)
Run `npm run build:prerender` to generate pre-rendered static HTML files. This is the recommended build for S3 deployment as it generates static HTML files that search engines can crawl.

The pre-rendered files will be in `dist/portfolio/browser/` directory, ready for S3 deployment.

## Deploying to AWS S3

### Prerequisites
- AWS CLI installed and configured
- An S3 bucket created for hosting
- (Optional) CloudFront distribution for CDN

### Steps

1. **Build the pre-rendered version:**
   ```bash
   npm run build:prerender
   ```

2. **Upload to S3:**
   ```bash
   aws s3 sync dist/portfolio/browser/ s3://your-bucket-name/ --delete
   ```

3. **Configure S3 bucket for static website hosting:**
   - Go to S3 bucket → Properties → Static website hosting
   - Enable static website hosting
   - Set index document to `index.html`
   - Set error document to `index.html` (for Angular routing)

4. **Update SEO meta tags:**
   Before deploying, update the following files with your actual domain:
   - `src/index.html` - Replace `https://henrick-portfolio.jhrp-ph.com` with your actual domain
   - `src/app/services/seo.service.ts` - Update `baseUrl` property

5. **Set bucket policy for public read access:**
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

### Using CloudFront (Recommended)

For better performance and HTTPS:

1. Create a CloudFront distribution pointing to your S3 bucket
2. Set the default root object to `index.html`
3. Configure custom error responses:
   - 403 → 200 → `/index.html`
   - 404 → 200 → `/index.html`
4. Update your domain in `index.html` and `seo.service.ts` to use your CloudFront URL

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## SEO Configuration

### Updating Meta Tags

The app includes an SEO service (`src/app/services/seo.service.ts`) that allows you to dynamically update meta tags. You can use it in any component:

```typescript
import { SeoService } from './services/seo.service';

constructor(private seoService: SeoService) {}

ngOnInit() {
  this.seoService.updateSEO({
    title: 'Custom Page Title',
    description: 'Custom page description',
    keywords: 'custom, keywords',
    image: '/assets/images/custom-image.png',
    url: 'https://henrick-portfolio.jhrp-ph.com//custom-page'
  });
}
```

### Default SEO Tags

Default SEO tags are set in:
- `src/index.html` - Static meta tags
- `src/app/services/seo.service.ts` - Default values for dynamic updates

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
