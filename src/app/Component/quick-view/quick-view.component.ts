import { Component, OnInit, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { BookServicesService } from 'src/app/Services/book-services.service';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss'],
})
export class QuickViewComponent implements OnInit {
  booksArray: any = [];
  BookId: any;
  booksArr: any = [];
  Book: any;
  comment: any;
  rating: any;
  orderQuantity = 1;
  show:any;
  bookQuantity:any;
  cartArray:any;
  name = 'Angular ' + VERSION.major;
  value = 0;
  values=1;
  
  constructor(
    private bookService: BookServicesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.BookId = localStorage.getItem('bookId');
    this.getAllBook();
    
  }

  getAllBook() {
    let reqdata = {
      BookId: this.BookId,
    };
    this.bookService.getBookById(reqdata).subscribe((response: any) => {
      console.log(response);
      this.booksArray = response.data;
      this.getFeedback();
      console.log(this.booksArray);
    });
  }

  addFeedback() {
    let data = {
      rating: this.rating,
      comment: this.comment,
      bookId: this.BookId,
    };
    this.bookService.addFeadback(data).subscribe(
      (response: any) => {
        console.log('User Feedback', response);
        this.getFeedback();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  getFeedback() {
    
    console.log("fead")

    this.bookService.getfeedBack(this.BookId).subscribe((response: any) => {
      console.log('User Feedback', response);
      this.booksArr = response.response;
      console.log(this.booksArr);
     
    });
  }

  //Add to bag
  addToBag() {
    let data = {
      bookId: this.BookId,
      bookQuantity:this.bookQuantity
    }
    this.bookService.addToBag(data).subscribe(
      (response: any) => {
        console.log('Add to cart', response);
        
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  // getAllcart() {
    
  //   this.bookService.getAllCart().subscribe((response: any) => {
  //     console.log(response);
  //     this.cartArray = response.response; 
  //     console.log(this.cartArray);
     
  //   });
  // }

  
  handleMinus() {
    this.value--;  
  }
  handlePlus() {
    this.value++;    
  }
  hideAndShow(){
    console.log("calling hide")
    this.show=!this.show
  }
 
}
