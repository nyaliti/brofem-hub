// eslint-disable-next-line no-unused-vars
const path = require('path');
const webpack = require('webpack');

module.exports = {
  // ... other webpack configuration options
  resolve: {
    fallback: {
      path: require.resolve('path-browserify'),
      net: require.resolve('net-browserify'),
      fs: false,
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
};
