import { Component,  EventEmitter,  Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {

  @Input() NotesList: any;
  msg:any;
  @Output() messageDisplayToGetAllnotes= new EventEmitter<string>();
  
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {

  }

  openDialog(note:any): void {
   const dialogRef =  this.dialog.open(UpdateNoteComponent, {
      width: '400px',
      height: '150px',
      data: note,
    });
  }  
  receivemessageTrashToDisplay($event:any){
    console.log("event from icon to display",$event)
    this.msg = $event;
    console.log("msg",this.msg);

    this.messageDisplayToGetAllnotes.emit(this.msg)
  }
}
