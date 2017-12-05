/**
 * @author lusinabrian on 12/11/17
 * @notes: Root reducer
 */

import {combineReducers} from 'redux';
import blog from "../containers/blog/blogReducer";
import ajax from "./ajaxReducer"
import { routerReducer } from "react-router-redux";

/**
 * Combines all reducers for use in the application
 * Uses short hand property names from ES6
 * */
const rootReducer = combineReducers({
  blog, ajax, router: routerReducer
});

export default rootReducer;
