const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin(),
    new HtmlWebPackPlugin({
      template: 'src/index.html',
      inlineSource: '.(js|css)$',
      minify: {collapseWhitespace: true}
    }),
    new HtmlWebpackInlineSourcePlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {loader: MiniCssExtractPlugin.loader},
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin()
    ]
  }
};
