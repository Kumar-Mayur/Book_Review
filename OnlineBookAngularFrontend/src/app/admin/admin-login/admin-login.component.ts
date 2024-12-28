import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
 
  auname:string;
  apass:string;
  invalid:string = "";

  constructor(private router: Router) { }

  aLogin = new FormGroup({
    ausername: new FormControl(''),
    apassword: new FormControl(''),
  });

  loginAdmin(){
    const formValue = this.aLogin.value;
    this.auname = formValue.ausername;
    this.apass = formValue.apassword;
    this.authenticate(this.auname, this.apass);
  }

  //Admin Username is : admin
  //Admin Password is : admin123

  authenticate(username: string, password: string){
    if(username === "admin" && password === "admin123"){
      sessionStorage.setItem('adminusername', username);
      this.router.navigate(['/admindash']);
    }else{
      this.invalid = "Invalid Username or Password";
    }
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('adminusername');
    console.log(!(user === null));
    return !(user === null);
  }


  ngOnInit(): void {
  }

  logout(){
    sessionStorage.removeItem('adminusername');
  }

}
