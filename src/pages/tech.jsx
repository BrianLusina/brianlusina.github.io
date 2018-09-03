import React from 'react'
import { blogPropType } from '../propTypes';
import { func } from "prop-types";
import { graphql } from "gatsby"
import {withGraphQLSubscription} from '../components/hoc/withGraphQLPostData';

export const TechPage =({data, renderPosts }) => (
	<section>{renderPosts(data)}</section>
)

TechPage.propTypes = {
	data: blogPropType,
	renderPosts: func,
}

// eslint-disable-next-line no-undef
export const query = graphql`
	query TechPageQuery {
		allMarkdownRemark(
			filter: { frontmatter: { category: { eq: "tech" } } }
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
	title: "Tech",
	description: "The technology keeps moving forward, which makes it easier for the artists to tell their stories and paint the pictures they want."
};

export default withGraphQLSubscription(TechPage, page);
