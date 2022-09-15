<template>
  <div :class="$style['header-bar']">
    <div :class="$style['header-wrapper']" v-if="showHeader && !isInApp">
      <slot name="back">
        <div :class="$style['go-back']" @click="handleBack">
          <Icon :class="$style['back-icon']" code="&#xe686;" />
        </div>
      </slot>
      <slot name="next" />
      {{title}}
      <slot name="end" />
    </div>

    <slot name="nav" />
  </div>
</template>

<script>
import VueTypes from 'vue-types'
import Icon from '@/components/Icon'
import { isInApp } from '@/sdk'

export default {
  name: 'header-bar',
  components: {
    Icon
  },
  props: {
    showHeader: VueTypes.bool.def(true),
    title: VueTypes.string.def('')
  },
  emits: ['back'],
  data () {
    return {
      isInApp: isInApp()
    }
  },
  methods: {
    handleBack () {
      this.$emit('back', {
        back: () => {
          history.go(-1)
        }
      })
    }
  }
}
</script>

<style lang="scss" module>

.header-bar {
  position: sticky; left: 0; top: 0; z-index: 99999;
  width: 100%;
}
.header-wrapper {
  box-sizing: border-box;
  position: relative; z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; height: 44px;
  padding: 0 50px;
  background: #FFF;
  @include lineFont(19, 500);
  color: $black;
}
.go-back {
  position: absolute; left: 0; top: 0;
  width: 50px; height: 44px;
}
.back-icon {
  position: absolute; left: 12px; top: 50%;
  margin-top: -8px;
  @include lineFont(16, 400);
  color: #979797;
}
</style>
