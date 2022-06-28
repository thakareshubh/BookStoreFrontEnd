import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/app/Services/UserServices/user-service.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  password:any;
  confirmPassword:any;
  token:any
  constructor(private user:UserServiceService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.token = this.activatedRoute.snapshot.paramMap.get('token')
  }

  onsubmit(){
    let reqdata = {
      newPassword: this.password,
      confirmPassword: this.confirmPassword,
    };
    this.user.resetPassword(reqdata, this.token).subscribe(
      (response: any) => {
        console.log(response);
        
      },
      (error) => {
        console.log(error);
      });
  }
}
