<template>
  <div :class="$style['chart-ring-container']">
    <svg :class="$style['chart-ring']" :width="width" :height="width">
      <defs v-if="gradient">
        <linearGradient id="gradient">
          <stop
            offset="0%"
            :style="gradientStartStyle"
          />
          <stop
            offset="100%"
            :style="gradientEndStyle"
          />
        </linearGradient>
      </defs>
      <circle
        :cx="radius + border"
        :cy="radius + border"
        :r="radius"
        :stroke-width="border"
        :stroke="backgroundColor"
        fill="none"
      ></circle>
      <circle
        ref="progress"
        :cx="radius + border"
        :cy="radius + border"
        :r="radius"
        :stroke-width="border"
        :stroke="progressColor"
        fill="none"
        :transform="`matrix(0,-1,1,0,0,${width})`"
        :stroke-dasharray="`${progressBar} ${perimeter + 1}`"
        stroke-linecap="round"
      >
      </circle>
    </svg>
  </div>
</template>

<script>
import VueTypes from 'vue-types'
export default {
  name: 'chart-ring',
  components: {
  },
  props: {
    progress: VueTypes.number.def(0),
    size: VueTypes.number.def(170),
    border: VueTypes.number.def(10),
    color: VueTypes.string.def('#4285F4'),
    backgroundColor: VueTypes.string.def('#E8E8E8'),
    gradient: VueTypes.bool.def(false),
    gradientStartColor: VueTypes.string.def('#95BBFF'),
    gradientEndColor: VueTypes.string.def('#5C86FF')
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
    gradientStartStyle () {
      return `stop-color: ${this.gradientStartColor}`
    },
    gradientEndStyle () {
      return `stop-color: ${this.gradientEndColor}`
    },
    /**
     * 当前进度条的颜色
     */
    progressColor () {
      return this.gradient ? 'url(#gradient)' : this.color
    },
    // 周长
    perimeter () {
      return Math.ceil(this.radius * 2 * Math.PI)
    },
    progressBar () {
      return Math.ceil(this.perimeter / 360 * Math.ceil(3.6 * this.progress))
    }
  },
  created () {
    this.width = this.size + this.border * 2
  },
  methods: {
  }
}
</script>
<style lang="scss" module>
.chart-ring-container {}
</style>
