import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
Vue.use(Element)
import '@/styles/index.less'
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
