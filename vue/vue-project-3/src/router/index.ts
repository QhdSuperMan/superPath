/*
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-02-23 15:45:07
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-03-24 14:16:57
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import { dealRouter, baseRoutes } from './utils.js'

let routes = dealRouter(baseRoutes)
console.log('routes: ', routes);

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    ...routes
  ]
})

export default router
