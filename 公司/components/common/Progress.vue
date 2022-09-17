<template>
  <div com-progress :class="$style['com-progress']">
    <div
      progress-wrap
      :border="border"
      :class="$style['progress-wrap']"
      :style="wrapStyle"
    >
      <div progress :class="$style['progress']" :style="progressStyle"></div>
      <span
        standard-line
        :class="$style['standard-line']"
        :style="standardStyle"
        v-if="standard"
      ></span>
    </div>
    <slot name="middle">
    </slot>
    <slot name="end">
      <div 
        value
        progress-desc
        :class="$style['value']" 
        :data-ok="(+progress >= +standard) || !standard"
      >
        {{progress > 100 ? 100 : progress }}%
      </div>
    </slot>
  </div>
</template>

<script>
import VueTypes from 'vue-types'
export default {
  name: 'ComProgress',
  components: {
  },
  props: {
    progress: VueTypes.oneOfType([Number, String]).def(0),
    height: VueTypes.number.def(8),
    /**
     * 达标
     */
    standard: VueTypes.oneOfType([Number, String]).def(0),
    backgroundColor: VueTypes.string.def('#FFF'),
    color: VueTypes.string.def('rgba(66, 133, 244, 0.76)'),
    /**
     * 未达标颜色
     */
    unStandardColor: VueTypes.string.def('#F36749'),
    border: VueTypes.bool.def(true),
    borderWidth: VueTypes.number.def(1)
  },
  data () {
    return {

    }
  },
  computed: {
    radius () {
      return this.height / 2
    },
    wrapStyle () {
      return {
        height: this.height + 'px',
        borderRadius: this.radius + 'px',
        backgroundColor: this.backgroundColor,
        borderWidth: this.borderWidth + 'px'
      }
    },
    progressStyle () {
      let bgColor = this.color
      if (this.standard > 0 && +this.progress < +this.standard) {
        bgColor = this.unStandardColor
      }
      return {
        width: `${(this.progress >= 100) ? 101 : this.progress}%`,
        height: this.height - this.borderWidth * 2 + 'px',
        borderRadius: this.radius + 'px',
        backgroundColor: bgColor
      }
    },
    standardStyle () {
      return {
        left: this.standard + '%'
      }
    }
  }
}
</script>

<style lang="scss" module>

.com-progress {
  display: flex;
  align-items: center;
}

.progress-wrap {
  box-sizing: border-box;
  position: relative;
  flex-grow: 1;
  flex-shrink: 0;
  overflow: hidden;

  &[border=true] {
    border: 1px solid #f1f2f3;
  }
}

.progress {
  flex-shrink: 0;
  position: absolute; left: -1px; top: 0; bottom: 0;
  transition: width 0.3s ease-in;
}

.standard-line {
  position: absolute; left: 0; top: 50%;
  height: 22px;
  margin-top: -11px;
  border-left: 1px dashed #B2B2B2;
}

.value {
  margin-left: 6px;
  flex-shrink: 0;
  @include lineFont(12, 500);
  color: $red;

  &[data-ok = true] {
    color: $gray;
    font-weight: 400;
  }
}
</style>
