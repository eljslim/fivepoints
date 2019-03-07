import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  success = false;
  items;

  constructor(private router: Router, private authService: AuthService, private db:AngularFireDatabase) {
    this.loginForm = new FormGroup({
      login: new FormControl('',[ Validators.required]),
      password: new FormControl('', Validators.required)
    })
  }
  
  ngOnInit() {
    this.items = this.db.list('users');    
  }

  btnLogin(form) {
    this.submitted = true
    console.log(form)

    if (form.valid) {
      this.authService.login(form.value);
    }

  }

}
