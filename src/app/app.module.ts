import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AgmCoreModule } from '@agm/core';

import { HandleLoadingIndicatorService } from './shared/service/loading-indicator/handle-loading-indicator.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
// import { HeaderComponent } from './header/header.component';
// import { HomeComponent } from './home/home.component';
// import { AboutUsComponent } from './about-us/about-us.component';
import { LoaderComponent } from './loader/loader.component';
// import { MenuComponent } from './menu/menu.component';
// import { GalleryComponent } from './gallery/gallery.component';
// import { ReviewComponent } from './review/review.component';
// import { TestimonialComponent } from './testimonial/testimonial.component';
// import { ServicesComponent } from './services/services.component';
// import { MenuItemComponent } from './shared/menu-item/menu-item.component';
// import { ContactUsFormComponent } from './contact-us-form/contact-us-form.component';
// import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryPageComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HandleLoadingIndicatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
