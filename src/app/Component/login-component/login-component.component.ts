import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserServiceService } from 'src/app/Services/UserServices/user-service.service';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {
  hide = true;
  loginForm!: FormGroup;
  token:any;
  email:any;
  password:any;
  constructor(private user: UserServiceService) {this.token=localStorage.getItem("token"); }

  ngOnInit(): void {
  }
  onSubmit() {
    
    let reqdata={
      Email:this.email,
      Password:this.password,
    }
    this.user.login(reqdata).subscribe((response:any)=>{
      console.log(response);
      localStorage.setItem("token",response.data);
    })
}

}
