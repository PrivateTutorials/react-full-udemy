import {SIGN_IN, SIGN_OUT} from "../actions/types";

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            // if we don't create a brand new Object, then redux will the the same link of the Obj,
            // and will think that the Obj was not updated
            return {...state, isSignedIn: true, userId: action.payload}
        case SIGN_OUT:
            return {...state, isSignedIn: false, userId: null}
        default:
            return state;
    }
}

export default authReducer;

// ES6 key interpolation syntax:
/*
const newState = {...state};
newState[action.payload.id] = action.payload; // update object property by its key ID
return newsState;

is the same as:
return {...state, [action.payload.id]: action.payload} // dynamic key, instead of hard-coded
*/
