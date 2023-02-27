<template>
  <a-input
    v-bind="$attrs"
    v-on="listeners"
    :class="['custom-input', customType ? 'custom-input-' + customType : '']"
  >
    <template v-for="(index, name) in $slots" :slot="name">
      <slot :name="name" />
    </template>
    <a-icon
      v-if="customType === 'search' && !$slots.suffix"
      slot="suffix"
      type="search"
      @click="$emit('search')"
    />
  </a-input>
</template>

<script>
export default {
  name: "CustomInput",
  data() {
    return {
      listeners: {},
    };
  },
  props: {
    customType: {
      type: String,
      default: "",
    },
  },
  created() {
    for (let i in this.$listeners) {
      if (i === "input") {
        this.listeners[i] = (e) => {
          this.$listeners[i](e.target.value);
        };
      } else {
        this.listeners[i] = this.$listeners[i];
      }
    }
  },
};
</script>

<style lang="scss">
// 搜索框样式
.custom-input-search {
  .ant-input-suffix {
    font-size: px2rem(22);
    color: $primaryColor;
    right: px2rem(22);
    cursor: pointer;
  }

  input {
    padding-left: px2rem(22);
  }

  .ant-input:not(:last-child) {
    padding-right: px2rem(50);
  }
}
</style>