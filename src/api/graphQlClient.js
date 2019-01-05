import ApolloClient from "apollo-boost";
import fetch from "isomorphic-fetch"

const token = process.env.GATSBY_GITHUB_PERSONAL_ACCESS_TOKEN;

const graphQlClient = new ApolloClient(
	{
		uri: "https://api.github.com/graphql",
		fetch,
		headers: {
			authorization: `Bearer ${token}`
		}
	}
)

export default graphQlClient;