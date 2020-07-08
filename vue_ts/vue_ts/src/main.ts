import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$Message = function () {
  console.log('全局方法')
}
// 声明全局方法
declare module 'vue/types/vue' {
  interface Vue {
    form: 'Object';
    $Message: Function;
    $Modal: Function;
  }
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
