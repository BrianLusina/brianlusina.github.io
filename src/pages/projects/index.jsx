import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import MainLayoutWrapper from '../../layouts/MainLayout'
import ProjectList from './ProjectList';
import LoadingPage from './LoadingPage';
import ErrorPage from './ErrorPage';

// eslint-disable-next-line no-undef
const query = gql`
	{
		viewer {
			repositories(first: 100) {
				edges {
					repository: node {
						id
						owner {
							avatarUrl
							url
						}
						name
						url
						description
						forks(first: 5) {
							totalCount
						}
						repositoryTopics(first: 10) {
							nodes {
								topic {
									id
									name
								}
								url
							}
						}
						primaryLanguage {
							name
						}
						updatedAt
						stargazers {
							totalCount
						}
						pullRequests {
							totalCount
						}
						issues {
							totalCount
						}
					}
				}
			}
		}
	}
`

const ProjectsPage = () => (
	<MainLayoutWrapper
		page={{
			title: 'Projects',
			description: 'Sample Open Source projects, because we love open source.',
		}}
	>
		<section>
			<Query query={query}>
				{({ loading, error, data }) => {
					if (loading) 
						return <LoadingPage />
					
					if (error) 
						return <ErrorPage />
					
					const repositories = data.viewer.repositories.edges

					return (
						<ProjectList repositories={repositories} />
					);
				}}
			</Query>
		</section>
	</MainLayoutWrapper>
)

export default ProjectsPage
