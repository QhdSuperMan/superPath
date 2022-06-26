/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-12-06 14:15:41
 * @LastEditTime: 2022-03-03 09:56:27
 * @info: 描述
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  // mode: 'development',
  mode: 'production',
  // devtool: 'inline-source-map',
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Progressive Web Application',
      template: "./index.html",
    }),
    // new webpack.ProvidePlugin({
    //   _: 'lodash',
    //   join: ['lodash', 'join'],
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['css-loader', "postcss-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['@babel/preset-env']
          }
        }
      },
      // {
      //   test: require.resolve('./src/index.js'),
      //   use: 'imports-loader?wrapper=window',
      // },
      // {
      //   test: require.resolve('./src/globals.js'),
      //   use:
      //     'exports-loader?type=commonjs&exports=file,multiple|helpers.parse|parse',
      // },
      {
        test: /\.html$/i,
        use: {
          loader: 'html-loader',
        }
      },
    ]
  }
};