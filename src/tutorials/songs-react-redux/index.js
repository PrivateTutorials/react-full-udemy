import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'; // a component-wrapper
import {createStore} from 'redux';
// react-redux - goal of the lib - to pass data from Store to Component 'props'

import {App} from './tutorials/songs-react-redux/components/App';
import reducers from './tutorials/songs-react-redux/reducers';

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App/>
    </Provider>,
    document.querySelector('#root')
);
