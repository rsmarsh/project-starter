const { merge } = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common.js');

module.exports = merge(commonConfig, {
  mode: 'development',
  devServer: {
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Project Starter - DEV',
      template: './src/index.html'
    }),
    new webpack.ProgressPlugin()
  ]
});
