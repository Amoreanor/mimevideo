import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import {UploadsComponent} from './pages/uploads/uploads.component';
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
    loadChildren: './pages/videos/videos.module#VideosModule'
  },
  {
    path: 'imagenes',
    loadChildren: './pages/images/images.module#ImagesModule'
  },
  {
    path: 'post/uploads',
    component: UploadsComponent,
    canActivate: [AuthGuard]
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
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true,
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
