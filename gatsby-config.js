require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'LJournal',
    about:
      'LJournal is a collection of snippets, ideas and posts about various things ranging from technology, business, money to life.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `LJournal`,
        short_name: `LJournal`,
        start_url: `/`,
        background_color: `#f7f7f7`,
        theme_color: `#191919`,
        display: `minimal-ui`,
        icon: 'src/assets/favicon.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts/`,
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.ANALYTICS_TRACKING_ID || 'UA-XXXX-Y',
        // Puts tracking script in the head instead of the body
        head: true,
        // IP anonymization for GDPR compliance
        anonymize: true,
        // Disable analytics for users with `Do Not Track` enabled
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**'],
      },
    },
    {
      resolve: `gatsby-plugin-paginate`,
      options: {
        sources: [
          {
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
					`,
          },
        ],
      },
    },
    // {
    // 	resolve: "gatsby-source-graphql",
    // 	options: {
    // 		typeName: "Github",
    // 		fieldName: "viewer",
    // 		url: "https://api.github.com/graphql",
    // 		headers: {
    // 			authorization: `Bearer ${process.env.GATSBY_GITHUB_PERSONAL_ACCESS_TOKEN}`
    // 		}

    // 	}
    // },
    // Until this PR (https://github.com/andrew-codes/gatsby-plugin-elasticlunr-search/pull/14) is closed
    // this shall be a pending feature until there is support for Gatsby v2
    // {
    // 	resolve: `@andrew-codes/gatsby-plugin-elasticlunr-search`,
    // 	options: {
    // 		fields: [
    // 			'title',
    // 			'tags',
    // 			'category'
    // 		],
    // 		resolvers: {
    // 			// For any node of type MarkdownRemark, list how to resolve the fields' values
    // 			MarkdownRemark: {
    // 				title: node => node.frontmatter.title,
    // 				tags: node => node.frontmatter.tags,
    // 				category: node => node.frontmatter.category
    // 			},
    // 		}
    // 	}
    // }
    // {
    // gatsby-plugin-lunr issues
    // 	resolve: "gatsby-plugin-lunr",
    // 	options: {
    // 		languages: ['en'],
    // 		fields: [{
    // 			name: 'title',
    // 			store: true,
    // 			attributes: {
    // 				boost: 20
    // 			}
    // 		},
    // 		{
    // 			name: 'subtitle',
    // 			store: true,
    // 		},
    // 		{
    // 			name: "tags",
    // 			store: true,
    // 		},
    // 		{
    // 			name: "category",
    // 			store: true,
    // 		},
    // 		{
    // 			name: 'excerpt',
    // 			store: true
    // 		},
    // 		{
    // 			name: 'content',
    // 			store: true
    // 		},
    // 		{
    // 			name: 'url',
    // 			store: true
    // 		},
    // 		],
    // 		filterNodes: node => !isNil(node.frontmatter),
    // 		resolvers: {
    // 			MarkdownRemark: {
    // 				title: node => node.frontmatter.title,
    // 				tags: node => node.frontmatter.tags,
    // 				category: node => node.frontmatter.category,
    // 				excerpt: node => node.frontmatter.excerpt,
    // 				content: node => node.rawMarkdownBody,
    // 				url: (node) => node.frontmatter.path,
    // 			}
    // 		}
    // 	}
    // }
  ],
}
