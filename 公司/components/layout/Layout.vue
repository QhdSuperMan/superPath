<template>
  <div layout :class="$style['layout']">
    <div common-header-wrap :class="$style['common-header-wrap']" v-if="!isInApp()">
      <CommonHeader />
    </div>

    <div layout-content :class="$style['layout-content']">
      <slot></slot>
    </div>

    <div layout-footer v-if="useFooter">
      <CommonFooter />
    </div>
  </div>
</template>

<script>
import VueTypes from 'vue-types'
import CommonHeader from '@/components/header/Header.vue'
import CommonFooter from '@/components/footer/Footer.vue'
import { isInApp } from '@/sdk'

export default {
  name: 'Layout',
  components: {
    CommonHeader,
    CommonFooter
  },
  inheritAttrs: true,
  props: {
    useFooter: VueTypes.bool.def(false)
  },
  setup () {
    return {
      isInApp
    }
  }
}
</script>

<style lang="scss" module>
.layout {
  flex: 1;
  @extend %flex-col;
  background: #FAFAFC;
}

.layout-content {
  flex: 1;
  @extend %flex-col;

  @include mobileInner () {
    width: 100%;
  }
}
</style>
