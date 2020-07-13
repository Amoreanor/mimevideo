import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PostListComponent} from './components/post-list/post-list.component'
import {PostFormComponent} from './components/post-form/post-form.component'
import {PostPreviewComponent} from './components/post-preview/post-preview.component'
import {SigninComponent} from './components/signin/signin.component'
import {SignupComponent} from './components/signup/signup.component'
import {NewComponent} from './components/new/new.component'

const routes: Routes = [
  {
    path: 'new',
    component: NewComponent
  },
  {
    path: 'post',
    component: PostListComponent
  },
  {
    path: 'post/new',
    component: PostFormComponent
  },
  {
    path: 'post/:id',
    component: PostPreviewComponent
  },
  {
    path: '',
    redirectTo: '/new',
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
