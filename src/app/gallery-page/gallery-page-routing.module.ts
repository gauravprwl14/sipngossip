import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryPageLayoutComponent } from './gallery-page-layout/gallery-page-layout.component';

const routes: Routes = [
  {
    path: '', component: GalleryPageLayoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryPageRoutingModule { }
