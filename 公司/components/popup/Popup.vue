<template>
  <div
    :class="$style['qyb-popup']"
    :qyb-popup-custom-attr="customAttr"
  >
    <transition name="qyb-popup" :transition-position="position">
      <div
        :class="$style['qyb-overlay']"
        qyb-overlay
        @click="$emit('update:show', false)"
        v-if="show"
      ></div>
    </transition>

    <transition name="qyb-popup" :transition-position="position">
      <div
        :class="$style['qyb-popup-position']"
        :qyb-popup-position="position"
        :qyb-round="round"
        @click.stop.prevent="() => {}"
        v-if="show"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
import VueTypes from 'vue-types'
import { watch } from 'vue'

import { fixedBody } from '@geekbang/gkui/src/utils'

export default {
  name: 'QybPopup',
  props: {
    customAttr: VueTypes.string.def(''), // 弹出层的自定义属性
    show: VueTypes.bool.def(false), // 是否展示
    round: VueTypes.bool.def(true),
    position: VueTypes.string.def('bottom')
  },
  emits: ['update:show'],
  setup (props, { emit }) {

    function preventBodyDefault (e) {
      e.preventDefault() //阻止默认的处理方式(阻止下拉滑动的效果)
    }

    watch(() => props.show, (newVal) => {
      if (newVal) {
        fixedBody.open()
        document.body.addEventListener('touchmove', preventBodyDefault, {passive: false})
      } else {
        fixedBody.close()
        document.body.removeEventListener('touchmove', preventBodyDefault, {passive: false})
      }
    })

    return {  }
  }
}
</script>

<style lang="scss" scoped>
.qyb-popup-enter-active,
.qyb-popup-leave-active {
  transition: all .2s ease-in-out;
}
.qyb-popup-enter-from,
.qyb-popup-leave-to {
  &[transition-position=bottom]
  {
    opacity: 0;
    transform: translateY(50px);
  }

  &[transition-position=center]
  {
    opacity: 0;
    transform: translateY(50px);
  }
}
</style>>

<style lang="scss" module>

.qyb-popup {
  z-index: 2024;

  & [qyb-popup-position=bottom] {
    bottom: 0px; left: 0px;
    width: 100%;
    @include safePadding();

    &[qyb-round=true] {
      border-radius: 14px 14px 0px 0px;
      overflow: hidden;
    }
  }

  & [qyb-popup-position=center] {
    top: 50%; left:50%;
    width: 330px;
    transform: translate(-50%, -50%);

    &[qyb-round=true] {
      border-radius: 14px;
      overflow: hidden;
    }
  }
}

.qyb-overlay {
  position: fixed; top: 0; left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}

.qyb-popup-position {
  position: fixed;
  background-color: white;
}

</style>
