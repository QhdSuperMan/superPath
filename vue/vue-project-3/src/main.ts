/*
 * @Description: 
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-02-23 15:45:07
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-03-06 17:51:27
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import comp from '@/utils/components'
import locale from "element-plus/lib/locale/lang/zh-cn";
import directives from '@/directives/index'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'

import '@/assets/styles/reset.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus, {locale, size: 'small'})
app.use(comp)
app.use(directives)

app.mount('#app')
