<template>
  <div class="custom-image">
    <AutoImage
      auto-image
      :src="imageSrc"
      :width="propsWidth"
      :height="propsHeight"
      :ratio="ratio"
      :scale="scale"
      :default-bg="defaultBg"
    />
  </div>
</template>

<script setup>
import { computed, toRefs } from 'vue'
import VueTypes from 'vue-types'
import AutoImage from './AutoImage.vue'

const props = defineProps({
  src: VueTypes.string.def(''),
  width: VueTypes.number.def(0),
  height: VueTypes.number.def(0),
  ratio: VueTypes.number.def(0),
  scale: VueTypes.number.def(1),
  defaultBg: VueTypes.string.def('#f6f7fb')
})

const { src, width: propsWidth, height: propsHeight, scale } = toRefs(props)

const width = computed(() => propsWidth.value ? `${propsWidth.value / scale.value}px` : 'auto')
const height = computed(() => propsHeight.value ? `${propsHeight.value / scale.value}px` : 'auto')

const imageSrc = computed(() => {
  return src.value
})

</script>

<style scoped lang="scss">
.custom-image {
  width: v-bind(width);
  height: v-bind(height);
}
</style>
