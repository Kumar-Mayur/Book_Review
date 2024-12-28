import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../Review';


@Injectable({
  providedIn: 'root'
})
export class ApireviewService {

  reviewlistUrl:string = "http://localhost:8082/api/review/list";

  constructor(private http: HttpClient) { }

  apiReviewList():Observable<Review[]>{
    return this.http.get<Review[]>(this.reviewlistUrl);
  }

  addReview(data:any){
    return this.http.post(`http://localhost:8082/api/review/add`, data);
  }

}
