import React from 'react'
import { blogPropType } from '../propTypes';
import { withGraphQLSubscription } from '../components/hoc/withGraphQLPostData';
import { graphql } from "gatsby"
import { func } from "prop-types";

export const LifePage =({data, renderPosts}) => (
	<section>{renderPosts(data)}</section>
)

LifePage.propTypes = {
	data: blogPropType,
	renderPosts: func,
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
const page = {
	title: "Life",
	description: "Life is really simple, but we insist on making it complicated."
}

export default withGraphQLSubscription(LifePage, page);
