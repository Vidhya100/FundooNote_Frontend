import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  constructor(private httpService : HttpService) { }

  login(reqdata:any){
    let header = {
      header: new HttpHeaders(
        {
          'Content-type' : 'application/json' ,
          //Authorization : 'token' 
        })
    }
    return this.httpService.postService('/User/login',reqdata,false,header)
  }
  
  register(reqdata:any){
    let header = {
      header: new HttpHeaders(
        {
          'Content-type' : 'application/json' ,
          //Authorization : 'token' 
        })
    }
    return this.httpService.postService('/User/Register',reqdata,false,header)
  }

  forgetPassword(reqdata:any){
    let header = {
      header: new HttpHeaders(
        {
          'Content-type' : 'application/json' ,
          //Authorization : 'token' 
        })
    }
    return this.httpService.postService('/User/ForgetPasword?email=vighneshmundhe7%40gmail.com',reqdata,false,header)
  }

  resetPassword(reqdata:any){
    let header = {
      header: new HttpHeaders(
        {
          'Content-type' : 'application/json' ,
          //Authorization : 'token' 
        })
    }
    return this.httpService.putService('ResetPassword?newPassword=Vidhya%4012&confirmPassword=Vidhya%40123',reqdata,false,header)
  }
}
