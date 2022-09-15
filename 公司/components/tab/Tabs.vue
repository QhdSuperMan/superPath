<template>
  <div :class="$style['tabs']" qyb-tabs :tabs-style-attr="styleAttr">
    <slot></slot>
    <div :class="$style['qyb-tabs']" qyb-tabs :style="lineStyle"></div>
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import { watch, nextTick, ref } from 'vue'
import { useChildren } from '@/utils/hooks/useChildren'
export default {
  name: 'Tabs',
  components: {
  },
  props: {
    styleAttr: vueTypes.string.def('tabs-css-default'), // 属性样式选择器
    active: vueTypes.any, //  激活的
    lineWidth: vueTypes.string.def('15px'), // 线的宽度
    lineHeight: vueTypes.number.def(3), // 线的高度
    lineColor: vueTypes.string.def('#4285F4'), // 线的颜色
  },
  emits: ['update:active', 'change'],
  setup (props, { emit }) {
    const { linkChildren } = useChildren('Tabs')
    const lineStyle = ref({})
    const childrenBox = []

    watch(() => props.active, (newVal) => {
      setLine()
    }, { immediate: true})

    // 设置active
    function setActive (active, el) {
      emit('update:active', active)
      emit('change', active)
      setLine(el)
    }
    // 添加子组件到childrenBox
    function appendChildrenBox (value, el) {
      childrenBox[value] = el
    }
    // active改变时设置线的样式
    function setLine () {
      nextTick(() => {
        const el = childrenBox[props.active]
        const { lineWidth, lineHeight } = props
        const left = el.offsetLeft + el.offsetWidth / 2

        lineStyle.value = {
          width: lineWidth,
          height: lineHeight + 'px',
          borderRadius: lineHeight / 2 + 'px',
          backgroundColor: props.color,
          transform: `translateX(${left}px) translateX(-50%)`,
        }
      })
    }

    linkChildren({ // 注入props
      props,
      lineStyle,
      setActive,
      appendChildrenBox
    })
    return { lineStyle }
  }
}
</script>

<style lang="scss" module>

.tabs {
  display: flex;
  align-items: center;
  position: relative;
}

.qyb-tabs {
  position: absolute; bottom: 0px;
  background-color: v-bind(lineColor);
  transition: all 0.3s;
}
</style>
