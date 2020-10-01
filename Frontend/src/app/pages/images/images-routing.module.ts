import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImagenesComponent } from './imagenes/imagenes.component';
import { ImagesPreviewComponent } from './images-preview/images-preview.component';


const routes: Routes = [
  {
    path: '',
    component: ImagenesComponent
  },
  {
    path: ':id',
    component: ImagesPreviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagesRoutingModule { }
