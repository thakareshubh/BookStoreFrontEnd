import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select'
import {MatMenuModule} from '@angular/material/menu'
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginComponentComponent } from './Component/login-component/login-component.component';
import { SingUpComponentComponent } from './Component/sing-up-component/sing-up-component.component';
import { ForgetPasswordComponentComponent } from './Component/forget-password-component/forget-password-component.component';
import { ResetPasswordComponent } from './Component/reset-password/reset-password.component';
import { DashBordComponent } from './Component/dash-bord/dash-bord.component';
import { GetAllBookComponent } from './Component/get-all-book/get-all-book.component';
import { QuickViewComponent } from './Component/quick-view/quick-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyCartComponent } from './Component/my-cart/my-cart.component';
import { OrderListComponent } from './Component/order-list/order-list.component';
import { WishListComponent } from './Component/wish-list/wish-list.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatExpansionModule} from '@angular/material/expansion';
import { OrderSucceedComponent } from './Component/order-succeed/order-succeed.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    SingUpComponentComponent,
    ForgetPasswordComponentComponent,
    ResetPasswordComponent,
    DashBordComponent,
    GetAllBookComponent,
    QuickViewComponent,
    MyCartComponent,
    OrderListComponent,
    WishListComponent,
    OrderSucceedComponent,
  

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatIconModule,MatSelectModule,MatMenuModule,
    BrowserAnimationsModule,FlexLayoutModule ,FormsModule, ReactiveFormsModule ,MatFormFieldModule,
    MatCardModule,HttpClientModule,MatToolbarModule,MatRadioModule,MatInputModule, NgbModule,MatSnackBarModule,
    MatPaginatorModule,MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
