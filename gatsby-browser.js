import React from "react";
import { Provider } from "react-redux";
import configureStore from "./src/store/configureStore";

export const wrapRootElement = ({ element }) => {
	const store = configureStore();

	const ConnectedRootElement = (
		<Provider store={store}>
			{element}
		</Provider>
	);

	return ConnectedRootElement
};
