<template>
  <div
    :class="[
      'video-point',
      {
        'video-point-mobile': isMobile,
        hide: !showVideoPoint && !isMobile,
      },
      orientation,
    ]"
    :orientation="orientation"
    @click.stop=""
    v-if="points && points.length"
  >
    <template v-if="!isMobile">
      <div
        class="video-point-container"
        v-if="showVideoPoint"
      >
        <div :class="['ul-wrap', { 'ul-wrap-min': !showSwitchBtn }]">
          <slot name="prefix">
            <span
              class="icon icon-prev"
              @click.stop="clickPrev"
              v-if="showSwitchBtn"
            ></span>
          </slot>

          <div
            ref="ulEle"
            class="list video-point-list"
            :style="ulStyle"
            @scroll="scroll"
          >
            <div
              :key="i"
              v-for="(item, i) in points"
              :class="{
                item: true,
                paused: vm.paused,
                active:
                  currentTime >= item.period[0] && currentTime < item.period[1],
              }"
              :style="{ width: liWidth + 'px' }"
              @click.stop="clickItem(item)"
            >
              {{ formatSecond(item.seconds) }} {{ item.desc }}
            </div>
          </div>

          <slot name="suffix">
            <span
              class="icon icon-next"
              @click.stop="clickNext"
              v-if="showSwitchBtn"
            ></span>
          </slot>
        </div>
      </div>
    </template>

    <template v-else>
      <div class="video-point-container">
        <div
          :class="[
            'ul-wrap',
            {
              'ul-wrap-hide': !showVideoPoint,
              'ul-wrap-hide-landscape':
                orientation === 'landscape' && !showVideoPoint,
            },
          ]"
        >
          <!-- 前缀 -->
          <slot name="prefix">
            <!-- 折叠 -->
            <template v-if="fold">
              <div
                :class="['fold-area', orientation]"
                @click.stop="toggleFold(false)"
                v-show="showFoldIcon"
              >
                <!-- 横屏 -->
                <template v-if="orientation === 'landscape'">
                  <div class="icon-book"></div>
                  <div class="landscape-fold-area-text">
                    知识点
                  </div>
                  <div class="icon icon-next"></div>
                </template>

                <template v-else>
                  <div class="fold-area-text">
                    知识点
                  </div>
                  <div class="icon icon-next"></div>
                </template>
              </div>
            </template>

            <template v-else>
              <div
                :class="['unfold-area', orientation]"
                @click.stop="toggleFold(true)"
                v-show="showFoldIcon"
              >
                <template v-if="orientation === 'landscape'">
                  <div class="icon-book"></div>
                  <div class="landscape-unfold-area-text">
                    知识点
                  </div>
                </template>

                <template v-else>
                  <div class="unfold-area-text">
                    知识点
                  </div>
                </template>
              </div>
            </template>
          </slot>

          <div
            ref="ulEle"
            class="list video-point-list mobile-list"
            :style="ulStyle"
            @scroll="scroll"
            v-if="showVideoPoint"
          >
            <div
              :key="i"
              v-for="(item, i) in points"
              :class="{
                item: true,
                paused: vm.paused,
                active:
                  currentTime >= item.period[0] && currentTime < item.period[1],
              }"
              :style="{ width: liWidth + 'px' }"
              @click.stop="clickItem(item)"
            >
              {{ formatSecond(item.seconds) }} {{ item.desc }}
            </div>
          </div>

          <!-- 后缀 -->
          <slot name="suffix"></slot>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import utils from '../lib/utils'
export default {
  name: 'Point',
  props: {
    vm: { type: Object, default: () => {} },
    wrapClick: { type: Function, default: () => {}},
    customEvent: { type: Object, default: () => {}},
    list: { type: Array, default: () => []},
    show: { type: Boolean },
  },
  data () {
    return {
      isMobile: false,
      showVideoPoint: true,
      points: [],
      currentTime: 0,
      liWidth: 142, // 每项的宽度
      scrollLeft: 0,
      events: ['resize', 'orientationchange'],
      orientation: '', // portrait 竖屏，landscape 横屏
      fold: false, // 是否折叠, 默认展开
      showFoldIcon: true, // mobile 视频点图标
      scrollMax: 0, // 可滚动的最大距离
      ulWidth: 0,
      nextScroll: 0, // 下次滚动的距离
      isTranslation: true,
      currentIndex: -1,
    }
  },
  computed: {
    // 每次滑动的距离
    scrollDistance () {
      return this.liWidth
    },
    endTime () {
      return this.vm.player.duration || Number.MAX_VALUE
    },
    ulStyle () {
      return this.isTranslation ? { 'scroll-behavior': 'smooth' } : {}
    },
    showSwitchBtn () {
      const pointsLen = this.points.length
      return pointsLen > 0 ? this.liWidth * pointsLen > this.ulWidth : false
    },
  },
  watch: {
    'vm.current': {
      deep: true,

      handler (time) {
        this.currentTime = Math.floor(time)
        // 组件不渲染，不处理视频进度
        if (this.showVideoPoint) {
          // 处理激活项的位置
          this.$nextTick(() => {
            this.timeupdate(this.currentTime)
          })
        }
      },

      immediate: true,
    },
    'vm.list': {
      handler (list) {
        if (list && list.length) {
          const listLen = list.length
          this.points = list.map((item, i, arr) =>
            Object.assign({}, item, {
              period: [
                item.seconds,
                i < listLen - 1 ? arr[i + 1].seconds : this.endTime,
              ],
            })
          )
        } else {
          this.points = []
          this.clear()
        }
      },
      immediate: true,
      deep: true,
    },
    show (val) {
      this.showVideoPoint = val
      this.fold = !val
      // 视频点展开，处理初始状态
      if (val) {
        this.initSize()
        this.toggleTranslation(false)
      }
    },
  },
  created () {
    this.init()
  },
  beforeUnmount () {
    this.reset()
  },
  methods: {
    open () {
      if (this.isMobile) {
        this.showVideoPoint = true
        this.fold = true
      } else {
        this.showVideoPoint = true
      }
    },

    close () {
      if (this.isMobile) {
        this.showVideoPoint = false
        this.fold = false
      } else {
        this.showVideoPoint = false
      }
    },

    // 列表数据为空, 隐藏知识点图标
    clear () {
      this.vm.setVideoPointIcon(true)
    },

    init () {
      this.addEvents()
      this.checkMobile()
      this.orientationChange()
      this.initSize()
    },

    // 计算滑动的距离，滑动区域的宽度，更新激活视频点的位置
    initSize () {
      setTimeout(() => {
        if (this.showVideoPoint) {
          this.ulWidth = this.getUlWidth()
          this.scrollMax = this.getScroolMax()
          this.moveItem(this.currentTime)
        }
        this.setVideoPointStatus()
      })
    },

    // 视频点区域宽度
    getUlWidth () {
      return this.$refs.ulEle && this.$refs.ulEle.clientWidth
    },

    // 滑动的最大值
    getScroolMax () {
      const len = this.points.length
      let totalWidth = len * this.liWidth - this.ulWidth

      totalWidth = totalWidth >= 0 ? totalWidth : 0

      return totalWidth
    },

    clickItem ({ seconds }) {
      this.vm.videoPointClick(seconds)
      this.customEvent &&
        this.customEvent.clickItem &&
        this.customEvent.clickItem()
    },

    clickPrev () {
      const distance = this.scrollLeft - this.scrollDistance
      if (this.scrollLeft !== 0) {
        this.scrollTo(distance)
      }
      this.customEvent &&
        this.customEvent.clickPrev &&
        this.customEvent.clickPrev()
    },

    clickNext () {
      const distance = this.scrollLeft + this.scrollDistance
      if (this.scrollLeft !== this.scrollMax) {
        this.scrollTo(distance)
      }
      this.customEvent &&
        this.customEvent.clickNext &&
        this.customEvent.clickNext()
    },

    scroll (e) {
      this.scrollLeft = e.target.scrollLeft
    },

    timeupdate (time) {
      // 视频正在播放的时间点 在视频点列表中的索引
      const index =
        this.points && this.points.findIndex((item) => time === item.seconds)
      if (index !== -1 && this.currentIndex !== index) {
        // 同一秒内触发仅触发一次更新
        this.handleMoveDistance(index)
        this.currentIndex = index
      }
    },

    // 激活时间点（time）所处的项，并移动视频点的到相对位置
    moveItem (time) {
      // 视频正在播放的时间点 在视频点所处区间的索引
      const index =
        this.points &&
        this.points.findIndex(
          (item) => time >= item.period[0] && time < item.period[1]
        )
      if (index !== -1 && this.showVideoPoint) {
        this.handleMoveDistance(index)
      }
    },

    // 处理偏移的距离
    handleMoveDistance (index) {
      const pointsLen = this.points.length
      const allLiWidth = this.liWidth * pointsLen
      const offsetX =
        parseFloat(this.ulWidth) / 2 - parseFloat(this.liWidth) / 2 // 居中所需要偏移的个数
      const distance = index * this.scrollDistance - offsetX // 居中所需要偏移的距离

      if (distance < 0) {
        if (this.scrollLeft !== 0) {
          this.scrollTo(0)
        }
      } else if (allLiWidth - this.ulWidth > distance) {
        this.scrollTo(distance)
      } else {
        if (this.scrollLeft <= this.scrollMax) {
          this.scrollTo(this.scrollMax)
        }
      }
    },

    scrollTo (distance) {
      let _distance = parseInt(distance)
      _distance =
        _distance >= this.scrollMax
          ? this.scrollMax
          : _distance > 0
          ? _distance
          : 0
      const ulEle = this.$refs.ulEle
      const style = ulEle && window.getComputedStyle(ulEle)
      if (style && style.scrollBehavior && style.scrollBehavior === 'smooth') {
        // safari 14.0.x scrollBehavior有默认值 auto，safari 14.1.x scrollBehavior为undefined
        ulEle.scrollLeft = _distance
        this.scrollLeft = _distance
        this.toggleTranslation(true)
      } else {
        // 兼容不支持scrollBehavior的浏览器
        this.scrollSmoothTo(_distance)
      }
    },

    // 滑动是否需要过渡效果
    toggleTranslation (status = true) {
      if (this.isTranslation !== status) {
        this.isTranslation = status
      }
    },

    reset () {
      this.points = []
      this.currentTime = 0
      this.scrollLeft = 0
      this.currentIndex = -1

      this.removeEvents()
    },

    // 模拟平滑滚动
    scrollSmoothTo (position) {
      if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function (callback, element) {
          return setTimeout(callback, 17)
        }
      }

      const ulEle = this.$refs.ulEle
      // 当前滚动距离
      let scrollLeft = this.scrollLeft
      // 滚动step方法
      const step = () => {
        // 距离目标滚动距离
        const distance = position - scrollLeft
        // 目标滚动位置
        scrollLeft = scrollLeft + distance / 5
        if (Math.abs(distance) < 1) {
          ulEle.scrollleft = position
          this.toggleTranslation(true)
          this.scrollLeft = position
        } else {
          ulEle.scrollLeft = scrollLeft
          requestAnimationFrame(step)
        }
      }

      step()
    },

    // 展开知识点
    toggleFold (status) {
      this.fold = status
      this.showVideoPoint = !status
    },

    // 校验是否为手机端
    checkMobile () {
      this.isMobile = utils.isMobile
      return this.isMobile
    },

    addEvents () {
      window.addEventListener(this.events[0], this.resize)
      window.addEventListener(this.events[1], this.orientationChange)
    },

    removeEvents () {
      window.addEventListener(this.events[0], this.resize)
      window.addEventListener(this.events[1], this.orientationChange)
    },

    resize () {
      return utils.throttle(() => {
        if (this.showVideoPoint) {
          this.checkMobile()
          this.initSize()
        }
      })()
    },

    // 屏幕旋转
    orientationChange () {
      let result = ''
      switch (window.orientation) {
        // 竖屏
        case 180:
        case 0:
          result = 'portrait'
          break
        // 横屏
        case 90:
        case -90:
          result = 'landscape'
          break
        default:
          result = ''
          break
      }
      this.orientation = result
    },

    // 设置视频播放器视频点图标显示状态
    // mobile： 隐藏pc视频点图标
    // pc：依据showVideoPoint设置pc视频点图标的状态
    setVideoPointStatus () {
      if (this.points && this.points.length) {
        this.vm.setVideoPointIcon(this.checkMobile())
      } else {
        this.vm.setVideoPointIcon(true)
      }

      this.vm.toggleVideoPoint(this.showVideoPoint)
    },

    // mobile 视频点图标状态
    setIconStatus (status) {
      // 折叠状态下， 随视频进度条显隐
      if (this.fold) {
        this.showFoldIcon = status
      }
    },

    // s（秒）转化为hh（时）:mm（分）:ss（秒）
    formatSecond (second) {
      const add0 = (num) => (num < 10 ? '0' + num : '' + num)
      const hour = Math.floor(second / 3600)
      const min = Math.floor((second - hour * 3600) / 60)
      const sec = Math.floor(second - hour * 3600 - min * 60)
      return (hour > 0 ? [hour, min, sec] : [min, sec]).map(add0).join(':')
    },
  },
}
</script>

<style lang="scss" scoped>
$h: 54px;
$color: #fff;
$activeColor: #ffaf44;

.video-point {
  box-sizing: border-box;
  position: absolute;
  bottom: 56px;
  left: 0;
  width: 100%;
  height: $h;
  padding: 0 10px;
  &.hide {
    display: none;
  }
}
.video-point-container {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}
.ul-wrap {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  max-width: 100%;
  height: 100%;
  box-sizing: border-box;
  flex-shrink: 0;
  padding: 0 10px;
  border: 1px solid #49474e;
  background: rgba(15, 15, 15, 0.8);
  border-radius: 8px;
  &.ul-wrap-min {
    padding-left: 0;
    padding-right: 0;
  }
}

.list {
  box-sizing: border-box;
  display: flex;
  flex-wrap: nowrap;
  height: 100%;
  padding: 10px 0 9px 0;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none; /*// 不显示滚动条,兼容火狐*/

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    opacity: 0;
  }
}

.item {
  box-sizing: border-box;
  position: relative;
  display: inline-flex;
  flex-shrink: 0;
  width: 20%;
  padding: 0 7px 0 22px;
  font-size: 12px;
  line-height: 17px;
  color: $color;
  text-align: left;
  cursor: pointer;
  overflow: hidden;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  &:before {
    content: '';
    position: absolute;
    top: 6.5px;
    left: 13px;
    width: 4px;
    height: 4px;
    background: #d8d8d8;
    border-radius: 50%;
  }

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    width: 1px;
    height: 20px;
    transform: translateY(-50%);
    background: rgba(194, 194, 194, 0.5);
  }

  &:last-child {
    &:after {
      display: none;
    }
  }

  &.active {
    color: $activeColor;

    &:before {
      top: 4px;
      left: 9px;
      width: 8px;
      height: 8px;
      background: url('../image/i-runing.gif') no-repeat center / 100% auto
        transparent;
      border-radius: 0;
    }

    &.paused {
      &:before {
        content: '';
        position: absolute;
        top: 4px;
        left: 9px;
        width: 8px;
        height: 8px;
        background: url('../image/i-pause.png') no-repeat center / 100% auto
          transparent;
        border-radius: 0;
      }
    }

    .time {
      color: $activeColor;
    }
  }
}
.time {
  display: inline-block;
  color: $color;
}
.icon {
  display: inline-block;
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  width: 14px;
  height: 28px;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center;
}
.icon-prev {
  left: 0;
  background-image: url('../image/arrow-left.png');
}
.icon-next {
  right: 0;
  background-image: url('../image/arrow-right.png');
} /*// 移动端相关样式*/

.fold-area {
  position: relative;
  box-sizing: border-box;
  width: 33px;
  height: 100%;
  flex-shrink: 0;
  background: rgba(14, 21, 29, 0.7);
  border-radius: 5px;
  .icon-next {
    right: -9px;
    width: 9px;
    height: 18px;
    border-radius: 0 9px 9px 0;
    background: no-repeat url('../image/icon-next.png') center right 2px / 9px
      auto rgba(14, 21, 29, 0.7);
  }
}
.fold-area-text {
  transform: scale(0.5) translateY(-10px);
  line-height: 33px;
  font-size: 20px;
  color: $color;
  writing-mode: vertical-lr;
  word-break: keep-all;
}
.unfold-area {
  position: relative;
  box-sizing: border-box;
  width: 33px;
  height: 100%;
  flex-shrink: 0;
  background: rgba(14, 21, 29, 0.7);
  border-radius: 6px 6px 6px 6px;
  border-right: 1px solid #49474e;
  border-right: none;
}
.unfold-area-text {
  transform: scale(0.5) translateY(-10px);
  line-height: 33px;
  font-size: 20px;
  color: $color;
  writing-mode: vertical-lr;
  word-break: keep-all;
}
.landscape-fold-area-text {
  font-size: 18px;
  transform: scale(0.5);
  font-weight: 400;
  color: $color;
  word-break: keep-all;
}
.landscape-unfold-area-text {
  width: 60px;
  height: 28px;
  font-size: 18px;
  transform: scale(0.5);
  font-weight: 400;
  color: $color;
  word-break: keep-all;
  text-align: center;
}
.icon-book {
  flex-shrink: 0;
  width: 20px;
  height: 18px;
  margin: 10px 0 -4px 0;
  background: no-repeat url('../image/book.png') center / 100% auto;
}
.video-point-mobile {
  height: 50px;
  .ul-wrap {
    height: 100%;
    padding-left: 0;
    padding-right: 0;
    border-radius: 6px;
  }

  .list {
    padding: 9px 0;
  }

  // 横屏
  &.landscape {
    height: 55px;

    .list {
      padding: 12px 0;
    }

    .unfold-area {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 50px;
    }

    .fold-area {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 50px;
      border-right: none;

      &.landscape {
        width: 100%;
      }
    }
  }
}
.ul-wrap-hide {
  position: relative;
  top: 1px;
  left: 1px;
  display: block;
  width: 33px;
  border: none;
  .icon-book {
    margin-bottom: -5px;
  }

  &.ul-wrap-hide-landsace {
    width: 55px;
  }
}
.landscape {
  .ul-wrap-hide {
    width: 50px;
  }
}
.mobile-list {
  max-width: calc(100% - 55px);
}
</style>
