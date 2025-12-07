import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { TechComponent } from './tech/tech.component';
import { CredentialsAwardsComponent } from './credentials-awards/credentials-awards.component';
import { EducBgComponent } from './educ-bg/educ-bg.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, AboutComponent, ExperienceComponent, ProjectsComponent, ContactComponent, TechComponent, CredentialsAwardsComponent, EducBgComponent, FooterComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'portfolio' }),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
