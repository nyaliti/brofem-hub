const path = require('path'); // eslint-disable-line no-unused-vars

module.exports = {
  resolve: {
    fallback: {
      'path': require.resolve('path-browserify'),
      'util': require.resolve('util/'),
      'url': require.resolve('url/'),
    },
  },
};
