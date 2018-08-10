const HtmlWebPackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  output: {
    filename: '[name].[chunkhash].js'
  },
  mode: 'production',
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin()
    ]
  }
});
