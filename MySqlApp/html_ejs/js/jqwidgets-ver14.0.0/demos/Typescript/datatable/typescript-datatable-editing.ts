/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createDataTableEditing(selector)
{   
    let orderdetailsurl = "../../sampledata/orderdetails.xml";
    let ordersSource =
        {
            dataFields: [
                { name: 'OrderID', type: 'int' },
                { name: 'Freight', type: 'float' },
                { name: 'ShipName', type: 'string' },
                { name: 'ShipAddress', type: 'string' },
                { name: 'ShipCity', type: 'string' },
                { name: 'ShipCountry', type: 'string' },
                { name: 'ShippedDate', type: 'date' }
            ],
            root: "Orders",
            record: "Order",
            dataType: "xml",
            id: 'OrderID',
            url: orderdetailsurl,
            addRow: function (rowID, rowData, position:string, commit)
            {
                // synchronize with the server - send insert command
                // call commit with parameter true if the synchronization with the server is successful 
                // and with parameter false if the synchronization failed.
                // you can pass additional argument to the commit callback which represents the new ID if it is generated from a DB.
                commit(true);
            },
            updateRow: function (rowID, rowData, commit)
            {
                // synchronize with the server - send update command
                // call commit with parameter true if the synchronization with the server is successful 
                // and with parameter false if the synchronization failed.
                commit(true);
            },
            deleteRow: function (rowID, commit)
            {
                // synchronize with the server - send delete command
                // call commit with parameter true if the synchronization with the server is successful 
                // and with parameter false if the synchronization failed.
                commit(true);
            }
        };
    let dataAdapter = new $.jqx.dataAdapter(ordersSource, {
        loadComplete: function ()
        {
            // data is loaded.
        }
    });

    let theme = $.jqx.theme;
    let flag = false;
    // initialization options - validated in typescript
    // jqwidgets.DataTableOptions has generated TS definition
    let options: jqwidgets.DataTableOptions =
    {
            width: 850,
            source: dataAdapter,
            pageable: true,
            editable: true,
            showToolbar: true,
            altRows: true,
            ready: function ()
            {
                // called when the DataTable is loaded.         
            },
            pagerButtonsCount: 8,
            toolbarHeight: 35,
            renderToolbar: function (toolBar)
            { 
                if (flag === false)
                {
                    flag = true;
                } else
                {
                    return;
                }

                let toTheme = function (className)
                {              
                    if (theme == "") return className;
                    return className + " " + className + "-" + theme;
                }

                // appends buttons to the status bar.
                let container = document.createElement("div");
                let fragment = document.createDocumentFragment();
                container.style.overflow = 'hidden';
                container.style.position = 'relative';
                container.style.height = '100%';
                container.style.width = '100%';
                
                function createButtons(name, cssClass:string)
                {
                    this[name] = document.createElement('div');
                    this[name].style.cssFloat = 'left';
                    this[name].style.padding = '3px';
                    this[name].style.margin = '2px';
                    let iconDiv = document.createElement('div');
                    iconDiv.style.margin = '4px';
                    iconDiv.style.width = '16px';
                    iconDiv.style.height = '16px';
                    iconDiv.className = cssClass;

                    this[name].appendChild(iconDiv);
                    return this[name];
                }
                let buttons = [
                    createButtons('addButton', toTheme('jqx-icon-plus')),
                    createButtons('editButton', toTheme('jqx-icon-edit')),
                    createButtons('deleteButton', toTheme('jqx-icon-delete')),
                    createButtons('cancelButton', toTheme('jqx-icon-cancel')),
                    createButtons('updateButton', toTheme('jqx-icon-save'))
                ];
                for (let i = 0; i < buttons.length; i++)
                {
                    fragment.appendChild(buttons[i]);
                }
                container.appendChild(fragment)
                document.getElementById('toolbartable').appendChild(container);


                let addButtonOptions: jqwidgets.ButtonOptions =
                {
                    height: 25, width: 25
                }
                let otherButtonsOptions: jqwidgets.ButtonOptions =
                {
                    disabled: true, height: 25, width: 25
                    }
                let myAddButton: jqwidgets.jqxButton = jqwidgets.createInstance(buttons[0], 'jqxButton', addButtonOptions);
                let myEditButton: jqwidgets.jqxButton = jqwidgets.createInstance(buttons[1], 'jqxButton', otherButtonsOptions);
                let myDeleteButton: jqwidgets.jqxButton = jqwidgets.createInstance(buttons[2], 'jqxButton', otherButtonsOptions);
                let myCancelButton: jqwidgets.jqxButton = jqwidgets.createInstance(buttons[3], 'jqxButton', otherButtonsOptions);
                let myUpdateButton: jqwidgets.jqxButton = jqwidgets.createInstance(buttons[4], 'jqxButton', otherButtonsOptions);

                let addTooltopOptions: jqwidgets.TooltipOptions =
                {
                    position: 'bottom', content: "Add"
                }
                let editTooltopOptions: jqwidgets.TooltipOptions =
                {
                    position: 'bottom', content: "Edit"
                }
                let deleteTooltopOptions: jqwidgets.TooltipOptions =
                {
                    position: 'bottom', content: "Delete"
                }
                let updateTooltopOptions: jqwidgets.TooltipOptions =
                {
                    position: 'bottom', content: "Save Changes"
                }
                let cancelTooltopOptions: jqwidgets.TooltipOptions =
                {
                    position: 'bottom', content: "Cancel"
                }

                let myAddToolTip: jqwidgets.jqxTooltip = jqwidgets.createInstance(buttons[0], 'jqxTooltip', addTooltopOptions);         
                let myEditToolTip: jqwidgets.jqxTooltip = jqwidgets.createInstance(buttons[1], 'jqxTooltip', editTooltopOptions);
                let myDeleteToolTip: jqwidgets.jqxTooltip = jqwidgets.createInstance(buttons[2], 'jqxTooltip', deleteTooltopOptions);              
                let myCancelToolTip: jqwidgets.jqxTooltip = jqwidgets.createInstance(buttons[3], 'jqxTooltip', cancelTooltopOptions);
                let myUpdateToolTip: jqwidgets.jqxTooltip = jqwidgets.createInstance(buttons[4], 'jqxTooltip', updateTooltopOptions);


                let updateButtons = function (action)
                {
                    switch (action)
                    {
                        case "Select":
                            myAddButton.setOptions({ disabled: false });
                            myDeleteButton.setOptions({ disabled: false });
                            myEditButton.setOptions({ disabled: false });
                            myCancelButton.setOptions({ disabled: true });
                            myUpdateButton.setOptions({ disabled: true });
                            break;
                        case "Unselect":
                            myAddButton.setOptions({ disabled: false });
                            myDeleteButton.setOptions({ disabled: true });
                            myEditButton.setOptions({ disabled: true });
                            myCancelButton.setOptions({ disabled: true });
                            myUpdateButton.setOptions({ disabled: true });
                            break;
                        case "Edit":
                            myAddButton.setOptions({ disabled: true });
                            myDeleteButton.setOptions({ disabled: true });
                            myEditButton.setOptions({ disabled: true });
                            myCancelButton.setOptions({ disabled: false });
                            myUpdateButton.setOptions({ disabled: false });
                            break;
                        case "End Edit":
                            myAddButton.setOptions({ disabled: false });
                            myDeleteButton.setOptions({ disabled: false });
                            myEditButton.setOptions({ disabled: false });
                            myCancelButton.setOptions({ disabled: true });
                            myUpdateButton.setOptions({ disabled: true });
                            break;
                    }
                }
                let rowIndex = null;
                myDataTable.addEventHandler('rowSelect', function (event)
                {
                    let args = event.args;
                    rowIndex = args.index;
                    updateButtons('Select');
                });
                myDataTable.addEventHandler('rowUnselect', function (event)
                {
                    updateButtons('Unselect');
                });
                myDataTable.addEventHandler('rowEndEdit', function (event)
                {
                    updateButtons('End Edit');
                });
                myDataTable.addEventHandler('rowBeginEdit', function (event)
                {
                    updateButtons('Edit');
                });
                myAddButton.addEventHandler('click',function (event)
                {
                    if (!myAddButton.disabled)
                    {
                        // add new empty row.
                        myDataTable.addRow(null, {}, 'first')
                        // select the first row and clear the selection.
                        myDataTable.clearSelection;
                        myDataTable.selectRow(0);
                        // edit the new row.
                        myDataTable.beginRowEdit(0);
                        updateButtons('add');
                    }
                });
                myCancelButton.addEventHandler('click',function (event)
                {
                    if (!myCancelButton.disabled)
                    {
                        // cancel changes.
                        myDataTable.endRowEdit(rowIndex, true);
                    }
                });
                myUpdateButton.addEventHandler('click', function (event)
                {
                    if (!myUpdateButton.disabled)
                    {
                        // save changes.
                        myDataTable.endRowEdit(rowIndex, false);
                    }
                });
                myEditButton.addEventHandler('click', function ()
                {
                    if (!myEditButton.disabled)
                    {
                        myDataTable.beginRowEdit(rowIndex);
                        updateButtons('edit');
                    }
                });
                myDeleteButton.addEventHandler('click',function ()
                {
                    if (!myDeleteButton.disabled)
                    {
                        myDataTable.deleteRow(rowIndex);
                        updateButtons('delete');
                    }
                });
            },
            columns: [
                { text: 'Order ID', editable: false, dataField: 'OrderID', width: 200 },
                { text: 'Freight', dataField: 'Freight', cellsFormat: 'f', cellsAlign: 'right', align: 'right', width: 200 },
                {
                    text: 'Ship Country', dataField: 'ShipCountry', width: 250,
                    columnType: 'custom',
                    createEditor: function (row, cellValue, editor, width, height)
                    {
                        // create jqxInput editor.
                        let inputContainer = document.createElement('input');
                        inputContainer.style.paddingLeft = '4px';
                        inputContainer.style.boxSizing = 'border-box';
                        inputContainer.style.border = 'none';
                        inputContainer.id = 'jqxInput';
                        editor[0].appendChild(inputContainer);
                        let countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic", "Congo, Republic of the", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Greenland", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Mongolia", "Morocco", "Monaco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", " Sao Tome", "Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];
                        let InputSelector = '#jqxInput';
                        let InputOptions: jqwidgets.InputOptions = {
                            source: countries, width: '100%', height: '100%'
                        }
                        let myInput: jqwidgets.jqxInput = jqwidgets.createInstance(InputSelector, 'jqxInput', InputOptions)
                        myInput.val(cellValue);
                    },
                    initEditor: function (row, cellValue, editor)
                    {
                        // set jqxInput editor's initial value.
                        if (cellValue === undefined)
                        {
                            cellValue = '';
                        }
                        (<HTMLInputElement>document.getElementById('jqxInput')).value = cellValue
                    },
                    getEditorValue: function (index, value, editor)
                    {
                        // get jqxInput editor's value.
                        return (<HTMLInputElement>document.getElementById('jqxInput')).value

                    }
                },
                { text: 'Shipped Date', dataField: 'ShippedDate', cellsAlign: 'right', align: 'right', cellsFormat: 'dd/MM/yyyy' }
            ]   
    };

    let myDataTable: jqwidgets.jqxDataTable = jqwidgets.createInstance(selector, 'jqxDataTable', options);   
}