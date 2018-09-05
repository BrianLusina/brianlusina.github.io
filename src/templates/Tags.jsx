import React from 'react';
import { Link, graphql } from "gatsby";
import { shape, string, arrayOf, number} from "prop-types";


export const TagsTemplate = ({ pageContext, data }) => {
	const { tag } = pageContext;
	const { edges, totalCount } = data.allMarkdownRemark;
	const tagHeader = `${totalCount} post${
		totalCount === 1 ? "" : "s"
	} tagged with "${tag}"`
    
	return (
		<div>
			<h1>{tagHeader}</h1>
			<ul>
				{edges.map(({ node }) => {
					const { path, title } = node.frontmatter
					return (
						<li key={path}>
							<Link to={path}>{title}</Link>
						</li>
					)
				})}
			</ul>
			{/*
                This links to a page that does not yet exist.
                We'll come back to it!
              */}
			<Link to="/tags">All tags</Link>
		</div>
	)
}

TagsTemplate.propTypes = {
	pageContext: shape({
		tag: string.isRequired
	}).isRequired,
	data: shape({
		allMarkdownRemark: shape({
			totalCount: number.isRequired,
			edges: arrayOf(
				shape({
					node: shape({
						frontMatter: shape({
							path: string,
							title: string,
							subtitle: string,
							excerpt: string,
							date: string,
							category: string,
							author: shape({
								name: string,
								link: string,
								avatar: string,
							}),
							image: shape({
								feature: string,
								thumbnail: string,
								teaser: string,
								credit: string,
								creditlink: string,
							}),
							tags: arrayOf(string),
						})
					})
				})
			)
		})
	}).isRequired
};

export default TagsTemplate;

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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

