/**
 * @author lusinabrian on lusinabrian.
 * @notes: ajaxReducer reducer
 */

import * as types from '../actionTypes/ajaxActionTypes';
import initialState from './initialState';

/**
 * ajaxReducer reducer takes current state and action and returns a new state or default state of
 * store, this will handle the ajax object in the redux store
 * @param state initial state of the application store, in this case the ajax object
 * @param action function to dispatch to store
 * @return {Object} new state or initial state
 * */
export default function ajaxReducer(state = initialState.ajax, action) {
    let currentCalls = state.callsInProgress;
    switch (action.type) {
        case types.AJAX_CALL_SUCCESS:
            return Object.assign({}, state,
                {
                    isFetching : false,
                    callsInProgress: currentCalls - 1
                }
            );

        case types.AJAX_CALL_BEGIN:
            return Object.assign({}, state,
                {
                    isFetching : true,
                    callsInProgress: currentCalls + 1
                }
            );

        case types.AJAX_CALL_FAILURE:
            return Object.assign({}, state,
                {
                    isFetching : false,
                    callsInProgress: currentCalls - 1,
                    error: action.payload
                }
            );

        default:
            return state;
    }
}
