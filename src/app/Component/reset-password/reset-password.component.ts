import { Component, OnInit } from '@angular/core';
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
  constructor(private user:UserServiceService) {this.token=localStorage.getItem("token"); }

  ngOnInit(): void {
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
