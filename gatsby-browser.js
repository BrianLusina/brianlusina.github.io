import React from "react";
import { Provider } from "react-redux";
import { ApolloProvider } from "react-apollo";
import configureStore from "./src/store/configureStore";
import graphQlService from "./src/api/GraphQlService";

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => {
	const store = configureStore();
	const client = graphQlService.getClient();

	return (
		<Provider store={store}>
			<ApolloProvider client={client}>
				{element}
			</ApolloProvider>
		</Provider>
	);
};
