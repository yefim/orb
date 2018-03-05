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
    extensions: ['.css', '.js']
  },
  module: {
    rules: [
      {
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        }),
        exclude: /node_modules/,
        test: /\.css$/
      },
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        test: /\.js$/,
        options: {
          presets: [
            ['env', {modules: false, targets: {browsers: ['last 2 versions']}}]
          ],
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
