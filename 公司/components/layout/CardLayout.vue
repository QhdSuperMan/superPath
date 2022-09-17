<template>
  <div :class="$style['card']">
    <div :class="$style['card-title']">
      <slot name="title">
        {{ title }}
      </slot>
      <slot name="sub-content" />
    </div>
    <div :class="$style['card-content']" card-content>
      <slot />
    </div>
  </div>
</template>

<script>
import VueTypes from 'vue-types'
export default {
  name: 'Card',
  props: {
    title: VueTypes.string.def('')
  }
}
</script>

<style lang="scss" module>
.card {
  box-sizing: border-box;
  width: 880px; min-height: 700px;
  padding: 40px 30px; margin-bottom: 30px;
  background: $white;
  border-radius: 12px;
}

.card-title {
  display: flex;
  justify-content: space-between;
  line-height: 32px;
  color: $subBlack;
  @include font(22, 500); 
}

.card-content {
  margin-top: 30px;
}
</style>