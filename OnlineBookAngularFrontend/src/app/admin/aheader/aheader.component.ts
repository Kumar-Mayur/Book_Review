import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-aheader',
  templateUrl: './aheader.component.html',
  styleUrls: ['./aheader.component.css']
})
export class AheaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logoutbtn(){
    sessionStorage.removeItem('adminusername');
    this.router.navigate(['/adminlogin']);
  }

}
