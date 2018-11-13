import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import mainReducer from "./reducers/index.js";
import Boxcon from './container/box-container.js';
import './index.css';

let store = createStore(mainReducer, applyMiddleware(thunk))

class App extends React.Component {
    render(){
        return(
            <Boxcon></Boxcon>
        )
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));