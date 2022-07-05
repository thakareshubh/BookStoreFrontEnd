import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BookServicesService } from 'src/app/Services/book-services.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss'],
})
export class MyCartComponent implements OnInit {
  cartArray: any;
  booksArray: any;
  addresstArray:any;
  AddressId:any;
  show=false;
  addshow=false;
  

  constructor(
    private bookService: BookServicesService,
    private sanv: MatSnackBar,
    private router: Router,

  ) {}
    
  ngOnInit(): void {
    this.getAllcart();
    this.getAllAddres();
  }
  hideAndShow(){
    console.log("calling hide")
    this.show=!this.show
  }
  addshowhide(){
    console.log("calling hide")
    this.addshow=!this.addshow
  }
  getAllcart() {
    this.bookService.getAllCart().subscribe((response: any) => {
      console.log(response);
      this.cartArray = response.response;
      console.log(this.cartArray);
      this.sanv.open('get All cart book  Successfull', '', {
        duration: 3000,
      });
    });
  }

  removecart(cartId: any) {
    let reqdata = {
      cartId: cartId,
    };
    this.bookService.deletcart(reqdata).subscribe((response: any) => {
      console.log(response);
      this.getAllcart();
      this.sanv.open('remove  book  Successfull', '', {
        duration: 3000,
      });
    });
  }

  updateToLess(cartId: any, bookQuantity: any, bookId: any) {
    let data = {
      bookQuantity: bookQuantity - 1,
      bookId: bookId,
    };
    if (bookQuantity != 1 && bookQuantity != 0) {
      this.bookService.updateToLess(cartId, data).subscribe((response: any) => {
        console.log(response);
        this.getAllcart();
        this.sanv.open('update cart book  Successfull', '', {
          duration: 3000,
        });
      });
    }
  }

  updateToAdd(cartId: any, bookQuantity: any, bookId: any) {
    let data = {
      bookQuantity: bookQuantity + 1,
      bookId: bookId,
    };
    console.log('add');
    if (bookQuantity >= 0) {
      this.bookService.updateToLess(cartId, data).subscribe((response: any) => {
        console.log(response);
        this.getAllcart();
        this.sanv.open('update cart book  Successfull', '', {
          duration: 3000,
        });
      });
    }
  }

  addToOrder(BookId:any) {
    let data = {
      bookId: BookId,
     
    }
    this.bookService.addToOrder(data).subscribe(
      (response: any) => {
        console.log('Add to wishlist', response);
        this.sanv.open('your order is Successfull', '', {
          duration: 3000,
        })
        
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  getAllAddres() {
    this.bookService.getAddress().subscribe((response: any) => {
      console.log(response);
      this.addresstArray = response.response;
      this.AddressId = this.addresstArray[0].addressId;
      console.log(this.addresstArray);
      this.sanv.open('get Address Successfull', '', {
        duration: 3000,
      });
    });
  }
}
