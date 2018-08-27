import React from 'react'
import { blogPropType } from '../propTypes';
import { func } from "prop-types";
import { graphql } from "gatsby"
import {withGraphQLSubscription} from '../components/hoc/withGraphQLPostData';

const FinancePage = ({data, renderPosts}) => (
	<section>{renderPosts(data)}</section>
)

FinancePage.propTypes = {
	data: blogPropType,
	renderPosts: func,
}

export const query = graphql`
	query FinancePageQuery {
		allMarkdownRemark(
			filter: { frontmatter: { category: { eq: "finance" } } }
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
	title: "Finance",
	description :"I believe that through knowledge and discipline, financial peace is possible for all of us.",
}

export default withGraphQLSubscription(FinancePage, page)
