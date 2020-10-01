import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

import { VideosComponent } from './videos/videos.component';
import { VideosPreviewComponent} from './videos-preview/videos-preview.component';


const routes: Routes = [
  {
    path: '',
    component: VideosComponent
  },
  {
    path: ':id',
    component: VideosPreviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideosRoutingModule { }
