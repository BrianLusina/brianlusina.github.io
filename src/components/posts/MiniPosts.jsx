import React from 'react'
import MiniPostItem from './MiniPostItem'
import { arrayOf, shape, string, number } from 'prop-types';
import includes from "lodash/includes";

const MiniPosts = ({ posts, currentTag }) => {
	return (
		<section>
			<div className="mini-posts">
				{
					posts.map(
						(
							{
								node: {
									frontmatter: {
										title,
										path,
										date,
										author: { avatar, link, name },
										image: { teaser },
										tags
									},
								},
							},
						) => {
							if (currentTag && includes(tags, currentTag)) {
								return (
									<MiniPostItem
										key={path}
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
							return (
								<MiniPostItem
									key={path}
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
					)
				}
			</div>
		</section>
	)
}

MiniPosts.defaultProps = { 
	currentTag: null
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
	currentTag: string,
}

export default MiniPosts
