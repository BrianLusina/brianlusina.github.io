import React from 'react'
import { object, string, bool, shape, oneOfType, array } from 'prop-types'
import { StaticQuery, graphql } from "gatsby"
import '@scss/main.scss'
import LayoutWrapper from './LayoutWrapper';

const MainLayout = ({children, displaySidebar, page: { title, description }, tag}) => (
	<StaticQuery
		query={graphql`
			query MainLayoutQuery {
				site {
					siteMetadata {
						title
						about
					}
				}
		
				allMarkdownRemark(
					sort: { fields: [frontmatter___date], order: DESC }
					limit: 5
				) {
					edges {
						node {
							timeToRead
							frontmatter {
								title
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
								}
								tags
							}
						}
					}
				}

				authorsJson {
					social {
						name
						link
					}
				}

				dataJson{
					location {
						town
						country
					}
					email
					emailAlias
				}				
			}
		`}
		render={({ 
			site: { 
				siteMetadata: { title: siteTitle, about } 
			}, 
			allMarkdownRemark: { edges: miniPosts }, 
			authorsJson: { social },
			dataJson: {
				location : {
					town,
					country
				},
				email,
				emailAlias,
			}
		}) => (
			<LayoutWrapper 
				siteTitle={siteTitle}
				title={title}
				displaySidebar={displaySidebar}
				about={about} 
				socialLinks={social}
				town={town}
				country={country}
				email={email}
				emailAlias={emailAlias}
				pageDesc={description}
				tag={tag}
				miniPosts={miniPosts}
			>
				{children}
			</LayoutWrapper>
		)}
	/>
)

MainLayout.defaultProps = {
	displaySidebar: true,
	page: {
		title: null,
		description: null
	},
	tag: null
}

MainLayout.propTypes = {
	children: oneOfType([object, array]),
	displaySidebar: bool,
	page: shape({
		title: string,
		description: string,
	}),
	tag: string,
}

export default MainLayout;