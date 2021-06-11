import streamsApi from "../apis/streams";
import history from "../history";
import {CREATE_STREAM, SIGN_IN, SIGN_OUT, DELETE_STREAM, EDIT_STREAM, FETCH_STREAM, FETCH_STREAMS} from "./types";

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
};

// a f() that requests "formValues" argument and returns another async f()
// when f() is returned, it's automatically called with 2 args - dispatch and current snapshot os State Object
export const createStream = (formValues) => {
    return async (dispatch, getState) => {
        // getState() - returns the whole state obj. and we access its auth "property"
        const {userId} = getState().auth;

        const response = await streamsApi.post('/streams', {...formValues, userId});

        dispatch({type: CREATE_STREAM, payload: response.data});

        // programmatic navigation to the list of streams
        history.push('/');
    }
};

export const fetchStreams = () => async (dispatch) => {
    const response = await streamsApi.get('/streams');

    dispatch({type: FETCH_STREAMS, payload: response.data});
};

export const fetchStream = (id) => async (dispatch) => {
    const response = await streamsApi.get(`/streams/${id}`);

    dispatch({type: FETCH_STREAM, payload: response.data});
};

export const editStream = (id, formValues) => async (dispatch) => {
    const response = await streamsApi.patch(`/streams/${id}`, formValues);

    dispatch({type: EDIT_STREAM, payload: response.data});

    history.push('/');
};

export const deleteStream = (id) => async (dispatch) => {
    await streamsApi.delete(`/streams/${id}`);

    dispatch({type: DELETE_STREAM, payload: id});

    history.push('/');
};
