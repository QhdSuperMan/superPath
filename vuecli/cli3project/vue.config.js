/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2020-11-24 17:56:24
 * @LastEditTime: 2021-03-02 17:39:26
 * @info: 描述
 */
module.exports = {
  //  基本路径
  publicPath: './',
  //  构建时的输出目录
  outputDir: "dist",
  //  放置静态资源的目录
  assetsDir: "./static",
  devServer: {
    proxy: 'http://localhost:3000'
  }
}