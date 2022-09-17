<template>
  <div
    ref="playerWrap"
    :class="[
      $style.wrap,
      { [$style.userInActive]: isUserInActive },
      { [$style.full]: isWebFullScreen },
    ]"
    @mousemove="mouseMoveHandler"
    @click="videoClick"
  >
    <div
      ref="videoWrap"
      :class="$style.videoWrap"
    >
      <template v-if="options">
        <EncryptVideoPlayer
          ref="encryptVideoPlayer"
          :class="$style.video"
          :options="options"
          @inited="playerInited"
          @error="playerError"
          v-if="options.isEncrypt"
        />
        <VideoPlayer
          ref="videoPlayer"
          :class="$style.video"
          :options="options"
          @inited="playerInited"
          v-else
        />
      </template>
    </div>
    <!-- 画中画开启时蒙层 -->
    <div
      :class="['gkplayer-iconfont', $style.pictureInPictureMask]"
      v-if="isPictureInPicture"
    ></div>

    <div
      :class="[$style.title]"
      player-title
      v-if="title && isShowTitle"
    >
      当前播放: {{ title }}
    </div>

    <slot name="cover"></slot>

    <Loading v-if="loading" />
    <div
      :class="$style.bigPlayBtn"
      player-bigplaybtn
      @click.stop="play"
      v-if="paused && isShowBigPlayBtn"
    >
      <div
        :class="['gkplayer-iconfont', $style.bigPlayIcon]"
        player-bigplaybtn-icon
      ></div>
    </div>

    <!-- 字幕, 这里为了实现外描边的效果，放了两层文字 -->
    <div
      :user-active="!isUserInActive"
      :class="[
        $style.subtitle,
        $style.subtitleStroke,
        { [$style.subtitleStrokeFullScreen]: isFullScreenStatus },
      ]"
      v-show="subtitle && !isPictureInPicture"
    >
      {{ subtitle }}
    </div>
    <div
      :user-active="!isUserInActive"
      :class="[
        $style.subtitle,
        { [$style.subtitleStrokeFullScreen]: isFullScreenStatus },
      ]"
      v-show="subtitle && !isPictureInPicture"
    >
      {{ subtitle }}
    </div>

    <!-- 工具条 -->
    <div
      :class="$style.controlMask"
      player-control-mask
      @click.stop
    ></div>
    <div
      :class="[$style.controlWrap]"
      player-control-wrap
      @click.stop
    >
      <div player-control-left :class="$style.left">
        <template v-if="paused">
          <div
            :class="['gkplayer-iconfont', $style.icon, $style.playIcon]"
            player-control
            player-play
            player-icon
            @click.stop="togglePlay"
          ></div>
        </template>
        <template v-else>
          <div
            :class="['gkplayer-iconfont', $style.icon, $style.pauseIcon]"
            player-control
            player-pause
            player-icon
            @click.stop="togglePlay"
          ></div>
        </template>
        <div
          :class="[$style.thumbTimeWap]"
          player-thumb-time-wap
          v-if="isMobile"
        >
          {{ thumbTime }}
        </div>
        <div
          :class="['gkplayer-iconfont', $style.icon, , $style.prevIcon]"
          player-prev
          player-icon
          @click.stop="prev"
          v-if="showPrev"
        ></div>
        <div
          :class="['gkplayer-iconfont', $style.icon, $style.nextIcon]"
          player-next
          player-icon
          @click.stop="next"
          v-if="showNext"
        ></div>
        <div
          :class="$style.statusTime"
          player-status-time
          v-if="!isMobile"
        >
          {{ thumbTime
          }}<span player-duration-time :class="$style.duration"> / {{ durationTime }}</span>
        </div>
      </div>
      <div player-control-right :class="$style.right">
        <div
          :class="[$style.durationTimeWap]"
          player-duration-time-wap
          v-if="isMobile"
        >
          {{ durationTime }}
        </div>
        <!-- 清晰度 -->
        <div
          :class="$style.quality"
          player-quality
          v-if="!isMobile"
        >
          <div
            :class="$style.current"
            player-quality-cur
            v-if="quality"
          >
            <span @click.stop="openQualityList">{{ quality.name }}</span>
          </div>
          <ul
            :class="[$style.qualityList, { [$style.on]: isShowQualityList }]"
            player-quality-list
          >
            <template
              :key="index"
              v-for="(item, index) in qualityList"
            >
              <li
                :class="[$style.listItem, $style.listItemActive]"
                player-list-item
                player-list-item-cur
                @click.stop="switchQuality(item)"
                v-if="item.type === quality.type"
              >
                {{ item.name }}
              </li>
              <li
                :class="[$style.listItem]"
                player-list-item
                @click.stop="switchQuality(item)"
                v-else
              >
                {{ item.name }}
              </li>
            </template>
          </ul>
        </div>
        <!-- 播放速率 -->
        <div
          :class="$style.rate"
          player-rate
          v-if="rateEnabled"
        >
          <div
            :class="$style.current"
            player-rate-cur
          >
            <span @click.stop="openRateList">{{ rate }}x</span>
          </div>
          <ul
            :class="[$style.rateList, { [$style.on]: isShowRateList }]"
            player-rate-list
          >
            <template v-for="(item, index) in rateList">
              <li
                :key="`if-${index}`"
                :class="[$style.listItem, $style.listItemActive]"
                player-list-item
                player-list-item-cur
                @click.stop="switchRate(item)"
                v-if="item === rate"
              >
                {{ item }}x
              </li>
              <li
                :key="`else-${index}`"
                :class="[$style.listItem]"
                player-list-item
                @click.stop="switchRate(item)"
                v-else
              >
                {{ item }}x
              </li>
            </template>
          </ul>
        </div>

        <!-- 扩展功能 -->
        <template v-if="extensionList && extensionList.length > 0">
          <template
            :key="j"
            v-for="(itemJ, j) in extensionList"
          >
            <div
              :class="[$style.extensionItem, 'extension-item-' + itemJ.name]"
              @click.stop
            >
              <template v-if="itemJ.name === videoPointKey">
                <!-- 视频点 -->
                <!-- 移动端隐藏图标 -->
                <template v-if="!hideVideoPointIcon">
                  <template v-if="showVideoPoint">
                    <div
                      :class="[
                        'gkplayer-iconfont',
                        $style.icon,
                        $style.videoPointOnBtn,
                      ]"
                      video-point-on
                      @click.stop="toggleVideoPoint(false)"
                    >
                      <div :class="$style.tooltips">
                        关闭知识点
                      </div>
                    </div>
                  </template>
                  <template v-else>
                    <div
                      :class="[
                        'gkplayer-iconfont',
                        $style.icon,
                        $style.videoPointOffBtn,
                      ]"
                      video-point-off
                      @click.stop="toggleVideoPoint(true)"
                    >
                      <div :class="$style.tooltips">
                        开启知识点
                      </div>
                    </div>
                  </template>
                </template>
              </template>

              <template v-else></template>
            </div>
          </template>
        </template>

        <!-- 画中画 -->
        <template v-if="pictureInPictureEnabled">
          <template v-if="isPictureInPicture">
            <div
              :class="[
                'gkplayer-iconfont',
                $style.icon,
                $style.pictureInPictureOffBtn,
              ]"
              player-icon
              player-picture-in-picture
              player-picture-in-picture-on
              @click.stop="closePictureInPicture"
            >
              <div :class="$style.tooltips">
                退出画中画
              </div>
            </div>
          </template>
          <template v-else>
            <div
              :class="[
                'gkplayer-iconfont',
                $style.icon,
                $style.pictureInPictureOnBtn,
              ]"
              player-icon
              player-picture-in-picture
              player-picture-in-picture-off
              @click.stop="openPictureInPicture"
            >
              <div :class="$style.tooltips">
                开启画中画
              </div>
            </div>
          </template>
        </template>
        <!-- 音量 -->
        <div
          :class="$style.volumeWrap"
          v-show="volumeEnabled"
        >
          <div
            :class="['gkplayer-iconfont', $style.icon, $style.volumeBtn]"
            player-volume
            player-icon
            @click.stop="toggleVolume"
          >
            <div
              :class="$style.tooltips"
              v-show="!isShowVolumeBar"
            >
              音量
            </div>
          </div>
          <div
            ref="volumeBarWrap"
            player-volume-bar-wrap
            :class="$style.volumeBarWrap"
            @click.stop="volumeBarClick"
            @mousedown="volumeDragStart"
            v-show="isShowVolumeBar"
          >
            <div player-volume-bar :class="$style.volumeBar">
              <div
                player-volume-progress
                :class="$style.volumeBarProgress"
                :style="{ height: `${volume * 100}%` }"
              >
                <div player-volume-dot :class="$style.volumeBarProgressDot"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- 网页全屏 -->
        <template v-if="webFullScreenEnabled && !isFullScreenStatus">
          <template v-if="isWebFullScreen">
            <div
              :class="[
                'gkplayer-iconfont',
                $style.icon,
                $style.webFullscreenOnBtn,
              ]"
              player-icon
              player-webfullscreen
              player-webfullscreen-on
              @click.stop="toggleWebFullScreen"
            >
              <div :class="$style.tooltips">
                退出网页全屏
              </div>
            </div>
          </template>
          <template v-else>
            <div
              :class="[
                'gkplayer-iconfont',
                $style.icon,
                $style.webFullscreenOffBtn,
              ]"
              player-icon
              player-webfullscreen
              player-webfullscreen-off
              @click.stop="toggleWebFullScreen"
            >
              <div :class="$style.tooltips">
                网页全屏
              </div>
            </div>
          </template>
        </template>
        <!-- 全屏 -->
        <template v-if="systemFullScreenEnabled && isFullScreenStatus">
          <div
            :class="['gkplayer-iconfont', $style.icon, $style.fullscreenOnBtn]"
            player-icon
            player-fullscreen
            player-fullscreen-on
            @click.stop="toggleFullScreen"
          >
            <div :class="$style.tooltips">
              退出全屏
            </div>
          </div>
        </template>
        <template v-else-if="systemFullScreenEnabled">
          <div
            :class="['gkplayer-iconfont', $style.icon, $style.fullscreenOffBtn]"
            player-icon
            player-fullscreen
            player-fullscreen-off
            @click.stop="toggleFullScreen"
          >
            <div :class="$style.tooltips">
              全屏
            </div>
          </div>
        </template>
      </div>
      <div
        ref="progressBarWrap"
        :class="$style.barWrap"
        player-bar-wrap
      >
        <div
          ref="touchTime"
          :class="[$style.barTime, { [$style.on]: isShowTouchTime }]"
          player-bar-time
        >
          {{ touchTime }}
        </div>
        <div
          :class="$style.bar"
          player-bar
        >
          <slot
            name="points"
            :points="points"
          >
            <template v-if="points.length">
              <span
                :key="index"
                v-for="(point, index) in points"
                :class="$style.barPoint"
                bar-point
                :data-text="point.text"
                :style="{ left: point.x }"
                @mouseenter="showOutlineTip(point)"
                @mouseleave="hideOutlineTip"
              ></span>
            </template>
          </slot>
          <div
            :class="$style.loaded"
            player-bar-loaded
            :style="{ width: loadedPercentage }"
          ></div>
          <div
            ref="played"
            :class="$style.played"
            player-bar-played
            :style="{ width: thumbPercentage }"
          >
            <span
              :class="$style.tooltip"
              player-bar-tooltip
              :player-is-ended="isEnded"
            ></span>
          </div>
        </div>
      </div>
    </div>
    <!-- 正在切换清晰度 -->
    <template v-if="isShowQualityTip">
      <div
        :class="$style.qualityTip"
        player-quality-tip
      >
        正在为您切换到
        <span
          :class="$style.qualityName"
          player-quality-name
        >{{
          quality.name
        }}</span>
        , 请稍后...
      </div>
    </template>

    <template v-if="extensionList && extensionList.length > 0">
      <template v-for="(item, i) in extensionList">
        <component
          :key="`if-${i}`"
          :ref="item.name"
          :is="item.com ? item.com : ''"
          :show="showVideoPoint"
          :vm="item.vm"
          :custom-event="item.customEvent"
          v-if="item.name === videoPointKey"
        />

        <component
          :key="`else-${i}`"
          :ref="item.name"
          :is="item.com ? item.com : ''"
          :vm="item.vm"
          :custom-event="item.customEvent"
          v-else
        />
      </template>
    </template>
  </div>
</template>

<script>
import { $emit } from '@/utils'
import VideoPlayer from './NativeVideo.vue'
import EncryptVideoPlayer from './AliyunVideo.vue'
import Loading from './Loading.vue'
// import gkTooltip from '@geekbang/geek.ui/src/components/popup/Tooltip.vue'
import utils from './lib/utils'
import Hls from 'hls.js'

// 临时缓存画中画窗口的打开状态，用于切换视频等场景，player销毁再次创建时，读取状态并重置画中画
let isPictureInPicturePrev = false

export default {
  components: {
    VideoPlayer,
    EncryptVideoPlayer,
    Loading,
  },
  filters: {
    secondToTime (val) {
      return utils.secondToTime(val)
    },
  },
  props: {
    showPrev: {
      type: Boolean,
      default: false,
    },
    showNext: {
      type: Boolean,
      default: false,
    },
    extensions: { type: Array, default: () => []},
    list: { type: Array, default: () => []}
  },
  emits: ['toggleOutLineTip'],
  data () {
    return {
      canTouchSeek: false, // 是否可以手势左右滑动调节进度
      config: {},
      isEnded: false,
      inited: false,
      seeked: false,
      isSwitchQuality: false,
      isShowQualityList: false,
      isShowRateList: false,
      isShowTouchTime: true,
      isShowQualityTip: false,
      isShowVolumeBar: false,
      isPictureInPicture: false, // 是否画中画
      isWebFullScreen: false, // 是否网页全屏
      isUserInActive: false,
      isDragging: false,
      isShowBigPlayBtn: true,
      isShowTitle: true,
      isFullScreenStatus: false,
      isVolumeDrag: false,
      options: null,
      quality: null,
      qualityList: [],
      rate: '1.0',
      rateList: ['2.0', '1.5', '1.25', '1.0', '0.5'],
      loading: false,
      paused: true,
      playedSeconds: 0,
      playedTime: '00:00',
      duration: 0,
      durationTime: '00:00',
      current: 0,
      loadedPercentage: '0%',
      thumbTime: '00:00',
      thumbPercentage: '0%',
      touchTime: '00:00',
      title: '',
      volume: 1,
      player: {},
      events: {},
      loadingTimer: null,
      autoHideTimer: null,
      volumeTimer: null,
      pictureInPictureTimer: null,
      time1: null,
      isMobile: utils.isMobile,
      subtitleActiveIndex: 0,
      subtitle: '', // 字幕
      points: [], // 打点信息
      showVideoPoint: true,
      videoPointKey: 'video-point', // 视频点组件标示key
      hideVideoPointIcon: false,
    }
  },
  computed: {
    // 画中画控制是否开启
    pictureInPictureEnabled () {
      return (
        this.config.enablePictureInPicture &&
        document.pictureInPictureEnabled &&
        this.inited &&
        !this.isMobile
      )
    },
    // 音量控制是否开启
    volumeEnabled () {
      return this.config.enableVolume && !this.isMobile
    },
    // 速率控制是否开启
    rateEnabled () {
      return this.config.enableRate && !this.isMobile
    },
    // 网页全屏控制是否开启
    webFullScreenEnabled () {
      return this.config.enableWebFullScreen && !this.isMobile
    },
    // 扩展插件列表
    extensionList () {
      // 把this传递下去
      return this.extensions && this.extensions.length
        ? this.extensions.map((item) =>
            Object.assign({}, item, {
              com: item.com,
              name: item.name,
              vm: this,
              hidden: false,
            })
          )
        : []
    },
    // 系统全屏控制是否开启
    systemFullScreenEnabled () {
      if (this.config.enableSystemFullScreen === undefined) {
        return true
      }
      return this.config.enableSystemFullScreen
    },
    // (为了兼容一个页面有多个视频的情况，非全屏模式，就需要禁用视频播放器的快捷键功能)
    shortcutKeyDisabled () {
      return this.config.disableShortcut &&
            !this.isFullScreenStatus &&
            !this.isWebFullScreen
    }
  },
  watch: {
    isPictureInPicture (val) {
      isPictureInPicturePrev = val
    },
  },
  mounted () {
    const progressBarWrap = this.$refs.progressBarWrap
    progressBarWrap.addEventListener(utils.nameMap.dragStart, this.dragStart)
    progressBarWrap.addEventListener(utils.nameMap.dragMove, this.dragMove)
    progressBarWrap.addEventListener(utils.nameMap.dragEnd, this.dragEnd)

    const videoWrap = this.$refs.videoWrap
    videoWrap.addEventListener('touchstart', this.videoTouchSeekStart)
    videoWrap.addEventListener(
      'enterpictureinpicture',
      this.pictureInPictureChange
    )
    videoWrap.addEventListener(
      'leavepictureinpicture',
      this.pictureInPictureChange
    )
    document.addEventListener('keydown', this.keydown)
    document.addEventListener('fullscreenchange', this.fullScreenChange)
    document.addEventListener('webkitfullscreenchange', this.fullScreenChange)
    this.checkLoading()
  },
  beforeUnmount () {
    const progressBarWrap = this.$refs.progressBarWrap
    progressBarWrap.removeEventListener(utils.nameMap.dragStart, this.dragStart)
    progressBarWrap.removeEventListener(utils.nameMap.dragMove, this.dragMove)
    progressBarWrap.removeEventListener(utils.nameMap.dragEnd, this.dragEnd)

    const videoWrap = this.$refs.videoWrap
    videoWrap.removeEventListener(
      'enterpictureinpicture',
      this.pictureInPictureChange
    )
    videoWrap.removeEventListener(
      'leavepictureinpicture',
      this.pictureInPictureChange
    )
    videoWrap.removeEventListener('touchstart', this.videoTouchStart)
    document.removeEventListener('keydown', this.keydown)
    document.removeEventListener('fullscreenchange', this.fullScreenChange)

    // 移除音量控制栏拖拽的监听
    document.removeEventListener('mousemove', this.volumeDragMove)
    document.removeEventListener('mouseup', this.volumeDragEnd)

    // 清除未完成的延时器
    clearTimeout(this.autoHideTimer)
    clearTimeout(this.volumeTimer)
    clearTimeout(this.pictureInPictureTimer)

    this.player && this.player.destroy && this.player.destroy()
  },
  methods: {
    secondToTime_filter (val) {
      return utils.secondToTime(val)
    },
    init (config) {
      this.config = config
      // 如果自动播放没有设置，则默认为自动播放 true
      if (config.autoPlay === undefined) {
        this.config.autoPlay = true
      }

      // 速率设置按钮，默认显示为 true
      if (config.enableRate === undefined) {
        this.config.enableRate = true
      }

      // 网页全屏按钮，默认显示为 true
      if (config.enableWebFullScreen === undefined) {
        this.config.enableWebFullScreen = true
      }

      if (this.config.isEncrypt) {
        this.options = {
          isEncrypt: true,
          encryptId: this.config.encryptId,
          quality: this.config.quality.type,
          poster: this.config.poster || '',
          // getEncryptVideoPlayAuth 返回 promise
          getEncryptVideoPlayAuth: this.config.getEncryptVideoPlayAuth,
          autoPlay: this.config.autoPlay,
          // aid 和 sourceType 用来获取 playAuth
          // aid: this.config.aid,
          // sourceType: this.config.sourceType
        }
      } else {
        this.options = {
          Hls,
          src: this.config.source,
          poster: this.config.poster,
        }
      }
      this.rate = this.config.rate || '1.0'
      this.quality = this.config.quality
      this.qualityList = this.config.qualityList || []
      this.title = this.config.title
      this.playedSeconds = this.config.playedSeconds || 0
      this.canTouchSeek = this.config.canTouchSeek

      const primaryColor = this.config.primaryColor || '#fa8919'
      this.$refs.playerWrap.style.setProperty('--primary-color', primaryColor)
    },
    switchVideo (config) {
      this.inited = false
      this.init(config)
      if (config.isEncrypt) {
        this.$refs.encryptVideoPlayer.init(this.options)
      } else {
        this.switchNonEncryptVideo(this.options)
      }
    },
    replay () {
      this.playedSeconds = 0
      this.seek(this.playedSeconds)
      this.play()
    },
    switchNonEncryptVideo (options) {
      this.player.destroy()
      this.options = null
      this.$nextTick(() => {
        this.options = options
      })
    },
    playerInited (player) {
      this.player = player
      this.bindEvent()
      this.bindSubtitles()
      this.player.speed(Number(this.rate))

      if (this.volumeEnabled) {
        this.volume = this.getVolume()
        this.setVolume(this.volume)
      }

      // 手机端禁用自动播放功能，因为有的浏览器支持自动播放，有的不支持，有的黑屏
      if (utils.isMobile) {
        this.hide()
      } else {
        this.config.autoPlay && this.play()
      }
    },
    playerError (error) {
      this.emit('error', error)
    },
    bindEvent () {
      this.player.on('canplay', () => {
        this.initSeek()
        if (!this.inited) {
          this.inited = true
          // 初始化后可以播放时，上报播放器初始化事件
          this.emit('inited')

          // 之前已开启画中画时，切换视频或重播后，仍然开启显示画中画
          if (isPictureInPicturePrev) {
            this.openPictureInPicture()
          }

          if (!utils.isMobile && this.config.autoPlay) {
            this.play()
          }
        }
        if (this.isShowQualityTip) {
          this.isShowQualityTip = false
        }
        if (this.isSwitchQuality) {
          this.isSwitchQuality = false
        }
        this.generatePoints() // 初始化剧情点
      })
      // 解决某些浏览器&操作系统，无法自动跳转到上次播放位置
      this.player.on('canplaythrough', () => {
        this.initSeek()
      })
      this.player.on('play', () => {
        this.paused = false
        this.emit('play')
      })
      this.player.on('pause', () => {
        this.paused = true
        this.emit('pause')
      })
      this.player.on('ended', () => {
        // fix aliyun 播放器 end 事件会多次触发
        if (!this.isEnded) {
          this.isEnded = true
          this.emit('ended', this.player.current)
        }
      })
      this.player.on('autoPlayError', () => {
        this.pause()
      })
      this.player.on('timeupdate', () => {
        this.initSeek()
        this.time1 = Date.now()
        this.current = this.player.current
        this.duration = this.player.duration
        this.durationTime = this.player.durationTime
        this.loadedPercentage = this.player.loadedPercentage

        // 检查字幕 cues 对象是否存在，丢失的话重载字幕
        if (this.config && this.config.isEncrypt) {
          this.checkSubtitles()
        }
        if (!this.isDragging) {
          this.thumbTime = this.player.currentTime
          this.thumbPercentage = this.player.playedPercentage
        }
        this.paused = this.player.video.paused
        if (!this.paused && this.duration) {
          this.emit('timeUpdate', {
            playedSeconds: this.player.current,
            duration: this.duration,
          })
        }
      })
    },
    /**
     * 检查字幕中 cues 对象是否丢失，丢失时重载字幕
     */
    checkSubtitles () {
      const videoElement = this.player.video
      const { subtitleActiveIndex } = this
      if (
        videoElement.textTracks &&
        videoElement.textTracks[subtitleActiveIndex] &&
        videoElement.textTracks[subtitleActiveIndex].mode === 'showing' &&
        videoElement.textTracks[subtitleActiveIndex].cues.length === 0
      ) {
        this.bindSubtitles(subtitleActiveIndex)
      }
    },
    /**
     * 将字幕放在视频中
     */
    bindSubtitles () {
      const videoElement = this.player.video
      const { subtitles } = this.config

      // 移除原有的 track 标签
      this.subtitle = ''
      for (const i of videoElement.querySelectorAll('track')) {
        videoElement.removeChild(i)
      }

      // 加入 track 标签（只要有 video 标签时，可以在任意时刻加入）
      if (Array.isArray(subtitles) && subtitles.length) {
        // 字幕和视频不同域名，这里加 attrbute 来解除跨域限制
        videoElement.setAttribute('crossorigin', '')

        // 遍历所有字幕，创建 <track> 标签插入 <video> 子集
        subtitles.forEach((subtitle) => {
          const { label, srclang, src } = subtitle
          const trackElement = document.createElement('track')
          trackElement.label = label // 字幕的标签，例如 '中文'
          trackElement.kind = 'subtitles' // track 标签类型：字幕
          trackElement.srclang = srclang // 字幕语言，例如 'cn'
          trackElement.src = src // 字幕文件地址
          videoElement.appendChild(trackElement)
        })

        // 插入后选择、激活字幕
        this.selectSubtitle()

        // aliplayer canplaythrough 事件后再次选择、激活字幕（处理 aliplayer 内部设为 disabled 后的情况）
        if (this.config.isEncrypt) {
          this.player.on('canplaythrough', () => {
            // canplaythrough 会执行多次，内部做了防重
            this.selectSubtitle()
          })
        }
      }
    },
    /**
     * 选择、激活字幕（多字幕时，可以用于切换显示，只显示某一个字幕）
     * @param {Number} 第几个字幕文件，默认为头一个
     */
    selectSubtitle (index = 0) {
      const videoElement = this.player.video

      // 如果没有字幕，结束，激活的字幕 index 重置
      if (!(videoElement.textTracks && videoElement.textTracks)) {
        this.subtitleActiveIndex = 0
        return
      }

      // 如果当前字幕已经被激活了，结束流程，防重
      if (videoElement.textTracks[index].mode === 'showing') return

      this.subtitleActiveIndex = index

      const track = videoElement.textTracks[index]

      // 字幕文件请求回来加载后，显示字幕
      setTimeout(() => {
        this.bindCues(track)
      }, 800)

      // 字幕文件请求回来加载后，显示第 2 条字幕时，会触发 oncuechange（兼容，防止延时无法加载出字幕）
      track.oncuechange = () => {
        track.oncuechange = null // 移除事件

        this.bindCues(track)
      }

      // 字幕默认为 disabled 不会触发事件，需要设置为 showing、或 hidden
      // aliplayer 的 hidden 无法设置，所以这里设 showing，video 原生字幕用 css 隐藏
      for (let i = 0; i < videoElement.textTracks.length; i++) {
        videoElement.textTracks[i].mode = i === index ? 'showing' : 'disabled'
      }
    },
    /**
     * 显示字幕（添加监听，将每条字幕激活时显示出来）
     */
    bindCues (track) {
      const cues = track.cues
      for (const i in cues) {
        const cue = cues[i]

        if (typeof cue === 'object') {
          // 字幕进入
          cue.onenter = (e) => {
            this.subtitle = cue.text
          }

          // 字幕离开
          cue.onexit = (e) => {
            this.subtitle = ''
          }
        }
      }
    },
    /**
     * 生成剧情点数据遍历出 小圆点
     */
    generatePoints () {
      if (!this.config.points) {
        return
      }
      const duration = this.player.duration
      const points = this.config.points || []
      const len = points.length
      const pointsInfo = []
      for (let i = 0; i < len; i++) {
        const info = {
          x: (points[i].time / duration) * 100 + '%',
          text: points[i].text,
          time: points[i].time,
        }
        pointsInfo.push(info)
      }
      this.points = pointsInfo
    },
    play () {
      this.pauseAll()
      if (this.player.play) {
        if (this.isEnded) {
          this.isEnded = false
          this.replay()
        } else {
          this.$nextTick(() => {
            this.player.play()
          })
        }
        this.paused = false
        this.setAutoHide()
      }
    },
    // 暂停所有视频的播放
    pauseAll () {
      const videos = document.querySelectorAll('video')
      videos.forEach(video => {
        video.pause()
      })
    },
    pause () {
      if (this.player.pause) {
        this.paused = true
        this.player.pause()
        this.setAutoHide()
      }
    },
    togglePlay () {
      if (this.paused) {
        this.play()
      } else {
        this.pause()
      }
      this.emit('togglePlay', this.paused)
    },
    seek (time) {
      // 跳转时间小于总时长，才可以跳转
      if (this.player.seek && time <= this.player.duration) {
        this.player.seek(time)
        this.emit('seek', time)
      }
    },
    prev () {
      this.emit('prev')
    },
    next () {
      this.emit('next')
    },
    mouseMoveHandler () {
      this.setAutoHide()
    },
    videoClick () {
      // pc 且没有拖拽音量控制条时触发播放/暂停
      if (!utils.isMobile && !this.isVolumeDrag) {
        this.togglePlay()
      }
      if (this.isShowQualityList) {
        this.isShowQualityList = false
      }
      if (this.isShowRateList) {
        this.isShowRateList = false
      }
      if (this.isShowVolumeBar) {
        this.isShowVolumeBar = false
      }
      this.setAutoHide()
    },
    setAutoHide () {
      this.show()
      clearTimeout(this.autoHideTimer)
      this.autoHideTimer = setTimeout(() => {
        if (!this.paused) {
          this.hide()
        }
      }, 5000)
    },
    show () {
      this.isUserInActive = false

      this.setIconStatus(true)
      this.emit('showBottomBar')
    },
    hide () {
      this.isUserInActive = true
      this.isShowVolumeBar = false // 控制栏隐藏后，关闭音量控制条

      this.setIconStatus(false)
      this.emit('hideBottomBar')
    },
    hideBigPlayBtn () {
      this.isShowBigPlayBtn = false
    },
    showBigPlayBtn () {
      this.isShowBigPlayBtn = true
    },
    hideTitle () {
      this.isShowTitle = false
    },
    showTitle () {
      this.isShowTitle = true
    },
    openQualityList () {
      this.isShowQualityList = !this.isShowQualityList
      this.isShowRateList && (this.isShowRateList = false)
      this.isShowVolumeBar && (this.isShowVolumeBar = false)
    },
    openRateList () {
      this.isShowRateList = !this.isShowRateList
      this.isShowQualityList && (this.isShowQualityList = false)
      this.isShowVolumeBar && (this.isShowVolumeBar = false)
    },
    switchQuality (item) {
      this.isShowQualityList = false
      if (this.quality.type === item.type) {
        return
      }
      this.quality = item
      this.isShowQualityTip = true
      this.isSwitchQuality = true
      this.paused = false
      this.seeked = false
      this.emit('switchQuality', item.type)
      if (this.config.isEncrypt) {
        this.playedSeconds = this.player.current
        this.player.switchQuality(item.type)
      } else {
        this.playedSeconds = this.player.played * this.player.video.duration
        const src = this.qualityList.find(
          (quality) => quality.type === item.type
        ).url
        this.switchNonEncryptVideo({
          src,
          Hls,
        })
      }
    },
    switchRate (item) {
      this.isShowRateList = false
      if (this.rate === item) {
        return
      }
      this.rate = item
      this.player.speed(Number(item))
      this.emit('switchRate', this.rate)
    },
    pictureInPictureChange () {
      clearTimeout(this.pictureInPictureTimer)

      if (document.pictureInPictureElement) {
        this.isPictureInPicture = true
        this.emit('enterpictureinpicture')
      } else {
        // 画中画关闭的较慢，加延时避免显示出默认样式
        this.pictureInPictureTimer = setTimeout(() => {
          this.isPictureInPicture = false
          this.emit('leavepictureinpicture')
        }, 250)
      }
    },
    openPictureInPicture () {
      if (this.pictureInPictureEnabled && this.player.video) {
        this.player.video.requestPictureInPicture()
      }
    },
    closePictureInPicture () {
      // 是否开启了画中画
      if (this.pictureInPictureEnabled && document.pictureInPictureElement) {
        document.exitPictureInPicture()
      }
    },
    toggleVolume () {
      this.isShowVolumeBar = !this.isShowVolumeBar
      this.isShowQualityList && (this.isShowQualityList = false)
      this.isShowRateList && (this.isShowRateList = false)
    },
    toggleFullScreen () {
      this.isWebFullScreen = false
      if (this.isFullScreen()) {
        this.cancelFullScreen()
      } else {
        this.enableFullScreen()
      }
    },
    toggleWebFullScreen () {
      if (this.isFullScreen()) {
        this.cancelFullScreen()
      } else {
        this.videoPointFun('resize')
      }
      this.isWebFullScreen = !this.isWebFullScreen
      this.emit('webFullScreenStatus', this.isWebFullScreen)
      this.player.video.isWebFullScreen = this.isWebFullScreen
    },
    // 获取元素距页面左边的距离
    getProgressBarViewLeft () {
      const progressBarWrap = this.$refs.progressBarWrap
      return utils.getElementViewLeft(
        progressBarWrap,
        progressBarWrap.offsetParent
      )
    },
    thumbMove (e) {
      this.isDragging = true
      const progressBarWrap = this.$refs.progressBarWrap
      let percentage =
        ((e.clientX || e.changedTouches[0].clientX) -
          this.getProgressBarViewLeft()) /
        progressBarWrap.clientWidth
      percentage = Math.max(percentage, 0)
      percentage = Math.min(percentage, 1)
      this.thumbPercentage = percentage * 100 + '%'
      this.thumbTime = utils.secondToTime(
        percentage * this.player.video.duration
      )
    },
    thumbUp (e) {
      this.isDragging = false
      document.removeEventListener(utils.nameMap.dragEnd, this.thumbUp)
      document.removeEventListener(utils.nameMap.dragMove, this.thumbMove)
      const progressBarWrap = this.$refs.progressBarWrap
      let percentage =
        ((e.clientX || e.changedTouches[0].clientX) -
          this.getProgressBarViewLeft()) /
        progressBarWrap.clientWidth
      percentage = Math.max(percentage, 0)
      percentage = Math.min(percentage, 1)
      this.thumbPercentage = percentage * 100 + '%'
      this.thumbTime = utils.secondToTime(
        percentage * this.player.video.duration
      )
      this.seek(percentage * this.player.video.duration)
      this.isShowTouchTime = false

      // 拖拽进度条，更新视频点选中位置
      this.videoPointFun('moveItem', percentage * this.player.video.duration)
    },
    dragStart () {
      document.addEventListener(utils.nameMap.dragMove, this.thumbMove)
      document.addEventListener(utils.nameMap.dragEnd, this.thumbUp)
    },
    dragMove (e) {
      const progressBarWrap = this.$refs.progressBarWrap
      const touchTime = this.$refs.touchTime
      if (this.player.video.duration) {
        const px = utils.cumulativeOffset(progressBarWrap).left
        const tx = (e.clientX || e.changedTouches[0].clientX) - px
        if (tx < 0 || tx > progressBarWrap.offsetWidth) {
          return
        }
        const time =
          this.player.video.duration * (tx / progressBarWrap.offsetWidth)
        touchTime.style.left = `${tx - (time >= 3600 ? 25 : 20)}px`
        this.player.touchTime = utils.secondToTime(time)
        this.isShowTouchTime = true
      }
    },
    dragEnd () {},
    volumeDragStart () {
      clearTimeout(this.volumeTimer)
      this.isVolumeDrag = true
      document.addEventListener(utils.nameMap.dragMove, this.volumeDragMove)
      document.addEventListener(utils.nameMap.dragEnd, this.volumeDragEnd)
    },
    volumeDragMove (e) {
      if (this.isVolumeDrag) {
        this.volumeBarClick(e)
      }
    },
    volumeDragEnd () {
      this.volumeTimer = setTimeout(() => {
        // 音频控制条拖拽状态，稍作延时，晚于 videoClick 触发，以免触发播放暂停
        this.isVolumeDrag = false
        // 音频控制条关闭，稍作延时
        // 1. 晚于最后一次 volumeDragMove 触发，以免取不到 dom 位置
        // 2. 等音量条，包括小圆点，变化后再消失
        this.isShowVolumeBar = false
      }, 400)
      document.removeEventListener(utils.nameMap.dragMove, this.volumeDragMove)
      document.removeEventListener(utils.nameMap.dragEnd, this.volumeDragEnd)
    },
    volumeBarClick (e) {
      const volumeBarWrap = this.$refs.volumeBarWrap
      const volume =
        1 -
        (e.clientY - volumeBarWrap.getBoundingClientRect().top) /
          volumeBarWrap.clientHeight
      this.setVolume(volume)
    },
    getVolume () {
      const volume = localStorage.getItem('GkPlayerVolume')
      return volume && volume >= 0 && volume <= 1 ? +volume : this.player.video.volume
    },
    setVolume (volume) {
      volume = Math.max(0, Math.min(1, volume))
      if (this.player.video.muted) {
        this.player.video.muted = false
      }
      this.player.video.volume = volume
      this.volume = volume
      localStorage.setItem('GkPlayerVolume', volume)
    },
    videoTouchSeekStart (e) {
      if (this.canTouchSeek) {
        this.videoTouchStartPercentage = this.thumbPercentage.slice(0, -1) / 100
        this.videoTouchStartX = e.clientX || e.touches[0].clientX
        this.videoTouchStartY = e.clientY || e.touches[0].clientY
        document.addEventListener('touchmove', this.videoTouchSeekMove)
        document.addEventListener('touchend', this.videoTouchSeekEnd)
        document.addEventListener('touchcancel', this.videoTouchSeekEnd)
      }
    },
    videoTouchSeekMove (e) {
      const moveX =
        (e.clientX || e.changedTouches[0].clientX) - this.videoTouchStartX
      const moveY =
        (e.clientY || e.changedTouches[0].clientY) - this.videoTouchStartY
      // 只有左右滑动时处理
      if (moveX * moveX - moveY * moveY > 10) {
        this.setAutoHide()
        this.isDragging = true
        let percentage = this.videoTouchStartPercentage
        // 手势快进快退最大范围5分钟
        if (this.player.duration < 300) {
          percentage += moveX / this.$refs.videoWrap.clientWidth
        } else {
          percentage +=
            ((moveX / this.$refs.videoWrap.clientWidth) * 300) /
            this.player.duration
        }
        percentage = Math.max(percentage, 0)
        percentage = Math.min(percentage, 1)
        this.thumbPercentage = percentage * 100 + '%'
        this.thumbTime = utils.secondToTime(percentage * this.player.duration)
      }
    },
    videoTouchSeekEnd (e) {
      document.removeEventListener('touchmove', this.videoTouchSeekMove)
      document.removeEventListener('touchend', this.videoTouchSeekEnd)
      document.removeEventListener('touchcancel', this.videoTouchSeekEnd)

      const moveX =
        (e.clientX || e.changedTouches[0].clientX) - this.videoTouchStartX
      const moveY =
        (e.clientY || e.changedTouches[0].clientY) - this.videoTouchStartY
      // 只有左右滑动时处理
      if (moveX * moveX - moveY * moveY > 10) {
        this.isDragging = false
        let percentage = this.videoTouchStartPercentage
        // 手势快进快退最大范围5分钟
        if (this.player.duration < 300) {
          percentage += moveX / this.$refs.videoWrap.clientWidth
        } else {
          percentage +=
            ((moveX / this.$refs.videoWrap.clientWidth) * 300) /
            this.player.duration
        }
        percentage = Math.max(percentage, 0)
        percentage = Math.min(percentage, 1)
        this.thumbPercentage = percentage * 100 + '%'
        this.thumbTime = utils.secondToTime(percentage * this.player.duration)
        this.seek(percentage * this.player.duration)
        this.isShowTouchTime = false
      }
    },
    keydown (e) {
      const tag = document.activeElement.tagName.toUpperCase()
      const editable = document.activeElement.getAttribute('contenteditable')
      if (
        tag !== 'INPUT' &&
        tag !== 'TEXTAREA' &&
        editable !== '' &&
        editable !== 'true'
      ) {
        const event = e || window.event
        switch (event.keyCode) {
          case 32: // 空格
            // 如果一个页面有多个视频，非全屏模式时，禁用空格的暂停/播放功能
            if (this.shortcutKeyDisabled) {
              return
            }

            // 多个视频时，禁用快捷键
            if (this.config.disableShortcut) {
              if (this.isWebFullScreen || this.isFullScreenStatus) {
                event.preventDefault()
                this.togglePlay()
              }
            // 单个视频时
            } else {
              event.preventDefault()
              this.togglePlay()
            }
            break
          case 37: // left
            // 如果一个页面有多个视频，非全屏模式并且视频是暂停状态，禁用快进快退功能
            if (this.shortcutKeyDisabled && this.paused) {
              return
            }
            event.preventDefault()
            this.seek(this.player.video.currentTime - 10)
            this.setAutoHide()
            break
          case 39: // right
            // 如果一个页面有多个视频，非全屏模式并且视频是暂停状态，禁用快进快退功能
            if (this.shortcutKeyDisabled && this.paused) {
              return
            }
            event.preventDefault()
            this.seek(this.player.video.currentTime + 10)
            this.setAutoHide()
            break
        }
      }
    },
    isFullScreen () {
      return (
        document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement
      )
    },
    fullScreenChange () {
      this.isFullScreenStatus = !!this.isFullScreen()
      this.emit('fullScreenStatus', this.isFullScreenStatus)
    },
    enableFullScreen () {
      // 视频全屏时，需要退出画中画
      this.closePictureInPicture()

      const player = this.$refs.playerWrap
      if (player.requestFullscreen) {
        player.requestFullscreen()
      } else if (player.mozRequestFullScreen) {
        player.mozRequestFullScreen()
      } else if (player.webkitRequestFullscreen) {
        player.webkitRequestFullscreen()
      } else if (this.player.video.webkitEnterFullscreen) {
        // Safari for iOS
        this.player.video.webkitEnterFullscreen()
      } else if (this.player.video.webkitEnterFullScreen) {
        this.player.video.webkitEnterFullScreen()
      } else if (player.msRequestFullscreen) {
        player.msRequestFullscreen()
      }
    },
    cancelFullScreen () {
      // 取消全屏时，全屏状态下已开启的画中画会自动关闭，无需处理
      if (document.cancelFullScreen) {
        document.cancelFullScreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      } else if (document.webkitCancelFullscreen) {
        document.webkitCancelFullscreen()
      } else if (document.msCancelFullScreen) {
        document.msCancelFullScreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
    },
    checkLoading () {
      const requestAnimationFrame =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame
      const step = () => {
        const timestamp = Date.now()
        if (!this.paused && this.time1 && timestamp - this.time1 > 1000) {
          this.loading = true
        } else {
          this.loading = false
        }
        requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    },
    initSeek () {
      if (!this.seeked && this.player && this.player.duration) {
        this.seeked = true

        if (
          this.playedSeconds &&
          this.player.duration - this.playedSeconds > 30
        ) {
          this.seek(this.playedSeconds)

          this.videoPointPlaySecond(this.playedSeconds)
        }
      }
    },
    getVideoStatus () {
      if (this.player && this.player.current) {
        return {
          currentTime: Math.floor(this.player.current),
          duration: Math.floor(this.player.duration),
        }
      } else {
        return null
      }
    },
    emit (name, info) {
      this.trigger(name, info)
    },
    isEventType (name) {
      return (
        [
          'eventTriggered',
          'switchRate', // 播放速度切换
          'switchQuality', // 清晰度切换
          'timeUpdate', // 播放进度更新
          'ended', // 播放结束
          'error', // 播放器报错
          'prev', // 上一个播放按钮被点击
          'next', // 下一个播放按钮被点击
          'inited', // 播放器初始化完成
          'play', // 播放
          'pause', // 暂停
          'togglePlay', // 切换播放or暂停
          'seek', // 进度跳转
          'showBottomBar', // 显示控制栏
          'hideBottomBar', // 隐藏控制栏
          'fullScreenStatus', // 全屏状态切换
          'webFullScreenStatus', // 网页全屏状态切换
          'enterpictureinpicture', // 进入画中画
          'leavepictureinpicture', // 退出画中画
        ].indexOf(name) > -1
      )
    },
    on (name, callback) {
      if (this.isEventType(name) && typeof callback === 'function') {
        if (!this.events[name]) {
          this.events[name] = []
        }
        this.events[name].push(callback)
      }
    },
    trigger (name, info) {
      if (this.events[name] && this.events[name].length) {
        for (let i = 0; i < this.events[name].length; i++) {
          this.events[name][i](info)
        }
      }
      if (this.events.eventTriggered && this.events.eventTriggered.length) {
        for (let i = 0; i < this.events.eventTriggered.length; i++) {
          this.events.eventTriggered[i](info)
        }
      }
    },
    /**
     * 显示视频剧情摘要信息
     */
    showOutlineTip (data) {
      $emit(this, 'toggleOutLineTip', data)
    },
    hideOutlineTip () {
      $emit(this, 'toggleOutLineTip', false)
    },
    // pc下 控制视频点图标状态的切换 & 控制视频点组件的显隐
    toggleVideoPoint (status) {
      this.showVideoPoint = status
    },
    setVideoPointIcon (status) {
      this.hideVideoPointIcon = status
    },
    /**
     * @param {string} funName 方法名
     * @param {any} 参数
     */
    videoPointFun (funName, ...args) {
      this.$nextTick(() => {
        let ele = this.$refs[this.videoPointKey]
        ele = ele && ele[0]

        if (ele && ele[funName]) {
          ele[funName](...args)
        }
      })
    },
    // 初始化视频点上次的播放进度
    videoPointPlaySecond (second) {
      this.videoPointFun('moveItem', second)
    },
    // mobile下控制视频点图标的显隐
    setIconStatus (status) {
      // this.$nextTick(() => {
      //   let ele = this.$refs[this.videoPointKey]
      //   ele = ele && ele[0]

      //   ele && ele.setIconStatus(status)
      // })
      this.videoPointFun('setIconStatus', status)
    },
    videoPointClick (time) {
      this.seek(time)
      $emit(this, `${this.videoPointKey}-click`, time)
    },
  },
}
</script>

<style lang="css">
video[playsinline]::-webkit-media-text-track-container {
  transform: translateY(40%) !important;
}
video::cue {
  visibility: hidden;
}
</style>

<style lang="stylus" module>
:global
  @font-face
    font-family: 'gkplayer-iconfont';  /* Project id 372689 */
    src: url('//at.alicdn.com/t/font_372689_a1px8lr2ji.woff2?t=1632378993110') format('woff2'),
          url('//at.alicdn.com/t/font_372689_a1px8lr2ji.woff?t=1632378993110') format('woff'),
          url('//at.alicdn.com/t/font_372689_a1px8lr2ji.ttf?t=1632378993110') format('truetype');

  .gkplayer-iconfont
    font-family:"gkplayer-iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;

.wrap
  --primary-color #fa8919
  position relative
  overflow hidden
  user-select none
  height 100%
  cursor pointer
  &.userInActive
    cursor none
    .controlMask,
    .controlWrap,
    .title
      opacity 0
      visibility hidden
  &.full
    position fixed
    z-index 600
    top 0
    left 0
    width 100%
    height 100%
    background #000
.videoWrap
  width 100%
  height 100%
.title
  position absolute
  padding-top 1rem
  padding-left 1rem
  padding-right 1rem
  top 0
  left 0
  right 0
  height 68px
  line-height 1.4
  color #fff
  opacity 1
  visibility visible
  font-weight normal
  font-size 0.875rem
  background linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent)

.bigPlayBtn
  position absolute
  z-index 9
  top 50%
  left 50%
  transform translate3d(-50%, -50%, 0)
  width 50px
  height 50px
  border-radius 50%
  background rgba(0,0,0,0.3)
  cursor pointer

.bigPlayIcon
  position absolute
  top 8px
  left 17px
  font-size 20px
  line-height 1.8
  color #fff
  &:hover
    color #fa8919
    color var(--primary-color)
  &:before
    content '\e692'

.controlMask
  background linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)
  height 120px
  width 100%
  position absolute
  bottom 0
  // z-index -1
  opacity 1
  visibility visible
  transition all 0.3s ease
  &:hover
    opacity 1

.controlWrap
  position absolute
  bottom 0
  left 0
  right 0
  height 40px
  user-select none
  transition all 0.3s ease
  z-index 9
  opacity 1
  visibility visible
  background rgba(0,0,0,0.5)
  display flex
  cursor default
  &.userInActive
    visibility hidden
    opacity 0
.left
  height 100%
  display flex
  flex 1 1 40%
  align-items center
.right
  height 100%
  flex 1 1 60%
  display flex
  align-items center
  // padding-right 6px
  font-size 14px
  color #fff
  justify-content flex-end

.icon
  width 38px
  height 38px
  line-height 38px
  font-size 14px
  font-weight normal
  color #fff
  text-align center
  cursor pointer
  box-sizing border-box
.playIcon
  font-size 20px
  &:hover
    color #fa8919
    color var(--primary-color)
  &:before
    content '\e692'
.pauseIcon
  font-size 20px
  &:hover
    color #fa8919
    color var(--primary-color)
  &:before
    content '\e693'
.prevIcon,
.nextIcon
  &:hover
    color #fa8919
    color var(--primary-color)
.prevIcon
  &:before
    content '\e694'
.nextIcon
  &:before
    content '\e691'
.statusTime
  margin-left 20px
  color #eee
  line-height 24px
  text-shadow 0 0 2px rgba(0, 0, 0, 0.5)
  font-size 13px
  cursor default
  .duration
    color #a4aab3
.barWrap
  padding 5px 0
  position absolute
  top -8px
  left 0px
  right 0px
  height 3px
  z-index 1
  &:hover
    // .barTime
    //   opacity 1
    .tooltip
      -webkit-transform scale(1)
      transform scale(1)
.bar
  position relative
  height 3px
  width 100%
  background #fff3
  cursor pointer
.barPoint
  position absolute
  z-index 10
  top: 0
  width 3px
  height 3px
  margin-left -2px
  background #fff
  border-radius 50%
  transition all 0.3s ease
  cursor pointer
  &:after
    display none
    position absolute
    bottom 10px
    padding 4px 8px
    background #000
    border-radius 4px
    content attr(data-text)
    font-size 14px
    word-break keep-all
    color #fff
    transform translateX(-50%)
    transition all 0.3s ease
  &:hover
    transform scale(2)

.tooltipTime
  text-align center
  font-size 12px
  line-height 1
.tooltipText
  margin-top 4px
  font-size 12px
  line-height 18px

.barTime
  position absolute
  left 0px
  top -32px
  border-radius 4px
  padding 5px 7px
  background-color #0000009e
  color #fff
  font-size 12px
  text-align center
  opacity 0
  transition opacity 0.1s ease-in-out
  word-wrap normal
  word-break normal
  z-index 2
  pointer-events none
  &:hover
    .tooltip
      -webkit-transform scale(1)
      transform scale(1)
.loaded
  position absolute
  left 0
  top 0
  bottom 0
  background #fff6
  height 3px
  transition all 0.5s ease
  will-change width
.played
  position absolute
  left 0
  top 0
  bottom 0
  height 3px
  will-change width
  background #FA8919
  background var(--primary-color)
  &:hover .tooltip
    transform scale(1)
.tooltip
  position absolute
  z-index 11
  top 0
  right 5px
  margin-top -4px
  margin-right -10px
  height 11px
  width 11px
  border-radius 50%
  cursor pointer
  transition all 0.3s ease-in-out
  -webkit-transform scale(0)
  transform scale(0)
  background #FA8919
  background var(--primary-color)

.quality, .rate
  position relative
  height 38px
  line-height 38px
.qualityList, .rateList
  margin 0
  padding 0
  position absolute
  left -20px
  bottom 46px
  width 90px
  border-radius 5px
  transform scale(0)
  background rgba(0,0,0,0.7)
  overflow hidden
  &.on
    transform scale(1)

.listItem
  text-align center
  width 90px
  height 40px
  line-height 40px
  cursor pointer
  &:hover
    color #FA8919
    color var(--primary-color)
.listItemActive
  color #FA8919
  color var(--primary-color)
.current
  display flex
  align-items center
  height 100%
  margin-right 12px
  span
    width 48px
    height 22px
    line-height 22px
    text-align center
    font-size 12px
    border-radius 11px
    background rgba(0,0,0,0.7)
    cursor pointer
    &:hover
      color #fff
      background #fa8919
      background var(--primary-color)

.qualityTip
  position absolute
  z-index 11
  left 18px
  bottom 38px
  padding 10px 15px
  font-size 14px
  color #fff
  background rgba(0,0,0,0.6)

.qualityName
  color #FA8919
  color var(--primary-color)

.pictureInPictureOnBtn,
.pictureInPictureOffBtn,
.volumeBtn,
.webFullscreenOnBtn,
.webFullscreenOffBtn,
.fullscreenOnBtn,
.fullscreenOffBtn,
.videoPointOnBtn,
.videoPointOffBtn
  position relative
  .tooltips
    position absolute
    left 50%
    top -40px
    transform translate3d(-50%, 10px, 0)
    height 30px
    line-height 30px
    padding 0 8px
    font-size 12px
    white-space nowrap
    color #fff
    background rgba(0,0,0,0.6)
    border-radius 5px
    opacity 0
  &:hover
    color #FA8919
    color var(--primary-color)
    .tooltips
      opacity 1
      transform translate3d(-50%, 0, 0)
      transition opacity .3s ease, transform .3s ease
.videoPointOnBtn
  &:before
    position relative
    top 1px
    font-size 15px
    content '\e612'
    color #FA8919
    color var(--primary-color)
.videoPointOffBtn
  &:before
    position relative
    top 1px
    font-size 15px
    content '\e6df'
.pictureInPictureOnBtn
  &:before
    content '\e6cf'
.pictureInPictureOffBtn
  &:before
    content '\e6d0'
.volumeBtn
  &:before
    content '\e6d1'
.webFullscreenOnBtn
  &:before
    content '\e68f'
.webFullscreenOffBtn
  &:before
    content '\e690'
.fullscreenOnBtn
  &:before
    content '\e68e'
.fullscreenOffBtn
  &:before
    content '\e68d'

.pictureInPictureMask
  position absolute
  left 0
  top 0
  display flex
  flex-direction column
  justify-content center
  align-items center
  width 100%
  height 100%
  background #000
  color: rgba(255,255,255,0.5)
  &:before
    content '\e6cf'
    display block
    font-size 49px
    line-height 1
  &:after
    content '此视频正在以画中画模式播放'
    display block
    margin-top 20px
    font-size 14px
    line-height 1

@media screen and (max-width 768px)
  .left
    flex 0 0 auto
    order 0

  .right
    flex 0 0 auto
    order 2

  .thumbTimeWap,
  .durationTimeWap
    font-size 12px
    color #fff

  .barWrap
    position static
    display flex
    align-items center
    flex 1
    z-index 1
    order 1
    height 40px
    padding 0 10px

// 字幕
.subtitle
  box-sizing border-box
  position absolute
  z-index 100
  left 0
  bottom 15px
  width 100%
  font-weight 400
  color #fff
  text-align center
  transition all 0.5s ease
  &[user-active='true']
    bottom 50px

// 字幕描边（底层）
.subtitleStroke
  -webkit-text-stroke 3px #000
  &[user-active='true']
    bottom 50px

// 扩展
.extensionItem
  cursor pointer

// 1. normal: PC 通常样式
.subtitle
  bottom 7px
  padding 0 32px
  font-size 18px
  line-height 26px
  letter-spacing: 2px;

// 2. mobile: 移动端样式
@media (max-width: 768px)
  .subtitle
    bottom 18px
    padding 0 30px
    font-size 14px
    line-height 21px
    letter-spacing: 0.5px;

@media (max-width: 768px)
  .subtitleStroke
    -webkit-text-stroke 2px #333

// 3. fullscreen：PC 全屏样式
.subtitleStrokeFullScreen
  bottom 50px
  padding 0 30px
  font-size 26px
  line-height 36px
  letter-spacing 1.5px

.volumeWrap
  position relative

.volumeBarWrap
  position absolute
  left: 0
  right 0
  bottom 50px
  width 16px
  height 100px
  margin 0 auto
  cursor pointer

.volumeBar
  display flex
  align-items flex-end
  justify-content center
  width 4px
  height 100%
  margin 0 auto
  background #4d4d4d
  border-radius 4px

.volumeBarProgress
  position relative
  width 100%
  max-height 100%
  border-radius 4px
  background #FF5A05

.volumeBarProgressDot
  content ' '
  position absolute
  left 50%
  top 0
  display block
  width: 10px;
  height: 10px;
  margin-left: -5px;
  margin-top: -5px;
  background #FFF
  border-radius 50%
  box-shadow 0px 0px 12px 4px rgba(255, 90, 5, 0.46);
</style>
