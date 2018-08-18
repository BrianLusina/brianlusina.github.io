import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { object, shape, arrayOf } from 'prop-types'
import PostItem from '../components/posts/PostItem'
import moment from 'moment'
import Pagination from '../components/Pagination'

export class IndexPage extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			posts: [],
		}
	}

	renderBlogPosts() {
		const {
			pathContext: { group: posts },
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

	render() {
		const {
			pathContext: { index, pageCount },
		} = this.props
		const previousUrl = index - 1 == 1 ? '' : (index - 1).toString()
		const nextUrl = (index + 1).toString()

		return (
			<section>
				{this.renderBlogPosts()}
				<Pagination
					previousUrl={previousUrl}
					nextUrl={nextUrl}
					pageCount={pageCount}
				/>
			</section>
		)
	}
}

// /**
//  * maps the state of the redux store to the BlogContainer props
//  * @param {Object} state of redux store
//  * @param {Object} ownProps BlogContainer properties
//  * @returns {Object} new state of redux store
//  */
// function mapStateToProps(state, ownProps) {
// 	return {}
// }

// /**
//  * maps dispatch actions to props in this container
//  * component
//  * @param {Object} dispatch
//  * @returns {Object} actions object
//  */
// function mapDispatchToProps(dispatch) {
// 	return {
// 		//actions: bindActionCreators(actions, dispatch)
// 	}
// }

IndexPage.propTypes = {
	data: object,
	pathContext: shape({
		group: arrayOf(object),
	}),
}

// export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(IndexPage)
export default IndexPage;

// eslint-disable-next-line no-undef
export const query = graphql`
	query BlogPostsQuery {
		allMarkdownRemark {
			edges {
				node {
					frontmatter {
						title
						subtitle
						categories
						excerpt
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
