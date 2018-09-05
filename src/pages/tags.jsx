import React from 'react';
import { shape, string, arrayOf, number} from "prop-types"
import kebabCase from "lodash/kebabCase"
import Helmet from "react-helmet"
import { Link, graphql } from "gatsby"


const TagsPage = ({
	data: {
		allMarkdownRemark: { group },
		site: {
			siteMetadata: { title },
		},
	},
}) => (
	<div>
		<Helmet title={title} />
		<div>
			<h1>Tags</h1>
			<ul>
				{group.map(tag => (
					<li key={tag.fieldValue}>
						<Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
							{tag.fieldValue} ({tag.totalCount})
						</Link>
					</li>
				))}
			</ul>
		</div>
	</div>
)
  
TagsPage.propTypes = {
	data: shape({
		allMarkdownRemark: shape({
			group: arrayOf(
				shape({
					fieldValue: string.isRequired,
					totalCount: number.isRequired,
				}).isRequired
			),
		}),
		site: shape({
			siteMetadata: shape({
				title: string.isRequired,
			}),
		}),
	}),
}
  
export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 20
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`