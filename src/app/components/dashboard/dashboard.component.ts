import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/services/dataService/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  [x: string]: any;
  mobileQuery: MediaQueryList;
  value: any;


  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private route: Router,private dataService: DataService,private _snackBar: MatSnackBar) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  onLogout()
  {
    localStorage.removeItem("token");
    this.route.navigateByUrl('/login');

    let snackBarRef = this._snackBar.open('Logged in Successfully', 'Undo', {
      duration: 2000
    });;
    
  }

  searchTitle(event: any){
    console.log("input in search field===",event.target.value)
    this.value = event.target.value
    let Ddata={
      type: 'search',
      data:[this.value]
    }
    this.dataService.changeData(Ddata)
    }
}
