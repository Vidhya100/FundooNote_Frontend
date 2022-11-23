import { Component,  Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {

  @Input() NotesList: any;

  
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
}
