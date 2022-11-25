import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/note-service/note-service.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {

  token:any;
  notesArray:any;
  noteData:any;
  message:any;
  public subscription: any;

  constructor( private noteService: NoteServiceService ) {  }

  ngOnInit(): void {
    this.getAllNotes()    
  }

  getAllNotes(){
     this.noteService.getAllNotes().subscribe((request:any)=> {
      console.log("request data", request);
      this.notesArray = request.data;
      this.notesArray.reverse()
      this.notesArray = this.notesArray.filter((noteData: any) => {
        return this.noteData.trash === false && this.noteData.archive == false;
      })
    })
  }

}
