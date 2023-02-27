<template>
  <CustomModal
    title="添加跟进记录"
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
import { addFollowLog } from "@/api/customer/customer.js";

export default {
  data() {
    return {
      confirmLoading: false,
      visible: false,
      form: {
        content: "",
      },
      rules: {
        content: [
          {
            required: true,
          },
        ],
        next_follow_time: [
          {
            required: true,
          },
        ],
      },
      formItem: [
        {
          field: "next_follow_time",
          label: "下次跟进时间",
          type: "a-date-picker",
          attrs: {
            size: "large",
            valueFormat: "YYYY-MM-DD",
            placeholder: "请选择下次跟进时间",
          },
          // events: {
          //   change: function () {
          //     console.log(this.form);
          //   }.bind(this),
          // },
        },
        {
          label: "备注",
          field: "content",
          type: "customInput",
          attrs: {
            type: "textarea",
            rows: 4,
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
      default: "",
    },
    params: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  methods: {
    ok() {
      this.$refs.CustomFormRef._proxy("validate", (status) => {
        if (status) {
          let params = {
            ...this.form,
            customer_id: this.params.customer_id,
          };
          this.confirmLoading = true;

          addFollowLog(params)
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
