import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalculComponent } from './calcul/calcul.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TodoComponent } from './todo/todo.component';
import { CurrencyComponent } from './currency/currency.component';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, LoginComponent, MenuComponent, EditTodoComponent, CurrencyComponent, CalculComponent, TodoComponent, RegisterComponent, HomeComponent
      ],
      imports: [BrowserModule, FormsModule, RouterModule.forRoot([

        { path: 'login', component: LoginComponent }

      ]), ReactiveFormsModule, HttpClientModule,
        AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
        AngularFirestoreModule, // imports firebase/firestore, only needed for database features
        AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
        AngularFireStorageModule,// imports firebase/storage only needed for storage features
        AngularFireDatabaseModule,
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  //   it(`should have as title 'app1'`, () => {
  //     const fixture = TestBed.createComponent(AppComponent);
  //     const app = fixture.debugElement.componentInstance;
  //     expect(app.title).toEqual('app1');
  //   });

  //   it('should render title in a h1 tag', () => {
  //     const fixture = TestBed.createComponent(AppComponent);
  //     fixture.detectChanges();
  //     const compiled = fixture.debugElement.nativeElement;
  //     expect(compiled.querySelector('h1').textContent).toContain('Welcome to app1!');
  //   });
});
