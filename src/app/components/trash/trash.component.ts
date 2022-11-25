import { Component, Input, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/note-service/note-service.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  NotesList: any;
  notesArray:any;
  noteData:any;

  constructor(private note: NoteServiceService) { }

  ngOnInit(): void {
    this.getTrash()
  }

  getTrash(){
    
    this.note.getAllNotes().subscribe((request:any)=> {
     console.log("request data", request);
     this.notesArray = request.data;
     this.notesArray.reverse()
      this.notesArray = this.notesArray.filter((noteData: any) => {
        return this.noteData.trash === true && this.noteData.archive == false;
      })
   })
}
}