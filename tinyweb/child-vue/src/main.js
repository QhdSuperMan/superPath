/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import singleSpaVue from 'single-spa-vue'
import router from './router'
Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

const appOptions= {
  el: '#vue',
  router,
  render: h => h(App),
}
if (window.singleSpaNavigate) {
  __webpack_public_path__ = "http://localhost:10000/"
}
const vueLifeCycle = singleSpaVue({Vue, appOptions})
console.log(appOptions, singleSpaVue)
export const bootstrap = vueLifeCycle.bootstrap
export const mount = vueLifeCycle.mount
export const unmount = vueLifeCycle.unmount