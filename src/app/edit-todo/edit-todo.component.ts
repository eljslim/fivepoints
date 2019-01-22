import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {

  index = 0;
  todo;
  submitted = false;
  todoForm;

  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService) {
    this.todoForm = new FormGroup({
      title: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      Done: new FormControl(false, Validators.required)
    })
   }

  ngOnInit() {
    this.index = this.activatedRoute.snapshot.params.index;
    console.log(this.index)
    this.todo = this.authService.connectedUser.todos[this.index];
    console.log(this.todo)
    this.todoForm.setValue(this.todo);
    console.log(this.todoForm);
    
    this.activatedRoute.params.subscribe(params => {
      console.log(params)
      // api call get by id
    })
  }

  btnEdit(form) {
    this.submitted = true
    console.log(form)

    if (form.valid) {
      this.authService.editTodo(form.value, this.index);
    }
  }

}
