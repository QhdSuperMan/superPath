<template>
  <component
    :is="currentComponent"
    :user="loginUser"
    :message="messageTotal"
  />
</template>

<script>
export default { name: 'CommonHeader' }
</script>

<script setup>
import { defineProps, computed } from 'vue'
import { useStore } from 'vuex'
import VueTypes from 'vue-types'

import HeaderWeb from './HeaderWeb.vue'
import HeaderWap from './HeaderWap.vue'

defineProps({
  useShadow: VueTypes.bool.def(false)
})

const store = useStore()

const loginUser = computed(() => store.state.userBaseInfo)
const messageTotal = computed(() => store.state.messageTotal)
const isMobile = computed(() => store.state.isMobile)

const currentComponent = computed(() => {
  return isMobile.value ? HeaderWap : HeaderWeb
})
</script>

<style lang="scss" module>
$headerHeight: 64px;
.common-header {
  position: relative;
}

.shim {
  width: 100%; height: $headerHeight;
}

.header {
  position: absolute; left: 0; right: 0; top: 0;
  background: #FFF;
}

.header-inner {
  width: 1200px; height: $headerHeight;
  margin: 0 auto;
}
</style>
