import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideosRoutingModule } from './videos-routing.module';
import { VideosComponent } from './videos/videos.component';
import { VideosPreviewComponent } from './videos-preview/videos-preview.component';


@NgModule({
  declarations: [
    VideosComponent,
    VideosPreviewComponent
  ],
  imports: [
    CommonModule,
    VideosRoutingModule,
  ]
})
export class VideosModule { }
