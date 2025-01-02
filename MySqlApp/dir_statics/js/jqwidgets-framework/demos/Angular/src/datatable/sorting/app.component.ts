﻿import { Component } from '@angular/core';

import { generatedata } from './../../../sampledata/generatedata';

  @Component({     selector: 'app-root',     templateUrl: './app.component.html' })  export class AppComponent { 
    source: any =
        {
            localdata: generatedata(85, false),
            datatype: 'array',
            datafields:
            [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' },
                { name: 'total', type: 'number' }
            ],
            sortcolumn: 'firstname',
            sortdirection: 'asc'
        };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] =
      [
           { text: 'Name', dataField: 'firstname', width: 200 },
            { text: 'Last Name', dataField: 'lastname', width: 200 },
            { text: 'Product', editable: false, dataField: 'productname', width: 180 },
            { text: 'Quantity', dataField: 'quantity', width: 80, align: 'right', cellsalign: 'right' },
            { text: 'Unit Price', dataField: 'price', width: 90, align: 'right', cellsalign: 'right', cellsFormat: 'c2' },
            { text: 'Total', dataField: 'total', width: 100, align: 'right', cellsalign: 'right', cellsFormat: 'c2' }
      ]; 
	  
	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
}