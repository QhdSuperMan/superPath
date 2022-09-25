/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-12-06 14:15:41
 * @LastEditTime: 2022-03-03 09:56:27
 * @info: 描述
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  // mode: 'development',
  mode: "development",
  // devtool: 'inline-source-map',
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    new HtmlWebpackPlugin({
      title: "Progressive Web Application",
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
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024, // 4kb
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          "thread-loader",
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              presets: ["@babel/preset-env"],
            },
          },
        ],
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
          loader: "html-loader",
        },
      },
    ],
  },
};
