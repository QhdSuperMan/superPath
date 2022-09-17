<template>
  <div :class="$style['layout-wap']">
    <!-- <HeaderBar :title="title" @back="handleBack" /> -->
    <NativeTopBar 
      :title="title" 
      :border="false"
      @back="handleBack"
    >
    </NativeTopBar>
    <div layout-wap-content :class="$style['layout-wap-content']">
      <div :class="$style['loading-panel']" v-if="loading">
        <Loading :color="loadingColor" :size="40" />
      </div>
      <div :class="$style['timeout-panel']" @click="retry" v-else-if="isTimeOut">
        点击重试
      </div>
      <template v-else>
        <slot />
      </template>
    </div>
  </div>
</template>

<script>
import VueTypes from 'vue-types'
// import HeaderBar from '../header/HeaderBar.vue'
import NativeTopBar from '@/components/common/NativeTopBar.vue'
import Loading from '@/components/loading/Loading.vue'
export default {
  name: 'layout-wap',
  components: {
    NativeTopBar,
    Loading
  },
  props: {
    title: VueTypes.string.def(''),
    loadingColor: VueTypes.string.def('orange'),
    useTimeout: VueTypes.bool.def(false),
    timeout: VueTypes.number.def(4000)
  },
  emits: ['inited', 'retry', 'back'],
  data () {
    return {
      loading: false,
      isTimeOut: false
    }
  },
  created () {
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.loading = true

      this.$emit('inited', {
        loaded: () => {
          this.loaded()
        }
      })
      this.render()
    },
    render () {
      setTimeout(() => {
        if (this.useTimeout) {
          this.loading = false
          this.onTimeout()
        }

        this.loaded()
      }, this.timeout)
    },
    loaded () {
      this.loading = false
    },
    onTimeout () {
      this.isTimeOut = true
    },
    retry () {
      this.loading = true
      this.isTimeOut = false
      this.render()
      this.$nextTick(() => {
        this.$emit('retry')
      })
    },
    handleBack ({back}) {
      back && back()
      this.$emit('back')
    }
  }
}
</script>

<style lang="scss" module>
.layout-wap {
  display: flex;
  flex-direction: column;
  width: 100%; min-height: 100vh;
}

.layout-wap-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.loading-panel,
.timeout-panel {
  flex-grow: 1;
  width: 100%;
  @extend %center;
  padding-bottom: 100px;
}

</style>
