import React from 'react'
import { object, string, bool, shape, oneOfType, array } from 'prop-types'
import { StaticQuery, graphql } from "gatsby"
import '../../styles/scss/main.scss'
import LayoutWrapper from '../LayoutWrapper';

const PageLayout = ({children, displaySidebar, page: { title, description }, tag}) => (
	<StaticQuery
		query={graphql`
			query PageLayoutQuery {
				site {
					siteMetadata {
						title
						about
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
				miniPosts={[]}
			>
				{children}
			</LayoutWrapper>
		)}
	/>
)

PageLayout.defaultProps = {
	displaySidebar: true,
	page: {
		title: null,
		description: null
	},
	tag: null
}

PageLayout.propTypes = {
	children: oneOfType([object, array]),
	displaySidebar: bool,
	page: shape({
		title: string,
		description: string,
	}),
	tag: string,
}

export default PageLayout;