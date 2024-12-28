import { Component, OnInit } from '@angular/core';
import { ApireviewService } from 'src/app/services/apireview.service';
import { Review } from 'src/app/Review';

@Component({
  selector: 'app-admin-ratinglist',
  templateUrl: './admin-ratinglist.component.html',
  styleUrls: ['./admin-ratinglist.component.css']
})
export class AdminRatinglistComponent implements OnInit {

  constructor(private service: ApireviewService) { }

  reviews: Review[];
  r_id = 1;
  ngOnInit(): void {

    this.service.apiReviewList().subscribe((reviewdata) => 
    this.reviews = reviewdata
    );

    console.log(this.reviews)
  }

}
