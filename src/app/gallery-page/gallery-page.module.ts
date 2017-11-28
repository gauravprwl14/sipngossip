import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryPageRoutingModule } from './gallery-page-routing.module';
import { GalleryPageLayoutComponent } from './gallery-page-layout/gallery-page-layout.component';
import { GalleryPageSliderSectionComponent } from './gallery-page-slider-section/gallery-page-slider-section.component';

@NgModule({
  imports: [
    CommonModule,
    GalleryPageRoutingModule
  ],
  declarations: [
    GalleryPageLayoutComponent,
    GalleryPageSliderSectionComponent,
  ]
})
export class GalleryPageModule { }
