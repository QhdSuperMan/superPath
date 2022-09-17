<template>
  <div user-name :class="$style['user-name']">
    <span name :class="$style['name']">{{ name }}</span>
    <span :class="$style['user-tag']" v-if="userType">{{ userType }}</span>
  </div>
</template>

<script>
import { computed } from 'vue'
import VueTypes from 'vue-types'
export default {
  name: 'user-name',
  props: {
    name: VueTypes.string.def(''),
    id: VueTypes.number.def(0),
    type: VueTypes.number.def(0)
  },
  setup (props) {
    const userType = computed(() => {
      const map = {
        1: '',
        2: '作者',
        4: '编辑',
        8: '编辑'
      }

      return map[props.type - 0]
    })
    return {
      userType
    }
  }
}
</script>

<style lang="scss" module>
.user-name {
  display: inline-flex;
  line-height: 22px;
  @include font(16, 500);
  color: $black;
}

.user-tag {
  @extend %center;
  width: 36px; height: 20px;
  margin-left: 5px;
  background: $lightBlueBackground;
  border-radius: 3px;
  @include lineFont(12, 500);
  color: $blue;
  transform: scale(0.9);
}
</style>
