/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-03-02 16:27:08
 * @LastEditTime: 2021-03-02 16:38:57
 * @info: 描述
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import axios from  '@/api/server.js'
Vue.prototype.$axios = axios


Vue.use(Element)
import '@/styles/index.less'
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
