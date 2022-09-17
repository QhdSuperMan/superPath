<!--
使用说明
<Tab
  :activeIndex.sync="activeIndex" // 内部监听了子项目点击 改变 activeIndex
  :lineStyle="{transform: translateY(-3)}" // 默认的 line 样式覆盖，也可以在父级使用 css 覆盖样式
>
  // tab item 样式可以自己写
  <div @click="xxx">进行中</div>
  <div>未开始</div>
  <div>已结束</div>
  <div>全部</div>

  可以自定义 line 小横条，不传会使用默认的 line 样式
  <template v-slot:line>
    <div>line</div>
  </template>
</Tab>
-->
<template>
  <div tab :class="$style.tab">
    <!-- tab-item 子项 -->
    <slot></slot>

    <!-- tab-active-line 底部可滑动条 -->
    <div
      ref="tabActiveLine"
      tab-active-line
      :class="[$style.tabActiveLine, {[$style.transition]: lineTransition}]"
      :style="tabActiveLineStyle"
    >
      <slot name="line">
        <!-- 默认兜底样式 -->
        <div line :class="$style.line" :style="lineStyle" />
      </slot>
    </div>
  </div>
</template>

<script>
import vueTypes from 'vue-types'
export default {
  props: {
    activeIndex: vueTypes.number.def(0), // 当前激活的 tab index
    lineStyle: vueTypes.object.def({}) // 默认小横线的样式
  },
  data () {
    return {
      onlyChild: false,
      inited: false,
      lineIndex: 0,
      lineTransition: false,
      linePositionList: []
    }
  },
  computed: {
    tabActiveLineStyle () {
      const {linePositionList, lineIndex} = this

      // 超过 1 个 tab 时显示小横条
      if (linePositionList && linePositionList.length > 1 && linePositionList[lineIndex]) {
        return {
          visibility: 'visible',
          transform: `translateX(${linePositionList[lineIndex]}px)`
        }
      }
      return ''
    }
  },
  watch: {
    activeIndex: {
      handler (val) {
        this.lineIndex = val
      },
      immediate: true
    },
    $slots () {
      this.init()
    }
  },
  mounted () {
    this.init()
    window.addEventListener('resize', this.calcLinePosition, {passive: false})
  },
  beforeUnmount () {
    window.removeEventListener('resize', this.calcLinePosition, {passive: false})
  },
  methods: {
    init () {
      this.calcLinePosition()
      this.tabClickActiveListener()
    },
    // 计算每个 item 下的横条位置
    calcLinePosition () {
      const tabActiveLineEl = this.$refs.tabActiveLine
      const linePositionList = []

      this.$slots.default && this.$slots.default.forEach((VNode) => {
        const {elm, tag} = VNode
        // 忽略注释类型的标签（v-if未显示的）
        if (tag) {
          // 元素到父元素左边距离 + (元素宽度 - 小条宽度) / 2
          const translateX = elm.offsetLeft + (elm.offsetWidth - tabActiveLineEl.offsetWidth) / 2

          linePositionList.push(translateX)
        }
      })

      this.linePositionList = linePositionList

      // 先添加位置，后加过渡效果，确保首屏不会从 0 滑动到目标位置
      setTimeout(() => {
        this.lineTransition = true
      })
    },
    // 点击激活 item，更新 activeIndex
    tabClickActiveListener () {
      this.$slots.default && this.$slots.default.forEach((VNode, index) => {
        const {elm} = VNode

        elm.addEventListener('click', () => {
          this.lineIndex = index
          this.$emit('update:activeIndex', index)
        })
      })
    }
  }
}
</script>

<style lang="scss" module>

.tab {
  position: relative;
  display: flex;
  align-items: flex-start;
  overflow: auto hidden;

  /* 隐藏代码区域滚动条 */
  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    opacity: 0;
  }
}

.tabActiveLine {
  visibility: hidden;
  position: absolute;
  left: 0;
  bottom: 0;
}

.transition {
  transition: transform 0.3s ease;
}

.line {
  width: 30px;
  height: 3px;
  border-radius: 1.5px;
  background: #FA8919;
}
</style>
