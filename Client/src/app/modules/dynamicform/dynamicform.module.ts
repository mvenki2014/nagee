import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from './../../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { DynamicFormComponent } from './dynamicform.component';

@NgModule({
  declarations: [
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
  ],
  bootstrap: [
    DynamicFormComponent
  ],
  entryComponents: [],
  exports: [
    DynamicFormComponent
  ]
})
export class DynamicFormModule { }
