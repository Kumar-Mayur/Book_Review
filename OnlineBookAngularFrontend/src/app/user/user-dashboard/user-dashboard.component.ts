import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  cUser:any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.cUser = sessionStorage.getItem('CuserName');
    if(this.cUser == null){
      this.router.navigate(['/userlogin']);
    }
  }
  onNav(){
    this.router.navigate(['/userbklst']);
  }
  onNav2(){
    this.router.navigate(['/userprofile']);
  }
}
