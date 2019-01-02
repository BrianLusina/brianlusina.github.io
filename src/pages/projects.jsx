import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import MainLayoutWrapper from '../layouts/MainLayout'
import ProjectItem from '../components/posts/ProjectItem'

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

export const ProjectsPage = () => (
	<MainLayoutWrapper
		page={{
			title: 'Projects',
			description: 'Sample Open Source projects, because we love open source.',
		}}
	>
		<section>
			<Query query={query}>
				{({ loading, error, data }) => {
					if (loading) return <p>Loading...</p>
					if (error) return <p>Error :(</p>
					const repositories = data.viewer.repositories.edges

					return repositories.map(
						({
							repository: {
								id,
								name,
								url,
								updatedAt,
								description,
								owner: { avatarUrl, url: ownerUrl },
								forks: { totalCount: forkCount },
								repositoryTopics: { nodes: topics },
								stargazers: { totalCount: stars },
								pullRequests: { totalCount: pulls },
								issues: { totalCount: issueCount },
							},
						}) => (
							<ProjectItem
								key={id}
								name={name}
								url={url}
								owner={{
									avatarUrl,
									ownerUrl,
								}}
								description={description}
								updateDate={updatedAt}
								topics={topics}
								stargazers={stars}
								forks={forkCount}
								issues={issueCount}
								pullRequests={pulls}
							/>
						)
					)
				}}
			</Query>
		</section>
	</MainLayoutWrapper>
)

export default ProjectsPage
