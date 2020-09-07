import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UploadsComponent } from './pages/uploads/uploads.component';
import { PostPreviewComponent } from './pages/post-preview/post-preview.component';
import { PostListComponent } from './pages/post-list/post-list.component';
import { SigninComponent } from './pages/auth/signin/signin.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/home/post/post.component';

import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { UploadsfileDirective } from './pages/uploads/directives/uploadsfile.directive';
import { ImagenesComponent } from './pages/images/imagenes/imagenes.component';
import { CardimgComponent } from './pages/images/imagenes/cardimg/cardimg.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UploadsComponent,
    PostPreviewComponent,
    PostListComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    PostComponent,
    UploadsfileDirective,
    ImagenesComponent,
    CardimgComponent,
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
