import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteServiceService } from 'src/app/services/note-service/note-service.service';
import { DisplayNoteComponent } from '../display-note/display-note.component';

@Component({
  selector: 'app-icon-comp',
  templateUrl: './icon-comp.component.html',
  styleUrls: ['./icon-comp.component.scss']
})
export class IconCompComponent implements OnInit {
  @Input() noteCard: any;
  @Output() changeEvent = new EventEmitter<string>();
  isDel: boolean = false;
  durationInSeconds =5;
  isTrash: boolean=false;
  isArchieve: boolean=false;
  //snackBar: any;

  colors: Array<any> =[
  { code: '#fff', name: 'white' },
    { code: '#f28b82', name: 'red' },
    { code: '#fbbc04', name: 'orange' },
    { code: '#FFFF00', name: 'yellow' },
    { code: '#ccff90', name: 'green' },
    { code: '#a7ffeb', name: 'teal' },
    { code: '#cbf0f8', name: 'Blue' },
    { code: '#aecbfa', name: 'darkblue' },
    { code: '#d7aefb', name: 'purple' },
    { code: '#fdcfe8', name: 'pink' },
    { code: '#e6c9a8', name: 'brown' },
    { code: '#e8eaed', name: 'grey' },
];

  constructor(private note: NoteServiceService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  
  onDelete(){
    let reqdata = {
      noteId: [this.noteCard.noteID],
      
    }
    console.log(reqdata);
    this.note.trashNote(reqdata).subscribe((response: any) => {
      console.log(response)
      this.changeEvent.emit(response)
    })
    //this._snackBar.openFromComponent(DisplayNoteComponent, {
    //  duration: this.durationInSeconds * 1000,
   // })
   let snackBarRef = this._snackBar.open('note is in trash---');
  }
  onArchieve(){
    let reqdata = {
      noteId: [this.noteCard.noteID],

    }
    console.log(reqdata);
    this.note.ArchieveNote(reqdata).subscribe((response: any) => {
      console.log(response)
      this.changeEvent.emit(response)
    })
    let snackBarRef = this._snackBar.open('note is in Archive---');
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
