
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

// import { AppComponent } from '../app.component';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { LoaderComponent } from '../loader/loader.component';
import { MenuComponent } from '../menu/menu.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { ReviewComponent } from '../review/review.component';
import { TestimonialComponent } from '../testimonial/testimonial.component';
import { ServicesComponent } from '../services/services.component';
import { MenuItemComponent } from '../shared/menu-item/menu-item.component';
import { ContactUsFormComponent } from '../contact-us-form/contact-us-form.component';
import { FooterComponent } from '../footer/footer.component';
import { MainPageLayoutComponent } from './main-page-layout/main-page-layout.component';

import { MainPageLayoutRoutingModule } from './main-page-layout.routing';


@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAYiIMmVF4RviEVIVKGy1zNXPxSQpwE6rU'
    }),
    MainPageLayoutRoutingModule
  ],
  declarations: [
    HeaderComponent,
    LoaderComponent,
    HomeComponent,
    AboutUsComponent,
    MenuComponent,
    GalleryComponent,
    ReviewComponent,
    TestimonialComponent,
    ServicesComponent,
    MenuItemComponent,
    ContactUsFormComponent,
    FooterComponent,
    MainPageLayoutComponent,
  ]
})
export class MainPageLayoutModule { }
