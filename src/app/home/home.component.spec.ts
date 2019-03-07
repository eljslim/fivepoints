import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment.prod';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditTodoComponent } from '../edit-todo/edit-todo.component';
import { CurrencyComponent } from '../currency/currency.component';
import { TodoComponent } from '../todo/todo.component';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { CalculComponent } from '../calcul/calcul.component';
import { AuthGuard } from '../auth.guard';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ,LoginComponent, EditTodoComponent, CurrencyComponent, CalculComponent, TodoComponent, RegisterComponent, HomeComponent
      ],
      imports: [BrowserModule, FormsModule, RouterModule.forRoot([
          { path: 'home', component: HomeComponent  , canActivate: [AuthGuard]},
          { path: 'calcul', component: CalculComponent  , canActivate: [AuthGuard]},
          { path: 'login', component: LoginComponent },
          { path: 'register', component: RegisterComponent },
          { path: 'todo', component: TodoComponent  , canActivate: [AuthGuard]},
          { path: 'currency', component: CurrencyComponent  , canActivate: [AuthGuard]},
          { path: 'edit/:index', component: EditTodoComponent  , canActivate: [AuthGuard]},
          { path: '**', redirectTo: 'home' }
        ]), ReactiveFormsModule, HttpClientModule,
        AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
        AngularFirestoreModule, // imports firebase/firestore, only needed for database features
        AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
        AngularFireStorageModule,// imports firebase/storage only needed for storage features
        AngularFireDatabaseModule,
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;

    const userConnected = JSON.parse(localStorage.getItem("connectedUser"));
  }));

  

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("todo valid",()=>{
    const todo = component.todoForm.controls['todo'];
    todo.setValue('todo');
    expect(component.todoForm.valid).toBeTruthy();
    component.btnAdd(component.todoForm);
});

it("todo not valid",()=>{
    const todo = component.todoForm.controls['todo'];
    todo.setValue('');
    expect(component.todoForm.invalid).toBeTruthy();
    component.btnAdd(component.todoForm);
});


});
