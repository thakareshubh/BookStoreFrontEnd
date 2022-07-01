import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookServicesService } from 'src/app/Services/book-services.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {

  cartArray:any;
  booksArray:any;
  
  constructor(  private bookService: BookServicesService,
    private router: Router) { }

  ngOnInit(): void {
   
   this.getAllcart()
  }

 
  getAllcart() {
    
    this.bookService.getAllCart().subscribe((response: any) => {
      console.log(response);
      this.cartArray = response.response; 
      console.log(this.cartArray);
     
    });
  }

  removecart(cartId:any){
    let reqdata={
      cartId:cartId
    }
    this.bookService.deletcart(reqdata).subscribe((response: any) => {
      console.log(response);
     this.getAllcart()
     
    });
  }

 

  }

