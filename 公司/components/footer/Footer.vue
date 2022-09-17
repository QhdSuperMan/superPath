<template>
  <component :is="currentComponent" />
</template>

<script>
// import VueTypes from 'vue-types'
import { computed } from 'vue'
import { useStore } from 'vuex'

import FooterWeb from './FooterWeb.vue'
// import FooterWap from './FooterWap.vue'
export default {
  name: 'CommonFooter',
  props: {
    // useShadow: VueTypes.bool.def(false)
  },
  setup (props, context) {
    const store = useStore()

    const isMobile = computed(() => store.state.isMobile)

    const currentComponent = computed(() => {
      return isMobile.value ? null : FooterWeb
    })

    return {
      currentComponent
    }
  }
}
</script>

