import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookServicesService } from 'src/app/Services/book-services.service';

@Component({
  selector: 'app-dash-bord',
  templateUrl: './dash-bord.component.html',
  styleUrls: ['./dash-bord.component.scss']
})
export class DashBordComponent implements OnInit {
  wishArray:any
  constructor(private router: Router,private bookService: BookServicesService) { }

  ngOnInit(): void {
  }
  Logout()
  {
    localStorage.removeItem("token");
    this.router.navigateByUrl('/login');
  }
  
}
