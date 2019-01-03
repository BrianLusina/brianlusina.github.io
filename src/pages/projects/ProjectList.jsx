import React from 'react'
import { arrayOf, shape, string, number } from "prop-types";
import ProjectItem from './ProjectItem';

const ProjectList = ({ repositories }) => {
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
}

ProjectList.propTypes = {
	repositories: arrayOf(
		shape({
			repository: shape({
				id: string,
				owner: shape({
					avatarUrl: string,
					url: string
				}),
				name: string,
				url: string,
				description: string,
				forks: shape({
					totalCount: number
				}),
				repositoryTopics: shape({
					nodes: arrayOf(
						shape({
							topic: shape({
								id: string,
								name: string
							}),
							url: string
						})
					)
				}),
				primaryLanguage: shape({
					name: string
				}),
				updatedAt: string,
				stargazers: shape({
					totalCount: number
				}),
				pullRequests: shape({
					totalCount: number
				}),
				issues: shape({
					totalCount: number
				})
			}) 
		})
	)
}

export default ProjectList;