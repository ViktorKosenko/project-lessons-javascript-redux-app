import {createStore} from 'redux';
import {Provider} from 'react-redux';
import React from 'react'; 
import ReactDOM from 'react-dom';
import reducer from './reducer';
import App from './components/app';
import './style.css';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store = {store}> 
        <App/>
    </Provider>
    , document.getElementById('root')
);