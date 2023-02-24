/*
 * @Description: 粘贴板
 * @Author: ZY
 * @Date: 2020-12-28 10:39:21
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-02-24 16:06:42
 */
// Inspired by https://github.com/Inndy/vue-clipboard2
import Clipboard from 'clipboard'
import type { Directive } from 'vue'

if (!Clipboard) {
  throw new Error('you should npm install `clipboard` --save at first ')
}

let successCallback: Function | null
let errorCallback: Function | null
let clipboardInstance: Clipboard

export const clipboard: Directive = {
  beforeMount(el, binding) {
    if (binding.arg === 'success') {
      successCallback = binding.value
    } else if (binding.arg === 'error') {
      errorCallback = binding.value
    } else {
      clipboardInstance = new Clipboard(el, {
        text() { return binding.value },
        action() { return binding.arg === 'cut' ? 'cut' : 'copy' }
      })
      clipboardInstance.on('success', e => {
        const callback = successCallback
        callback && callback(e)
      })
      clipboardInstance.on('error', e => {
        const callback = errorCallback
        callback && callback(e)
      })
    }
  },

  beforeUpdate(el, binding) {
    if (binding.arg === 'success') {
      successCallback = binding.value
    } else if (binding.arg === 'error') {
      errorCallback = binding.value
    } else {
      clipboardInstance = new Clipboard(el, {
        text() { return binding.value },
        action() { return binding.arg === 'cut' ? 'cut' : 'copy' }
      })
    }
  },

  beforeUnmount(_, binding) {
    if (binding.arg === 'success') {
      successCallback = null
    } else if (binding.arg === 'error') {
      errorCallback = null
    } else {
      if (clipboardInstance) {
        clipboardInstance.destroy()
      }
      clipboardInstance = null
    }
  }
}
