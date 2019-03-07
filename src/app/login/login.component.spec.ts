import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, ROUTES } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CalculComponent } from '../calcul/calcul.component';
import { EditTodoComponent } from '../edit-todo/edit-todo.component';
import { CurrencyComponent } from '../currency/currency.component';
import { TodoComponent } from '../todo/todo.component';
import { RegisterComponent } from '../register/register.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { AuthGuard } from '../auth.guard';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent, EditTodoComponent, CurrencyComponent, CalculComponent, TodoComponent, RegisterComponent, HomeComponent
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
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        // fixture.detectChanges();
    }));


    it('should create', () => {
        expect(component).toBeTruthy();
    });


    it("login and password valid", () => {
        const login = component.loginForm.controls['login'];
        login.setValue('slim');
        const userPassword = component.loginForm.controls['password'];
        userPassword.setValue('slim');
        expect(component.loginForm.valid).toBeTruthy();
        component.btnLogin(component.loginForm);
    });

    it("Password is null and login valid", () => {
        const userPassword = component.loginForm.controls['password'];
        userPassword.setValue('');
        const login = component.loginForm.controls['login'];
        login.setValue('slim@gmail.fr');
        expect(component.loginForm.controls['password'].invalid).toBeTruthy();
        component.btnLogin(component.loginForm);
    });



    it("Password valid and login is null", () => {
        const userPassword = component.loginForm.controls['password'];
        userPassword.setValue('122222');
        const login = component.loginForm.controls['login'];
        login.setValue('');
        expect(component.loginForm.controls['login'].invalid).toBeTruthy();
        component.btnLogin(component.loginForm);
    });

    it("Password and login is null", () => {
        const userPassword = component.loginForm.controls['password'];
        userPassword.setValue('');
        const login = component.loginForm.controls['login'];
        login.setValue('');
        expect(component.loginForm.invalid).toBeTruthy();
        component.btnLogin(component.loginForm);
    });



});
