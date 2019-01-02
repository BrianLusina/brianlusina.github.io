import React from "react";
import { Provider } from "react-redux";
import { ApolloProvider } from "react-apollo";
import configureStore from "./src/store/configureStore";
import graphQlClient from "./src/api/graphQlClient";

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => {
	const store = configureStore();

	return (
		<Provider store={store}>
			<ApolloProvider client={graphQlClient}>
				{element}
			</ApolloProvider>
		</Provider>
	);
};
