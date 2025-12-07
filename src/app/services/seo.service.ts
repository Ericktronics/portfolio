import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SEOData {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private defaultTitle = 'John Henrick Peralta - Full Stack Developer Portfolio';
  private defaultDescription = 'Portfolio of John Henrick Peralta, a Full Stack Developer with expertise in Angular, React, Node.js, and cloud technologies. View projects, experience, and credentials.';
  private defaultImage = '/assets/images/logo.png';
  private baseUrl = 'https://henrick-portfolio.jhrp-ph.com/'; // Update with your actual domain

  constructor(
    private meta: Meta,
    private title: Title
  ) {}

  updateSEO(data: SEOData): void {
    const title = data.title || this.defaultTitle;
    const description = data.description || this.defaultDescription;
    const image = data.image || this.defaultImage;
    const url = data.url || this.baseUrl;
    const type = data.type || 'website';
    const keywords = data.keywords || 'Full Stack Developer, Angular, React, Node.js, Portfolio, Software Engineer';

    // Update title
    this.title.setTitle(title);

    // Update or create meta tags
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'keywords', content: keywords });

    // Open Graph tags
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:type', content: type });

    // Twitter Card tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: image });
  }

  setDefaultSEO(): void {
    this.updateSEO({});
  }
}

