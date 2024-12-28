import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiuserService {

  constructor(private http: HttpClient) { }

  addUser(data: any){
    return this.http.post(`http://localhost:8082/api/user/newregister`, data);
  }

  userLogin(data1:any){
     return this.http.post(`http://localhost:8082/api/user/login`, data1);
  }

  getUserByID(val:any){
    return this.http.get(`http://localhost:8082/api/user/get/${val}`);
  }

  supUser(val: any, id:number){
    return this.http.post(`http://localhost:8082/api/user/userupdate/${id}`, val);
  }

}
