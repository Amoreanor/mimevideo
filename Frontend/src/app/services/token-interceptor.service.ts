import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';
import { tokenName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) { }

  intercept(req, next){
    const tokenizeReq = req.clone({
      setHeaders: {
        Autorization: `${this.authService.getToken()}`,
        // Error al ingresar el Bearer - Por que se necesita ingresar bearer
        //Autorization: `Bearer ${this.authService.getToken()}`
      }
    })
    return next.handle(tokenizeReq);
  }

}
