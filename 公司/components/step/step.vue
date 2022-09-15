<template>
  <div :class="[$style['step'], $style['step-' + direction]]" :step-style-attr="styleAttr + '-' + direction">
    <div 
      :step-title="'step-title-'+ direction"
      :class="[
        $style['step-title'],
        $style['step-title-'+ direction]
      ]"
    >
      <slot name="title" v-if="$slots.title || title">
        {{ title }}
      </slot>
    </div>
    <div 
      :step-icon="'step-icon-position-'+ direction" 
      :class="[$style['step-icon-position-'+ direction]]"
    >
      <slot name="icon">
        <!-- active 为undefined 不具备步骤条功能 -->
        <template v-if="active === undefined">
          <div 
            :class="$style['step-icon']"
            :step-icon="'step-icon-'+ direction"
          ></div>
        </template>
        <template v-else>
          <div 
            :class="[
              $style['step-icon-'+ direction], 
              $style['step-icon-finish-'+ direction]]" 
            v-if="active > index"
          >
            <Icon code="&#xe76b;" />
          </div>
          <div 
            :class="[
              $style['step-icon-'+ direction], 
              active >= index ? $style['step-icon-finish-'+ direction] : ''
            ]" 
            v-else
          >
            {{ index + 1 }}
          </div>
        </template>
      </slot>
    </div>
    <div 
      :step-line="'step-line-'+ direction" 
      :class="[
        $style['step-line'],
        $style['step-line-'+ direction], 
        active > index ? $style['step-line-finish-'+ direction] : ''
      ]"
    ></div>
    <div 
      :step-content="'step-content-'+ direction" 
      :class="[
        $style['step-content'],
        $style['step-content-'+ direction], 
        active >= index ? $style['step-content-finish-'+ direction]: ''
      ]"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useParent } from '@/utils/hooks/useParent'
import Icon from '@/components/Icon.vue'
import vueTypes from 'vue-types'
export default {
  name: 'Step',
  components: {
    Icon
  },
  props: {
    styleAttr: vueTypes.string.def('step-css-default'), // 属性样式选择器
    title: vueTypes.string.def(''), // 
    lineHeight: vueTypes.string.def('21px')
    // activeIcon: z
  },
  setup () {
    const { parent, index } = useParent('steps')
    const active = computed(()=> parent.props.active)
    const direction = computed(()=> parent.props.direction)
    const leftWidth = computed(()=> parent.props.leftWidth)
    const lineLeft = computed(()=> parent.props.lineLeft)
    const lineTop = computed(()=> parent.props.lineTop)
    const top = computed(()=> parent.props.top)
    const leftWidthMinusPx = computed(() => -(leftWidth.value + lineLeft.value) + 'px')
    const leftWidthPx = computed(() => leftWidth.value + 'px')
    const lineLeftPx = computed(() => -lineLeft.value + 'px')
    const lineTopPx = computed(() => lineTop.value + 'px')
    const circleLeftPx = computed(() => -lineLeft.value - 6 + 'px')
    const topPx = computed(() => top.value + 'px')
    return { 
      direction,
      leftWidthPx,
      leftWidthMinusPx,
      lineLeftPx,
      lineTopPx,
      topPx,
      circleLeftPx,
      index,
      active
    }
  }
}
</script>

<style lang="scss" module>
// 竖向步骤条
.step-vertical {
  position: relative;
  line-height: v-bind(lineHeight);

  & .steps-content-vertical {
    padding-left: 63px;
  }

  & .step-line {
    background-color: $borderGray;
  }

  & .step-line-vertical {
    position: absolute; top: v-bind(lineTopPx); left: v-bind(lineLeftPx);
    width: 1px; height: 100%;
  }

  & .step-icon {
    z-index: 10;
    display: inline-block;
    width: 7px; height: 7px;
    margin-top: 4px;
    background: #FFFFFF;
    border: 2px solid $borderGray; border-radius: 50%;
  }

  & .step-icon-position-vertical {
    position: absolute; top: v-bind(topPx); left: v-bind(circleLeftPx); z-index: 10;
  }

  & .step-title {
    line-height: 18px;
    @include font(13);
    color: #7F848C;
  }

  & .step-title-vertical {
    box-sizing: border-box;
    position: absolute; top: v-bind(topPx); left: v-bind(leftWidthMinusPx);
    width: v-bind(leftWidthPx); height: 100%;
    padding: 0px 5px;
    word-break: break-all;
    text-align: center;
  }
  
  & .step-content {
    overflow: hidden;
    @include font(15);
  }
}

// 横向步骤条
.step-horizontal {
  position: relative;
  padding-right: 100px;
  
  & .step-icon-position-horizontal {
    display: flex;
    justify-content: center;
  }

  & .step-icon-horizontal {
    width: 26px; height: 26px;
    margin-bottom: 8px;
    background-color: $lightGray;
    border-radius: 50%;
    text-align: center;
    line-height: 26px;
    color: $subGray;
    @include font(14);
  }

  & .step-icon-finish-horizontal {
    background-color: $blue;
    color: white;
  }

  & .step-content-horizontal {
    color: $black;
    @include font(12, 500);
  }

  // 固定宽度
  & .step-content-horizontal {
    overflow: visible;
    width: 62px;
    white-space:nowrap;
    text-align: center;
    color: $subGray;
    @include font(12);
  }

  & .step-content-finish-horizontal {
    color: $black;
    @include font(12, 500);
  }

  & [step-line="step-line-horizontal"] {
    position: absolute; right: 0px; top: 14px;
    width: 100px; height: 0px;
    border-bottom: 1px dashed $borderGray;
  }

  & .step-line-finish-horizontal {
    border-bottom: 1px dashed $blue;
  }

}
</style>
