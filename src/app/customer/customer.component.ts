import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { catchError, map, of } from "rxjs";


@Component({
  selector: 'app-customer',
  imports: [CommonModule, FormsModule, ReactiveFormsModule,],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
})

export class AppCustomerComponent {
}