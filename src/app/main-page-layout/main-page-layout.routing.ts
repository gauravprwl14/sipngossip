import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageLayoutComponent } from './main-page-layout/main-page-layout.component';

const routes: Routes = [
    {
        path: '', component: MainPageLayoutComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MainPageLayoutRoutingModule { }
