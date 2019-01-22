import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { auth } from 'firebase';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  users;

  constructor(private authService:AuthService, private db:AngularFireDatabase) {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
    // this.db.list("users").valueChanges().subscribe(data => {
    //   this.users = data;
    // });
    // this.users = authService.users;
    this.authService.getAllUsers().subscribe((data) =>{
      this.users = data;
      console.log(data);
    });
  }

  ngOnInit() {
  }

  btnRegister(form) {
    this.submitted = true
    console.log(form)

    if (form.valid) {
      this.authService.register(form.value).subscribe((data) => {
        console.log(data);
      });      
    }
  }

}
