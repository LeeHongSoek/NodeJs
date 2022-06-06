﻿import { Component, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit } from '@angular/core';

import { jqxSplitLayoutComponent } from 'jqwidgets-ng/jqxsplitlayout';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	encapsulation: ViewEncapsulation.None,
	styles: [`
		.jqx-split-layout-component {
			width: 100%;
			height: 100%;
		}

		#map,
		textarea,
		.jqx-tree {
			border: 0;
			width: 100%;
			height: 100%;
			outline: none;
		}
	`]
})

export class AppComponent implements AfterViewInit  {
    @ViewChild('myLayout', { static: false }) myLayout: jqxSplitLayoutComponent;
	
	 dataSource = [
			{
				type: 'tabs',
				size: '80%',
				items: [
					{
						label: 'My Milan Notes',
						content: `<textarea class="input">The massive Cathedral of Santa Maria Nascente, which the Milanese call just "Il Duomo" is among the world's largest (it holds up to 40,000 people) and most magnificent churches, the ultimate example of the Flamboyant Gothic style. It was begun in the 14th century, but its façade was not completed until the early 1800s, under Napoleon. The roof is topped by 135 delicately carved stone pinnacles and the exterior is decorated with 2,245 marble statues. The dim interior, in striking contrast to the brilliant and richly patterned exterior, makes a powerful impression with its 52 gigantic pillars. The stained-glass windows in the nave (mostly 15th-16th centuries) are the largest in the world; the earliest of them are in the south aisle. Highlights include the seven-branched bronze candelabrum by Nicholas of Verdun (c. 1200) in the north transept, the 16th-century tomb of Gian Giacomo Medici, and the jeweled gold reliquary of San Carlo Borromeo in the octagonal Borromeo Chapel leading off the crypt. Behind the high altar, the choir has deeply carved panels, and misericords under the seats.
In the south sacristy is the treasury with gold and silver work dating from the fourth to the 17th century. A walk on the roof of the cathedral is an impressive experience, offering views across the city and extending on clear days to the snow-covered Alps. (An elevator ascends all but the last 73 steps to the platform of the dome). At the front of the Duomo, near the central doorway, you can descend under Piazza del Duomo into the foundations of the Basilica di Santa Tecla (fourth-fifth and seventh century) and the fourth-century baptistery, Battistero di San Giovanni alle Fonti, which were discovered during the construction of the Milan Metro system.
</textarea>`
					},
					{
						label: "Milan City Map",
						content: `<div id="map"></div>`
					}
				]
			},
			{
				type: 'tabs',
				position: "right",
				items: [
					{
						label: "Explorer",
						content: `<div id="tree"></div>`
					},
					{
						label: "About Milan",
						content: `	<p>
			Milan, a metropolis in Italy's northern Lombardy region, is a global capital of fashion and design.
			Home to the national stock exchange, it’s a financial hub also known for its high-end restaurants
			and shops. The Gothic Duomo di Milano cathedral and the Santa Maria delle Grazie convent, housing
			Leonardo da Vinci’s mural “The Last Supper,” testify to centuries of art and culture.
		</p>`
					}
				]
			}
		]
		
	   treeSource = [
			{
				icon: "https://www.jqwidgets.com/angular/images/mailIcon.png", label: "Mail", expanded: true, items: [
					{ icon: "https://www.jqwidgets.com/angular/images/calendarIcon.png", label: "Calendar" },
					{ icon: "https://www.jqwidgets.com/angular/images/contactsIcon.png", label: "Contacts", selected: true }
				]
			},
			{
				icon: "https://www.jqwidgets.com/angular/images/folder.png", label: "Inbox", expanded: true, items: [
					{ icon: "https://www.jqwidgets.com/angular/images/folder.png", label: "Admin" },
					{ icon: "https://www.jqwidgets.com/angular/images/folder.png", label: "Corporate" },
					{ icon: "https://www.jqwidgets.com/angular/images/folder.png", label: "Finance" },
					{ icon: "https://www.jqwidgets.com/angular/images/folder.png", label: "Other" }
				]
			},
			{ icon: "https://www.jqwidgets.com/angular/images/recycle.png", label: "Deleted Items" },
			{ icon: "https://www.jqwidgets.com/angular/images/notesIcon.png", label: "Notes" },
			{ iconsize: 14, icon: "https://www.jqwidgets.com/angular/images/settings.png", label: "Settings" },
			{ icon: "https://www.jqwidgets.com/angular/images/favorites.png", label: "Favorites" }
		];
		
	 setup(): void {
		const that = this;
				
		jqwidgets.createInstance(`#tree`, 'jqxTree', {
			source: that.treeSource
		});
		
		window["initializeMaps"] = function () {
			new window["google"].maps.Map(document.getElementById('map'), {
				center: new window["google"].maps.LatLng(45.4642, 9.1900),
				zoom: 8,
				mapTypeId: window["google"].maps.MapTypeId.ROADMAP
			});
		}
		
		const script = document.createElement('script');

		script.type = 'text/javascript';
		script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDLNo8WFhrz_4zuLdl423WX9h5Kh0SedHQ&callback=initializeMaps';
		document.body.appendChild(script);
	 }
	 
	 ngAfterViewInit(): void {
		const that = this;
		
		if (document.readyState === "complete") {
			that.setup();
		}
		else {
			window.onload = function() {
				that.setup();
			}
		}
     }
}
