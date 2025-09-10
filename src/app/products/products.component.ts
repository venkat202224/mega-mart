import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})

export class AppProductsComponent {
  productForm!: FormGroup;
  submitButtonStatus: boolean = false;

  ngOnInit(): void {
    this.productForm = new FormGroup({
      product: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
    });
  }

  myClickHandler() {
    this.submitButtonStatus = true;
    console.log(this.productForm.value)
  }
}