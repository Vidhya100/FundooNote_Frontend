import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/note-service/note-service.service';

@Component({
  selector: 'app-archieve',
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.scss']
})
export class ArchieveComponent implements OnInit {
  NotesList: any;
  notesArray:any;
  

  constructor(private note: NoteServiceService) { }

  ngOnInit(): void {
    this.Archieve()
  }

  Archieve(){
    
    this.note.getAllNotes().subscribe((request:any)=> {
     console.log("request data", request);
     this.notesArray = request.data;
     this.notesArray.reverse()
     this.notesArray = this.notesArray.filter((notedata: any) => {
      return notedata.archive === true && notedata.trash === false;
      })
   })
}
}
