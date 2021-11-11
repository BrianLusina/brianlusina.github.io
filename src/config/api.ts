export default {
    cms: {
        token: process.env.CMS_TOKEN,
        graphQlUrl: process.env.CMS_GRAPHQL_URL || 'https://graphql.contentful.com',
        restApiUrl: process.env.CMS_REST_API_URL || 'https://cdn.contentful.com',
        spaceId: process.env.CMS_SPACE_ID,
        environment: process.env.CMS_ENVIRONMENT || 'master',
        preview: process.env.CMS_PREVIEW === 'true',
        previewRestApiUrl: process.env.CMS_PREVIEW_REST_API_URL || 'https://preview.contentful.com',
    }
};