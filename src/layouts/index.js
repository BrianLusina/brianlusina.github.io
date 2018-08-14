import React from 'react'
import { func, shape, string, number, arrayOf } from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Menu from '../components/menu/Menu'
import Sidebar from '../components/Sidebar'
import favicon from '../assets/favicon.ico'
import '../styles/scss/main.scss'

const TemplateWrapper = ({
	children,
	data: {
		site: {
			siteMetadata: { title },
		},
		allMarkdownRemark: { edges: miniPosts },
	},
}) => (
	<div>
		<Helmet
			title={title}
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
			<div id="main">{children()}</div>
			<Sidebar miniPosts={miniPosts} />
		</div>
	</div>
)

TemplateWrapper.defaultProps = {
	data: {
		site: {
			siteMetadata: {
				title: 'LJournal',
			},
		},
	},
}

/**
 * Prop Type validation
 */
TemplateWrapper.propTypes = {
	children: func,
	data: shape({
		site: {
			siteMetadata: {
				title: string,
			},
		},
		allMarkdownRemark: shape({
			edges: shape({
				node: shape({
					timeToRead: number,
					frontmatter: shape({
						title: string,
						path: string,
						date: string,
						author: shape({
							name: string,
							link: string,
							avatar: string,
						}),
						image: shape({
							feature: string,
							thumbnail: string,
							teaser: string,
						}),
						tags: arrayOf(string),
					}),
				}),
			}),
		}),
	}),
}

// eslint-disable-next-line no-undef
export const query = graphql`
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
`

export default TemplateWrapper
