export default function initComponet(app: any): void {
  let modules = import.meta.globEager('../components/*')
  for (const path in modules) {
    let componentEntity = modules[path].default
    // 使用内置的组件名称 进行全局组件注册
    app.component(componentEntity.name, componentEntity)
  }
}

