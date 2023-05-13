const path = require('path'); // eslint-disable-line no-unused-vars

module.exports = {
  resolve: {
    fallback: {
      path: require.resolve('path-browserify'),
      net: require.resolve('net-browserify'),
    },
  },
};
