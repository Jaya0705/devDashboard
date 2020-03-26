import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import TopNav from './Navigation/TopNav';
import {createStore} from 'redux';
import rootReducer from './Redux/UpdatedReducer';



const store = createStore(rootReducer);


ReactDOM.render(<TopNav/>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
