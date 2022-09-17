<template>
  <gkModalLayer
    v-model:visible="currentVisible"
    :modalAlias="custom"
    v-bind="{...$attrs}"
    :className="$style['common-modal']"
    :layerClose="layerClose"
    :position="position"
    @layer:click="handleLayerClick"
  >
    <template #content>
      <div modal-container :class="$style['modal-container']">
        <div :class="$style['close']" @click="onClose" v-if="useClose">
          <span icon class="iconfont">&#xe76c;</span>
        </div>
        <h3 modal-title :class="$style['modal-title']" v-if="title">{{ title }}</h3>
        <div modal-main :class="$style['modal-main']">
          <slot></slot>
        </div>

        <slot name="footer">
          <div modal-footer :class="$style['modal-footer']">
            <gkButton 
              modal-close-btn 
              color="common-light-blue" 
              size="common-big" 
              @click="onCancel"
              v-if="useCancel"
            >
              取消
            </gkButton>
            <gkButton 
              modal-submit-btn
              color="common-blue"
              size="common-big"
              useLock 
              @click="onSubmit"
            >
              {{submitText}}
            </gkButton>
          </div>
        </slot>
      </div>
    </template>
  </gkModalLayer>
</template>

<script>
import VueTypes from 'vue-types'

import { gkModalLayer, gkButton } from '@geekbang/gkui'
import { useModalEvent } from '@geekbang/gkui/components/modal/modal.helper.js'
import modalEmits from '@geekbang/gkui/components/modal/modal.emits'

export default {
  name: 'CommonModal',
  components: {
    gkModalLayer,
    gkButton
  },
  props: {
    title: VueTypes.string.def(''),
    custom: VueTypes.string.def('common-modal'),
    visible: VueTypes.bool.def(false),
    position: VueTypes.string.def('center'),
    useClose: VueTypes.bool.def(true),
    submitText: VueTypes.string.def('确认'),
    layerClose: VueTypes.bool.def(true),
    useCancel: VueTypes.bool.def(true)
  },
  /**
   * const emits = [
   *  'update:visible',
   *  'layer:click',
   *  'submit',
   *  'cancel',
   *  'close'
   * ]
   */
  emits: [...modalEmits, 'close', 'layer:click', 'submit', 'cancel'],
  setup (props, { emit }) {
    const {
      visible,
      show,
      close,
      submit,
      cancel
    } = useModalEvent(props, emit)

    const currentVisible = visible

    /**
     * 点击蒙层
     */
    const handleLayerClick = () => {
      if (!props.layerClose) {
        return
      }
      emit('layer:click')
      close()
    }

    const onClose = () => {
      emit('close')
      close()
    }

    const onCancel = () => {
      cancel()
      emit('cancel')
    }

    const onSubmit = ({ clear }) => {
      emit('submit', {
        clear
      })
    }

    return {
      currentVisible,
      show,
      close,
      submit,
      cancel,
      handleLayerClick,
      onClose,
      onCancel,
      onSubmit
    }
  }
}
</script>

<style lang="scss" module>
.common-modal {
  box-sizing: border-box;
  width: 492px;
  background: #FFF;
  border-radius: 14px;
}

.modal-container {
  position: relative;
  padding: 34px 40px 36px;
}

.modal-main {
  padding: 30px 0 34px;
}

.close {
  position: absolute; top: 12px; right: 12px;
  display: flex;
  cursor: pointer;

  & [icon] {
    @include lineFont(20, 500);
    color: $subGray;
  }
}

.modal-title {
  @include font(22, 500);
  line-height: 30px;
  text-align: center;
  color: $black;
}

.modal-footer {
  display: flex;
  justify-content: center;

  & [gk-button] {
    min-width: 160px;
    margin: 0 10px;
  }
}
</style>
