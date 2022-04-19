const { merge } = require('webpack-merge');
const common = require('./webpack.common.js')

module.exports = merge(common , {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './public',
    hot: true   // Hot reloading default: true
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: '[name].[hash][ext]',
          publicPath: '/medias/',
          outputPath: './medias/'
        }
      },
    ]
  }
})