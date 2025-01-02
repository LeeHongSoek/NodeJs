﻿import * as React from 'react';
 


import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class App extends React.PureComponent<{}, IGridProps> {

    constructor(props: {}) {
        super(props);

        const source: any = {
            datafields: [
                { name: 'Date', type: 'date' },
                { name: 'S&P 500', type: 'float' },
                { name: 'NASDAQ', type: 'float' }
            ],
            datatype: 'csv',
            url: 'nasdaq_vs_sp500.txt'
        };

        const handlekeyboardnavigation: IGridProps['handlekeyboardnavigation'] = (event) => {
            const key = event.charCode ? event.charCode : event.keyCode ? event.keyCode : 0;
            if (key === 13) {
                alert('Pressed Enter Key.');
                return true;
            }
            else if (key === 27) {
                alert('Pressed Esc Key.');
                return true;
            }
            return false;
        };

        this.state = {
            columns: [
                { text: 'Date', datafield: 'Date', cellsformat: 'D', width: 250 },
                { text: 'S&P 500', datafield: 'S&P 500', width: 300, cellsformat: 'f' },
                { text: 'NASDAQ', datafield: 'NASDAQ', cellsformat: 'f' }   
            ],
            handlekeyboardnavigation,
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <JqxGrid theme={'material-purple'}
                // @ts-ignore
                width={'100%'} source={this.state.source} columns={this.state.columns}
                columnsresize={true} editable={true} editmode={'selectedcell'} selectionmode={'singlecell'} 
                handlekeyboardnavigation={this.state.handlekeyboardnavigation} />
        );
    }
}

export default App;