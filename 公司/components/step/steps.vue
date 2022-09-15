<template>
  <div :class="$style['steps']" steps>
    <div :steps-title-box="'steps-title-box-'+ direction" :class="[$style['steps-title-box'],$style['steps-title-box-'+ direction]]" v-if="$slots.title || title">
      <span :steps-title="'steps-title-'+ direction" :class="[$style['steps-title'],$style['steps-title-'+ direction]]">
        <slot name="title">
          {{ title }}
        </slot>
      </span>
    </div>
    
    <div :class="[$style['steps-content'],$style['steps-content-'+ direction]]" :steps-content="'steps-content-'+ direction">
      <slot></slot> 
    </div>
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import { computed } from 'vue'
import { useChildren } from '@/utils/hooks/useChildren'
export default {
  name: 'Steps',
  components: {
  },
  props: {
    direction: vueTypes.string.def('vertical'), // 垂直还是水平步骤条  horizontal 横向
    active: vueTypes.number.def(undefined),  // 进度状态
    title: vueTypes.string.def(), // 标题
    leftWidth: vueTypes.number.def(62), // 左侧标题宽度
    lineLeft: vueTypes.number.def(13), // 线相对于内容的左侧偏移
    lineTop: vueTypes.number.def(13), // 线相对于内容的上方偏移
    top: vueTypes.number.def(10) // 
  },
  setup (props) {
    const { linkChildren } = useChildren('steps')
    linkChildren({ // 注入props
      props
    })
    const leftWidthPx = computed(() => props.leftWidth + props.lineLeft + 'px')
    return { leftWidthPx }
  }
}
</script>

<style lang="scss" module>
$paddingLeft: 63px;

  // 竖向滚动条
.steps-content-vertical {
  padding-left: v-bind(leftWidthPx);
}

.steps-title-vertical {
  display: inline-block;
  width: 120px; height: 22px;
  margin-bottom: 32px;
  background-color: #B9BDC2;
  border-radius: 0px 100px 100px 0px;
  line-height: 22px;
  text-align: center;
  @include font(16, 500);
}

// 横向步骤条
.steps-content-horizontal {
  display: flex;
  justify-content: center;

  [step-style-attr="step-css-default-horizontal"]:last-child { //    去掉最后一个孩子的步骤样式
    padding-right: 0px;

    [step-line="step-line-horizontal"] {
      display: none;
    }
  }
}
</style>
