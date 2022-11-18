import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {

  createnoteForm !: FormGroup;
  submitted = false;
  isShow: boolean = false;
  close:boolean = true;
  

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createnoteForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      color: " "
    });
  }
  show() {
    this.isShow = true;
  }
  
  Close(){
    this.isShow=false;
    this.submitted=true;
  }
  onSubmit() {
    this.submitted = true;

  }

}
