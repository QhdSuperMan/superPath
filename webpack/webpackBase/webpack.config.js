/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-12-06 14:15:41
 * @LastEditTime: 2022-02-11 17:10:24
 * @info: 描述
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const webpack = require('webpack');
const svgToMiniDataURI = require('mini-svg-data-uri');
const miniCssExtractPlugin = require("mini-css-extract-plugin")
const cssMinmizer = require("css-minimizer-webpack-plugin")
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
    // assetModuleFilename: 'images/[hash][ext][query]',
    // library: {
    //   name: 'webpackNumbers',
    //   type: 'umd',
    // },
    // publicPath: '/',
  },
  // externals: {
  //   lodash: {
  //     // commonjs: 'lodash',
  //     // commonjs2: 'lodash',
  //     // amd: 'lodash',
  //     root: '___lodash',
  //   },
  // },
  // optimization: {
  //   usedExports: true,
  // },
  // 代码分割
  // optimization: { 
  //   moduleIds: 'deterministic',
  //   runtimeChunk: 'single',
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'vendors',
  //         chunks: 'all',
  //       },
  //     },
  //   },
  // },
  plugins: [
    new miniCssExtractPlugin(),
    new cssMinmizer(),
    new HtmlWebpackPlugin({
      title: 'Progressive Web Application',
      template: "./index.html",
      minify: {
        collapseWhitespace: true
      }
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [miniCssExtractPlugin.loader, 'css-loader', "postcss-loader"],
        // use: ['css-loader',"postcss-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
        }
      },
      {
        test: /\.html$/i,
        use: {
          loader: 'html-loader',
          options: {
            esModule: false
            // attrs: ["img:src", "img:data-src"]
          }
        }
      },
    ]
  },
  devServer: {
    // contentBase: __dirname + '/dist',
    open: true,
    port: 3000,
    hot: true,
  }
};