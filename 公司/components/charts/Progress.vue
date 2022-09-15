<template>
  <div com-progress :class="$style['com-progress']">
    <div progress-wrap :class="$style['progress-wrap']" :style="wrapStyle">
      <div progress :class="$style['progress']" :style="progressStyle"></div>
      <span
        standard-line
        :class="$style['standard-line']"
        :style="standardStyle"
        v-if="standard"
      ></span>
    </div>
    <slot name="end">
      <div value :class="$style['value']" :data-ok="(+progress >= +standard) || !standard">{{progress}}%</div>
    </slot>
  </div>
</template>

<script>
import VueTypes from 'vue-types'
export default {
  name: 'com-progress',
  components: {
  },
  props: {
    progress: VueTypes.oneOfType([Number, String]).def(0),
    height: VueTypes.number.def(4),
    /**
     * 达标
     */
    standard: VueTypes.oneOfType([Number, String]).def(0),
    backgroundColor: VueTypes.string.def('#E9EAED'),
    color: VueTypes.string.def('#789BFF'),
    /**
     * 未达标颜色
     */
    unStandardColor: VueTypes.string.def('#F36749')
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
        backgroundColor: this.backgroundColor
      }
    },
    progressStyle () {
      let bgColor = this.color
      if (this.standard > 0 && +this.progress < +this.standard) {
        bgColor = this.unStandardColor
      }
      return {
        width: this.progress + '%',
        height: this.height + 'px',
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
  height: 22px;

  @include mobileInner () {
    height: 18px;
  }
}

.progress-wrap {
  position: relative;
  flex-grow: 1;
}

.progress {
  flex-shrink: 0;
  position: absolute; left: 0; top: 0; bottom: 0;
  transition: width 0.3s ease-in;
}

.standard-line {
  position: absolute; left: 0; top: -9px;
  height: 22px;
  border-left: 1px dashed #B2B2B2;

  @include mobileInner () {
    top: -7px;
    height: 18px;
  }
}

.value {
  margin-left: 12px;
  flex-shrink: 0;
  @include lineFont(12, 500);
  color: $red;

  &[data-ok="true"] {
    color: $blue;
  }
}
</style>
