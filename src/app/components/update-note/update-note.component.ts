import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteServiceService } from 'src/app/services/note-service/note-service.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {

  title: any;
  description: any;
  noteID: any;

  constructor(private notes: NoteServiceService,
    public dialogRef: MatDialogRef<UpdateNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  ngOnInit(): void {
    console.log(this.data);
    this.title = this.data.title;
    this.description = this.data.description;
    this.noteID=this.data.noteID;
  }

  onNoClick()
  {
    let reqdata ={ 
      title: this.title,
      description: this.description,
      noteId : this.noteID
    }
    this.notes.updateNote(reqdata).subscribe((Response: any) => {
      console.log(Response);
      //window.location.reload();
    });
    this.dialogRef.close();
  }
}
