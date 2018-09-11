module.exports = {
	siteMetadata: {
		title: "LJournal",
		about: "LJournal is a collection of snippets, ideas and posts about various things ranging from technology, business, money to life."
	},
	plugins: [
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sass",
		"gatsby-plugin-offline",
		"gatsby-transformer-remark",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "posts",
				path: `${__dirname}/src/posts/`
			}
		},
		"gatsby-transformer-json",
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: "data",
				path: `${__dirname}/src/data`
			}
		},
		"gatsby-plugin-offline",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: `LJournal`,
				short_name: `LJournal`,
				start_url: `/`,
				background_color: `#f7f7f7`,
				theme_color: `#191919`,
				display: `minimal-ui`,
			}
		},
		{
			// TODO: get google analytics tracking id
			resolve: "gatsby-plugin-google-analytics",
			options: {
				trackingId: ""
			}
		},
		{
			resolve: `gatsby-plugin-paginate`,
			options: {
				sources: [{
					path: `/page`,
					pageSize: 5,
					template: `${__dirname}/src/templates/page/page.jsx`,
					serialize: results => results.allMarkdownRemark.edges,
					query: `{
							allMarkdownRemark(
								sort: { fields: [frontmatter___date], order: DESC }
								limit: 1000
								filter: {frontmatter: {published: {eq: true}}}
							){
								edges {
									next {
										frontmatter {
										  path
										}
									}
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
											published
										}
									}
								}
							}
						}
					`
				}]
			}
		}
	],
};
