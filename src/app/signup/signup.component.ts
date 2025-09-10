import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { catchError, map, of } from "rxjs";


@Component({
  selector: 'app-signup',
  imports: [CommonModule, FormsModule, ReactiveFormsModule,],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})

export class AppSignupComponent {
  signupForm!: FormGroup;
  submitBtnStatus: boolean = false;

  constructor(private router: Router, private http: HttpClient) { }
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      userrole: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirm: new FormControl('', [Validators.required]),
    });
  }
  myClickHandler() {
    this.submitBtnStatus = true;
    console.log(this.signupForm.value)
    if (this.signupForm.valid) {
      this.http.post<any>('http://localhost:3001/register', this.signupForm.value).pipe(
        catchError((err: any) => {
          alert('somethign went wrong please try again')
          return of(null)
        })).
        subscribe(res => {
          if (res) {
            alert('Your account created successfully, please login');
            this.router.navigate(['/'])
          }
        });
    }
  }
  // navigateWebhome(event: any) {
  //   event.preventDefault();

  //   // this.router.navigate(['/webhome']);

  // }
}