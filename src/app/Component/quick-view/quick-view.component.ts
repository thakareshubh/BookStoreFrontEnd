import { Component, OnInit, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { BookServicesService } from 'src/app/Services/book-services.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  name = 'Angular ' + VERSION.major;
  value = 0;
  values=1;
  
  constructor(
    private bookService: BookServicesService,
    private router: Router,private sanv:MatSnackBar
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
      this.sanv.open('get book  Successfull', '', {
        duration: 3000,
      })
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
        this.sanv.open('add feedback  Successfull', '', {
          duration: 3000,
        })
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
      this.sanv.open('get feedBack  Successfull', '', {
        duration: 3000,
      })
     
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
         
        this.sanv.open('add to cart  Successfull', '', {
          duration: 3000,
        })
      },
      (error: any) => {
        console.log(error);
      }
    );
    localStorage.setItem('cartId',data.bookId);
  }
 

  addToWishList() {
    let data = {
      bookId: this.BookId,
     
    }
    this.bookService.addwishlist(data).subscribe(
      (response: any) => {
        console.log('Add to wishlist', response);
        this.sanv.open('add to wish list  Successfull', '', {
          duration: 3000,
        })
        
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  

  
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
