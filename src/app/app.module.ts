import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { CalculComponent } from './calcul/calcul.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TodoComponent } from './todo/todo.component';
import { AuthGuard } from "./auth.guard";
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { CurrencyComponent } from './currency/currency.component';

const routes: Routes = [
  //
  { path: 'home', component: HomeComponent  , canActivate: [AuthGuard]},
  { path: 'calcul', component: CalculComponent  , canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'todo', component: TodoComponent  , canActivate: [AuthGuard]},
  { path: 'currency', component: CurrencyComponent  , canActivate: [AuthGuard]},
  { path: 'edit/:index', component: EditTodoComponent  , canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    CalculComponent,
    LoginComponent,
    RegisterComponent,
    TodoComponent,
    EditTodoComponent,
    CurrencyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule,// imports firebase/storage only needed for storage features
    AngularFireDatabaseModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
