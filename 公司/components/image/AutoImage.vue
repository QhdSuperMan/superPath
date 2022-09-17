<template>
  <div :class="$style['auto-image']">
    <div 
      :class="$style['default-img']"
      default-img
      :style="{
        width: `${imageWidth / scale}px`,
        height: `${imageHeight / scale}px`
      }"
      v-if="imageSrc ===''"
    ></div>

    <gkImage
      :placeHolder="imageSrc"
      :class="$style['image']"
      v-bind="{
        width: `${imageWidth}px`,
        height: `${imageHeight}px`
      }"
      real-image
      :style="{
        width: `${imageWidth / scale}px`,
        height: `${imageHeight / scale}px`
      }"
      v-else
    />
  </div>
</template>

<script setup>
import { computed, toRefs } from 'vue'
import VueTypes from 'vue-types'
import { gkImage } from '@geekbang/gkui'

const props = defineProps({
  src: VueTypes.string.def(''),
  width: VueTypes.number.def(0),
  height: VueTypes.number.def(0),
  ratio: VueTypes.number.def(0),
  scale: VueTypes.number.def(1),
  defaultBg: VueTypes.string.def('#f6f7fb')
})

const { src, width, height, ratio, defaultBg } = toRefs(props)

const imageSrc = computed(() => {
  return src.value
})

const imageWidth = computed(() => {
  return +width.value
})

const imageHeight = computed(() => {
  return +ratio.value ? parseInt(+width.value / +ratio.value) : +height.value
})

</script>

<style lang="scss" module>
.default-img {
  background: v-bind(defaultBg);
}

.image {
  display: block;
}
</style>
