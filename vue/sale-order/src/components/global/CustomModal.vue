<template>
  <a-modal
    v-bind="$attrs"
    v-on="$listeners"
    :cancelText="cancelText"
    :centered="centered"
    :okText="okText"
  >
    <template v-for="(index, name) in $slots" :slot="name">
      <slot :name="name" />
    </template>
  </a-modal>
</template>

<script>
export default {
  name: "CustomModal",
  data() {
    return {};
  },
  props: {
    centered: { // 	垂直居中展示 Modal
      type: Boolean,
      default: true
    },
    cancelText: {
      type: String,
      default: "关闭",
    },
    okText: {
      type: String,
      default: "确定",
    },
  },
};
</script>

<style>
</style>