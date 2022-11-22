import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userServices/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private user: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group
    ({
     
      
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
      
      
  } );
  }
  get f() { return this.loginForm.controls; }

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.loginForm.valid) {
      let payload = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
        service : "advance" 
      }

       this.user.login(payload).subscribe((response:any)=>{
        console.log(response)
         //added for storing token locally
        localStorage.setItem("token",response.data)

       this.router.navigateByUrl('/dashboard/get-all-notes')
      })
  }
}

}
