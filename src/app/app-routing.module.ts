import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { ArchieveComponent } from './components/archieve/archieve.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { TrashComponent } from './components/trash/trash.component';


const routes: Routes = [

  {path : 'register' , component: RegistrationComponent},
  {path : 'login' , component: LoginComponent},
  {path: 'forget-password' , component: ForgetPasswordComponent},
  {path: 'reset-password' , component: ResetPasswordComponent},
  {path: 'dashboard', component: DashboardComponent,canActivate:[AuthenticationGuard],
  children:[
    {path:'get-all-notes', component:GetAllNotesComponent},
    {path:'gettrash', component:TrashComponent},
    {path:'archieve', component:ArchieveComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
