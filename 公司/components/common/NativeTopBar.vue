<template>
  <div :class="$style['com-native-top-bar']">
    <div :class="$style['placelholder']" :style="{...shimStyle, backgroundColor: 'transparent', paddingTop: statusHeight + 'px'}"></div>
    <div :class="$style['status-bar']" :style="statusStyle" v-if="inApp"></div>
    <div :class="$style['shim']" :style="shimStyle" native-top-bar-container>
      <div  
        :class="$style['header']" 
        :isWhite="isWhite && border" 
        :style="headerStyle" 
        native-top-content
      >
        <div :class="$style['pre-container']">
          <slot name="pre">
            <i 
              native-top-bar-icon
              class="iconfont"
              :class="$style['back']"
              :style="{color: backColor}"
              @click="back"
            >&#xe76a;</i>
          </slot>
        </div>

        <div
          :class="$style['title']"
          native-top-bar-title
          :style="{...titleStyle, color: titleColor}"
        >
          <slot name="title">
            {{title}}
          </slot>
        </div>

        <div :class="$style['end-container']">
          <slot name="end">
            <template v-if="inApp">
              <div
                :class="[$style['icon'], $style['audio']]"
                :playing="playing"
                :white="audioIconIsWhite"
                @click="handleAuido"
                v-if="showAudio"
              ></div>
              <div :class="[$style['icon'], $style['share']]" @click="handleShare" v-if="showShare"></div>
            </template>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueTypes from 'vue-types'
import { getNativeBarHeight, goBack, isInApp, observerPlayerStatus, toAudioPlayer } from '@/sdk'
export default {
  name: 'com-native-top-bar',
  components: {
  },
  props: {
    isInApp: VueTypes.bool.def(false),
    border: VueTypes.bool.def(true),
    color: VueTypes.string.def('#fff'), // 主要背景色
    textColor: VueTypes.string.def('#353535'), // 文字颜色
    title: VueTypes.string.def(''),
    useOpacity: VueTypes.bool.def(false),
    showShare: VueTypes.bool.def(false),
    useCustomColor: VueTypes.bool.def(false)
  },
  emits: ['back', 'share'],
  data () {
    return {
      backColor: 'rgb(156, 163, 172)',
      titleColor: '#353535',
      scrollY: 0,
      showAudio: false,
      statusHeight: 0,
      playing: false,
      statusStyle: {
        height: '20px',
        backgroundColor: this.color
      },
      titleStyle: {
        opacity: this.useOpacity ? 0 : 1
      }
    }
  },
  computed: {
    inApp () {
      return this.isInApp || isInApp()
    },
    isWhite () {
      const reg = /^#f{3,6}$/i
      return reg.test(this.color.toLocaleLowerCase())
    },
    isTransparent () {
      return this.color.toLocaleLowerCase() === 'transparent'
    },
    shimStyle () {
      let top = 0

      if (this.inApp) {
        top = this.statusHeight
      }

      let color = this.color

      if (this.isTransparent) {
        const opacity = this.scrollY / 80
        color = `rgba(255, 255, 255, ${opacity})`
      }
      return {
        top: top + 'px',
        backgroundColor: color
      }
    },
    headerStyle () {
      let color = this.textColor
      if (this.isTransparent && !this.useCustomColor) {
        const opacity = this.scrollY / 80
        color = `rgba(53, 53, 53, ${opacity})`
      }

      return {
        color: color,
        backgroundColor: this.color
      }
    },
    audioIconIsWhite () {
      if (this.isTransparent && !this.useCustomColor) {
        return this.scrollY < 60
      } else {
        return !this.isWhite
      }
    }
  },
  watch: {
    isTransparent: {
      handler (val) {
        if (val && !this.useCustomColor) {
          this.titleColor = '#FFF'
          this.backColor = '#FFF'
        }
      },
      immediate: true
    },
    color: {
      handler (val) {
        const reg = /^#f{3,6}$/i
        if (!reg.test(val)) {
          //  && !this.isTransparent && !this.useCustomColor
          if (this.isTransparent && !this.useCustomColor) {
            this.titleColor = '#FFF'
            this.backColor = '#FFF'
          } else {
            this.titleColor = this.textColor
          }
          // this.backColor = '#FFF'
        }
      },
      immediate: true
    }
  },
  created () {
  },
  mounted () {
    if (this.inApp) {
      // 调用客户端方法获取状态栏高度
      const result = getNativeBarHeight()
      this.statusHeight = result.status || 0
      this.statusStyle.height = this.statusHeight + 'px'

      observerPlayerStatus(({status}) => {
        const stat = status - 0
        this.showAudio = !!stat
        this.playing = stat === 2
      })
    }
    if (this.useOpacity || this.isTransparent) {
      document.addEventListener('scroll', this.scrollListen)
    }
  },
  beforeUnmount () {
    if (this.useOpacity || this.isTransparent) {
      document.removeEventListener('scroll', this.scrollListen)
    }
  },
  methods: {
    scrollListen (e) {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop
      this.scrollY = scrollY
      const opacity = scrollY / 80
      if (this.useOpacity) {
        this.titleStyle = {
          opacity: opacity > 1 ? 1 : opacity
        }
      }

      if (this.isTransparent && !this.useCustomColor) {
        this.backColor = opacity > 0 ? `rgba(156, 163, 172, ${opacity})` : '#FFF'
        this.titleColor = opacity > 0 ? `rgba(53, 53, 53, ${opacity})` : '#FFF'
        this.statusStyle.backgroundColor = `rgba(255, 255, 255, ${opacity})`
      }
    },
    back () {
      // 调用原生返回
      if (this.inApp) {
        goBack()
      } else {
        this.$router.back()
      }
      this.$emit('back')
    },
    handleShare () {
      this.$emit('share')
    },
    handleAuido () {
      // todu 调起音频播放器
      toAudioPlayer()
    }
  }
}
</script>

<style lang="scss" module>
$height: 44px;

// .com-native-top-bar {
  // position: -webkit-sticky;
  // position: sticky; z-index: 2000;
// }

.status-bar {
  position: fixed; top: 0; left: 0; right: 0; z-index: 19999;
  width: 100%; height: 20px;
}

.placelholder {
  height: $height;
}

.shim {
  position: fixed; left: 0; right: 0; z-index: 20000;
  height: $height;
}

.header {
  position: relative;
  display: flex;
  height: $height;

  &[isWhite="true"] {
    border-bottom: 0.5px solid #E8E8E8;
  }
}

.title {
  box-sizing: border-box;
  width: 100%;
  padding: 0 80px;
  // color: inherit;
  color: $black;
  text-align: center;
  font-size: 19px;
  font-weight: 500;
  line-height: $height;
  @extend %row;
  @extend %transition;
}

.pre-container,
.end-container {
  position: absolute; top: 0; z-index: 10;
  display: flex;
  align-items: center;
  height: $height;
  color: inherit;
}

.pre-container {
  left: 0;
  padding-left: 14px;
}

.end-container {
  right: 15px;
  // padding-right: 15px;
}

.icon {
  width: 21px; height: 21px;
  margin-left: 18px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 21px 21px;

  &:first-child {
    margin-left: 0;
  }
}

.audio {
  background-image: url('../../assets/img/icon/icon-topbar-audio.png');

  &[white="true"] {
    background-image: url('../../assets/img/icon/icon-topbar-player-white.png');
  }

  &[playing="true"] {
    background-image: url('../../assets/img/icon/icon-topbar-audio-playing.gif');

    &[white="true"] {
      background-image: url('../../assets/img/icon/icon-topbar-audio-playing-white.gif');
    }
  }
}

.back {
  margin-left: -5px;
  font-size: 22px;
  color: $subGray;
  line-height: 1;
  color: #FFF;
}
</style>
