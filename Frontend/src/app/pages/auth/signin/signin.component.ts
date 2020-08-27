import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

import { User } from '../../../interfaces/User';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public user = {name: '',
password: ''};

  constructor(
    private authService: AuthService,
    private router: Router ) { }

  ngOnInit() {
  }

  signIn(){
    console.log(this.user)
    this.authService.signIn(this.user)
      .subscribe(
        res =>{
          localStorage.setItem('token', res.token);
          this.router.navigate(['/post/uploads']);
        },
        err => console.log(err)
      )
  }

}
