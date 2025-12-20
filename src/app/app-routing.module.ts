import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { Home1Component } from './pages/home/home1/home1.component';
import { Home2Component } from './pages/home/home2/home2.component';
import { Home3Component } from './pages/home/home3/home3.component';
import { Home4Component } from './pages/home/home4/home4.component';
import { About1Component } from './pages/about/about1/about1.component';
import { About2Component } from './pages/about/about2/about2.component';
import { ServicesComponent } from './pages/services/services/services.component';
import { TestimonialsComponent } from './pages/services/testimonials/testimonials.component';
import { FAQComponent } from './pages/services/faq/faq.component';
import { ClientsComponent } from './pages/services/clients/clients.component';
import { CarrerComponent } from './pages/services/carrer/carrer.component';
import { PressComponent } from './pages/services/press/press.component';
import { SitemapComponent } from './pages/services/sitemap/sitemap.component';
import { ElementsComponent } from './pages/services/elements/elements.component';
import { Portfolio2columnComponent } from './pages/portfolio/portfolio2column/portfolio2column.component';
import { Portfolio3columnComponent } from './pages/portfolio/portfolio3column/portfolio3column.component';
import { Portfolio4columnComponent } from './pages/portfolio/portfolio4column/portfolio4column.component';
import { PortfolioFullWidthComponent } from './pages/portfolio/portfolio-full-width/portfolio-full-width.component';
import { PortfolioSingle1Component } from './pages/portfolio/portfolio-single-1/portfolio-single-1.component';
import { PortfolioSingle2Component } from './pages/portfolio/portfolio-single-2/portfolio-single-2.component';
import { Gallery2ColumnComponent } from './pages/Gallery/gallery-2-column/gallery-2-column.component';
import { Gallery3ColumnComponent } from './pages/Gallery/gallery-3-column/gallery-3-column.component';
import { Gallery4ColumnComponent } from './pages/Gallery/gallery-4-column/gallery-4-column.component';
import { GalleryFullWidhtComponent } from './pages/Gallery/gallery-full-widht/gallery-full-widht.component';
import { BlogMainComponent } from './pages/Blog/blog-main/blog-main.component';
import { SinglePostComponent } from './pages/Blog/single-post/single-post.component';
import { Contact1Component } from './pages/Contact/contact-1/contact-1.component';
import { Contact2Component } from './pages/Contact/contact-2/contact-2.component';

const routes: Routes = [
  //  { path: '', redirectTo: 'core/home', pathMatch: 'full' },
   { path: '', redirectTo: 'core/home3', pathMatch: 'full' },
  // {
  //   path: 'core',
  //   component: HomeComponent,
  //   children: [
      { path: 'core/home', component: HomeComponent },
      { path: 'core/home1', component: Home1Component },
      { path: 'core/home2', component: Home2Component },
      { path: 'core/home3', component: Home3Component },
      { path: 'core/home4', component: Home4Component },
      { path: 'core/about1', component: About1Component },
      { path: 'core/about2', component: About2Component },
      { path: 'core/services', component: ServicesComponent },
      { path: 'core/testimonials', component: TestimonialsComponent },
      { path: 'core/FAQ', component: FAQComponent },
      { path: 'core/clients', component: ClientsComponent },
      { path: 'core/career', component: CarrerComponent },
      { path: 'core/press', component: PressComponent },
      { path: 'core/sitempa', component: SitemapComponent },
      { path: 'core/elements', component: ElementsComponent },
      { path: 'core/portfolio2', component: Portfolio2columnComponent },
      { path: 'core/portfolio3', component: Portfolio3columnComponent },
      { path: 'core/portfolio4', component: Portfolio4columnComponent },
      { path: 'core/portfolio-full-width', component: PortfolioFullWidthComponent },
      { path: 'core/portfolio-single-1', component: PortfolioSingle1Component },
      { path: 'core/portfolio-single-2', component: PortfolioSingle2Component },
      { path: 'core/gallery-2', component: Gallery2ColumnComponent },
      { path: 'core/gallery-3', component: Gallery3ColumnComponent},
      { path: 'core/gallery-4', component: Gallery4ColumnComponent},
      { path: 'core/gallery-full-width', component: GalleryFullWidhtComponent},
      { path: 'core/blog-main', component: BlogMainComponent },
      { path: 'core/single-post', component: SinglePostComponent },
      { path: 'core/contact-1', component: Contact1Component },
      { path: 'core/contact-2', component: Contact2Component },
    // ]
  // },

  { path: '**', redirectTo: 'core/home3' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
