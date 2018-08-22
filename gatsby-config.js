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
		}
	],
};
