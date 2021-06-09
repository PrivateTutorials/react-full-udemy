import {combineReducers} from 'redux';
import postReducer from './postReducer';
import usersReducer from './usersReducer';

export default combineReducers({
   // replaceMe: () => 'this reducer is for fixing empty reducers error'
    posts: postReducer,
    users: usersReducer
})

// Reducers - are some kind the actual properties of the store itself
