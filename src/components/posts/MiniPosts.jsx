import React from 'react'
import MiniPostItem from './MiniPostItem'
import { arrayOf, shape, string, number } from 'prop-types'

const MiniPosts = ({ posts }) => {
	return (
		<section>
			<div className="mini-posts">
				{posts.map(
					(
						{
							node: {
								frontmatter: {
									title,
									path,
									date,
									author: { avatar, link, name },
									image: { teaser },
								},
							},
						},
						index
					) => {
						return (
							<MiniPostItem
								key={index}
								link={path}
								title={title}
								author={{
									link,
									name,
									avatar,
								}}
								time={date}
								img={teaser}
							/>
						)
					}
				)}
			</div>
		</section>
	)
}

MiniPosts.propTypes = {
	posts: arrayOf(
		shape({
			node: shape({
				timeToRead: number,
				frontmatter: shape({
					title: string,
					path: string,
					date: string,
					author: shape({
						name: string,
						link: string,
						avatar: string,
					}),
					image: shape({
						feature: string,
						thumbnail: string,
						teaser: string,
					}),
					tags: arrayOf(string),
				}),
			}),
		})
	),
}

export default MiniPosts
