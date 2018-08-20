const path = require('path')
const times = require('lodash/times')

const paginationPath = (path, page, totalPages) => {
	if (page === 0) {
		return path
	} else if (page < 0 || page >= totalPages) {
		return ''
	} else {
		return `${path}/${page + 1}`
	}
}

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
			.then(({ data: { allMarkdownRemark: { edges: posts } } }) => {
				const blogPostsCount = posts.length
				const blogPostsPerPage = 5
				const paginatedPagesCount = Math.ceil(blogPostsCount / blogPostsPerPage)

				times(paginatedPagesCount, index => {
					createPage({
						path: paginationPath('/', index, paginatedPagesCount),
						component: path.resolve('src/templates/Home.jsx'),
						context: {
							skip: index * blogPostsPerPage,
							limit: blogPostsPerPage,
							paginatedPagesCount,
							prevPath: paginationPath('', index - 1, paginatedPagesCount),
							nextPath: paginationPath('', index + 1, paginatedPagesCount),
						},
					})
				})

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
