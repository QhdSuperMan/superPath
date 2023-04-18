/*
 * @Description: 
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-03-17 14:10:05
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-04-12 17:02:03
 */

import { defineAsyncComponent } from 'vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import type { App } from 'vue'

const components = import.meta.glob('@/components/global/*.vue'); 
export default function install(app: App) {
  // 全局私有组件
  for (const [key, value] of Object.entries(components)) {
    const name = key.slice(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));
    app.component(name, defineAsyncComponent<any>(value))
  }
  // element icon 组件
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}

