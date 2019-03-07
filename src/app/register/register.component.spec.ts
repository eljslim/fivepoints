import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { LoginComponent } from '../login/login.component';
import { EditTodoComponent } from '../edit-todo/edit-todo.component';
import { CurrencyComponent } from '../currency/currency.component';
import { CalculComponent } from '../calcul/calcul.component';
import { TodoComponent } from '../todo/todo.component';
import { HomeComponent } from '../home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';

describe('RegisterComponent', () => {
    let component: RegisterComponent;
    let fixture: ComponentFixture<RegisterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RegisterComponent, LoginComponent, EditTodoComponent, CurrencyComponent, CalculComponent, TodoComponent, RegisterComponent, HomeComponent
            ],
            imports: [BrowserModule, FormsModule, RouterModule.forRoot([
                { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
                { path: 'calcul', component: CalculComponent, canActivate: [AuthGuard] },
                { path: 'login', component: LoginComponent },
                { path: 'register', component: RegisterComponent },
                { path: 'todo', component: TodoComponent, canActivate: [AuthGuard] },
                { path: 'currency', component: CurrencyComponent, canActivate: [AuthGuard] },
                { path: 'edit/:index', component: EditTodoComponent, canActivate: [AuthGuard] },
                { path: '**', redirectTo: 'home' }
            ]), ReactiveFormsModule, HttpClientModule,
                AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
                AngularFirestoreModule, // imports firebase/firestore, only needed for database features
                AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
                AngularFireStorageModule,// imports firebase/storage only needed for storage features
                AngularFireDatabaseModule,
            ]
        }).compileComponents();
        fixture = TestBed.createComponent(RegisterComponent);
        component = fixture.componentInstance;
    }));



    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('all fields valid', () => {
       const name =  component.registerForm.controls['name'];
       name.setValue('Name');
       const email =  component.registerForm.controls['email'];
       email.setValue('email@email.fr');
       const login =  component.registerForm.controls['login'];
       login.setValue('login');
       const password =  component.registerForm.controls['password'];
       password.setValue('password');
       expect(component.registerForm.valid).toBeTruthy();
       component.btnRegister(component.registerForm);
    });


    it('name is not valid', () => {
        const name =  component.registerForm.controls['name'];
        name.setValue('');
        expect(component.registerForm.controls['name'].invalid).toBeTruthy();
        // component.btnRegister(component.registerForm);
     });

     it('email is null', () => {
        const name =  component.registerForm.controls['email'];
        name.setValue('');
        expect(component.registerForm.controls['email'].invalid).toBeTruthy();
        // component.btnRegister(component.registerForm);
     });

     it('email is not valid', () => {
        const name =  component.registerForm.controls['email'];
        name.setValue('mail');
        expect(component.registerForm.controls['email'].invalid).toBeTruthy();
        // component.btnRegister(component.registerForm);
     });

     it('login is not valid', () => {
        const name =  component.registerForm.controls['login'];
        name.setValue('');
        expect(component.registerForm.controls['login'].invalid).toBeTruthy();
        // component.btnRegister(component.registerForm);
     });

     it('password is not valid', () => {
        const name =  component.registerForm.controls['password'];
        name.setValue('');
        expect(component.registerForm.controls['password'].invalid).toBeTruthy();
        // component.btnRegister(component.registerForm);
     });

    //   name: new FormControl('', Validators.required),
    //       email: new FormControl('', [Validators.required, Validators.email]),
    //       login: new FormControl('', Validators.required),
    //       password: new FormControl('', Validators.required)
});
