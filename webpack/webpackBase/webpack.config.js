const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const webpack = require('webpack');
const svgToMiniDataURI = require('mini-svg-data-uri');
module.exports = {
  mode: 'development',

  devtool: 'inline-source-map',
  // entry: {
  //   index: './src/index.js',
  //   // print: './src/print.js',
  // },
  entry: {
    // polyfills: './src/polyfills',
    index: './src/index.js',
  },
  output: {
    // filename: 'bundle.js',
    // filename: '[name].[contenthash].js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: 'images/[hash][ext][query]'
    // library: {
    //   name: 'webpackNumbers',
    //   type: 'umd',
    // },
    // publicPath: '/',
  },
  // externals: {
  //   lodash: {
  //     commonjs: 'lodash',
  //     commonjs2: 'lodash',
  //     amd: 'lodash',
  //     root: '_',
  //   },
  // },
  devServer: {
    contentBase: './dist',
    hot: true,
  },
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
    new webpack.ProvidePlugin({ // 全局模块 代码
      join: ['lodash', 'join'],
    }),
    new HtmlWebpackPlugin({
      // title: 'Output Management',
      title: 'Progressive Web Application',
    }),
    // new WorkboxPlugin.GenerateSW({
    //   // 这些选项帮助快速启用 ServiceWorkers
    //   // 不允许遗留任何“旧的” ServiceWorkers
    //   clientsClaim: true,
    //   skipWaiting: true,
    // })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg/,
        type: 'asset/inline',
        generator: {
          dataUrl: content => {
            content = content.toString();
            return svgToMiniDataURI(content);
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: require.resolve('./src/globals.js'),
        use:
          'exports-loader?type=commonjs&exports=file,multiple|helpers.parse|parse',
      },
    ]
  }
};