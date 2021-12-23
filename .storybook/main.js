module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    '@storybook/addon-actions'
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  },
  //Web pack below to resolve styling issue between Mui and storybook
  //See the following issue and comment for more info on problem and solution: https://github.com/mui-org/material-ui/issues/24282#issuecomment-951015101
  webpackFinal(config) {
    delete config.resolve.alias['emotion-theming'];
    delete config.resolve.alias['@emotion/styled'];
    delete config.resolve.alias['@emotion/core'];
    return config;
  }
}