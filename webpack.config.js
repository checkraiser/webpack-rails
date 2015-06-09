var path = require('path'),
assets_path = path.join('client');

var config = {
  context: path.resolve(assets_path),
  entry: 'entry.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(assets_path)
  },
  externals: {
    jquery: 'var jQuery'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: path.resolve(assets_path)
  },
  module: {
    loaders: [
      { test: /\.coffee$/, loader: 'coffee-loader' },
      { test: /\.js$/, loader: 'jsx-loader?harmony' } // loaders can take parameters as a querystring
    ]
  }
};

module.exports = config;
