import { Component, OnInit } from '@angular/core';
import { BookServicesService } from 'src/app/Services/book-services.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {

  constructor(  private bookService: BookServicesService) { }

  ngOnInit(): void {
  }

  removewishlist(wishlistId:any){
    let reqdata={
      wishListId:wishlistId
    }
    this.bookService.removewishlist(reqdata).subscribe((response: any) => {
      console.log(response);
     
     
    });
  }
}
