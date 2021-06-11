import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, compose, createStore} from "redux"; // applyMiddleware, compose - for redux dev tools
import reduxThunk from 'redux-thunk';

import {App} from "./components/App";
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // for redux dev tools
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#root')
)


// how to add redux to project:
// 1. npm redux, react-redux
// 2. create actions and reducers folders with index.js files
// 3. create store with reducers in this file
// 4. wrap <App> C with <Provider>
