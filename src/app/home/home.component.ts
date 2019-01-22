import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  todoForm: FormGroup;
  submitted = false;
  success = false;
  todos = [];

  constructor(private authService: AuthService, private router: Router) {
    this.todoForm = new FormGroup({
      todo: new FormControl('', Validators.required)
    })
  }



  btnAdd(form) {
    this.submitted = true;

    if (form.valid) {
      this.authService.addToDo(form.value.todo);
      console.log(form.value);
    }

  }

  ngOnInit() {
    this.todos = this.authService.connectedUser.todos;
    console.log(this.todos);
  }

  bntEdit(index) {
    this.router.navigateByUrl("/edit/"+index);
  }

}
