import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// pages & components
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './ui-components/header/header.component';
import { AppViewComponent } from './components/app-view/app-view.component';
import { AccountProfileComponent } from './components/account-profile/account-profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProductsComponent } from './components/products/products.component';
import { ModalComponent } from './ui-components/popup/modal-popup/modal.component';

// jwt helpers
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { JwtModule } from '@auth0/angular-jwt';

import { DynamicFormModule } from './modules/dynamicform/dynamicform.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AppViewComponent,
    AccountProfileComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
    ProductsComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    DynamicFormModule,
    // JwtModule.forRoot({
    //   config: {tokenGetter: () => {
    //     return JSON.parse(localStorage.getItem('currentUser')).token;
    //   }}
    // })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }
