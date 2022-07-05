import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookServicesService } from 'src/app/Services/book-services.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  orderArray:any;
  constructor(private bookService: BookServicesService,private sanv: MatSnackBar,) { }

  ngOnInit(): void {
    this.getAllorder();
  }
  getAllorder() {
    this.bookService.getAllorder().subscribe((response: any) => {
      console.log(response);
      this.orderArray = response.response;
      console.log(this.orderArray);
      this.sanv.open('get All order Successfull', '', {
        duration: 3000,
      });
    });
  }
}
