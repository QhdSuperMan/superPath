<template>
  <div 
    ref="wrapper"
    :class="$style['qyb-picker-item-box']"
    qyb-picker-item-box
    :style="styleRef"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
    @touchcancel="onTouchEnd"
  >
    <div
      :key="key"
      v-for="(val, key) in value.qybValueKey"
      :class="$style['qyb-picker-item']"
      :qyb-picker-item-active="state.index === key"
      qyb-picker-item
      @click="setIndex(key)"
    >
      {{ typeof(val) === 'object' ? val[labelKey] : val }}
    </div>
  </div>
</template>

<script>
import VueTypes from 'vue-types'
import { computed, ref, reactive } from 'vue'
import { useParent } from '@/utils/hooks/useParent'
import { useTouch } from '@/utils/hooks/useTouch.js'
export default {
  name: 'QybPickerItem',
  props: {
    label: VueTypes.string.def(), // 展示的文字
    value: VueTypes.any.def(undefined), // 绑定的value
    defaultIndex: VueTypes.number.def(0), // 默认选中
  },
  emits: ['change'],
  setup (props, { emit }) {
    const { parent, index } = useParent('Picker')
    const state = reactive({
      index: props.defaultIndex,
      offset: 0,
      duration: 0,
      bezier: null
    })
    let labelKey = computed(() => parent.columnsConfig.label)
    let valuesKey = parent.columnsConfig.value
    let childrenKey = parent.columnsConfig.children

    const itemHeightPx = computed(() => parent.itemHeight + 'px')
    // 距离顶部
    const baseOffset = () =>
      parent.itemHeight * Math.floor((parent.visibleItemCount - 1) / 2)
    const styleRef = computed(() => {
      return  {
        transform: `translate3d(0, ${state.offset + baseOffset()}px, 0)`,
        transitionDuration: `${state.duration}ms`,
        transitionProperty: state.duration ? 'all' : 'none',
        transitionTimingFunction: state.bezier
      }
    })

    // 处理滚动
    const minY = computed(() => - (props.value.qybValueKey.length - 1) * parent.itemHeight)
    const maxY = 0
    const momentumTimeThreshold = 300 // 开启惯性滑动的时间阀值
    const momentumYThreshold = 15 // 开启惯性滑动的距离阀值
    const wrapper = ref(null)
    const touch = useTouch()
    let momentumStartY = 0 // 惯性滑动范围内的 startY
    let startTime = 0  // 惯性滑动范围内的 startTime
    let startTop = 0

    const onTouchStart = (event) => {
      startTop = state.offset
      startTime = new Date().getTime()
      state.duration = 0
      momentumStartY = state.offset
      touch.start(event)
      stopScroll()
    }
    const onTouchMove = (event) => {
      touch.move(event)
      if (touch.direction.value === 'vertical') {
        state.offset = startTop + touch.deltaY.value
      }
      const now = new Date().getTime()
      // 记录在触发惯性滑动条件下的偏移值和时间
      if (now - startTime > momentumTimeThreshold) {
        momentumStartY = state.offset
        startTime = now
      }
    }
    const onTouchEnd = () => {
      if (isNeedReset()) {
        setIndex(getIndex())
        return
      }
      const absDeltaY = Math.abs(state.offset - momentumStartY)
      const duration = new Date().getTime() - startTime
      // 启动惯性滑动
      if (duration < momentumTimeThreshold && absDeltaY > momentumYThreshold) {
        const obj = momentum(state.offset, momentumStartY, duration)
        state.offset = Math.round(obj.destination)
        state.duration = obj.duration
        state.bezier = obj.bezier
      }
      isNeedReset()
      setIndex(getIndex())
    }
    // 惯性滚动
    const momentum = (current, start, duration) => {
      const durationMap = {
        'noBounce': 2500,
        'weekBounce': 800,
        'strongBounce': 400,
      }
      const bezierMap = {
        'noBounce': 'cubic-bezier(.17, .89, .45, 1)',
        'weekBounce': 'cubic-bezier(.25, .46, .45, .94)',
        'strongBounce': 'cubic-bezier(.25, .46, .45, .94)',
      }
      let type = 'noBounce'
      // 惯性滑动加速度
      const deceleration = 0.003
      // 回弹阻力
      const bounceRate = 10
      // 强弱回弹的分割值
      const bounceThreshold = 300
      // 回弹的最大限度 最大高度六分之一
      const maxOverflowY = Math.abs(minY.value / 6)
      let overflowY

      const distance = current - start
      const speed = 2 * Math.abs(distance) / duration
      let destination = current + speed / deceleration * (distance < 0 ? -1 : 1)
      if (destination < minY.value) {
        overflowY = minY.value - destination
        type = overflowY > bounceThreshold ? 'strongBounce' : 'weekBounce'
        destination = Math.max(minY.value - maxOverflowY, minY.value - overflowY / bounceRate)
      } else if (destination > maxY) {
        overflowY = destination - maxY
        type = overflowY > bounceThreshold ? 'strongBounce' : 'weekBounce'
        destination = Math.min(maxY + maxOverflowY, maxY + overflowY / bounceRate)
      }
      return {
        destination,
        duration: durationMap[type],
        bezier: bezierMap[type],
      }
    }
    // 取消惯性滚动
    const stopScroll = () => {
      const translateY = getElementTranslateY(wrapper.value)
      state.offset = Math.min(0, translateY - baseOffset())
    }
    // 获取y轴偏移量
    const getElementTranslateY = (element) => {
      const { transform } = window.getComputedStyle(element)
      const translateY = transform.slice(7, transform.length - 1).split(', ')[5]
      return Number(translateY)
    }
    // 超出边界时需要重置位置
    const isNeedReset = () => {
      let offsetY
      if (state.offset < minY.value) {
        offsetY = minY.value
      } else if (state.offset > maxY) {
        offsetY = maxY
      }
      if (typeof offsetY !== 'undefined') {
        state.offset = offsetY
        state.duration = 500
        state.bezier = 'cubic-bezier(.165, .84, .44, 1)'
        return true
      }
      return false
    }
    // 获取选中
    const getIndex = () => {
      let result = Math.round(-state.offset / parent.itemHeight)
      result = result < 0 ? 0 : result
      result = result > props.value.qybValueKey.length - 1 ? props.value.qybValueKey.length - 1 : result
      return result
    }
    // 设置选中
    const setIndex = (indexNum, step = true) => {
      const offset = -indexNum * parent.itemHeight
      state.offset = offset
      if (indexNum !== state.index) {
        state.index = indexNum
        if (step) {
          emit('change', props.value.qybValueKey[indexNum], Math.abs(indexNum), index)
        }
      }
    }
    // 设置value
    const setValue = (val) => {
      for (let i = 0; i < props.value.qybValueKey.length; i++) {
        let obj = props.value.qybValueKey[i]
        if (typeof(obj) === 'object' && obj[valuesKey] === val) {
          setIndex(i)
          break
        } else if (obj ===  val) {
          setIndex(i)
          break
        }
      }
    }
    // 获取value的值
    const getValue = () => {
      let result = props.value.qybValueKey[state.index]
      return typeof(result) === 'object' ? result[valuesKey] : result
    }
    // 获取label的值
    const getLabel = () => {
      let result = props.value.qybValueKey[state.index]
      return typeof(result) === 'object' ? result[labelKey] : result
    }
    // 获取选中索引值
    const getSelectIndex = () => {
      return Math.abs(state.index)
    }
    // 获取选中对象的值
    const getSelectObj = () => {
      return props.value.qybValueKey[state.index]
    }
    setIndex(props.defaultIndex, false)
    return {
      index,
      setIndex,
      setValue,
      getValue,
      getLabel,
      getSelectIndex,
      getSelectObj,
      wrapper,
      labelKey,
      valuesKey,
      childrenKey,
      itemHeightPx,
      styleRef,
      state,
      onTouchStart,
      onTouchMove,
      onTouchEnd
    }
  }
}
</script>

<style lang="scss" module>
.qyb-picker-item-box {
  flex: 1;
  text-align: center;

  [qyb-picker-item-active=true] {
    color: $black;
  }
}

.qyb-picker-item {
  box-sizing: border-box;
  height: v-bind(itemHeightPx);
  line-height: v-bind(itemHeightPx);
  color: $subGray;
  @include font(16, 500);
  @extend %row;
}
  
</style>
