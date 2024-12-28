import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiuserService } from 'src/app/services/apiuser.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  firstname:string;
  lastname:string;
  email:string;
  phone:number;
  password:string;
  address:string;

  constructor(private router: Router, private userService: ApiuserService) { }

  addUser = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
  }

  insertUser(val:any){
    console.log(val);

    const formValue = this.addUser.value;
    this.firstname = formValue.firstname;
    this.lastname = formValue.lastname;
    this.email = formValue.email;
    this.phone = formValue.category;
    this.password = formValue.phone;
    this.address = formValue.address;

    this.userService.addUser(val).subscribe((res) => {
      console.log(res);
    });
    alert("Successfully Registred With Us.");
    this.router.navigate(['/userlogin']);

  }

}
