const path = require('path')
const createPaginatedPages = require('gatsby-paginate')

exports.createPages = ({
	boundActionCreators,
	graphql
}) => {
	const {
		createPage
	} = boundActionCreators
	const blogPostTemplate = path.resolve(`src/templates/BlogPost.jsx`)
	return new Promise((resolve, reject) => {
		graphql(
			`
				{
					allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
			.then(({
				data: {
					allMarkdownRemark: {
						edges: posts
					}
				}
			}) => {
				createPaginatedPages({
					edges: posts,
					createPage,
					pageTemplate: 'src/templates/index.js',
					pageLength: 5,
					context: {},
					pathPrefix: '',
				})

				posts.map(({
					node: {
						frontmatter: {
							path
						}
					}
				}, index) => {
					createPage({
						path,
						component: blogPostTemplate,
						context: {
							prev: index === 0 ? null : posts[index - 1].node,
							next: index === posts.length - 1 ? null : posts[index + 1].node,
						},
					})
				})
				resolve();
				return;
			})
			.catch(error => {
				// eslint ignore next line
				console.error(error)
				reject()
			})
	})
}
