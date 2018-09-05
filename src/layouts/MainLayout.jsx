import React from 'react'
import { object, string, bool, shape, oneOfType, array } from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header/Header'
import Menu from '../components/menu/Menu'
import Sidebar from '../components/Sidebar'
import favicon from '../assets/favicon.ico'
import { StaticQuery, graphql } from "gatsby"
import '../styles/scss/main.scss'

const MainLayoutWrapper = ({children, displaySidebar, page: { title, description }, tag}) => (
	<StaticQuery
		query={graphql`
			query RootLayoutQuery {
				site {
					siteMetadata {
						title
						about
					}
				}
		
				allMarkdownRemark(
					sort: { fields: [frontmatter___date], order: DESC }
					limit: 10
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
			<>
				<Helmet
					title={title ? `${title} | ${siteTitle}` : siteTitle}
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
					{ 
						displaySidebar && 
						<Sidebar 
							miniPosts={miniPosts} 
							about={about} 
							socialLinks={social}
							contact={{
								town, 
								country,
								email,
								emailAlias,
							}}
							pageDesc={description}
							tag={tag}
						/>
					}
				</div>
			</>
		)}
	/>
)

MainLayoutWrapper.defaultProps = {
	displaySidebar: true,
	page: {
		title: null,
		description: null
	},
	tag: null
}

MainLayoutWrapper.propTypes = {
	children: oneOfType([object, array]),
	displaySidebar: bool,
	page: shape({
		title: string,
		description: string,
	}),
	tag: string,
}

export default MainLayoutWrapper;