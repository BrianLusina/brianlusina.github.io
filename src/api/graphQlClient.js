import ApolloClient from "apollo-boost";

const token = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;

const graphQlClient = new ApolloClient(
	{
		uri: "https://api.github.com/graphql",
		headers: {
			authorization: `Bearer ${token}`
		}
	}
)

export default graphQlClient;