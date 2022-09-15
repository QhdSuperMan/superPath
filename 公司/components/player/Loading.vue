<template>
  <div :class="$style.wrap">
    <svg
      height="100%"
      version="1.1"
      viewBox="0 0 22 22"
    >
      <svg
        :key="index"
        v-for="(item, index) in svgList"
        :x="item.x"
        :y="item.y"
        :index="index"
      >
        <circle
          ref="circle"
          :index="index"
          cx="4"
          cy="4"
          r="2"
        />
      </svg>
    </svg>
  </div>
</template>

<script>
export default {
  data () {
    return {
      svgList: [
        { x: 7, y: 1 },
        { x: 11, y: 3 },
        { x: 13, y: 7 },
        { x: 11, y: 11 },
        { x: 7, y: 13 },
        { x: 3, y: 11 },
        { x: 1, y: 7 },
        { x: 3, y: 3 },
      ],
    }
  },
  mounted () {
    const list = this.$refs.circle
    list.forEach((item, index) => {
      item.style.animationDelay = `.${index}s`
    })
  },
}
</script>

<style lang="stylus" module>
.wrap
  position absolute
  top 50%
  left 50%
  margin -18px 0 0 -18px
  height 36px
  width 36px
  pointer-events none
  z-index 2
  circle
    animation fade .8s ease infinite
    opacity 0
    transform-origin 4px 4px
    fill #fff

@keyframes fade
  0%
    opacity .7
    transform scale(1.2, 1.2)
  50%
    opacity .25
    transform scale(.9, .9)
  100%
    opacity .25
    transform scale(.85, .85)
</style>
