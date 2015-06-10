var path = require('path'),
assets_path = path.join('client');
dst_path = path.join('app', 'assets', 'javascripts');
var config = {
  context: path.resolve(assets_path),
  entry: {
    CommentEntry: 'entries/comment-entry.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(dst_path)
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
