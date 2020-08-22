import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

import { User } from '../../../interfaces/User';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public user = {} as User;

  constructor(
    private authService: AuthService,
    private router: Router ) { }

  ngOnInit() {
  }

  signIn(){
    this.authService.signIn(this.user)
      .subscribe(
        res =>{
          localStorage.setItem('token', res.token);
          this.router.navigate(['/post/new']);
        },
        err => console.log(err)
      )
  }

}
