/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false


var root = null
function render() {
  root = new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
}
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
if (__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
export async function bootstrap (prop) {
  
}
export async function mount (prop) {
  Vue.prototype.$baseData = prop
  render(prop)
}
export async function unmount () { 
  root.$destroy()
}


