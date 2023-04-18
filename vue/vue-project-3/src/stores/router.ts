/*
 * @Description: 路由相关
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-02-23 15:45:07
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-03-24 11:33:46
 */
import { defineStore } from 'pinia'
import { menuRoutes } from '@/router/utils.js'

export const useRouterStore = defineStore('router', {
  state: () => ({
    menu: menuRoutes,
  }),
  getters: {
    getMenu: (state) => state.menu,
  },
  actions: {
    increment(menu: Array<any>) {
      this.menu = menu
    },
  },
})
