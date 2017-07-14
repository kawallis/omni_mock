import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './DateSelector/reducers';

const store = createStore(reducers, {date: 'Choose a date', times: [], availableTimes: []},
compose(
   applyMiddleware(thunk),
   window.devToolsExtension ? window.devToolsExtension() : f => f
 )
);

ReactDOM.render(
    < Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
