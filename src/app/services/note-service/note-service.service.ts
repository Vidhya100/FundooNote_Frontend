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
  
}
