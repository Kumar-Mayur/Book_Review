import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApibookService } from 'src/app/services/apibook.service';


export interface books{
  id:number
  author:string,
  category:string,
  name:string,
  price:number,
}

@Component({
  selector: 'app-admin-booklist',
  templateUrl: './admin-booklist.component.html',
  styleUrls: ['./admin-booklist.component.css']
})
export class AdminBooklistComponent implements OnInit {

  isDisable: boolean = false;
  disableBtn: string = "Disable";
  btncls: string = "btn-info";

  books:any;

  displayedColumns:string[]=['id','author','name','category','price','actions'];
  dataSource: MatTableDataSource<books>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort ;
  status: boolean=false;



  constructor(private router: Router, private bookService: ApibookService) { }

  ngOnInit(): void {

    this.getBooklist();

    

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getBooklist(){
    this.bookService.apiBookList().subscribe(res=>{
      this.books=res;
      console.log(this.books)
      this.dataSource = new MatTableDataSource(this.books);
    })
  }

  addbook(){
    this.router.navigate(['/adminaddbook']);
  }

  distoggle(i:any){
    this.isDisable = !this.isDisable;
    if(this.isDisable == false){
      this.disableBtn = "Disable";
      document.getElementById('disbutt_'+i)?.classList.remove("btn-success");
      document.getElementById('disbutt_'+i)?.classList.add("btn-info");
      document.getElementById('myrow_'+i)?.style.setProperty("text-decoration", "none");
      document.getElementById('edt_'+i)?.style.setProperty("display", "inline");
      document.getElementById('det_'+i)?.style.setProperty("display", "inline");
    }else{
      this.disableBtn = "Enable";
      document.getElementById('disbutt_'+i)?.classList.remove("btn-info");
      document.getElementById('disbutt_'+i)?.classList.add("btn-success");
      document.getElementById('myrow_'+i)?.style.setProperty("text-decoration", "line-through");
      document.getElementById('edt_'+i)?.style.setProperty("display", "none");
      document.getElementById('det_'+i)?.style.setProperty("display", "none");
      //this.btncls = "btn-success";
    }
  }

  applyFilter(event: Event) {
    this.status = true;
    const filterValue = (event.target as HTMLInputElement).value;
    if (filterValue.length == 0){
      this.status = false;
    }
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  deleteBook(valId: number){
    console.log(valId);
    if (confirm("Do you want to delete the data??")) {
      this.bookService.deleteBook(valId).subscribe((res) => {
        console.log(res);
      });
      
    } else {
      console.log("Deletion Aborted");
    }
    
  }


  

  editBook(id:number){
    this.router.navigate(['/adminbkedit/'+id]);
  }


}
