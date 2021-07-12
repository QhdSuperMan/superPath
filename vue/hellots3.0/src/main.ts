/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-03-05 10:59:39
 * @LastEditTime: 2021-07-02 10:54:51
 * @info: 描述
 */
// @ts-nocheck
import { createApp } from 'vue'
import { devtools } from '@/devtools.ts';
import App from './App.vue'
const app = createApp(App)
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import '@/style/reset.css'
import initCompent from '@/utils/compents'
import server from '@/server/index'
import '@/permission'
app.config.globalProperties.$test = Node


app.use(server)
app.use(devtools).use(initCompent).use(store).use(router).use(ElementPlus).mount('#app')

// if (process.env.NODE_ENV === 'development') {
//   if ('__VUE_DEVTOOLS_GLOBAL_HOOK__' in window) {
//   // 这里__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue赋值一个createApp实例
//     window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app
//   }
//   app.config.devtools = true
// }
