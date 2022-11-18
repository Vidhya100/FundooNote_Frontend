import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {

  createnoteForm !: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createnoteForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      color: " "
    });
  }

  onSubmit() {
    this.submitted = true;

  }
}
