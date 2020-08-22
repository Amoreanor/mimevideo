import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PostListComponent} from './components/post-list/post-list.component';
import {PostFormComponent} from './components/post-form/post-form.component';
import {PostPreviewComponent} from './components/post-preview/post-preview.component';
import {SigninComponent} from './components/auth/signin/signin.component';
import {SignupComponent} from './components/auth/signup/signup.component';
import {HomeComponent} from './components/home/home.component';

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
    path: 'post/new',
    component: PostFormComponent,
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
