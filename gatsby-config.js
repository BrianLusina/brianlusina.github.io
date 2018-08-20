module.exports = {
	siteMetadata: {
		title: "LJournal",
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
		}
	],
};
