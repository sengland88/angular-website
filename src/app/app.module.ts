import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel/carousel.component';
import { AboutmeComponent } from './modules/about-me/aboutme/aboutme.component';
import { SectionHeaderComponent } from './components/section-header/section-header/section-header.component';
import { PersonalitySectionComponent } from './modules/personality-section/personality-section.component';
import { TechnicalSectionComponent } from './modules/technical-section/technical-section/technical-section.component';
import { ProjectsSectionComponent } from './modules/projects-section/projects-section/projects-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    AboutmeComponent,
    SectionHeaderComponent,
    PersonalitySectionComponent,
    TechnicalSectionComponent,
    ProjectsSectionComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
