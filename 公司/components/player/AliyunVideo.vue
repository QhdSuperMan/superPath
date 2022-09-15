<template>
  <div :class="$style.wrap">
    <div
      :id="id"
      ref="player"
      :class="$style.video"
    ></div>
  </div>
</template>

<script>
import { $emit } from '@/utils'
import Events from './lib/events'
import Utils from './lib/utils'
import Bar from './lib/bar'

export default {
  props: {
    options: { type: Object, default: () => {} }
  },
  emits: ['inited', 'error'],
  data () {
    return {
      id: 'aliyunPlayerCon' + new Date().getTime(),
      events: new Events(),
      ready: false,
      bar: null,
      config: null,
      initSwitch: true,
    }
  },
  mounted () {
    if (this.options) {
      this.config = this.options
      this.initEncryptVideo((player) => {
        $emit(this, 'inited', player)
      })
    }
  },
  methods: {
    init (options) {
      this.config = options
      if (this.aliPlayer) {
        this.aliPlayer.dispose()
        this.player = null
        document.getElementById(this.id).innerHTML = ''
      }
      this.initEncryptVideo((player) => {
        $emit(this, 'inited', player)
      })
    },
    initEncryptVideo (callback) {
      const id = this.id
      if (!this.config.getEncryptVideoPlayAuth) {
        return
      }
      this.config.getEncryptVideoPlayAuth().then((playAuth) => {
        this.aliPlayer = new window.Aliplayer(
          {
            id,
            vid: this.config.encryptId,
            playauth: playAuth,
            encryptType: 1,
            width: '100%',
            height: '100%',
            autoplay: this.config.autoPlay,
            skinLayout: false,
          },
          (player) => {
            // 解密后通过player._urls就能获得清晰度的信息了
            /*
        [
          {
            Url: "https://media001.geekbang.org/15d38c1c6f5f4f5c93332b5489bc3be9/7697be619c21461ca42c6aa1d68377a3-2f8b8331e3410f79fd333522b01b60e1-hd-encrypt-stream.m3u8"
            definition: "HD"
            desc: "超清"
            duration: "424.7626"
            encrypt: 1
            encryptionType: 1
            format: "m3u8"
            height: 1080
            plaintext: "pjIBMh6pmq6VBc8TNyzBPpgTAlDkrquf1H5PO9m+0R4=
            rand: "rLmAOxBJlQ7SyyLK0p59Ptn9KQNq+fTZqYgWxcCMbEw=
            width: 1920
          },
          ...
        ]
        */
            // window.aliyunPlayerList = window.aliyunPlayerList || []
            // window.aliyunPlayerList.forEach(p => {
            //   p.dispose && p.dispose()
            // })
            // window.aliyunPlayerList.push(player)
            this.exportPlayer(player)
            this.eventBind(player)
            this.player.switchQuality(this.config.quality)
            callback(this.player)
          }
        )
        this.aliPlayer.on('error', (error) => {
          $emit(this, 'error', error)
        })
      })
    },
    eventBind (player) {
      player.on('timeupdate', () => {
        const current = player.getCurrentTime()
        const duration = player.getDuration() || 0
        this.player.current = current
        this.player.currentTime = Utils.secondToTime(current)
        this.player.duration = duration
        this.player.durationTime = Utils.secondToTime(duration)
        this.bar.set('played', current / duration)
        this.events.trigger('timeupdate', player)
      })
      player.on('play', () => {
        this.events.trigger('play')
      })
      player.on('pause', () => {
        this.events.trigger('pause')
      })
      player.on('progress', () => {
        const video = this.$refs.player.querySelector('video')
        const percentage = video.buffered.length
          ? video.buffered.end(video.buffered.length - 1) / video.duration
          : 0
        this.bar.set('loaded', percentage)
        this.events.trigger('progress', player)
      })
      player.on('playing', () => {
        this.events.trigger('playing', player)
      })
      player.on('canplaythrough', () => {
        this.events.trigger('canplaythrough', player)
      })
      player.on('ready', () => {
        this.ready = true
        this.events.trigger('canplay', player)
      })
      player.on('ended', () => {
        this.events.trigger('ended', player)
      })
    },
    exportPlayer (player) {
      const that = this
      this.player = {
        play: () => {
          player.play()
          // 如果执行播放，结果视频没有播放，可能video已经禁止依靠js来控制播放器了
          if (this.ready) {
            setTimeout(() => {
              if (player.paused()) {
                this.events.trigger('autoPlayError', player)
              }
            }, 500)
          }
        },
        pause () {
          player.pause()
        },
        speed (val) {
          player.setSpeed(val)
        },
        seek (val) {
          player.seek(val)
        },
        destroy () {
          player.dispose()
        },
        on: (name, fn) => {
          this.events.on(name, fn)
        },
        switchQuality (key) {
          // 切换清晰度后是否播放
          // 1. 初始化播放器时，取自动播放状态
          // 2. 播放中时，取当前播放状态
          const isPlay = that.initSwitch
            ? that.config.autoPlay
            : !player.paused()
          if (that.initSwitch) {
            that.initSwitch = false
          }

          const url = player._urls.find(
            (url) => url.definition.toLowerCase() === key.toLowerCase()
          )
          player.loadByUrl(url.Url, player.getCurrentTime(), isPlay, true)
        },
        video: this.$refs.player.querySelector('video'),
        playedTime: '00:00',
        duration: 0,
        loadedPercentage: '0%',
        playedPercentage: '0%',
      }
      this.bar = new Bar(this.player)
    },
  },
}
</script>

<style lang="stylus" module>
.wrap
  position relative
  background #000
  font-size 0
  width 100%
  height 100%
  .video
    margin 0 auto
    display block
    width 100%
    height 100%
:global .prism-fullscreen
  z-index 10
</style>
