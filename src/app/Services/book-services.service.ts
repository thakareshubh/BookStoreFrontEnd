import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServicesService } from './http-services.service';

@Injectable({
  providedIn: 'root'
})
export class BookServicesService {
  token:any;
  constructor(private httpService: HttpServicesService) {this.token = localStorage.getItem('token'); }

  //get all book
  getAllBooksService() {

    this.token = localStorage.getItem('token');
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':  'Bearer ' + this.token		
      })

    }
    
    return this.httpService.getService(`Book/GetAllBook`,true,header)
    
  }

  //get book by bookId
  getBookById(reqdata: any) {
    console.log(reqdata);
    this.token=localStorage.getItem("token")

    let header = {
      headers: new HttpHeaders({
        
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ this.token,

      }),
      
    };
    
    return this.httpService.getService( `Book/GetBook?BookId=${reqdata.BookId}`, true,header );
    
  }

  addFeadback(data: any) {
    console.log(data);
    this.token=localStorage.getItem("token")
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ this.token,
      }),
    };
    return this.httpService.postservices('FeadBack/AddFeedback', data,true, header);
  }



  getfeedBack(reqdata: any) {
    console.log(reqdata);
    this.token=localStorage.getItem("token")

    let header = {
      headers: new HttpHeaders({
        
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ this.token,
        
      }),
      
    };
    console.log(reqdata);
    return this.httpService.getService( `FeadBack/GetRecordsByBookId/${reqdata}`, true,header );
    
  }

  addToBag(data: any) {
    console.log(data);
    this.token=localStorage.getItem("token")
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ this.token,
      }),
    };
    return this.httpService.postservices('cart/AddCart', data,true, header);
  }

  updateToLess(cartId:any,data: any) {
    console.log(data,cartId);
    this.token=localStorage.getItem("token")
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ this.token,
      }),
    };
    return this.httpService.putservices(`cart/updateCart/${cartId}`, data,true, header);
  }

  getAllCart() {

    this.token = localStorage.getItem('token');
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':  'Bearer ' + this.token		
      })

    }
    
    return this.httpService.getService(`cart/GetAllCartBook`,true,header)
    
  }

  deletcart(reqdata: any) {
    console.log(reqdata);
    

    let header = {
      headers: new HttpHeaders({
        
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ this.token,

      }),
      
    };
    console.log("ganya",reqdata)
   
    return this.httpService.deleteService( `cart/DeleteBook/${reqdata.cartId}`,  true,header );
    
  }

  addwishlist(data: any) {
    console.log(data);
    this.token=localStorage.getItem("token")
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ this.token,
      }),
    };
    return this.httpService.postservices('WishList/AddWishList', data,true, header);
  }

  removewishlist(reqdata: any) {
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({

        'Content-Type': 'application/json',
        'Authorization' : 'Bearer '+ this.token,
      }),
      
    };
    console.log("ganya",reqdata)
    return this.httpService.deleteService( `WishList/RemoveWishList?wishListId=${reqdata.wishListId}`,  true,header );
  }
  getAllwishlist(){

    this.token = localStorage.getItem('token');
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':  'Bearer ' + this.token		
      })

    }
    
    return this.httpService.getService(`WishList/GetWishlistDetailsByUserid`,true,header)
    
  }
}
