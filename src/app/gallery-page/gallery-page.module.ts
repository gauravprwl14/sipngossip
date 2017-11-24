import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryPageRoutingModule } from './gallery-page-routing.module';
import { GalleryPageComponent } from './gallery-page.component';

@NgModule({
  imports: [
    CommonModule,
    GalleryPageRoutingModule
  ],
  declarations: [GalleryPageComponent]
})
export class GalleryPageModule { }
