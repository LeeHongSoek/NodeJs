﻿import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxListBoxModule } from 'jqwidgets-ng/jqxlistbox';
import { jqxDragDropModule } from 'jqwidgets-ng/jqxdragdrop';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, CommonModule, jqxListBoxModule, jqxDragDropModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
