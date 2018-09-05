const path = require('path')
const chunk = require('lodash/chunk')
const each = require('lodash/each');
const get = require("lodash/get");
const uniq = require("lodash/uniq");
const kebabCase = require("lodash/kebabCase");

exports.createPages = ({
	actions,
	graphql
}) => {
	const {
		createPage
	} = actions
	const blogPostTemplate = path.resolve(`src/templates/BlogPost.jsx`)
	const tagTemplate = path.resolve(`src/templates/Tags.jsx`);
	const homeTemplate = path.resolve(`src/templates/Home.jsx`);

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
			.then(({
				data: {
					allMarkdownRemark: {
						edges: posts
					}
				},
				errors
			}) => {
				if (errors) {
					errors.forEach(e => console.error(e.toString()))
					return reject(errors)
				}

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

				// tag pages
				let tags = [];
				each(posts, post => {
					if (get(post, "node.frontmatter.tags")) {
						tags = tags.concat(post.node.frontmatter.tags)
					}
				});

				// eliminate duplicate tags
				tags = uniq(tags);

				// make tag pages
				tags.forEach(tag => {
					createPage({
						path: `/tags/${kebabCase(tag)}/`,
						component: tagTemplate,
						context: {
							tag
						}
					})
				});

				const PAGE_SIZE = 5

				let chunks = chunk(posts, PAGE_SIZE)

				chunks.forEach((chunk, index) => {
					createPage({
						path: `/${index + 1}`,
						component: homeTemplate,
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
