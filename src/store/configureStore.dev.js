/**
 * @author lusinabrian on 12/11/17.
 * @notes: Redux Store
 */

import {
	applyMiddleware,
	createStore
} from 'redux';
import rootReducer from '../reducers/rootReducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import {
	composeWithDevTools
} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const middlware = [
	thunk,
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
