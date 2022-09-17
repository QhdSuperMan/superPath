<template>
  <div
    :class="[$style['touch-element'], {[$style.moving]: !touching}]"
    :style="{transform: `translateX(${left}px)`, 'transition-duration': `${disabledAnimation ? 0 : duration}ms`}"
    :moving="moving"
    @touchstart="handleTouchStart"
  >
    <slot />
  </div>
</template>

<script>
import VueTypes from 'vue-types'
import {mapState} from 'vuex'

export default {
  name: 'touch-element',
  components: {
  },
  props: {
    disabledAnimation: VueTypes.bool.def(false),
    disabledLeft: VueTypes.bool.def(false),
    disabledRight: VueTypes.bool.def(false)
  },
  emits: ['move'],
  data () {
    return {
      moving: false,
      touching: false,
      movePosition: 0,
      max: 0,
      left: 0,
      duration: 0,
      moveStartTime: 0,
      lastMoveTime: 0,
      animationSpeed: 0,
      touchStartLeft: 0,
      startX: 0,
      startY: 0
    }
  },
  computed: {
    ...mapState(['isMobile'])
  },
  created () {
    window.addEventListener('resize', this.init)
  },
  mounted () {
    this.init()
  },
  unmounted () {
    window.removeEventListener('resize', this.init)
  },
  methods: {
    init () {
      const width = this.$el.clientWidth / 3

      this.max = width
      this.left = 0
    },
    /**
     * 开始滚动选项的事件
     */
    handleTouchStart (event) {
      if (this.disabledTouch) {
        return
      }

      const touch = this.isMobile ? event.touches[0] : event

      this.duration = 0
      this.movePosition = 0
      this.moving = false
      this.touching = true
      this.touchStartLeft = this.left
      this.startX = touch.pageX
      this.startY = touch.pageY
      this.moveStartTime = 0
      this.lastMoveTime = 0

      setTimeout(() => {
        if (this.touching) {
          event.preventDefault()
        }
      }, 500)

      document.addEventListener(this.isMobile ? 'touchmove' : 'mousemove', this.handleTouchMove, {
        passive: false
      })

      document.addEventListener(this.isMobile ? 'touchend' : 'mouseup', this.handleTouchEnd)
    },
    /**
     * 滚动选项的事件
     */
    handleTouchMove (event) {
      const touch = this.isMobile ? event.touches[0] : event
      const left = this.touchStartLeft + touch.pageX - this.startX
      const time = Date.now()

      this.movePosition = touch.pageX - this.startX

      if (touch.pageY !== this.startY) {
        event.preventDefault()
      }

      // 判断是否还能切换
      if (
        (this.movePosition > 0 && this.disabledRight) ||
        (this.movePosition < 0 && this.disabledLeft)
      ) {
        event.preventDefault()

        this.handleTouchEnd()

        return
      }

      this.left = left

      if (!this.moveStartTime) {
        this.moveStartTime = time
      }

      this.lastMoveTime = time

      if (time - this.lastMoveTime > 50) {
        this.moveStartTime = time
      }
    },
    /**
     * 结束滚动选项的事件
     */
    handleTouchEnd () {
      document.removeEventListener(this.isMobile ? 'touchmove' : 'mousemove', this.handleTouchMove, {
        passive: false
      })

      document.removeEventListener(this.isMobile ? 'touchend' : 'mouseup', this.handleTouchEnd)

      this.touching = false
      this.moving = true
      this.duration = 300

      this.moveEnd()
    },
    /**
     * 移动结束后，位移到相邻的选中位置
     */
    moveEnd () {
      // 控制位移的最大范围
      if (Math.abs(this.movePosition) > 30) {
        if (this.movePosition < 0) {
          this.left = this.touchStartLeft - this.max
        } else {
          this.left = this.touchStartLeft + this.max
        }

        setTimeout(() => {
          this.duration = 0
          this.moving = false

          this.$emit('move', this.movePosition < 0)
        }, 400)
      } else {
        this.left = this.touchStartLeft
        this.moving = false
      }
    },
    /**
     * 向前移动一次
     */
    turnPrev () {
      // 判断是否还能切换
      if (this.disabledRight) {
        return
      }

      if (this.moving) {
        return
      }

      this.duration = 300
      this.moving = true
      this.left = this.left + this.max

      setTimeout(() => {
        this.duration = 0
        this.moving = false

        this.$emit('move', false)
      }, 400)
    },
    /**
     * 向后移动一次
     */
    turnNext () {
      // 判断是否还能切换
      if (this.disabledLeft) {
        return
      }

      if (this.moving) {
        return
      }

      this.duration = 300
      this.moving = true
      this.left = this.left - this.max

      setTimeout(() => {
        this.duration = 0
        this.moving = false

        this.$emit('move', true)
      }, 400)
    }
  }
}
</script>

<style lang="scss" module>

.touch-element {
  user-select: none;

  &[moving=true] {
    pointer-events: none;
  }
}
.moving {
  transition-duration: 0ms;
  transition-property: all;
  transition-timing-function: ease;
}
</style>
