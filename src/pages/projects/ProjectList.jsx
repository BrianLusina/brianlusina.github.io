import React from 'react'
import { arrayOf, shape, string, number } from "prop-types";
import ProjectItem from './ProjectItem';

const ProjectList = ({ repositories }) => {
	const sorted = repositories.sort((a,b) => {
		return new Date(b.updatedAt) - new Date(a.updatedAt);
	});

	return sorted.map(
		({
			id,
			name,
			url,
			updatedAt,
			description,
			owner: { login: ownerName, avatarUrl, url: ownerUrl },
			forks: { totalCount: forkCount },
			repositoryTopics: { nodes: topics },
			stargazers: { totalCount: stars },
			pullRequests: { totalCount: pulls },
			issues: { totalCount: issueCount },
		}) => (
			<ProjectItem
				key={id}
				name={name}
				url={url}
				owner={{
					ownerName,
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
			id: string,
			owner: shape({
				login: string,
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
	)
}

export default ProjectList;