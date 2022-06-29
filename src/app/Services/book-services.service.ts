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

}
