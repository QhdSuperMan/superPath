<template>
  <h3 section-title :class="$style['suggest-section-title']">
    {{title}}
  </h3>
</template>

<script>
import VueTypes from 'vue-types'
export default {
  name: 'suggest-section-title',
  components: {
  },
  props: {
    title: VueTypes.string.def('')
  }
}
</script>
<style lang="scss" module>
.suggest-section-title {
  position: relative;
  padding-left: 18px; margin-bottom: 10px;
  @include font(14, 500);
  line-height: 20px;
  color: #4c4c4c;

  &:before {
    content: '';
    position: absolute; top: 50%; left: 0;
    width: 12px; height: 12px;
    background: url('../../assets/img/report/title-point.png') no-repeat center / 12px 12px;
    transform: translateY(-50%);
  }

  @include mobile () {
    margin-bottom: 8px;

    &:before {
      top: 10px;
    }
  }
}
</style>
