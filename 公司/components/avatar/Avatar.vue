<template>
  <div :class="$style['avatar']">
    <gkImage
      :src="path"
      :width="size"
      :height="size"
    />
  </div>
</template>

<script>
import VueTypes from 'vue-types'
import { gkImage } from '@geekbang/gkui'
import defaultAvatar from '@/assets/img/default-avatar.png'
import { computed } from '@vue/runtime-core'
export default {
  name: 'Avatar',
  components: {
    gkImage
  },
  props: {
    url: VueTypes.string.def(''),
    size: VueTypes.number.def(45)
  },
  setup (props) {
    const path = computed(() => {
      return props.url || defaultAvatar
    })
    return {
      path
    }
  }
}
</script>

<style lang="scss" module>
.avatar {
  display: flex;
  border-radius: 50%;
  overflow: hidden;
}
</style>
