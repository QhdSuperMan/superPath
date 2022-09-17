<template>
  <component
    :is="tag"
    class="iconfont"
    :class="className"
    icon
    v-html="code"
    @click="$emit('click')"
  />
</template>

<script>
import VueTypes from 'vue-types'

export default {
  name: 'ComIcon',
  props: {
    tag: VueTypes.string.def('i'),
    gradient: VueTypes.string.def(''),
    code: VueTypes.string
  },
  emits: ['click'],
  computed: {
    className () {
      const cla = []

      if (this.gradient) {
        cla.push(`gradient-${this.gradient}`)
      }
      return cla
    }
  }
}
</script>

<style lang="scss" scoped>
%iconBlue {
  background-image: linear-gradient(135deg, #5C86FF 0%, #70A4FF 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.gradient-blue {
  &.on,
  &:hover {
    @extend %iconBlue;
  }
}
</style>
