import React from 'react';
import ReactDOM from 'react-dom';
import Boxcon from './container/box-container.js';
import './index.css';

class App extends React.Component {
    render(){
        return(
            <Boxcon></Boxcon>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

