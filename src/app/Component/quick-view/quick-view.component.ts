import { Component, OnInit,  } from '@angular/core';
import { Router } from '@angular/router';
import { BookServicesService } from 'src/app/Services/book-services.service';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss']
})
export class QuickViewComponent implements OnInit {
  booksArray:any=[];
  BookId:any;
  Book:any;
  constructor(private bookService: BookServicesService,private router: Router,) { }

  ngOnInit(): void {
    this.BookId = localStorage.getItem('bookId',)
    this.getAllBook();
  }

  getAllBook() {

    let reqdata={
      BookId:this.BookId
    }
    this.bookService.getBookById(reqdata).subscribe((response: any) => {
      console.log(response);
      this.booksArray = response.data;
     
      console.log(this.booksArray);
    });
  }
}
