﻿import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxFormattedInputModule } from 'jqwidgets-ng/jqxformattedinput';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, FormsModule, jqxFormattedInputModule, jqxButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }