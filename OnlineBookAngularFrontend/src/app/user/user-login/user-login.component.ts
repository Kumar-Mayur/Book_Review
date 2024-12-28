import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ApiuserService } from 'src/app/services/apiuser.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/User';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  invalid:string = "";
  uemail:any;
  upassword:string;
  userData:any;
  password:any;

  loginUser = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),

  });


  constructor(private router: Router, private userService: ApiuserService) { }

  ngOnInit(): void {
  }

  loginUserfun(val:any){
    console.log(val);
    const formValue = this.loginUser.value;
    this.uemail = formValue.email;
    this.upassword = formValue.password;
    let getid:any;
    let getfname:any;
    let getLname:any;
    let getEmail:any;
    let getPass:any;
    this.userService.userLogin(val).subscribe((res) => {
     this.userData = res;
    });
    setTimeout(() => {
    if(this.userData != null ){
    getid = this.userData.id;
    getfname = this.userData.firstname;
    getLname = this.userData.lastname;
    getEmail = this.userData.email;
    getPass = this.userData.password;
    if(getPass == this.upassword){
      this.router.navigate(['/userdash']);
      sessionStorage.setItem("CuserId", getid);
      sessionStorage.setItem("CuserName", getfname+" "+getLname);
    }
  }else{
    this.invalid = "Invalid Username or Password";
  }
  }, 2000);
  }

  onclk(){
    this.router.navigate(['/userreg']);
  }

}
