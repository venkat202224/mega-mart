import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { catchError, map, of } from "rxjs";


@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})

export class AppLoginComponent {
  loginForm!: FormGroup;
  submitButtonStatus: boolean = false;
  usersList: Array<any> = [];

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),

    });
    this.getUsers();
  }
  getUsers() {
    this.http.get<any>('http://localhost:3001/users').pipe(
      catchError((err: any) => {
        alert('somethign went wrong please try again')
        return of(null)
      })).
      subscribe(res => {
        if (res) {
          this.usersList = res;
          console.log(res)
        }
      })
  }
  loginHandler() {
    this.submitButtonStatus = true;
    console.log(this.loginForm.value)
    if (this.loginForm.valid) {
      this.http.post<any>('http://localhost:3001/login', this.loginForm.value).pipe(
        catchError((err: any) => {
          alert('somethign went wrong please try again')
          return of(null)
        })).
        subscribe(res => {
          if (res) {
            console.log(res)
            this.usersList.forEach(user => {
              console.log(user);
              if (user.id == res.user.id) {
                if (user.userrole == 'admin') {
                  this.router.navigate(['/admin'])
                }
                else {
                  user.userrole == 'customer';
                  this.router.navigate(['/customer'])

                }
              }

            })
            alert('You have successfully login');
            this.router.navigate(['/webhome'])
          }
        })
    }
  }

  constructor(private router: Router, private http: HttpClient) { }
  navigateSignup(event: any) {
    event.preventDefault();
    // this.http.get
    this.router.navigate(['/signup']);
  }

}