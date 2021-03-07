/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-03-05 10:59:39
 * @LastEditTime: 2021-03-05 14:01:45
 * @info: 描述
 */
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
import router from './router'
import store from './store'
import 'element3/lib/theme-chalk/index.css'
import Element3 from 'element3'
import initCompent from '@/utils/compents.ts'
app.config.globalProperties.$test = Node
app.use(initCompent).use(store).use(router).use(Element3).mount('#app')
