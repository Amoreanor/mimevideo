import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostPreviewComponent } from './components/post-preview/post-preview.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { NewComponent } from './components/new/new.component';
import { PostComponent } from './components/new/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PostFormComponent,
    PostPreviewComponent,
    PostListComponent,
    SigninComponent,
    SignupComponent,
    NewComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
