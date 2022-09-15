<template>
  <div 
    ref="tabRef" 
    :class="$style['tab']" 
    qyb-tab
  >
    <span 
      :class="$style['qyb-tab-label']"
      qyb-tab-label 
      :qyb-tab-label-checked="active === value ? 'checked' : ''"
      @click="setActive"
    >
      <slot>
        {{ label }}
      </slot>
    </span>
  </div>
</template>

<script>
import { computed, ref, onMounted } from 'vue'
import { useParent } from '@/utils/hooks/useParent'
import vueTypes from 'vue-types'
export default {
  name: 'Tab',
  components: {
  },
  props: {
    value: vueTypes.oneOfType([vueTypes.string, vueTypes.number]).def(), // tab的id
    label: vueTypes.string.def(''), // 内容的label
    width: vueTypes.string.def('auto'), // 每个tab的标签的宽度
  },
  setup (props) {
    const { parent, index } = useParent('Tabs')
    const tabRef = ref(null)
    const flexGrow = computed(() => props.width === 'auto' ? 1 : 0)
    const active = computed(() => parent.props.active)
  
    onMounted(() => {
      parent.appendChildrenBox(props.value, tabRef.value)
    })

    function setActive () {
      parent.setActive(props.value)
    }

    return { 
      flexGrow,
      index,
      active,
      tabRef,
      setActive
    }
  }
}
</script>

<style lang="scss" module>
.tab {
  flex-grow: v-bind(flexGrow);
  width: v-bind(width);
  text-align: center;

  [qyb-tab-label-checked="checked"] {
    color: $black;
  }
}

.qyb-tab-label {
  color: $gray;
  cursor: pointer;
  @include font(17, 500);
}
</style>
