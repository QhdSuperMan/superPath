<template>
  <div>
    <Popup 
      v-model:show="isShow" 
      v-bind="$attrs" 
      @update:show="close"
    >
      <div qyb-action-sheet-content :class="$style['qyb-action-sheet-content']">
        <div 
          qyb-action-sheet-content-item
          qyb-action-sheet-content-desc
          :class="[$style['qyb-action-sheet-content-item'],$style['qyb-action-sheet-content-desc']]"
          v-if="$slots.message || message"
        >
          <slot name="message">
            {{ message }}
          </slot>
        </div>
        <div 
          :key="key"
          v-for="(val, key) in actions"
          qyb-action-sheet-content-item
          :class="$style['qyb-action-sheet-content-item']"
          :qyb-action-sheet-content-item-self="checkProps(val.attr)"
          @click="select(val, key)"
        >
          {{ val.label }}
        </div>

        <div 
          qyb-action-sheet-cancel
          qyb-action-sheet-content-item
          :class="$style['qyb-action-sheet-content-item']"
          @click="close"
        >
          <slot name="cancel">
            {{ cancelText }}
          </slot>
        </div>
      </div>
    </Popup>
  </div>
</template>

<script>
import VueTypes from 'vue-types'
import { checkProps } from '@geekbang/gkui/src/filters/index.js'
import { ref, watch } from 'vue'
import Popup from '../popup/Popup.vue'
export default {
  name: 'ActionSheet',
  components: {
    Popup
  },
  props: {
    show: VueTypes.bool.def(false),
    cancelText: VueTypes.string.def('取消'), 
    isShowCancel: VueTypes.bool.def(true),
    message: VueTypes.string.def(''),
    actions: VueTypes.arrayOf(VueTypes.object.def({}))
  },
  emits: ['update:show', 'select', 'cancel', 'close'],
  setup (props, { emit }) {

    const isShow = ref(props.show)

    watch(() => props.show, (newVal) => {
      isShow.value = newVal
    })

    function close () {
      emit('update:show', false)
      emit('close', false)
    }

    function cancel () {
      emit('cancel', false)
      close()
    }

    function select (val, key) {
      emit('select', val, key)
      close()
    }
    return {
      isShow,
      cancel,
      close,
      select,
      checkProps
    }
  }
}
</script>

<style lang="scss" module>
.qyb-action-sheet-content {
  background-color: $lightGray;

  [qyb-action-sheet-content-item-self="marginBottom"] {
    margin-bottom: 10px;
    &::after {
      display: none;
    }
  }
}

.qyb-action-sheet-content-item {
  display: flex;
  justify-content: center;
  height: 50px;
  background-color: #fff;
  line-height: 50px;
  color: $black;
  cursor: pointer;
  @include font(17);
  @extend %bottomLineBg;

  &:last-child {
    border-bottom: none;
  }
}

.qyb-action-sheet-content-desc {
  height: 48px;
  line-height: 48px;
  color: $gray;
  @include font(14);
}

</style>
