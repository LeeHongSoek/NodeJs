﻿/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createPopover(selector, header, button, table, theme) {
    // prepare the data
    let data = new Array();
    let firstNames = ["Nancy", "Andrew", "Janet", "Margaret", "Steven", "Michael", "Robert", "Laura", "Anne"];
    let lastNames = ["Davolio", "Fuller", "Leverling", "Peacock", "Buchanan", "Suyama", "King", "Callahan", "Dodsworth"];
    let titles = ["Sales Representative", "Vice President, Sales", "Sales Representative", "Sales Representative", "Sales Manager", "Sales Representative", "Sales Representative", "Inside Sales Coordinator", "Sales Representative"];
    let titleofcourtesy = ["Ms.", "Dr.", "Ms.", "Mrs.", "Mr.", "Mr.", "Mr.", "Ms.", "Ms."];
    let birthdate = ["08-Dec-48", "19-Feb-52", "30-Aug-63", "19-Sep-37", "04-Mar-55", "02-Jul-63", "29-May-60", "09-Jan-58", "27-Jan-66"];
    let hiredate = ["01-May-92", "14-Aug-92", "01-Apr-92", "03-May-93", "17-Oct-93", "17-Oct-93", "02-Jan-94", "05-Mar-94", "15-Nov-94"];
    let address = ["507 - 20th Ave. E. Apt. 2A", "908 W. Capital Way", "722 Moss Bay Blvd.", "4110 Old Redmond Rd.", "14 Garrett Hill", "Coventry House", "Miner Rd.", "Edgeham Hollow", "Winchester Way", "4726 - 11th Ave. N.E.", "7 Houndstooth Rd."];
    let city = ["Seattle", "Tacoma", "Kirkland", "Redmond", "London", "London", "London", "Seattle", "London"];
    let postalcode = ["98122", "98401", "98033", "98052", "SW1 8JR", "EC2 7JR", "RG1 9SP", "98105", "WG2 7LT"];
    let country = ["USA", "USA", "USA", "USA", "UK", "UK", "UK", "USA", "UK"];
    let homephone = ["(206) 555-9857", "(206) 555-9482", "(206) 555-3412", "(206) 555-8122", "(71) 555-4848", "(71) 555-7773", "(71) 555-5598", "(206) 555-1189", "(71) 555-4444"];
    let notes = ["Education includes a BA in psychology from Colorado State University in 1970.  She also completed 'The Art of the Cold Call.'  Nancy is a member of Toastmasters International.",
        "Andrew received his BTS commercial in 1974 and a Ph.D. in international marketing from the University of Dallas in 1981.  He is fluent in French and Italian and reads German.  He joined the company as a sales representative, was promoted to sales manager in January 1992 and to vice president of sales in March 1993.  Andrew is a member of the Sales Management Roundtable, the Seattle Chamber of Commerce, and the Pacific Rim Importers Association.",
        "Janet has a BS degree in chemistry from Boston College (1984).  She has also completed a certificate program in food retailing management.  Janet was hired as a sales associate in 1991 and promoted to sales representative in February 1992.",
        "Margaret holds a BA in English literature from Concordia College (1958) and an MA from the American Institute of Culinary Arts (1966).  She was assigned to the London office temporarily from July through November 1992.",
        "Steven Buchanan graduated from St. Andrews University, Scotland, with a BSC degree in 1976.  Upon joining the company as a sales representative in 1992, he spent 6 months in an orientation program at the Seattle office and then returned to his permanent post in London.  He was promoted to sales manager in March 1993.  Mr. Buchanan has completed the courses 'Successful Telemarketing' and 'International Sales Management.'  He is fluent in French.",
        "Michael is a graduate of Sussex University (MA, economics, 1983) and the University of California at Los Angeles (MBA, marketing, 1986).  He has also taken the courses 'Multi-Cultural Selling' and 'Time Management for the Sales Professional.'  He is fluent in Japanese and can read and write French, Portuguese, and Spanish.",
        "Robert King served in the Peace Corps and traveled extensively before completing his degree in English at the University of Michigan in 1992, the year he joined the company.  After completing a course entitled 'Selling in Europe,' he was transferred to the London office in March 1993.",
        "Laura received a BA in psychology from the University of Washington.  She has also completed a course in business French.  She reads and writes French.",
        "Anne has a BA degree in English from St. Lawrence College.  She is fluent in French and German."];
    //let movies = $("#movies");
    let employeesTable = document.getElementById(table);

    for (let i = 0; i < firstNames.length; i++) {
        let row = {};
        row["firstname"] = firstNames[i];
        row["lastname"] = lastNames[i];
        row["title"] = titles[i];
        row["titleofcourtesy"] = titleofcourtesy[i];
        row["birthdate"] = birthdate[i];
        row["hiredate"] = hiredate[i];
        row["address"] = address[i];
        row["city"] = city[i];
        row["postalcode"] = postalcode[i];
        row["country"] = country[i];
        row["homephone"] = homephone[i];
        row["notes"] = notes[i];
        let imgurl = '../../../images/' + firstNames[i].toLowerCase() + '.png';
        let img = '<img height="50" width="45" src="' + imgurl + '"/>';
        let table: any = '<table style="min-width: 150px;"><tr><td style="width: 55px;" rowspan="2">' + img + '</td><td>' + firstNames[i] + " " + lastNames[i] + '</td></tr><tr><td>' + titles[i] + '</td></tr></table>';
        employeesTable.innerHTML += table;
    }

    // initialization options - validated in typescript
    // jqwidgets.PopoverOptions has generated TS definition
    let options: jqwidgets.PopoverOptions = {
        offset: { left: -50, top: 0 },
        arrowOffsetValue: 50,
        title: "Employees",
        showCloseButton: true,
        selector: button
    };

    // creates an instance
    let myPopover: jqwidgets.jqxPopover = jqwidgets.createInstance(selector, 'jqxPopover', options);
    let headerElement = document.getElementById(header);
    headerElement.className = 'jqx-widget-header';
    if (theme) {
        headerElement.className = 'jqx-widget-header-' + theme;
    }
}