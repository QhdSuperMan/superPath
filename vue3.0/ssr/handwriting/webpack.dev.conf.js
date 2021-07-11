/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-07-06 10:44:58
 * @LastEditTime: 2021-07-06 10:45:06
 * @info: 描述
 */
const vueSSRClientPlugin = require("vue-server-renderer/client-plugin");
const devWebpackConfig = merge(baseWebpackConfig, {
  plugins: [
    new vueSSRClientPlugin()
  ]
});