/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-12-22 15:29:30
 * @LastEditTime: 2022-02-08 15:58:52
 * @info: 描述
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$axios  = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


