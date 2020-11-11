import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.menuResposive();
  }

  menuResposive(){
    const x = document.getElementById('navbarNav');

    if (x.className === "topnav navbar-expand-xl" || x.className === "topnav navbar-expand-xl fixed" ) {
      x.className += " responsive";
      console.log('Hola ')
    } else {
      x.className = "topnav navbar-expand-xl";
    }
	
	  document.body.scrollTop = 0;
  	document.documentElement.scrollTop = 0;
	
  }

}
