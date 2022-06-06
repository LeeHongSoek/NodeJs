﻿import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxTabsModule } from 'jqwidgets-ng/jqxtabs';

@NgModule({
  declarations: [
	AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, jqxTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


