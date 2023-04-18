/*
 * @Description: 
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2022-11-20 14:36:29
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-03-27 09:12:13
 */
const { defineConfig } = require("@vue/cli-service");
const path = require("path"); // 引入 path 包
const resolve = (dir) => path.join(__dirname, dir);
// http://101.200.44.16/admin/login/login
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./",
  devServer: {
    // compress: true,
    // historyApiFallback: true,
    // allowedHosts: "all",
    host:'0.0.0.0',
    // client: {
    //   webSocketURL: 'ws://0.0.0.0:6103/ws',
    // },
    // headers: {
    //   'Access-Control-Allow-Origin': '*',
    // },
    proxy: {
      //配置多个跨域
      "/api": {
        target: "http://101.200.44.16", //跨域到的地址
        // secure: BASE_URL.includes('https') ? false : true,
        changeOrigin: true,
        pathRewrite: { "^/api": "/" },
      },
      // '/api2': {
      //   target: *****,
      //   changeOrigin: true,
      //   secure: BASE_URL.includes('https') ? false : true,
      // }
    },
  },
  configureWebpack: (config) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        "@": resolve("src"),
      },
      // fallback: { path: require.resolve("path-browserify") }, //否则会找不到path路径
    };
  },
  pluginOptions: {
    "htmlWebpackPlugin": {
      title: '销易通 - 管理中心'
    },
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [
        // 全局scss变量存储路径
        path.resolve(__dirname, "./src/assets/css/base.scss"),
      ],
    },
  },
});
