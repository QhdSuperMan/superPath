<template>
  <div :class="$style['common-section']">
    <header :class="$style['section-header']" v-if="header">
      <div :class="$style['main-title']">
        <h3 :class="$style['section-title']">{{title}}</h3>
        <slot name="end" />
      </div>
      <slot name="sub" />
    </header>
    <slot />
  </div>
</template>

<script>
import VueTypes from 'vue-types'
export default {
  name: 'common-section',
  components: {
  },
  props: {
    title: VueTypes.string.def('标题'),
    header: VueTypes.bool.def(true)
  }
}
</script>

<style lang="scss" module>
.common-section {
  background: #FFFFFF;
  // box-shadow: 0px 0px 9px 0px rgba(198, 198, 223, 0.15);
  // border-radius: 5px;
  margin-bottom: 30px;
}

.section-header {
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  padding: 20px 0 0; margin-bottom: 20px;
}

.main-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.section-title {
  flex: 1;
  @include font(20, 500);
  line-height: 28px;
  color: $black;
}

.extra {
  height: 20px;
}
</style>
