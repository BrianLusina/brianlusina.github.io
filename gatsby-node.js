const path = require('path')
const chunk = require('lodash/chunk')

exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions
	const blogPostTemplate = path.resolve(`src/templates/BlogPost.jsx`)
	return new Promise((resolve, reject) => {
		graphql(
			`
				{
					allMarkdownRemark(
						sort: { fields: [frontmatter___date], order: DESC }
					) {
						edges {
							node {
								html
								id
								timeToRead
								frontmatter {
									title
									subtitle
									excerpt
									path
									category
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
							}
						}
					}
				}
			`
		)
			.then(({ data: { allMarkdownRemark: { edges: posts } }, errors }) => {
				if (errors) {
					errors.forEach(e => console.error(e.toString()))
					return reject(errors)
				}

				posts.map(({ node: { frontmatter: { path } } }, index) => {
					createPage({
						path,
						component: blogPostTemplate,
						context: {
							prev: index === 0 ? null : posts[index - 1].node,
							next: index === posts.length - 1 ? null : posts[index + 1].node,
						},
					})
				})

				const PAGE_SIZE = 5

				let chunks = chunk(posts, PAGE_SIZE)

				chunks.forEach((chunk, index) => {
					createPage({
						path: `/${index + 1}`,
						component: path.resolve('src/templates/Home.jsx'),
						context: {
							skip: index * PAGE_SIZE,
							limit: PAGE_SIZE,
							pageNumber: index + 1,
							hasNextPage: index != chunks.length - 1,
							nextPageLink: `/${index + 2}`,
						},
					})
				})

				resolve()
				return
			})
			.catch(error => {
				// eslint ignore next line
				console.error(error)
				reject()
			})
	})
}
