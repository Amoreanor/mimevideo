import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostPreviewComponent } from './components/post-preview/post-preview.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/home/post/post.component';
import { AdsmanagerComponent } from './components/pages/adsmanager/adsmanager.component';

import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PostFormComponent,
    PostPreviewComponent,
    PostListComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    PostComponent,
    AdsmanagerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
