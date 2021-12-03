import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query GetRepositories(
    $direction: OrderDirection
    $field: RepositoryOrderField
    $first: Int
    $last: Int
    $after: String
    $before: String
  ) {
    viewer {
      login
      avatarUrl
      repositories(
        orderBy: { direction: $direction, field: $field }
        first: $first
        last: $last
        after: $after
        before: $before
      ) {
        pageInfo {
          startCursor
          endCursor
          hasNextPage
        }
        nodes {
          name
          description
          url
          owner {
            login
            avatarUrl
          }
        }
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  query GetRepository($name: String!, $owner: String!) {
    repository(name: $name, owner: $owner) {
      name
      description
      url
      object(expression: "HEAD:README.md") {
        ... on Blob {
          text
        }
      }
      owner {
        login
        avatarUrl
      }
    }
  }
`;
