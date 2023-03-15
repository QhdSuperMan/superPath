/*
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-02-23 15:45:07
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-03-07 15:13:16
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import { dealRouter } from './utils.js'

const routePages: any = import.meta.glob('./page/*.ts', { eager: true })
let routes = []
for (const item in routePages) {
  routes.push(routePages[item].default)
}
routes = dealRouter(routes)
console.log('routes: ', routes);


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    ...routes
  ]
})

export default router
