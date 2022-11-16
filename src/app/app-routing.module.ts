import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';


const routes: Routes = [
  {path : 'register' , component: RegistrationComponent},
  {path : 'login' , component: LoginComponent},
  {path: 'forget-password' , component: ForgetPasswordComponent},
  {path: 'reset-password' , component: ResetPasswordComponent},
  {path: 'dashboard', component: DashboardComponent,
  children:[
    {path:'create-note', component:CreateNoteComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
