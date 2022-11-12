import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
  {path : 'register' , component: RegistrationComponent},
  {path : 'login' , component: LoginComponent},
  {path : 'signin' , component:SigninComponent},
  {path: 'forget-password' , component: ForgetPasswordComponent},
  {path: 'reset-password' , component: ResetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
