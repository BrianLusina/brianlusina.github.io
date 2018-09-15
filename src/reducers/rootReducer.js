/**
 * @author lusinabrian on 12/11/17
 * @notes: Root reducer
 */

import {combineReducers} from 'redux';
import ajax from "./ajaxReducer"

/**
 * Combines all reducers for use in the application
 * Uses short hand property names from ES6
 * */
const rootReducer = combineReducers({
  ajax
});

export default rootReducer;
