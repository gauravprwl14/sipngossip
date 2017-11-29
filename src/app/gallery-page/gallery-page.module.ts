import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryPageRoutingModule } from './gallery-page-routing.module';
import { GalleryPageLayoutComponent } from './gallery-page-layout/gallery-page-layout.component';
import { GalleryPageSliderSectionComponent } from './gallery-page-slider-section/gallery-page-slider-section.component';
import { GalleryImagesContainerComponent } from './gallery-images-container/gallery-images-container.component';
import { GalleryImgViewCardComponent } from './gallery-img-view-card/gallery-img-view-card.component';

@NgModule({
  imports: [
    CommonModule,
    GalleryPageRoutingModule
  ],
  declarations: [
    GalleryPageLayoutComponent,
    GalleryPageSliderSectionComponent,
    GalleryImagesContainerComponent,
    GalleryImgViewCardComponent,
  ]
})
export class GalleryPageModule { }
