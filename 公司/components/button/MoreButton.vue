<template>
  <div :class="$style['more-button']">
    <template v-if="hasMore">
      <Loading :size="30" v-if="loading" />
      <gkButton
        :color="color"
        size="common-normal"
        useLock
        @click="handleMore"
        v-else
      >
        <slot>
          加载更多
        </slot>
      </gkButton>
    </template>
    <template v-else>
      <p no-more :class="$style['no-more']" v-if="useEndText">没有更多了</p>
    </template>
  </div>
</template>

<script>
import VueTypes from 'vue-types'
import { gkButton } from '@geekbang/gkui'
import Loading from '../loading/Loading.vue'
export default {
  name: 'MoreButton',
  components: {
    gkButton,
    Loading
  },
  props: {
    color: VueTypes.string.def('common-blue'),
    hasMore: VueTypes.bool.def(true),
    loading: VueTypes.bool.def(false),
    useEndText: VueTypes.bool.def(true)
  },
  emits: ['more'],
  setup (props, { emit }) {
    const handleMore = ({ clear }) => {
      emit('more', {
        clear
      })
    }

    return {
      handleMore
    }
  }
}
</script>

<style lang="scss" module>
.more-button {
  display: flex;
  justify-content: center;
  align-items: center;
}

.no-more {
  @include font(14);
  color: $gray;
}
</style>
