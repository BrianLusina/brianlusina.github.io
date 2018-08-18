import React, { Component } from 'react'
import PostItem from '../components/posts/PostItem'
import moment from 'moment'
import { blogPropType } from '../propTypes';
import { graphql } from "gatsby"

class LifePage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			posts: [],
		}
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		const {
			data: {
				allMarkdownRemark: { edges: posts },
			},
		} = nextProps

		if (posts !== prevState.posts) {
			return {
				...prevState,
				posts,
			}
		} else {
			return null
		}
	}

	renderPosts(){
		const {
			data: {
				allMarkdownRemark: { edges: posts },
			},
		} = this.props
		// limit these items to most 6 recent posts
		return posts.map(
			(
				{
					node: {
						frontmatter: {
							title,
							subtitle,
							path,
							excerpt,
							author: { avatar, link, name },
							image: { feature },
							date,
							tags,
						},
					},
				},
				index
			) => {
				const time = moment(date).format('MMMM DD, YYYY')
				return (
					<PostItem
						key={index}
						link={path}
						img={{
							src: feature,
							alt: feature,
						}}
						author={{
							name,
							avatar,
							link,
						}}
						title={title}
						subtitle={subtitle}
						date={time}
						excerpt={excerpt}
						tags={tags}
					/>
				)
			}
		)
	}

	render() {
		return <section>{this.renderPosts()}</section>
	}
}

LifePage.propTypes = {
	data: blogPropType
}

// eslint-disable-next-line no-undef
export const query = graphql`
	query LifePageQuery {
		allMarkdownRemark(
			filter: { frontmatter: { category: { eq: "life" } } }
			sort: { fields: [frontmatter___date], order: DESC }
		) {
			edges {
				node {
					frontmatter {
						title
						subtitle
						excerpt
						path
						date(formatString: "MMMM DD, YYYY")
						author {
							name
							link
							avatar
						}
						image {
							feature
							thumbnail
							teaser
							credit
							creditlink
						}
						tags
					}
					excerpt
					timeToRead
					html
				}
			}
		}
	}
`

export default LifePage
