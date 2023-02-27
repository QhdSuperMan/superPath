<template>
  <CustomModal
    :title="params.order_id ? '编辑订单' : '添加订单'"
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
import { addSalesOrder, editSalesOrder, getInfo } from "@/api/order/order.js";

let formModal = {
  customer_id: "",
  order_price: "",
  remark: "",
};

export default {
  data() {
    return {
      confirmLoading: false,
      visible: false,
      form: Object.assign({}, formModal),
      rules: {
        customer_id: [
          {
            required: true,
          },
        ],
        order_price: [
          {
            required: true,
          },
          {
            type: "money",
          },
        ],
      },
      formItem: [
        {
          label: "客户",
          field: "customer_id",
          type: "customSelect",
          attrs: {
            allKey: false,
            api: "getCustomerPageList",
            returnStr: 'data.data.data',
            config: { value: "customer_id", label: "contact_name" },
          },
        },
        {
          label: "订单金额",
          field: "order_price",
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
      if (this.params.order_id) {
        getInfo({
          order_id: this.params.order_id,
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

          let request = addSalesOrder;
          if (this.params.order_id) {
            request = editSalesOrder;
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
