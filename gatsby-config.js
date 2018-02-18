module.exports = {
	siteMetadata: {
		title: `LJournal`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sass`,
		`gatsby-plugin-offline`,
		// {
		// 	resolve: `gatsby-source-filesystem`,
		// 	options: {
		// 		name: `src`,
		// 		path: `${__dirname}/src/`
		// 	},
		// },
		{
			resolve: `gatsby-source-filesystem`,
			options:{
				name: `posts`,
				path: `${__dirname}/src/pages/posts/`
			},
		},
		`gatsby-transformer-remark`,
	],
};
