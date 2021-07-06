/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-07-05 14:34:33
 * @LastEditTime: 2021-07-05 14:42:38
 * @info: 描述
 */
const express = require("express");
const app = express();
const Vue = require("vue");
const vueServerRender = require("vue-server-renderer").createRenderer();

app.get('*', (request, response) => {
  const vueApp = new Vue({
    data: {
      message: "hello ssr"
    },
    template: `<h1>{{message}}</h1>`
  });
  response.status(200);
  response.setHeader("Content-type", "text/html;charset-utf-8");
  vueServerRender.renderToString(vueApp).then((html) => {
    response.end(html);
  }).catch(err => console.log(err))
})

app.listen(3001, () => {
  console.log('服务已开启')
})