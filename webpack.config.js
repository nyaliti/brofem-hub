const path = require('path'); // eslint-disable-line no-unused-vars

module.exports = {
  // ... other webpack configuration options
  resolve: {
    fallback: {
      path: require.resolve('path-browserify'),
      net: require.resolve('net-browserify'),
      fs: require.resolve('graceful-fs'),
    },
  },
};
