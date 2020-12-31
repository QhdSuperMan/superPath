import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import { registerMicroApps, start } from 'qiankun'
import actions from '@/store/global.js'
actions.onGlobalStateChange((state) => {
  store.commit('setToken', state.token)
}, true)
Vue.use(ElementUI);

Vue.config.productionTip = false

const apps = [
  {
    name: 'vueApp',
    entry: '//localhost:10000',
    container: '#vue',
    activeRule: '/vue'
  },
  {
    name: 'reactApp',
    entry: '//localhost:20000',
    container: '#react',
    activeRule: '/react'
  }
]
registerMicroApps(apps)
start()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
