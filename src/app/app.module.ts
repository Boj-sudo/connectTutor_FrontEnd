import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule,  } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserService } from './user/user.service';
import { SharedModule } from './shared/shared/shared.module';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';
import { StudentLayoutModule } from './layouts/student-layout/student-layout.module';
import { TutorLayoutModule } from './layouts/tutor-layout/tutor-layout.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ResetPasswordComponent } from './user/reset-password/reset-password.component';
import { ModulesComponent } from './modules/modules.component';
import { FirstPageComponent } from './become-tutor/first-page/first-page.component';
import { SecondPageComponent } from './become-tutor/second-page/second-page.component';
import { ThirdPageComponent } from './become-tutor/third-page/third-page.component';
import { PaymentComponent } from './payment/payment.component';
import { BookingsComponent } from './bookings/bookings.component';
import { HomesComponent } from './homes/homes.component';
import { HeadersComponent } from './headers/headers.component';
import { GooglePayButtonModule } from '@google-pay/button-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
    ModulesComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    PaymentComponent,
    BookingsComponent,
    HomesComponent,
    HeadersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AdminLayoutModule,
    TutorLayoutModule,
    StudentLayoutModule,
    SharedModule,
    GooglePayButtonModule,
    ModalModule.forRoot()
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
