import { ApolloClient, InMemoryCache, HttpLink, concat } from '@apollo/client';
import api from '@apiConfig';
import authMiddleware from './AuthMiddleware';

const httpLink = new HttpLink({ uri: api.cms.graphQlUrl });

const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache(),
});

export default client;
