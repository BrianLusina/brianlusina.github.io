import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { object, shape, arrayOf, string, number } from 'prop-types'
import PostItem from '../components/posts/PostItem'
import moment from 'moment'
import Pagination from '../components/Pagination'
import { graphql } from "gatsby";

export class HomePageTemplate extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			posts: [],
			blogPostsPerPage: 5,
			paginatedPagesCount: 10
		}
	}

	renderBlogPosts() {
		return this.state.posts.map(
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

	paginationPath(path, page, totalPages){
		if (page === 0) {
			return path
		} else if (page < 0 || page >= totalPages) {
			return ''
		} else {
			return `${path}/${page + 1}`
		}
	}
	
	static getDerivedStateFromProps(nextProps, prevState) {
		const { posts = [] } = nextProps

		const blogPostsCount = posts.length;
		const paginatedPagesCount = Math.ceil(blogPostsCount / prevState.blogPostsPerPage)
	
		if (posts !== prevState.posts) {
			return {
				...prevState,
				posts,
				blogPostsCount,
				paginatedPagesCount
			}
		} else {
			return null
		}
	}

	render() {
		// const {
		// 	pageContext: { index, pageCount },
		// } = this.props
		// const previousUrl = index - 1 == 1 ? '' : (index - 1).toString()
		// const nextUrl = (index + 1).toString()

		return (
			<section>
				{this.renderBlogPosts()}
				<Pagination
					previousUrl={''} //previousUrl}
					nextUrl={''} //nextUrl}
					pageCount={5} //pageCount}
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

HomePageTemplate.propTypes = {
	posts: arrayOf(
		shape({
			node: shape({
				excerpt: string,
				html: string,
				timeToRead: number,
				frontmatter: shape({
					path: string,
					author: shape({
						avatar: string,
						link: string,
						name: string
					}),
					date: string,
					excerpt: string,
					image: shape({
						credit: string,
						creditLink: string,
						feature: string,
						teaser: string,
						thumbnail: string
					}),
					subtitle: string,
					title: string,
				})
			})
		})
	),
	pageContext: shape({
		group: arrayOf(object),
	}),
}

export const query = graphql`
	query HomePageQuery($skip: Int, $limit: Int) {
		allMarkdownRemark(
			sort: { fields: [frontmatter___date], order: DESC },
			skip: $skip,
			limit: $limit,
			){
			edges {
				node {
					frontmatter {
						title
						subtitle
						category
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

// export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(IndexPage)
export default HomePageTemplate