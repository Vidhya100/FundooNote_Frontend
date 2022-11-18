import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
  token: any;

  constructor(private httpService : HttpService) { 
    this.token = localStorage.getItem('token')
  }

  createNote(reqdata:any){
    let header = {
      header: new HttpHeaders(
        {
          'Content-type' : 'application/json' ,
          Authorization :'Bearer ' +'token' 
        })
    }
    return this.httpService.postService('/Notes/Create',reqdata,true,header)
  }
}
