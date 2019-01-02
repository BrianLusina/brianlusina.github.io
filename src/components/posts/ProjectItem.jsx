import React from 'react'
import { string, shape, arrayOf, number } from 'prop-types'
import kebabCase from 'lodash/kebabCase'

const ProjectItem = ({
	name,
	updateDate,
	url,
	owner: { avatarUrl, ownerUrl },
	description,
	topics,
	stargazers,
	issues,
	pullRequests,
	forks,
}) => (
	<article className="post">
		<header>
			<div className="title">
				<h2>
					<a href={url} rel="noopener noreferrer" target="_blank">
						{name}
					</a>
				</h2>
				<p>{description}</p>
			</div>
			<div className="meta">
				<time className="published" dateTime={updateDate}>
					{updateDate}
				</time>
				<a
					href={ownerUrl}
					rel="noopener noreferrer"
					target="_blank"
					className="author"
				>
					<span className="name">{name}</span>
					<img src={avatarUrl} alt={name} />
				</a>
			</div>
		</header>

		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className="image featured"
		>
			<img src={url} />
		</a>

		{/* <p>{excerpt}</p> */}

		<footer>
			<ul className="actions">
				<li>
					<a href={url} className="button large" rel="noopener noreferrer">
						Checkout project
					</a>
				</li>
			</ul>
			<ul className="stats">
				<li>
					{topics.map(({ topic: { id, name }, url }) => (
						<a key={id} to={url}>
							{kebabCase(name)} |{' '}
						</a>
					))}
				</li>
				<li>
					<a
						href={`${url}/stargazers`}
						rel="noopener noreferrer"
						className="icon fa-star"
					>
						{stargazers}
					</a>
				</li>
				<li>
					<a
						href={`${url}/network/members`}
						rel="noopener noreferrer"
						className="icon fa-git"
					>
						{forks}
					</a>
				</li>
				<li>
					<a
						href={`${url}/issues`}
						rel="noopener noreferrer"
						className="icon fa-git"
					>
						{issues}
					</a>
				</li>
				<li>
					<a
						href={`${url}/pulls`}
						rel="noopener noreferrer"
						className="icon fa-git"
					>
						{pullRequests}
					</a>
				</li>
			</ul>
		</footer>
	</article>
)

ProjectItem.propTypes = {
	name: string,
	owner: shape({
		avatarUrl: string,
		ownerUrl: string,
	}),
	url: string,
	description: string,
	updateDate: string,
	topics: arrayOf(
		shape({
			topic: shape({
				id: string,
				name: string,
			}),
			url: string,
		})
	),
	stargazers: number,
	forks: number,
	issues: number,
	pullRequests: number,
}

export default ProjectItem
