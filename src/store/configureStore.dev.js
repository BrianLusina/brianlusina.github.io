/**
 * @author lusinabrian on 12/11/17.
 * @notes: Redux Store
 */

import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';


/**
 * Configures the application store
 * */
export default function configureStore(initialState) {
    return createStore(
        rootReducer, initialState,
        composeWithDevTools(applyMiddleware(thunk, reduxImmutableStateInvariant()))
    );
}
