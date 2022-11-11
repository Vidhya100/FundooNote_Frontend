import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  forgetPasswordForm!: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.forgetPasswordForm = this.formBuilder.group
    ({
     
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
      
  } );
  }

  get f() { return this.forgetPasswordForm.controls; }

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.forgetPasswordForm.invalid) {
      return;
  }
}

}
