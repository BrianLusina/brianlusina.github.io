// const gatsby = require.requireActual("gatsby")
// module.exports = { ...gatsby, graphql: jest.fn(), Link: "Link" }
module.exports = {
	graphql: jest.fn(),
	withPrefix: jest.fn(),
	Link: "Link",
	// Link: jest.mock('gatsby', () => {
	// 	const gatsby = require.requireActual("gatsby");
	// 	const Link = {
	// 		Link: gatsby.Link,
	// 	};
	// 	return Link;
	// })
};
