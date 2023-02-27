<template>
  <CustomModal
    :title="params.customer_id ? '编辑客户' : '添加客户'"
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
import { addCustomer, editCustomer, getInfo } from "@/api/customer/customer.js";

let formModal = {
  contact_mobile: "",
  customer_status: "",
  contact_company: "",
  contact_name: "",
  customer_type: "",
  remark: "",
};

export default {
  data() {
    return {
      confirmLoading: false,
      visible: false,
      form: Object.assign({}, formModal),
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
        contact_company: [
          {
            required: true,
          },
        ],
      },
      formItem: [
        {
          label: "客户姓名",
          field: "contact_name",
          type: "customInput",
        },
        {
          label: "联系方式",
          field: "contact_mobile",
          type: "customInput",
        },
        {
          label: "公司名称",
          field: "contact_company",
          type: "customInput",
        },
        {
          label: "客户状态",
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
        this.getCustomerInfo();
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
    getCustomerInfo() {
      if (this.params.customer_id) {
        getInfo({
          customer_id: this.params.customer_id,
        }).then(({ data }) => {
          if (data.code === 200) {
            this.form = data.data;
          }
        });
      } else {
        this.form = Object.assign({}, formModal);
      }
    },
    ok() {
      this.$refs.CustomFormRef._proxy("validate", (status) => {
        if (status) {
          this.confirmLoading = true;

          let request = addCustomer;
          if (this.params.customer_id) {
            request = editCustomer;
          }

          request(this.form)
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
