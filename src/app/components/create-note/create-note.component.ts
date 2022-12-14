import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteServiceService } from 'src/app/services/note-service/note-service.service';
import { UserService } from 'src/app/services/userServices/user.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  
  createnoteForm !: FormGroup;
  submitted = false;
  isShow: boolean = false;
  close: boolean = true;


  constructor(private formBuilder: FormBuilder, private note: NoteServiceService) { }
  @Output() displaytogetallNotes = new EventEmitter<string>();

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

  Close() {
    this.isShow = false;
    this.submitted = true;
  }
  get f() { return this.createnoteForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.createnoteForm.valid) {
      let payload = {
        title: this.createnoteForm.value.title,
        description: this.createnoteForm.value.description,
       /* "reminder": "2022-11-21T10:53:50.857Z",
        "color": "white",
        "image": "string",
        "archive": true,
        "pin": true,
        "trash": true,
        "created": "2022-11-21T10:53:50.857Z",
        "edited": "2022-11-21T10:53:50.857Z"*/
        //service : "advance" 
      }
      console.log(payload)
      this.note.createNote(payload).subscribe((response: any) => {
        console.log(response)
        this.displaytogetallNotes.emit(response)
        //added for storing token locally
        //localStorage.setItem("token", response.data)
      })
    }
  }

}
