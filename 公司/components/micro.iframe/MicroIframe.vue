<template>
  <gkModalLayer
    :visible="currentVisible"
  >
    <template v-slot:content>
      <div :class="$style['micro-iframe']">
        <transition name="fade">
          <iframe
            ref="refIframe"
            :src="iframeSrc"
            :class="$style['micro-iframe']"
            v-show="iframeLoaded"
          ></iframe>
        </transition>
      </div>
    </template>
  </gkModalLayer>
</template>

<script>
import { ref, computed, onUnmounted, nextTick } from 'vue'

import { addEventListener } from '@geekbang/gkui/src/utils/helper.js'
import { useModalEvent } from '@geekbang/gkui/components/modal/modal.helper.js'
import { gkModalLayer, gkToast } from '@geekbang/gkui'

export default {
  name: 'micro-iframe',
  components: {
    gkModalLayer
  },
  setup (props, {emit}) {
    const {
      visible,
      show,
      slotClose,
      slotSubmit,
      slotCancel,
      close
    } = useModalEvent(props, emit)

    const refIframe = ref(null)
    const scene = ref('')
    const iframeLoaded = ref(false)

    let actionListener = null

    const currentVisible = visible

    const accountOrigin = {
      'https://account.geekbang.org': 1,
      'https://account.geekbang.com': 1
    }

    const iframeSrc = computed(() => {
      switch (scene.value) {
        case 'modifypwd':
          return 'https://account.geekbang.org/member/automodifypwd'
        case 'cellphone':
          return 'https://account.geekbang.org/member/modifyphone'
        case 'destroy':
          return 'https://account.geekbang.org/member/destroy/preview'
        default:
          return ''
      }
    })

    // 显示 iframe
    const handleShow = (option) => {
      scene.value = option.scene
      return show(option).ready(() => {
        gkToast.loading('加载中...').then(({close}) => {
          nextTick(() => {
            refIframe.value?.addEventListener('load', () => {
              refIframe.value.contentWindow.postMessage('iframeInit', '*')

              close && close()

              iframeLoaded.value = true
            })
          })
        })
      })
    }

    /**
     * 接收 iframe 中的事件
     * @param {Object}  originMap  postMessage 的白名单
     * @param {Event}   event      postMessage.event
     */
    const handlePostAction = (originMap, event) => {
      const {origin, data} = event

      if (!originMap[origin]) {
        return
      }

      switch (data) {
        case 'submit':
          slotSubmit()

          break
        case 'cancel':
          slotCancel()

          break
        case 'close':
          slotClose()

          break
        default:
          break
      }

      iframeLoaded.value = false
    }

    // 绑定接受 iframe 通信事件
    actionListener = addEventListener(window, 'message', event => {
      // 账户中心域下的页面
      handlePostAction(accountOrigin, event)
    }, false)

    onUnmounted(() => {
      actionListener?.remove()
    })

    return {
      refIframe,
      scene,
      iframeLoaded,
      currentVisible,
      iframeSrc,
      show: handleShow,
      close
    }
  }
}
</script>

<style lang="scss" module>
.micro-iframe {
  width: 100vw; height: 100vh;
  border: none;
}
</style>
