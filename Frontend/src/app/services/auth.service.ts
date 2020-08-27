import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

import { User } from '../../app/interfaces/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URI = 'http://localhost:3000/users';

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  signUp(user): Observable<any>{
    return this.http.post<User>(this.URI + '/signup', user);
  }

  signIn(user): Observable<any>{
    return this.http.post<User>(this.URI + '/signin', user);
  }

  loggedIn(): boolean{
    return !!localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }

  getToken(){
    return localStorage.getItem('token');
  }

}