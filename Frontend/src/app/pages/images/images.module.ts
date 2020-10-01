import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesRoutingModule } from './images-routing.module';

import { ImagenesComponent } from './imagenes/imagenes.component';
import { ImagesPreviewComponent } from './images-preview/images-preview.component';
import { CardimgComponent } from './imagenes/cardimg/cardimg.component';


@NgModule({
  declarations: [
    ImagenesComponent,
    ImagesPreviewComponent,
    CardimgComponent
  ],
  imports: [
    CommonModule,
    ImagesRoutingModule
  ]
})
export class ImagesModule { }
