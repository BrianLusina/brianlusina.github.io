import React from 'react'
import { blogPropType } from '../propTypes';
import { graphql } from "gatsby"
import { func } from "prop-types";
import { withGraphQLSubscription } from '../components/hoc/withGraphQLPostData';

export const ProjectsPage = ({data, renderPosts }) => (
	<section>{renderPosts(data)}</section>
)

ProjectsPage.propTypes = {
	data: blogPropType,
	renderPosts: func,
}

ProjectsPage.defaultProps = {
	data: {
		allMarkdownRemark: { edges : [] },
	},
}

// eslint-disable-next-line no-undef
export const query = graphql`
	query ProjectsPageQuery {
		allMarkdownRemark(
			filter: { frontmatter: { category: { eq: "projects" } } }
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
	title: "Projects",
	description: "Sample Open Source projects, because we love free stuff."
}

export default withGraphQLSubscription(ProjectsPage, page);
