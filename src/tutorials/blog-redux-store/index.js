import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

import {App} from './tutorials/blog-redux-store/components/App';
import reducers from './tutorials/blog-redux-store/reducers'
// react-redux - goal of the lib - to pass data from Store to Component 'props'

const store = createStore(reducers, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#root')
);
