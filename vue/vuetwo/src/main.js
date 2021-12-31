/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-12-22 15:29:30
 * @LastEditTime: 2021-12-22 15:51:57
 * @info: 描述
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.$axios  = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
