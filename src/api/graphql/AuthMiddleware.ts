import { ApolloLink } from '@apollo/client';
import api from '@apiConfig';

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      Authorization: `Bearer ${api.cms.token}`,
    },
  }));

  return forward(operation);
});

export default authMiddleware;
