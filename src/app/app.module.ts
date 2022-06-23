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

import { LoginComponentComponent } from './Component/login-component/login-component.component';
import { SingUpComponentComponent } from './Component/sing-up-component/sing-up-component.component';
import { ForgetPasswordComponentComponent } from './Component/forget-password-component/forget-password-component.component';
import { ResetPasswordComponent } from './Component/reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    SingUpComponentComponent,
    ForgetPasswordComponentComponent,
    ResetPasswordComponent,
    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,FlexLayoutModule ,FormsModule, ReactiveFormsModule ,MatFormFieldModule,
    MatCardModule,HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
