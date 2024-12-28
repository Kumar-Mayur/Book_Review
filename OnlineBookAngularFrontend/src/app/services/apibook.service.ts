import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../Book';


@Injectable({
  providedIn: 'root'
})
export class ApibookService {

  bookListUrl:string = "http://localhost:8082/api/product/";

  constructor(private http: HttpClient) { }

  apiBookList():Observable<Book[]>{
    return this.http.get<Book[]>(this.bookListUrl);
  }

  deleteBook(id: number){
    return this.http.delete(`http://localhost:8082/api/product/${id}`);
  }

  insertBook(data: any){
    return this.http.post('http://localhost:8082/api/product/add', data);
  }

  getBookById(id: any){
    return this.http.get(`http://localhost:8082/api/product/edit/${id}`);
  }

  updateBook(id: any, data: any){
    return this.http.put(`http://localhost:8082/api/product/update/${id}`, data);
  }

  
  


}
