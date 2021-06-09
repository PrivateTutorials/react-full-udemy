import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import authReducer from "./authReducer";
import streamReducer from "./streamReducer";

export default combineReducers({
    // replaceMe: () => 'mock'
    auth: authReducer, // authReducer - a f() that returns a value based on action.TYPE
    form: formReducer,
    streams: streamReducer
})
