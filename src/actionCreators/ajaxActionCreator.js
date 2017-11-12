/**
 * @author lusinabrian on 06/11/17.
 * @notes: Action creator for ajaxActionCreator
 */

import * as types from '../actionTypes/ajaxActionTypes';

/**
 * Begin Ajax call action creator dispatched to update the store that the application is beginning
 * a new ajax call
 * */
export function beginAjaxCall() {
    return {type: types.AJAX_CALL_BEGIN};
}

/**
 * Ajax Call Error action creator. This will be dispatched to the store to update the state of the
 * ajax calls in the store
 * @param {Object} payload error retrieved from the ajax call
 * */
export function ajaxCallError(payload) {
    return {type: types.AJAX_CALL_FAILURE, payload};
}

/**
 * Ajax call success action creator that is dispatched to the redux tore on successfull completion
 * of a ajax call
 * */
export function ajaxCallSuccess(){
    return { type : types.AJAX_CALL_SUCCESS}
}