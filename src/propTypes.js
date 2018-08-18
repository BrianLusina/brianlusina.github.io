import {
	shape,
	arrayOf,
	string,
	number,
	object,
	func
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
						path: string,
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

export const locationPropType = shape({
	ancestorOrigins: object,
	assign: func,
	hash: string,
	host: string,
	hostname: string,
	href: string,
	key: string,
	origin: string,
	pathname: string,
	port: string,
	protocol: string,
	reload: func,
	replace: func,
	search: string,
	state: object,
	toString: func,
})
