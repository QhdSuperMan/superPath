<template>
  <CustomModal
    :title="title"
    :visible="visible"
    :confirm-loading="confirmLoading"
    @cancel="handleCancel"
    @ok="ok"
  >
    <CustomForm
      ref="CustomFormRef"
      :formItem="formItem"
      v-model="form"
      :rules="rules"
    />
  </CustomModal>
</template>

<script>
export default {
  data() {
    return {
      confirmLoading: false,
      visible: false,
      form: {
        staff_id: "",
      },
      rules: {
        staff_id: [
          {
            required: true,
            message: "请选择员工",
          },
        ],
      },
      formItem: [
        {
          label: "员工",
          field: "staff_id",
          type: "CustomSelect",
          attrs: {
            allKey: false,
            api: "getStaffList",
            config: { value: "staff_id", label: "staff_name" },
          },
        },
      ],
    };
  },

  watch: {
    value: {
      handler(newVal) {
        this.visible = newVal;
      },
      immediate: true,
    },
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "", // 1 是派发  2 是转交
    },
  },
  methods: {
    ok() {
      this.$refs.CustomFormRef._proxy("validate", (status) => {
        if (status) {
          this.confirmLoading = true;
          this.$emit("submit", this.form.staff_id, this.clear);
        }
      });
    },
    clear() {
      this.confirmLoading = false;
    },
    handleCancel() {
      this.$emit("input", false);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
