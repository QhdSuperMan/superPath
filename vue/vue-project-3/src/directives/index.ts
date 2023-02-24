import type { App } from 'vue'
import common from './common'
console.log('common: ', common);

interface DirectivesType {
  [propName: string]: any;
}

const directives: DirectivesType = {
  ...common
}

// 自定义指令
export default function install(app: App) {
  Object.keys(directives).forEach(key => {
    app.directive(key, directives[key as string])
  })
}

