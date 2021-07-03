/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-03-05 10:59:39
 * @LastEditTime: 2021-04-09 11:45:40
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
