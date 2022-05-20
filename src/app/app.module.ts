import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel/carousel.component';
import { AboutmeComponent } from './modules/about-me/aboutme/aboutme.component';
import { SectionHeaderComponent } from './components/section-header/section-header/section-header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    AboutmeComponent,
    SectionHeaderComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
