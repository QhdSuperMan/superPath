/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-07-06 09:59:34
 * @LastEditTime: 2021-07-06 10:47:31
 * @info: 描述
 */
const vueRouter = require("vue-router");
const Vue = require("vue");

Vue.use(vueRouter);

module.exports = () => {
  return new vueRouter({
    mode: "history",
    routes: [
      {
        path: "/",
        component: {
          template: `<h1>this is home page</h1>`
        },
        name: "home"
      },
      {
        path: "/about",
        component: {
          template: `<h1>this is about page</h1>`
        },
        name: "about"
      }
    ]
  })
}