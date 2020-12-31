import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { registerApplication, start } from "single-spa"
Vue.config.productionTip = false
async function loadScript (url) {
  return new Promise((resolve,reject) => {
      var script = document.createElement('script')
      script.src = url
      script.onload = resolve
      script.onerror = reject
      document.body.appendChild(script)
  })
}
registerApplication('myVueApp', async () => {
  await loadScript("http://localhost:10000/js/chunk-vendors.js")
  await loadScript("http://localhost:10000/js/app.js")
  console.log(window.singleVue)
  return window.singleVue
},
  location => location.pathname.startsWith('/vue') // 子应用
)
start()
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
