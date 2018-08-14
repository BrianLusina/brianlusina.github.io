import React from 'react';
import {render} from 'react-dom';
import "./styles/css/font-awesome.min.css";
import "./styles/css/main.css";
import {Provider} from "react-redux";
import registerServiceWorker from './registerServiceWorker';
import configureStore from "./store/configureStore";
import createHistory from "history/createBrowserHistory";
import {syncHistoryWithStore} from 'react-router-redux'
import { ConnectedRouter } from "react-router-redux";
import App from './App';

const store = configureStore();
//const history = createHistory();

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
