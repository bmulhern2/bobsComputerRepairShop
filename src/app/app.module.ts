/* 
Title: Assignment 9.2 + Assignment 9.3
Author: Professor Krasso
Date: September 4 2020
Modified By: Brendan Mulhern
Description: This is Bob's Computer Repair Store!
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
