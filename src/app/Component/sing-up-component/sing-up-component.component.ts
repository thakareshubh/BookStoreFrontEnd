import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/Services/UserServices/user-service.service';

@Component({
  selector: 'app-sing-up-component',
  templateUrl: './sing-up-component.component.html',
  styleUrls: ['./sing-up-component.component.scss'],
})
export class SingUpComponentComponent implements OnInit {
  // registerForm!: FormGroup;
  // submitted = false;
  fullName: any;
  password: any;
  email: any;
  mobile: any;

  constructor(
    private formBuilder: FormBuilder,
    private user: UserServiceService
  ) {}

  ngOnInit(): void {
    // this.registerForm = this.formBuilder.group({
    //   fullName: ['', Validators.required],
    //   mobileNumber: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', [Validators.required, Validators.minLength(6)]],
    // });
  }

  onSubmit() {
    let reqdata = {
      fullName: this.fullName,
      email: this.email,
      password: this.password,
      mobileNumber: this.mobile,
    };
    this.user.register(reqdata).subscribe((response: any) => {
      console.log(response);
    });
  }
}
