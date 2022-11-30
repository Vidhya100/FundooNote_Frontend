import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
  token: any;
 // httpOptions: any;

  constructor(private httpService : HttpService) { 
    this.token = localStorage.getItem('token')
  }

  createNote(reqdata:any){
    console.log(this.token)
    console.log(reqdata)
    let headers = {
      headers: new HttpHeaders(
        {
          'Content-Type' : 'application/json' ,
          'Authorization' :'Bearer '+this.token 
        })
    }
    return this.httpService.postService('/Notes/Create',reqdata,true,headers)
  }

  getAllNotes(){
    let header = {
      headers: new HttpHeaders({
      
        'Content-Type' : 'application/json' ,
        'Authorization' :'Bearer '+this.token 
      })
    }
    return this.httpService.getService('/Notes/Get', true, header)
  }
  
  updateNote(reqdata: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':'Bearer ' + this.token
      })
    }
    return this.httpService.putService(`/Notes/Update?noteId=${reqdata.noteId} `, reqdata, true, header)
  }

  trashNote(reqdata: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':'Bearer ' + this.token
      })
    }
    return this.httpService.putService(`/Notes/Trash?noteId=${reqdata.noteId} `, reqdata, true, header)
  }

  ArchieveNote(reqdata: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':'Bearer ' + this.token
      })
    }
    return this.httpService.putService(`/Notes/Archieve?noteId=${reqdata.noteId} `, reqdata, true, header)
  }

  changeNoteColor(reqdata: any) {
    console.log(reqdata)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':'Bearer ' + this.token
      })
    }
    return this.httpService.putService(`/Notes/Color?noteId=${reqdata.noteId}&color=${reqdata.color} `, reqdata, true, header)
  }

  deleteNote(reqdata: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':'Bearer ' + this.token
      })
    }
    return this.httpService.deleteService(`/Notes/Delete?noteId=${reqdata.noteId} `,true, header)
  }
}
