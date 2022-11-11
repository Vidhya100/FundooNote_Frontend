import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group
    ({
     
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
      
  } );
  }
  get f() { return this.resetPasswordForm.controls; }

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.resetPasswordForm.invalid) {
      return;
  }
}
}
