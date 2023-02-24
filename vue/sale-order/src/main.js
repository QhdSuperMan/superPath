/*
 * @Description: 
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2022-11-20 14:36:29
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-01-29 22:12:32
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css';
import '@/assets/css/antd.less'
import '@/assets/css/index.scss'
import '@/utils/global.js'
import Mixin from '@/utils/mixin'
import { Icon } from 'element-ui';

import Vant from 'vant';
import 'vant/lib/index.css';
import "@/utils/filter.js";

Vue.config.productionTip = false
Vue.mixin(Mixin);
Vue.use(Vant);
Vue.use(Antd)
Vue.use(Icon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
