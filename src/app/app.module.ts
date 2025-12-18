;
import { ElementsComponent } from './pages/services/elements/elements.component';
import { SitemapComponent } from './pages/services/sitemap/sitemap.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home/home.component';
import { Home1Component } from './pages/home/home1/home1.component';
import { Home2Component } from './pages/home/home2/home2.component';
import { Home3Component } from './pages/home/home3/home3.component';
import { Home4Component } from './pages/home/home4/home4.component';
import { About1Component } from './pages/about/about1/about1.component';
import { About2Component } from './pages/about/about2/about2.component';
import { CoreModule } from './core/core/core.module';
import { ServicesComponent } from './pages/services/services/services.component';
import { TestimonialsComponent } from './pages/services/testimonials/testimonials.component';
import { FAQComponent } from './pages/services/faq/faq.component';
import { ClientsComponent } from './pages/services/clients/clients.component';
import { PressComponent } from './pages/services/press/press.component';
import { CarrerComponent } from './pages/services/carrer/carrer.component';
import { Portfolio2columnComponent } from './pages/portfolio/portfolio2column/portfolio2column.component';
import { Portfolio3columnComponent } from './pages/portfolio/portfolio3column/portfolio3column.component';
import { Portfolio4columnComponent } from './pages/portfolio/portfolio4column/portfolio4column.component';
import { PortfolioFullWidthComponent } from './pages/portfolio/portfolio-full-width/portfolio-full-width.component';
import { PortfolioSingle1Component } from './pages/portfolio/portfolio-single-1/portfolio-single-1.component';
import { PortfolioSingle2Component } from './pages/portfolio/portfolio-single-2/portfolio-single-2.component';
import { Gallery4ColumnComponent } from './pages/Gallery/gallery-4-column/gallery-4-column.component';
import { Gallery3ColumnComponent } from './pages/Gallery/gallery-3-column/gallery-3-column.component';
import { Gallery2ColumnComponent } from './pages/Gallery/gallery-2-column/gallery-2-column.component';
import { GalleryFullWidhtComponent } from './pages/Gallery/gallery-full-widht/gallery-full-widht.component';
import { BlogMainComponent } from './pages/Blog/blog-main/blog-main.component';
import { SinglePostComponent } from './pages/Blog/single-post/single-post.component';
import { Contact1Component } from './pages/Contact/contact-1/contact-1.component';
import { Contact2Component } from './pages/Contact/contact-2/contact-2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Home1Component,
    Home2Component,
    Home3Component,
    Home4Component,
    About1Component,
    About2Component,
    ServicesComponent,
    TestimonialsComponent,
    FAQComponent,
    ClientsComponent,
    PressComponent,
    SitemapComponent,
    ElementsComponent,
    CarrerComponent,
    Portfolio2columnComponent,
    Portfolio3columnComponent,
    Portfolio4columnComponent,
    PortfolioFullWidthComponent,
    PortfolioSingle1Component,
    PortfolioSingle2Component,
    Gallery4ColumnComponent,
    Gallery3ColumnComponent,
    Gallery2ColumnComponent,
    GalleryFullWidhtComponent,
    BlogMainComponent,
    SinglePostComponent,
    Contact1Component,
    Contact2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
