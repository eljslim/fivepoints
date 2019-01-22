import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { HttpClient } from '@angular/common/http';
import { Window } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  endPoint = "http://chehir.tn:3000/slim"

  connectedUser: any;
  users: any;

  constructor(private router: Router, private db: AngularFireDatabase, private http: HttpClient) {
    this.getAllUsers().subscribe((data) => {
      this.users = data;
      console.log(data)
    });
    // this.db.list("users").valueChanges().subscribe((data : any) => {
    //   for (let index = 0; index < data.length; index++) {
    //     console.log(data[index]);


    //   }
    //   this.users = data;
    // });

    var user = JSON.parse(localStorage.getItem("connectedUser"));

    console.log("User Connected");
    console.log(user);
    if (user) {
      this.connectedUser = user;
      console.log(this.connectedUser);
    }
  }

  getAllUsers() {
    return this.http.get(this.endPoint + "/user");
  }
  login(user) {

    this.users.forEach((element) => {
      if (user.login == element.login && user.password == element.password) {
        this.connectedUser = element;
        this.setConectedUser(element);
        this.router.navigateByUrl('/home')
      }
    });
  }

  register(user) {
    return this.http.post(this.endPoint + "/register", user);
    // this.db.list("users").push(user);    
  }

  addToDo(title) {
    var todo = {
      "title": title,
      "date": Date.now(),
      "Done": false
    }

    if (this.connectedUser.todos == null) {
      this.connectedUser.todos = [];
    }
    this.connectedUser.todos.push(todo);
    console.log(this.connectedUser);

    this.http.post(this.endPoint + "/update/" + this.connectedUser._id, this.connectedUser).subscribe((data) => {
      console.log(data);
    });

    // this.db.object('/users/' + this.connectedUser.$key)
    //   .update(this.connectedUser);

    // var users = JSON.parse(localStorage.getItem("users"));

    // for (let index = 0; index < users.length; index++) {
    //   if (this.connectedUser.login == users[index].login && this.connectedUser.password == users[index].password) {
    //     users[index] = this.connectedUser;
    //     localStorage.setItem("users", JSON.stringify(users));
    //     console.log(users);
    //     return;
    //   }
    // }

  }

  ngOnInit() {

  }

  isLoggedIn() {
    // console.log(this.connectedUser);
    if (this.connectedUser) {
      return true;
    }
    return false;
  }

  setConectedUser(user) {
    localStorage.setItem("connectedUser", JSON.stringify(user));
  }

  logout(){
    localStorage.clear();
    location.reload(true);
    }

  editTodo(todo, index) {
    this.connectedUser.todos[index] = todo;
    this.http.post(this.endPoint + "/update/" + this.connectedUser._id, this.connectedUser).subscribe((data) => {
      console.log(data);
    });
    this.setConectedUser(this.connectedUser);
  }
}
