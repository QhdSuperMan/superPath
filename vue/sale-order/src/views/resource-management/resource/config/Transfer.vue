<template>
  <CustomModal
    :title="type === 1 ? '派发' : '转交'"
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
import { transfer, dispatch } from "@/api/resource/resource.js";

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
          },
        ],
      },
      formItem: [
        {
          label: "客户",
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
    type: {
      type: Number,
      default: 1, // 1 是派发  2 是转交
    },
    params: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    ok() {
      this.$refs.CustomFormRef._proxy("validate", (status) => {
        if (status) {
          let params = {
            ...this.form,
            resource_id: this.params.join(","),
          };
          this.confirmLoading = true;

          let ajax = dispatch;
          if (this.type === 2) {
            ajax = transfer;
          }

          ajax(params)
            .then(({ data }) => {
              if (data.code === 200) {
                this.$message.success(data.msg);
                this.$emit("success");
                this.handleCancel();
              }
              this.confirmLoading = false;
            })
            .catch(() => {
              this.confirmLoading = false;
            });
        }
      });
    },
    handleCancel() {
      this.$emit("input", false);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
