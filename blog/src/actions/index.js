import _ from 'lodash';

import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());

    // 1 вариант
    // const userIds = _.uniq(_.map(getState().posts, 'userId'));
    // userIds.forEach(id => dispatch(fetchUser(id)));

    // 2 вариант (то же самое, но с использованием функции chain)
    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value();
}

export const fetchPosts = () => async (dispatch) => {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', payload: response.data })
};
// defining a function that returns a function
// redux thunk allows us to return function from action

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get('/users/' + id);

    dispatch({ type: 'FETCH_USER', payload: response.data })
};

// memoize version
// export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get('/users/' + id);

//     dispatch({ type: 'FETCH_USER', payload: response.data })
// });
