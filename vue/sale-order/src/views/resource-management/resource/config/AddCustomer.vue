<template>
  <CustomModal
    title="添加客户"
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
import { addCustomer } from "@/api/resource/resource.js";

export default {
  data() {
    return {
      confirmLoading: false,
      visible: false,
      form: {
        contact_mobile: "",
        customer_status: "",
        contact_company: "",
        customer_type: "",
        contact_name: "",
        remark: "",
      },
      rules: {
        contact_mobile: [
          {
            required: true,
          },
          {
            type: "phone",
          },
        ],
        customer_status: [
          {
            required: true,
          },
        ],
        customer_type: [
          {
            required: true,
          },
        ],
        contact_name: [
          {
            required: true,
          },
        ],
      },
      formItem: [
        {
          label: "联系方式",
          field: "contact_mobile",
          type: "customInput",
        },
        {
          label: "成交进度",
          field: "customer_status",
          type: "a-radio-group",
          attrs: {
            options: [
              {
                label: "初防",
                value: 1,
              },
              {
                label: "意向",
                value: 2,
              },
              {
                label: "报价",
                value: 3,
              },
              {
                label: "成交",
                value: 4,
              },
            ],
          },
        },
        {
          label: "客户类型",
          field: "customer_type",
          type: "CustomSelect",
          attrs: {
            allKey: false,
            options: [
              {
                label: "A类",
                value: 1,
              },
              {
                label: "B类",
                value: 2,
              },
              {
                label: "C类",
                value: 3,
              },
              {
                label: "D类",
                value: 4,
              },
            ],
          },
        },
        {
          label: "客户姓名",
          field: "contact_name",
          type: "customInput",
        },
        {
          label: "公司名称",
          field: "contact_company",
          type: "customInput",
        },
        {
          label: "备注",
          field: "remark",
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
            resource_id: this.params.resource_id,
          };
          this.confirmLoading = true;

          addCustomer(params)
            .then(({ data }) => {
              if (data.code === 200) {
                this.$message.success(data.msg);
                this.$emit('success')
                this.handleCancel()
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
