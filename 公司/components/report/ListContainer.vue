<template>
  <div :class="$style['list-container']">
    <div head :class="$style['head']">
      <slot name="head" />
    </div>

    <div body :class="$style['body']">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'list-container',
  components: {
  },
  props: {
  },
  data () {
    return {

    }
  },
  computed: {
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang="scss" module>
.list-container {
  width: 100%;
  border: 1px solid $borderGray;
  border-radius: 4px;
}

.head {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%; height: 36px;
  padding: 0 14px;
  background: rgba(92, 134, 255, 0.06);
  border-bottom: 1px solid $borderGray;
}

.body {
  box-sizing: border-box;
  padding: 16px 14px;
  background: rgba(239, 240, 242, 0.1);
}
</style>
