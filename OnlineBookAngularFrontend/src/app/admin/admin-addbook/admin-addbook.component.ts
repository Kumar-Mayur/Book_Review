import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/Book';
import { ApibookService } from 'src/app/services/apibook.service';

@Component({
  selector: 'app-admin-addbook',
  templateUrl: './admin-addbook.component.html',
  styleUrls: ['./admin-addbook.component.css']
})
export class AdminAddbookComponent implements OnInit {

  bookName:string;
  bookPrice:number;
  bookAuthor:string;
  bookCategory:string;

  constructor(private router: Router, private bookService: ApibookService) { }

  addBook = new FormGroup({
    author: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
  }

  insertBook(val: any){
    console.log(val);
    const formValue = this.addBook.value;
    this.bookName = formValue.name;
    this.bookPrice = formValue.price;
    this.bookAuthor = formValue.author;
    this.bookCategory = formValue.category;

    this.bookService.insertBook(val).subscribe((res) => {
      console.log(res);
    });
    this.router.navigate(['/adminbook']);
  }

}
