import React, { Component } from 'react'
import FeaturePost from '../components/feature/Feature'
// import BlogContainer from "../containers/blog/BlogContainer";
import { connect } from 'react-redux'
import { object } from 'prop-types'
import BlogItem from '../containers/blog/BlogItem'

export class IndexPage extends Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			posts: [],
		}
	}

	renderBlogPosts() {
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
						excerpt,
						frontmatter: { title, path },
					},
				},
				index
			) => {
				return (
					<BlogItem
						key={index}
						link={path}
						imgSrc={node.imgSrc}
						imgAlt={node.base}
						title={title}
						excerpt={excerpt}
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
		return (
			<div>
				<FeaturePost
					featureTitle={'Feature Post'}
					shortDescription={'Short feature description'}
					subtitle={'Short subtitle post'}
					postLink={'page-2'}
				/>
				<section>
					<header className="major">
						<h2>Recent</h2>
					</header>
					<div className="posts">{this.renderBlogPosts()}</div>
				</section>
			</div>
		)
	}
}

/**
 * maps the state of the redux store to the BlogContainer props
 * @param {Object} state of redux store
 * @param {Object} ownProps BlogContainer properties
 * @returns {Object} new state of redux store
 */
function mapStateToProps(state, ownProps) {
	return {}
}

/**
 * maps dispatch actions to props in this container
 * component
 * @param {Object} dispatch
 * @returns {Object} actions object
 */
function mapDispatchToProps(dispatch) {
	return {
		//actions: bindActionCreators(actions, dispatch)
	}
}

IndexPage.propTypes = {
	data: object.isRequired,
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(IndexPage)

// eslint-disable-next-line no-undef
export const query = graphql`
	query BlogPostsQuery {
		allMarkdownRemark {
			edges {
				node {
					frontmatter {
						title
						categories
						excerpt
						author
						category
					}
					excerpt
					timeToRead
					html
				}
			}
		}
	}
`
