import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageLayoutModule } from './main-page-layout/main-page-layout.module';
// import { GalleryPageComponent } from './gallery-page/gallery-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'prefix', loadChildren: './main-page-layout/main-page-layout.module#MainPageLayoutModule' },
  { path: 'gallery', loadChildren: './gallery-page/gallery-page.module#GalleryPageModule' },
 ];


 @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule { }
 