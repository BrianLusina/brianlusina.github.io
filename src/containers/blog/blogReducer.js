/**
 * @author lusinabrian on lusinabrian.
 * @notes: blogReducer reducer
 */

import * as types from './blogActionTypes';
import initialState from './initialState';

/**
 * blogReducer reducer takes current state and action and
 * returns a new state
 * @param state initial state of the application store
 * @param action function to dispatch to store
 * @return {Object} new state or initial state*/
export default function blogReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_BLOG_POST_REQUEST:
      return Object.assign({}, state,
        {
          isFetching: true,
        });

    case types.FETCH_BLOG_POST_SUCCESS:
      return Object.assign({}, state,
        {
          blogPosts: action.payload.posts,
          isFetching: true,
        });

    case types.FETCH_BLOG_POST_FAILURE:
      return Object.assign({}, state,
        {
          isFetching: true,
          error: action.payload
        });
    default:
      return state;
  }
}
