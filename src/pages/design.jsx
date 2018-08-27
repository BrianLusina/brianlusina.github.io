import React from 'react'
import { blogPropType } from '../propTypes';
import { func } from "prop-types";
import { graphql } from "gatsby"
import {withGraphQLSubscription} from '../components/hoc/withGraphQLPostData';

const DesignPage = ({ data, renderPosts }) => (
	<section>{renderPosts(data)}</section>
)

DesignPage.propTypes = {
	data: blogPropType,
	renderPosts: func,
}

export const query = graphql`
	query DesignPageQuery {
		allMarkdownRemark(
			filter: { frontmatter: { category: { eq: "design" } } }
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
	title: "Design", 
	description: "Good design goes to heaven and bad design goes everywhere." 
};

export default withGraphQLSubscription(DesignPage, page);