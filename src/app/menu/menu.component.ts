import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    console.log(this.isLoggedIn())
  }

  isLoggedIn ;

  constructor(public authService: AuthService) { 
    this.isLoggedIn = this.authService.isLoggedIn;
  }

  ngOnInit() {    
    console.log(this.isLoggedIn())
  }





  

}
