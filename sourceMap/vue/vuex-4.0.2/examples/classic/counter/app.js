/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-06-18 15:51:20
 * @LastEditTime: 2021-06-22 11:42:55
 * @info: 描述
 */
import { createApp } from 'vue'
import Counter from './Counter.vue'
import store from './store'

const app = createApp(Counter)

app.use(store)
app.mount('#app')
