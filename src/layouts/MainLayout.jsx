import React from 'react'
import { object, string, bool } from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Menu from '../components/menu/Menu'
import Sidebar from '../components/Sidebar'
import favicon from '../assets/favicon.ico'
import { StaticQuery, graphql } from "gatsby"
import '../styles/scss/main.scss'

const MainLayoutWrapper = ({children, displaySidebar, pageTitle}) => (
	<StaticQuery
		query={graphql`
			query RootLayoutQuery {
				site {
					siteMetadata {
						title
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
			}
		`}
		render={({ site: { siteMetadata: { title } }, allMarkdownRemark: { edges: miniPosts }}) => (
			<>
				<Helmet
					title={pageTitle ? `${title} - ${pageTitle}` : title}
					meta={[
						{ name: 'description', content: 'LJournal, a simple blog' },
						{
							name: 'keywords',
							content: 'data, Lusina, Brian Lusina, code, bugs, algorithms',
						},
					]}
					link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }]}
				/>
				<div id="wrapper">
					<Header />
					<Menu />
					<div id="main">{children}</div>
					{ displaySidebar && <Sidebar miniPosts={miniPosts} /> }
				</div>
			</>
		)}
	/>
)

MainLayoutWrapper.defaultProps = {
	displaySidebar: true
}

/**
 * Prop Type validation
 */
MainLayoutWrapper.propTypes = {
	children: object,
	displaySidebar: bool,
	pageTitle: string,
}

export default MainLayoutWrapper
