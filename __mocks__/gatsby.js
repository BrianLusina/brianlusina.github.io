const gatsby = require.requireActual("gatsby")
module.exports = { ...gatsby, graphql: jest.fn(), Link: "Link" }