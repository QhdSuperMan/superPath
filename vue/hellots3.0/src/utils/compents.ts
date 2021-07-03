export default function initComponet(app: any): void {
  let contexts = require.context('../components/', true, /\.vue$/) // 集采全局组件
  contexts.keys().forEach(component => {
    let componentEntity = contexts(component).default
    // 使用内置的组件名称 进行全局组件注册
    app.component(componentEntity.name, componentEntity)
  })
}
