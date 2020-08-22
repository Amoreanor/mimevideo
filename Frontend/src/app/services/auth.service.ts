import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URI = 'http://localhost:3000/users';

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  signUp(user){
    return this.http.post<User>(this.URI + '/signup', user);
  }

  signIn(user){
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