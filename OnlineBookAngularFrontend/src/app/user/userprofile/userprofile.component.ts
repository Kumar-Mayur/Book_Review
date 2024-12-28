import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiuserService } from 'src/app/services/apiuser.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  supData:any;
  supId:any;
  constructor(private router: Router, private userService: ApiuserService) { }

  ngOnInit(): void {
    this.supId = sessionStorage.getItem('CuserId');
    console.log(this.supId);
    this.getSupData(this.supId);
  }

  edituprof(id:number){
    this.router.navigate(['/userprofileedit/'+id]);
  }

  getSupData(id:any){
    this.userService.getUserByID(id).subscribe((res) => {
      console.log(res)
      this.supData = res; 
    })
  }

}
