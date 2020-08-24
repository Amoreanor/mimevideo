import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PostListComponent} from './pages/post-list/post-list.component';
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
    path: 'post',
    component: PostListComponent
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
