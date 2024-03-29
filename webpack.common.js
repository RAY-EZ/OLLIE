/** @type {import('webpack').Configuration} */
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const htmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');


const PUBLIC_DIR = path.resolve(__dirname, 'public')
const SRC_DIR = path.join(__dirname, 'src');

module.exports = {
  entry:[
    path.join(SRC_DIR, 'index.js'),
    path.join(SRC_DIR, 'index.scss')
  ],
  module:{
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "/fonts/"
            }
          },
          // "style-loader",
          "css-loader",
          // { loader : "postcss-loader", 
          //   options: { postcssOptions: {
          //     plugins: [["autoprefixer"]]
          //   }}
          // },
          "resolve-url-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap : true
            }
          }
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: '[name].[hash][ext]',
          publicPath: '/fonts/',
          outputPath: './fonts'
        }
      },
    ]
  },
  output: {
    filename: 'bundle.js',
    path: PUBLIC_DIR,
    // publicPath: '/public',
    // assetModuleFilename: 'medias/[name].[hash][ext]',
    clean: true
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new htmlWebPackPlugin({ 
      template: path.join(SRC_DIR, 'index.html') 
    }),
  ]
  
}