import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// dispatch, getState - 2 f()s that are provided by redux store
export const fetchPostAndUsers = () => async (dispatch, getState) => {
    // when we dispatch a f(), redux-thunk will automatically call it
    await dispatch(fetchPosts());


    _.chain(getState().posts)
        .map('userId') // posts is passed as the 1-st argument behind the scenes
        .uniq()
        .forEach(userId => dispatch(fetchUser(userId)))
        .value(); // value() f() - is for execution the chain. Better would to call it: execute()

    // is the same as:
    // const userIds = _.uniq(_.map(getState().posts, 'userId'));
    // userIds.forEach(userId => dispatch(fetchUser(userId)));
}

// returning a f()
export const fetchPosts = () => {
    return async (dispatch) => {
        const response = await jsonPlaceholder.get('/posts');

        // will automatically afterwards update reducers
        dispatch({
            type: 'FETCH_POSTS',
            payload: response.data
        })
    }
}

export const fetchUser = (id) => async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    })
};


// MEMOIZATION EXAMPLE:
// has to be memoized outside, in another f(). e.g. _fetchUser
// we have a f() that returns a f() that calls _fetchUser f()
export const fetchUserMemoized = (id) => (dispatch) => {
    _fetchUser(id, dispatch);
}

const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    })
});


