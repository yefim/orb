var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: './scripts/app.js',
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist')
  },
  resolve: {
    modules: ['styles', 'scripts', 'node_modules'],
    extensions: ['.less', '.js']
  },
  module: {
    rules: [
      {
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        }),
        exclude: /node_modules/,
        test: /\.less$/
      },
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        test: /\.js$/,
        options: {
          presets: ['es2015'],
          cacheDirectory: true,
          plugins: ['transform-strict-mode']
        },
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    })
  ]
};
