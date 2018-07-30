import React from 'react'
import { func, shape, string } from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Menu from '../components/menu/Menu'
import Sidebar from '../components/Sidebar'
import '../styles/scss/main.scss'

const TemplateWrapper = ({
	children,
	data: {
		site: {
			siteMetadata: { title },
		},
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
		/>
		<div id="wrapper">
			<Header />
			<Menu />
			<div id="main">{children()}</div>
			<Sidebar />
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
	}),
}

/**
 * GraphQl query
 */
// eslint-disable-next-line no-undef
export const query = graphql`
	query RootLayoutQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
`

export default TemplateWrapper
