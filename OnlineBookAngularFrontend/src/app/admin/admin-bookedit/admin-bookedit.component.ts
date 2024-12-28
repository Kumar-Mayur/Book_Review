import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/Book';
import { ApibookService } from 'src/app/services/apibook.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-bookedit',
  templateUrl: './admin-bookedit.component.html',
  styleUrls: ['./admin-bookedit.component.css']
})
export class AdminBookeditComponent implements OnInit {
  data:any;
  id:number;
  book = new Book;
  bookName:string;
  bookPrice:number;
  bookAuthor:string;
  bookCategory:string;


  constructor(private router: Router, private bookService: ApibookService, private route: ActivatedRoute) {

   }


   
   updtBook = new FormGroup({
    author: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl(''),
    category: new FormControl(''),
  });

  

  ngOnInit(): void {

    this.id = this.route.snapshot.params.id;
    this.getBook();

  }

  updateBook(val: any){
    console.log(val);
    const formValue = this.updtBook.value;
    this.bookName = formValue.name;
    this.bookPrice = formValue.price;
    this.bookAuthor = formValue.author;
    this.bookCategory = formValue.category;

    this.bookService.updateBook(this.id, val).subscribe((res) => {
          // console.log(res);
        });
    this.router.navigate(['/adminbook']);
  }

  getBook(){
    this.bookService.getBookById(this.id).subscribe((res) => {
      this.data = res;
      this.book = this.data;
    });
  }


}
