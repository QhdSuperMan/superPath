const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MyPlugin = require('./plugins/MyPlugin')
module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [{
      test: /\.less/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
        },
        {
          loader: 'less-loader',
        },
      ],
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Progressive Web Application',
    }),
    new MyPlugin({
      id: 111
    })
  ],
  // resolveLoader: {
  //   modules: [path.resolve(__dirname, 'loader'), 'node_modules']
  // }
}