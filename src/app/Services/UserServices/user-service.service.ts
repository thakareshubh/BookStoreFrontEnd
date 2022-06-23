import { HttpServicesService } from './../http-services.service';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {

  token:any;
  constructor(private httpService: HttpServicesService) { this.token = localStorage.getItem('token');}

  register(reqdata: any) {
    console.log(reqdata);

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.httpService.postservices('UserRegistration/Register', reqdata,false, header);
  }

  //login section
  login(reqdata: any) {
    console.log(reqdata);

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
      }),
    };
    return this.httpService.postservices(
      `UserRegistration/login?email=${reqdata.Email}&password=${reqdata.Password}`,
      reqdata,
      false,
      header
    );
  }

   //forget password api  section
   forgetPassword(reqdata: any) {
    console.log(reqdata);

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };console.log("eamil");
    return this.httpService.postservices(
      `UserRegistration/ForgotPassword?Email=${reqdata.Email}`,
      reqdata,
      false,
      header
    );
  }
  //reset password
  resetPassword(reqdata: any, token: any) {
    console.log(reqdata);
    let headerOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        Authorization: 'Bearer ' + token,
      }),
    };
    return this.httpService.putservices(
      `UserRegistration/ResetPassword`,
      reqdata,
      true,
      headerOption
    );
  }
}
