<template>
  <svg :class="$style['progress-icon']" :width="width" :height="width">
    <circle
      :cx="radius + border"
      :cy="radius + border"
      :r="radius"
      :stroke-width="border"
      :stroke="backgroundColor"
      fill="none"
    />
    <circle
      ref="progress"
      :cx="radius + border"
      :cy="radius + border"
      :r="radius"
      :stroke-width="border"
      :stroke="color"
      fill="none"
      :transform="`matrix(0,-1,1,0,0,${width})`"
      :stroke-dasharray="`${progressBar} ${perimeter + 1}`"
    />
  </svg>
</template>

<script>
import vueTypes from 'vue-types'

export default {
  name: 'LessonProgressIcon',
  props: {
    size: vueTypes.number.def(12),
    border: vueTypes.number.def(2),
    progress: vueTypes.number.def(0),
    color: vueTypes.string.def('#4285F4'),
    backgroundColor: vueTypes.string.def('#E9EAED')
  },
  data () {
    return {
      width: 0
    }
  },
  computed: {
    radius () {
      return this.size / 2
    },
    perimeter () {
      return Math.ceil(this.radius * 2 * Math.PI)
    },
    progressBar () {
      return Math.ceil(this.perimeter / 360 * Math.ceil(3.6 * this.progress))
    }
  },
  created () {
    this.width = this.size + this.border * 2
  }
}
</script>

<style lang="scss" module>
.progress-icon {
  vertical-align: top;
  line-height: 1;
  pointer-events: none;
  transform: rotate(-0.05deg);
}
</style>
