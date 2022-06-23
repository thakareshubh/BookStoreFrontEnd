

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponentComponent } from './Component/forget-password-component/forget-password-component.component';
import { LoginComponentComponent } from './Component/login-component/login-component.component';
import { ResetPasswordComponent } from './Component/reset-password/reset-password.component';

import { SingUpComponentComponent } from './Component/sing-up-component/sing-up-component.component';

const routes: Routes = [

  {path:'login',component:LoginComponentComponent},
  {path:'singUp',component:SingUpComponentComponent},
  {path:'forget',component:ForgetPasswordComponentComponent},
  {path:'resetPassword/:token',component:ResetPasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
