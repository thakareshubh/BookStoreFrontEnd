import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserServiceService } from 'src/app/Services/UserServices/user-service.service';

@Component({
  selector: 'app-forget-password-component',
  templateUrl: './forget-password-component.component.html',
  styleUrls: ['./forget-password-component.component.scss']
})
export class ForgetPasswordComponentComponent implements OnInit {

  Email:any;
  
  constructor(private user:UserServiceService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    
    let reqdata={
      Email:this.Email,
    
    }
    console.log(reqdata.Email)
    this.user.forgetPassword(reqdata).subscribe((response:any)=>{
      console.log(response);
    })
      
  }


}
