import * as React from 'react';
 


import JqxComplexInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcomplexinput';

class App extends React.PureComponent<{}> {

    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <JqxComplexInput theme={'material-purple'}
                width={'30%'} height={25} value={'1000 + 2i'} spinButtons={true} />
        );
    } 
}

export default App;