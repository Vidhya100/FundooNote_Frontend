import { Component, Input, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/services/note-service/note-service.service';

@Component({
  selector: 'app-icon-comp',
  templateUrl: './icon-comp.component.html',
  styleUrls: ['./icon-comp.component.scss']
})
export class IconCompComponent implements OnInit {
  @Input() noteCard: any;

  isDel: boolean = false;

  constructor(private note: NoteServiceService) { }

  ngOnInit(): void {
  }
  
  onDelete(){
    let reqdata = {
      noteId: [this.noteCard.noteID],
      isDel: true,
    }
    console.log(reqdata);
    this.note.trashNote(reqdata).subscribe((response: any) => {
      console.log(response)
    })
  }
  onArchieve(){
    let reqdata = {
      noteId: [this.noteCard.noteID],

    }
    console.log(reqdata);
    this.note.ArchieveNote(reqdata).subscribe((response: any) => {
      console.log(response)
    })
  }
}
