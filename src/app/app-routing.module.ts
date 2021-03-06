import { OrderSucceedComponent } from './Component/order-succeed/order-succeed.component';
import { WishListComponent } from './Component/wish-list/wish-list.component';
import { OrderListComponent } from './Component/order-list/order-list.component';
import { MyCartComponent } from './Component/my-cart/my-cart.component';
import { GetAllBookComponent } from './Component/get-all-book/get-all-book.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBordComponent } from './Component/dash-bord/dash-bord.component';
import { ForgetPasswordComponentComponent } from './Component/forget-password-component/forget-password-component.component';

import { LoginComponentComponent } from './Component/login-component/login-component.component';
import { ResetPasswordComponent } from './Component/reset-password/reset-password.component';

import { SingUpComponentComponent } from './Component/sing-up-component/sing-up-component.component';
import { QuickViewComponent } from './Component/quick-view/quick-view.component';



const routes: Routes = [

  {path:'login',component:LoginComponentComponent},
  {path:'singUp',component:SingUpComponentComponent},
  {path:'forget',component:ForgetPasswordComponentComponent},
  {path:'resetPassword/:token',component:ResetPasswordComponent},
  {path:'dashbord',component:DashBordComponent,
    children:
            [{path:'getAllBook',component:GetAllBookComponent},
            {path:'cart',component:MyCartComponent,},
            {path:'quickView',component:QuickViewComponent},
            {path:'order',component:OrderListComponent,},
            {path:'wishlist',component:WishListComponent},
            {path:'orderSucceed',component:OrderSucceedComponent}
           
              ]

          
          },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
