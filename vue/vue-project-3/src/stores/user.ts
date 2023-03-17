/*
 * @Description: 用户相关的状态
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-02-23 15:45:07
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-03-16 10:41:00
 */
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: '',
  }),
  getters: {
    getToken: (state) => state.token,
  },
  actions: {
    increment(token: string) {
      this.token = token
    },
  },
})
