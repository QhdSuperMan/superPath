import utils from './utils'
import handleOption from './options'
import Bar from './bar'
import Events from './events'

class Player {
  constructor (options) {
    this.options = handleOption(options)
    this.Hls = this.options.Hls
    this.container = this.options.video
    this.events = new Events()
    this.paused = true
    this.bar = new Bar(this)
    this.played = 0
    this.playedPercentage = '0%'
    this.duration = 0
    this.durationTime = '00:00'
    this.current = 0
    this.currentTime = '00:00'
    this.playedTime = '00:00'
    this.touchTime = '00:00'
    this.video = this.options.video

    this.initVideo(this.options.src)

    if (this.options.autoplay) {
      this.play()
    }
  }

  /**
   * Seek video
   */
  seek (time) {
    time = Math.max(time, 0)
    if (this.video.duration) {
      time = Math.min(time, this.video.duration)
    }

    this.video.currentTime = time

    this.bar.set('played', time / this.video.duration)
    this.playedTime = utils.secondToTime(time)
    this.current = time
    this.currentTime = utils.secondToTime(time)
  }

  /**
   * Play video
   */
  play () {
    const playedPromise = Promise.resolve(this.video.play())
    playedPromise
      .catch(() => {
        this.pause()
        this.events.trigger('autoPlayError')
      })
      .then(() => {})
  }

  /**
   * Pause video
   */
  pause () {
    this.video.pause()
  }

  /**
   * Set volume
   */
  volume (percentage) {
    percentage = parseFloat(percentage)
    if (!isNaN(percentage)) {
      percentage = Math.max(percentage, 0)
      percentage = Math.min(percentage, 1)
      this.bar.set('volume', percentage)

      this.video.volume = percentage
      if (this.video.muted) {
        this.video.muted = false
      }
    }

    return this.video.volume
  }

  /**
   * attach event
   */
  on (name, callback) {
    this.events.on(name, callback)
  }

  initMSE (src) {
    let type = 'normal'
    if (/m3u8(#|\?|$)/i.exec(src)) {
      type = 'hls'
    }

    /**
     * fix Hls is not supported in Safari Mobile
     * @see https://github.com/MoePlayer/DPlayer/commit/87e137e2c3be7120407b3900c2e1b37c96e2b1b9
     */
    if (
      type === 'hls' &&
      (this.video.canPlayType('application/x-mpegURL') ||
        this.video.canPlayType('application/vnd.apple.mpegURL'))
    ) {
      type = 'normal'
    }

    if (type === 'hls') {
      if (this.Hls.isSupported()) {
        if (!window.GBHlsObj) {
          window.GBHlsObj = []
        }
        const hls = new this.Hls()
        window.GBHlsObj.push({
          time: new Date().getTime(),
          hls,
        })
        hls.loadSource(src)
        hls.attachMedia(this.video)
        setTimeout(() => {
          const lastTime = window.GBHlsObj[window.GBHlsObj.length - 1].time
          window.GBHlsObj.forEach((h) => {
            if (h.time + 1000 * 10 < lastTime) {
              h.hls && h.hls.destroy && h.hls.destroy()
            }
          })
        })
      }
    } else {
      this.video.src = src
    }
  }

  initVideo (src) {
    this.initMSE(src)

    /**
     * video events
     */
    // show video time: the metadata has loaded or changed
    this.on('durationchange', () => {
      // compatibility: Android browsers will output 1 or Infinity at first
      if (this.video.duration !== 1 && this.video.duration !== Infinity) {
        this.duration = this.video.duration
        this.durationTime = utils.secondToTime(this.video.duration)
      }
    })

    // show video loaded bar: to inform interested parties of progress downloading the media
    this.on('progress', () => {
      const percentage = this.video.buffered.length
        ? this.video.buffered.end(this.video.buffered.length - 1) /
          this.video.duration
        : 0
      this.bar.set('loaded', percentage)
    })

    // video download error: an error occurs
    this.on('error', () => {
      if (!this.video.error) {
        // Not a video load error, may be poster load failed, see #307
        return
      }
    })

    // video end
    this.on('ended', () => {
      this.bar.set('played', 1)
      this.pause()
    })

    this.on('timeupdate', () => {
      this.bar.set('played', this.video.currentTime / this.video.duration)
      this.playedTime = utils.secondToTime(this.video.currentTime)
      this.current = this.video.currentTime
      this.currentTime = utils.secondToTime(this.video.currentTime)
    })

    for (let i = 0; i < this.events.videoEvents.length; i++) {
      this.video.addEventListener(this.events.videoEvents[i], (e) => {
        if (this.video) {
          this.events.trigger(this.events.videoEvents[i], e)
        }
      })
    }
  }

  speed (rate) {
    this.video.playbackRate = rate
  }

  destroy () {
    this.pause()
    this.events.off()
    this.video.src = ''

    window.GBHlsObj.forEach((h) => {
      h.hls && h.hls.destroy && h.hls.destroy()
    })
  }
}

export default Player
