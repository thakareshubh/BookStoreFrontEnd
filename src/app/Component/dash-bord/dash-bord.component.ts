import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-bord',
  templateUrl: './dash-bord.component.html',
  styleUrls: ['./dash-bord.component.scss']
})
export class DashBordComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  Logout()
  {
    localStorage.removeItem("token");
    this.router.navigateByUrl('/login');
  }
}
