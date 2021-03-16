/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-03-05 10:59:39
 * @LastEditTime: 2021-03-11 18:15:56
 * @info: 描述
 */
import { RouteRecordRaw } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
import router from './router'
import store from './store'
import 'element3/lib/theme-chalk/index.css'
import '@/style/reset.css'
import Element3 from 'element3'
import initCompent from '@/utils/compents'
import server from '@/server/server'
import '@/permission'
const loadView  = (str:string) => {
  // dsabled
  console.log()
  return () => import('@/views/'+ str)
}

setTimeout(() => {
  var obj:RouteRecordRaw= {
    path: '/test',
    name: 'test',
    component: loadView('index'),
  }
  router.addRoute(obj)
}, 2000)

app.config.globalProperties.$test = Node
app.use(server)
app.use(initCompent).use(store).use(router).use(Element3).mount('#app')
