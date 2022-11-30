import { Component,  EventEmitter,  Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/services/dataService/data.service';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {

  @Input() NotesList: any;
  notesArray:any;
  message:any;
  msg:any;
  @Output() messageDisplayToGetAllnotes= new EventEmitter<string>();
  //@Output() keyup = new EventEmitter<string>();
  subscription: any;
  Searchword: any;
  
  constructor(private dialog: MatDialog, private dataService : DataService) { }

  ngOnInit(): void {
    this.dataService.searchNote.subscribe((message:any)=>{
      this.message = message;
      console.log(message.data[0]);
      this.Searchword = message.data[0]
    });
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

    //let snackBarRef = snackBar.open('Message archived');
  }
}
