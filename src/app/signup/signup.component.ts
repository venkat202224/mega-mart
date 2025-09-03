import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-signup',
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})

export class AppSignupComponent {
signupForm!: FormGroup;
  userName: any = '';
  userEmail = '';
  userPassword = '';
  userPasswords = '';

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      userrole:new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirm: new FormControl('', [Validators.required]),
    });
  }
  myClickHandler() {

    console.log(this.userName, this.userEmail, this.userPassword, this.userPasswords)

  }
}