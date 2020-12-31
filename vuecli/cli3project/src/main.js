import Vue from 'vue'
import App from './App.vue'
console.log(process.env.VUE_APP_TITLE)
console.log(process.env.NODE_ENV)
console.log(process.env.PPPPP)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
