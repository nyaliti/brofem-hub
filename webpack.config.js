module.exports = {
  resolve: {
    fallback: {
      'util': require.resolve('util/'),
      'url': require.resolve('url/'),
    },
  },
};

