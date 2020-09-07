import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PostListComponent} from './pages/post-list/post-list.component';

import { ImagenesComponent } from './pages/images/imagenes/imagenes.component';
import { ImagesPreviewComponent } from './pages/images/images-preview/images-preview.component';

import {UploadsComponent} from './pages/uploads/uploads.component';
import {PostPreviewComponent} from './pages/post-preview/post-preview.component';
import {SigninComponent} from './pages/auth/signin/signin.component';
import {SignupComponent} from './pages/auth/signup/signup.component';
import {HomeComponent} from './pages/home/home.component';

import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: 'inicio',
    component: HomeComponent
  },
  {
    path: 'videos',
    component: PostListComponent
  },
  {
    path: 'imagenes',
    component: ImagenesComponent
  },
  {
    path: 'post/uploads',
    component: UploadsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'post/:id',
    component: PostPreviewComponent
  },
  {
    path: 'imagenes/:id',
    component: ImagesPreviewComponent
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'

  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
