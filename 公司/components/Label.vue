<template>
  <div
    com-label
    :class="$style['com-label']"
    :color="color"
    :size="size"
    :round="round"
    :error="error"
  >
    {{label}}
  </div>
</template>

<script>
import VueTypes from 'vue-types'
export default {
  name: 'com-label',
  props: {
    label: VueTypes.string.def(''),
    error: VueTypes.bool.def(false),
    round: VueTypes.bool.def(false),
    color: VueTypes.oneOf(['blue', 'gray']),
    size: VueTypes.oneOf(['mini', 'middle', 'large']).def('mini')
  }
}
</script>

<style lang="scss" module>
.com-label {
  padding: 0 4px;
  background: rgba($color: $blue, $alpha: 0.1);
  border-radius: 4px;
  color: $blue;
  @include lineFont(12, 500);
  line-height: 22px;

  &[error=true] {
    background: rgba($color: $red, $alpha: 0.1);
    color: $red;
  }

  &[size="middle"] {
    padding: 3px 12px;
    font-size: 13px;
    line-height: 17px;
  }

  &[size="large"] {
    padding: 8px 14px;
    font-size: 14px;
  }

  &[color="gray"] {
    background: #F5F6F8;
    color: $gray;
  }

  &[round="true"] {
    border-radius: 2em;
  }
}
</style>
