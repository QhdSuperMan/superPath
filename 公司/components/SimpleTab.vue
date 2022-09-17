<template>
  <div simple-tab :class="$style['simple-tab']">
    <ul tab-wrap :class="$style['tab-wrap']">
      <li
        :key="tab.alias || tab.id || index"
        v-for="(tab, index) in tabs"
        tab-item
        :on="current === tab.id || current === tab.alias"
        @click="handleChange(tab)"
      >
        {{tab.label}}
      </li>
    </ul>
  </div>
</template>

<script>
import VueTypes from 'vue-types'
export default {
  name: 'simple-tab',
  components: {
  },
  props: {
    tabs: VueTypes.array.def([]),
    current: VueTypes.oneOfType([String, Number]).def(0)
  },
  emits: ['change'],
  data () {
    return {

    }
  },
  computed: {
  },
  created () {
  },
  methods: {
    handleChange (tab) {
      this.$emit('change', tab)
    }
  }
}
</script>
<style lang="scss" module>
.simple-tab {
  display: flex;
}
.tab-wrap {
  display: flex;
  align-items: center;
  height: 30px;

  & [tab-item] {
    padding: 0 20px;
    @include lineFont(13, 400);
    color: $gray;
    cursor: pointer;
    user-select: none;
  }

  & [on = true] {
    color: $blue;
    font-weight: 500;
  }
}
</style>
