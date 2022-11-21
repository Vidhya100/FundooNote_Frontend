import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthgaurdService {

  constructor(private authguardService: AuthgaurdService, private router:Router) { }

  gettoken() {
    return !!localStorage.getItem("token");
  }

  canActivate(): boolean{
    if(!this.authguardService.gettoken())
    {
      this.router.navigateByUrl("/login");
    }
    return this.authguardService.gettoken();
  }
}
