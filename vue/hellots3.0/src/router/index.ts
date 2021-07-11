/*
 * @Author: 吴玉荣
 * @LastEditors: Please set LastEditors
 * @Date: 2021-03-09 10:37:52
 * @LastEditTime: 2021-07-05 23:56:37
 * @info: 描述
 */
import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
import layout from '@/layout/index.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    name: 'Home',
    redirect: '/home',
    component: layout,
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../layout/Home.vue'),
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/layout/login.vue'),
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
