import {combineReducers} from "redux";

import authReducer from "./authReducer";
import streamReducer from "./streamReducer";

export default combineReducers({
    // replaceMe: () => 'mock'
    auth: authReducer, // authReducer - a f() that returns a value based on action.TYPE
    streams: streamReducer,
});
