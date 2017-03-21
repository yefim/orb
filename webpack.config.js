var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname,
  entry: './scripts/app.js',
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist')
  },
  resolve: {
    root: __dirname,
    modulesDirectories: ['styles', 'scripts', 'node_modules'],
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader'),
        exclude: /node_modules/,
        test: /\.less$/
      },
      {
        loader: 'babel',
        exclude: /node_modules/,
        test: /\.js$/,
        query: {
          presets: ['es2015'],
          cacheDirectory: true,
          plugins: ['transform-strict-mode']
        },
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css', {
      allChunks: true
    })
  ]
};
