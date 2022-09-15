<template>
  <div loading :class="$style['loading']">
    <gkLoading
      :color="color"
      :size="size"
      :label="label"
      :type="type"
      :width="width"
      :vertical="vertical"
      :labelColor="labelColor"
    />
  </div>
</template>

<script>
import VueTypes from 'vue-types'
import { gkLoading } from '@geekbang/gkui'
export default {
  name: 'Loading',
  components: { gkLoading },
  props: {
    label: VueTypes.string.def(''),
    type: VueTypes.oneOf(['circular', 'spinner']).def('circular'),
    size: VueTypes.oneOfType([String, Number]).def('big'),
    color: VueTypes.string.def('#4285F4'), // 支持 blue orange 或者自定义色值
    width: VueTypes.number.def(3),
    vertical: VueTypes.bool.def(false),
    labelColor: VueTypes.string.def('')
  }
}
</script>

<style lang="scss" module>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
