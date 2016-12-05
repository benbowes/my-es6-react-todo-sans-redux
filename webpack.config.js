module.exports = {
  devtool: 'eval',
  entry: './app/index.js',
  output: {
    path: './dist/',
    filename: './app.js'
  },
  module: {
    loaders: [{
      test: /app\/.*\.js?$/,
      exclude: ['node_modules'],
      loader: 'babel'
    },
    {
      test: /app\/.*\.s?css$/,
      exclude: ['node_modules'],
      loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass'
    }]
  },
  resolve: {
    modulesDirectories: [
      'app',
      'node_modules'
    ]
  }
};
