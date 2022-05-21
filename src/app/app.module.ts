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
import { ContactSectionComponent } from './modules/contact-section/contact-section/contact-section.component';
import { ContactFormComponent } from './components/contact-form/contact-form/contact-form.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { ProjectModalComponent } from './components/modals/project-modal/project-modal/project-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PersonalityModalComponent } from './components/modals/personality-modal/personality-modal/personality-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


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
    ContactSectionComponent,
    ContactFormComponent,
    FooterComponent,
    ProjectModalComponent,
    PersonalityModalComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
