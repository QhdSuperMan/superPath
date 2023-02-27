<template>
  <a-button
    v-bind="$attrs"
    :size="size"
    :loading="loading"
    @click="click"
    class="custom-button"
  >
    <template v-for="(index, name) in $slots" :slot="name">
      <slot :name="name" />
    </template>
  </a-button>
</template>

<script>
export default {
  name: "CustomButton",
  data() {
    return {
      loading: false,
    };
  },
  props: {
    lock: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'large',
    },
  },
  methods: {
    click(event) {
      if (this.lock) {
        this.loading = true;
      }
      this.$emit("click", { event, close: this.close });
    },
    close() {
      this.loading = false;
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped>

.custom-button {
  height: px2rem(48);
  padding: 0 px2rem(32);
}

.custom-button.ant-btn-sm {
  height: px2rem(40);
  padding: 0 px2rem(32);
}

.custom-button.ant-btn-link {
  padding: 0 px2rem(5);
}

.custom-button.ant-btn-sumbit {
  width: 100%;
  height: px2rem(52);
  background-color: $darkPrimaryColor;
  border-radius: px2rem(5);
  color: white;
  font-size: px2rem(24);
}
</style>