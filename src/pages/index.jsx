import React from "react"
import Layout from "../layouts/MainLayout";
import Home from "../templates/Home";
import {graphql } from 'gatsby'
import { shape, arrayOf, object } from 'prop-types'
import {locationPropType} from '../propTypes';

const RootPage = ({ data: { allMarkdownRemark : {edges: posts}}}) => {
	return (
		<Layout>
			<Home posts={posts}/>
		</Layout>
	)
}

RootPage.propTypes = {
	data: shape({
		allMarkdownRemark: shape({
			edges: arrayOf(object)
		})
	}),
	location: locationPropType
}

export const query = graphql`
	query BlogPostsQuery {
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }){
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

export default RootPage;