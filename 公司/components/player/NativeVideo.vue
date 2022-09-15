<template>
  <div :class="$style.wrap">
    <video
      ref="video"
      :class="$style.video"
      webkit-playsinline
      playsinline
      :poster="poster"
      :preload="preload"
    >
      Sorry, your browser doesn't support embedded videos.
    </video>
  </div>
</template>

<script>
// import { $emit } from '@/utils'
import Player from './lib/player.js'

export default {
  props: {
    options: { type: Object, default: () => {}}
  },
  emits: ['inited'],
  data () {
    return {
      preload: 'auto',
      poster: '',
    }
  },
  mounted () {
    this.player = new Player({
      video: this.$refs.video,
      src: this.options.src,
      Hls: this.options.Hls,
    })
    this.poster = this.options.poster
    this.$emit('inited', this.player)
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
</style>
