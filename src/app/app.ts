import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppSignupComponent } from './signup/signup.component';
@Component({
  selector: 'app-root',
  imports:[RouterOutlet, AppSignupComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mega-mart-app');
}
