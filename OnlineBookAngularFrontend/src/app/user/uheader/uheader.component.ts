import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uheader',
  templateUrl: './uheader.component.html',
  styleUrls: ['./uheader.component.css']
})
export class UheaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cLogout(){
    sessionStorage.clear();
    this.router.navigate(['/userlogin']);
  }

}
