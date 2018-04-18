const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.config');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  plugins: [
    new webpack.NamedModulesPlugin(),
  ],
  mode: 'development',
  devServer: {
    proxy: {
      '/topics': {
        target: 'http://localhost:3005/topics',
        changeOrigin: true,
        secure: false
      }
    }
  },
})
