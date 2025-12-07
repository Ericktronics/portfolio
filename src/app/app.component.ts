import { Component, OnInit } from '@angular/core';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'John Henrick ';

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    // Initialize default SEO
    this.seoService.setDefaultSEO();
  }
}
