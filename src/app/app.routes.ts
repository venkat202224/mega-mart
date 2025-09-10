import { Routes } from '@angular/router';
import { AppSignupComponent } from './signup/signup.component';
import { AppLoginComponent } from './login/login.component';
import { AppWebhomeComponent } from './webhome/webhome.component';
import { AppProductsComponent } from './products/products.component';
import { AppCustomerComponent } from './customer/customer.component';
import { AppAdminComponent } from './admin/admin.component';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, //default route
  { path: 'signup', component: AppSignupComponent },
  { path: '', component: AppLoginComponent },
  { path: 'webhome', component: AppWebhomeComponent },
  { path: 'products', component: AppProductsComponent },
  { path: 'customer', component: AppCustomerComponent },
  { path: 'admin', component: AppAdminComponent }
];
