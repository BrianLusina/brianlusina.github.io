/**
 * @author lusinabrian on 12/11/17
 * @notes: Redux Store
 */

import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import { routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";

// create history
const history = createHistory();

/**
 * Configures the application store
 * */
export default function configureStore(initialState) {
    return createStore(
        rootReducer, initialState, applyMiddleware(thunk, routerMiddleware(history))
    );
}
