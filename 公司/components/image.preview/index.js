import { createApp } from 'vue'
import previewComponent from './ImagePreview.vue'

const vuePhotoPreview = {
  install (app, option) {
    let opts = option || {}
    const instance = createApp(previewComponent, {
      options: opts
    })
    const wrap = document.createElement('div')
    document.body.appendChild(wrap)
    const $vm = instance.mount(wrap)

    app.provide('$imagePreview',  {
      self: $vm.gallery,
      on: (name, callback) => {
        $vm.eventQueue.push({ name, callback })
      },
      open (params) {
        $vm.openPhotoSwipe(params.items, params.index)
      }
    })
  }
}

export default vuePhotoPreview
