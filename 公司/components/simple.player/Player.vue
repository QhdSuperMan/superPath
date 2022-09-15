<template>
  <div :class="$style['gk-video-player']" @touchstart.stop>
    <gkPlayer
      ref="player"
      :class="['gk-player', 'iconfont']"
    >
    </gkPlayer>
  </div>
</template>

<script>
import { ref, nextTick, onMounted } from 'vue'
import VueTypes from 'vue-types'
import Hls from 'hls.js'
import gkPlayer from '@/components/player/GkPlayer.vue'
export default {
  name: 'simple-video-player',
  components: {
    gkPlayer
  },
  props: {
    config: VueTypes.object.def({}),
    url: VueTypes.string.isRequired,
    title: VueTypes.string.def(''),
    poster: VueTypes.string.def('')
  },
  setup (props) {
    const player = ref(null)
    const playerInited = ref(false)

    const init = () => {
      const source = props.url
      const rate = window.localStorage.getItem('GkPlayerRate') || '1.0'

      const videoConfig = {
        ...props.config,
        title: props.title,
        source,
        rate,
        autoPlay: false,
        poster: props.poster,
        Hls: Hls
      }

      nextTick(() => {
        // 播放器第一次初始化
        if (!playerInited.value) {
          player.value.init(videoConfig)
          playerInited.value = true
        }
      })
    }

    onMounted(() => {
      init()
    })

    return {
      player
    }
  }
}
</script>

<style lang="scss" module>
@import "../../assets/css/custom.player.scss";
</style>
