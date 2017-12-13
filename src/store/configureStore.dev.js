/**
 * @author lusinabrian on 12/11/17.
 * @notes: Redux Store
 */

import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../reducers/rootReducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createHistory from "history/createBrowserHistory";
import {routerMiddleware} from "react-router-redux";

export const history = createHistory();

const middlware = [
  thunk,
  routerMiddleware(history),
  reduxImmutableStateInvariant()
];

/**
 * Configures the application store
 * */
export default function configureStore(initialState) {
  return createStore(
    rootReducer, initialState,
    composeWithDevTools(applyMiddleware(...middlware))
  );
}
