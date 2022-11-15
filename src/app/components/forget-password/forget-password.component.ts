import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userServices/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  forgetPasswordForm!: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder, private user : UserService) { }

  ngOnInit(): void {
    this.forgetPasswordForm = this.formBuilder.group
    ({
      
      email: ['', [Validators.required, Validators.email]],
      
  } );
  }

  get f() { return this.forgetPasswordForm.controls; }

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.forgetPasswordForm.valid) {
    let payload = {
      email: this.forgetPasswordForm.value.email,
      service : "advance" 
    }
    console.log(payload);
     this.user.forgetPassword(payload).subscribe((response:any)=>{
      console.log(response)
      //added for storing token locally
      localStorage.setItem("token",response.data)
    })
  }
}

}
