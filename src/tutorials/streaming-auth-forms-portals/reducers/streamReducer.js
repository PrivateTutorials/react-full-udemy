import _ from 'lodash';
import {CREATE_STREAM, FETCH_STREAM, FETCH_STREAMS, EDIT_STREAM, DELETE_STREAM} from "../actions/types";

const stateReducer = (state ={}, action) => {
switch (action.type){
    case FETCH_STREAMS:
        // lodash mapKeys() f() takes an Array of objects and converts in to 1 Object instead of array\
        // Object keyd - will be values of 'id' properties in the original array
        return {...state, ..._.mapKeys(action.payload, 'id')}
    case FETCH_STREAM:
        return {...state, [action.payload.id]: action.payload}
    case CREATE_STREAM:
        return {...state, [action.payload.id]: action.payload}
    case EDIT_STREAM:
        return {...state, [action.payload.id]: action.payload}
    case DELETE_STREAM:
        // omit from lodash creates a new Obj, deleting the provided property
        return _.omit(state, action.payload)
    default:
        return state;
}
}

export default stateReducer;
