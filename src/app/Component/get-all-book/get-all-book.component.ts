import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookServicesService } from 'src/app/Services/book-services.service';

@Component({
  selector: 'app-get-all-book',
  templateUrl: './get-all-book.component.html',
  styleUrls: ['./get-all-book.component.scss']
})
export class GetAllBookComponent implements OnInit {
  booksArray: any = [];
 
  Book:any;
  
  constructor(private router: Router,private bookService: BookServicesService) { }

  ngOnInit(): void {
    this.getAllBook();
  }

  getAllBook() {
    this.bookService.getAllBooksService().subscribe((response: any) => {
      console.log(response);
      this.booksArray = response.response;
      this.booksArray.reverse();
      console.log(this.booksArray);
    });
  }
  quickview(Book:any){  
    localStorage.setItem('bookId', Book.bookId); 
    this.router.navigateByUrl('dashbord/quickView')
  }
  lowtohigh(){
    this.booksArray= this.booksArray.sort((low:any,high:any)=> low.discountPrice-high.discountPrice);
    }

  hightolow(){
    this.booksArray= this.booksArray.sort((low:any,high:any)=> high.discountPrice-low.discountPrice);
  }

  newestarrivals(){
    this.booksArray.reverse();
  }
}
