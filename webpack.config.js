var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname,

  devtool: '#cheap-module-eval-source-map',

  entry: {
    'app':  './scripts/app.js',
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },

  resolve: {
    // Absolute path that contains modules
    root: __dirname,

    // Directory names to be searched for modules
    modulesDirectories: ['images', 'styles', 'scripts', 'node_modules'],

    extensions: ['', '.js']
  },

  module: {
    loaders: [
      {
        loader: 'url',
        exclude: /node_modules/,
        test: /\.png$/
      },
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
