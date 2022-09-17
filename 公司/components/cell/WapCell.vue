<template>
  <div 
    :class="[$style['wap-cell'], border ? $style['wap-cell-border'] : '']" 
    wap-cell 
  >
    <div :class="$style['wap-cell-left']" wap-cell-left :style="{width: leftWidth}">
      <slot name="left" v-if="$slots.left || title">
        <span wap-cell-title>{{ title }}</span>
      </slot>
      <slot name="label" v-if="$slots.label || label">
        <div wap-cell-label :class="$style['wap-cell-label']">
          {{ label }}
        </div>
      </slot>
    </div>
    <div :class="$style['wap-cell-value']" wap-cell-value :style="{'text-align': valueAlign}">
      <slot v-if="$slots.default || value">
        <span>{{ value }}</span>
      </slot>
    </div>
    <div :class="$style['wap-cell-right']" wap-cell-right>
      <slot name="right" v-if="$slots.right || icon">
        <Icon 
          :code="icon"
          wap-cell-icon 
          :class="$style['wap-cell-icon']" 
          @click="$emit('icon:click')" 
        />
      </slot>
    </div>
  </div>
</template>

<script>
import VueTypes from 'vue-types'
import { computed } from 'vue'
import Icon from '@/components/Icon.vue'
export default {
  name: 'WapCell',
  components: {
    Icon
  },
  props: {
    title: VueTypes.string.def(''), // 左侧的title
    label: VueTypes.string.def(''), // 左侧的描述
    leftWidth: VueTypes.string.def('80px'), // 左侧的宽度
    lineHeight: VueTypes.string.def('48px'), // 左侧的宽度
    value: VueTypes.string.def(''), // 中间的内容
    valueAlign: VueTypes.string.def('left'), // 内容对其方式
    leftAlign: VueTypes.string.def('left'), // 左侧对其方式
    border: VueTypes.bool.def(true),  // 是否有边框
    icon: VueTypes.string.def(''),  // icon
  },
  emits: ['icon:click'],
  setup (props, { emit }) {
    const lineHeightPx = computed(() => props.lineHeight)
    return { 
      lineHeightPx
    }
  }
}
</script>

<style lang="scss" module>
.wap-cell {
  display: flex;
  align-items: center;
  & .wap-cell-value {
    flex: 1;
  }
}
.wap-cell-border {
  @extend %bottomLineBg;
}

.wap-cell {
  line-height: v-bind(lineHeightPx);
  color: #7F848C;
  @include font(14);
}

.wap-cell-value {
  font-weight: 400;
  line-height: 20px;
  color: #353535;
}

.wap-cell-label {
  line-height: 20px;
  @include font(12);
  color: #9da5aa;
}

.wap-cell-left {
  text-align: v-bind(leftAlign);
}

.wap-cell-icon {
  color:  $subGray;
  @include font(16);
}

.wap-cell-right {
  height: v-bind(lineHeightPx);
  line-height: v-bind(lineHeightPx);
}
</style>
