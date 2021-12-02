// your app's webpack.config.js
const custom = require('../config/webpack.config.js');

module.exports = {
  stories: [
    '../src/**/*.story.mdx',
    '../src/**/*.story.@(js|jsx|ts|tsx)',
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  babel: () => {},
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/preset-scss'],
  // Extend Webpack config
  // Reference: https://storybook.js.org/docs/riot/configure/webpack
  webpackFinal: (config) => {
    const appWebPack = custom('development');
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: appWebPack.resolve.alias,
      },
      module: {
        ...config.module,
        ...appWebPack.module,
      },
      ...appWebPack,
    };
  },
};
