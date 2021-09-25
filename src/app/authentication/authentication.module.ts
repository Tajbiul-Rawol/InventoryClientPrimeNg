import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgetPasswordComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthenticationModule { }
