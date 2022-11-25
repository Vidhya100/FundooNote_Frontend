import { CloseScrollStrategy } from '@angular/cdk/overlay';
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

  colors: Array<any> =[
  {code:"#ffff00", name:"yellow"},
  {code:"#00ff00", name:"green"},
  {code:"#00ffff", name:"cyan"},
  {code:"#4a86e8", name:"cornflower blue"},
  {code:"#9900ff", name:"purple"},
  {code:"#ff00ff", name:"magneta"},
  {code:"#e6b8af", name:"light red berry 3"},
  {code:"#f4cccc", name:"light red 3"},
  {code:"	#fce5cd", name:"light orange 3"},
  {code:"	#ffe599", name:"light yellow 2"},
  {code:"#f1c232", name:"dark yellow 1"},
  {code:"#93c47d", name:"light green 1"}
];

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

  setColor(color: any) {

   // console.log('color', color);
    //console.log(this.noteCard);

    this.noteCard.color=color;
    //console.log('color', color);
    let reqdata = {
      color: color,
      noteId: [this.noteCard.noteID],
    }
    console.log(reqdata)
    this.note.changeNoteColor(reqdata).subscribe((response: any) => {
      console.log(response);

    })

  }
}
