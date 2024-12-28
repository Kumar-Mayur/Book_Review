import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from 'src/app/Review';
import { ApibookService } from 'src/app/services/apibook.service';
import { ApireviewService } from 'src/app/services/apireview.service';
@Component({
  selector: 'app-user-bookrating',
  templateUrl: './user-bookrating.component.html',
  styleUrls: ['./user-bookrating.component.css']
})
export class UserBookratingComponent implements OnInit {

  id:number;
  book: any;
  bookName: any;
  ratingB: any;
  reviewB: any;
  userName: any;

  sidReview = new Review();

  constructor(private router: Router, private bookService: ApibookService, private route: ActivatedRoute, private reviewService: ApireviewService) { }

  rateBook = new FormGroup({
    review: new FormControl('', [Validators.required]),
    rating: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getABookDetails();
  }

  getABookDetails(){
    this.bookService.getBookById(this.id).subscribe(res => this.book = res);
    console.log(this.book);
  }

  rateTheBook(val:any, bname: string){
    console.log(val)
    const formValue = this.rateBook.value;
    this.reviewB = formValue.review;
    this.ratingB = formValue.rating;
    this.userName = sessionStorage.getItem('CuserName')
    
    console.log(this.reviewB, this.ratingB, this.userName, this.id, bname);
    this.sidReview.bookname = bname;
    this.sidReview.name = this.userName;
    this.sidReview.rating = this.ratingB;
    this.sidReview.review = this.reviewB;

    console.log(this.sidReview);

    this.reviewService.addReview(this.sidReview).subscribe((res)=>{
      console.log(res);
    })

    this.router.navigate(['/userbklst'])
  }

  

}
