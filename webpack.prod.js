const { merge } = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common.js');

module.exports = merge(commonConfig, {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Project Starter',
      template: './src/index.html'
    })
  ]
});
