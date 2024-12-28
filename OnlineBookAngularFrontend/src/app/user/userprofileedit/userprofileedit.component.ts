import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiuserService } from 'src/app/services/apiuser.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-userprofileedit',
  templateUrl: './userprofileedit.component.html',
  styleUrls: ['./userprofileedit.component.css']
})
export class UserprofileeditComponent implements OnInit {
  supId:any;
  supData:any;


  constructor(private router: Router, private userService: ApiuserService) { }

  updateUser = new FormGroup({
    email: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    address: new FormControl(''),
    password: new FormControl(''),
    phone: new FormControl(''),
  });



  ngOnInit(): void {
    this.supId = sessionStorage.getItem('CuserId');
    console.log(this.supId);
    this.getSupData(this.supId);
  }

  getSupData(id:any){
    this.userService.getUserByID(id).subscribe((res) => {
      // console.log(res)
      this.supData = res; 
    })
  }

  updateUserProf(data:any, id:number){
    console.log(data)
    this.userService.supUser(data, id).subscribe((res) => {
      console.log(res);
    })
    this.router.navigate(['/userprofile'])
  }


}
