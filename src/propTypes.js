import {
	shape,
	arrayOf,
	string,
	number
} from 'prop-types'

export const blogPropType = shape({
	allMarkdownRemark: shape({
		edges: arrayOf(
			shape({
				node: shape({
					frontmatter: shape({
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
					}),
					timeToRead: number,
					html: string,
				}),
			})
		),
	}),
})
