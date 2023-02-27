<template>
  <CustomModal
    title="资源详情"
    :footer="null"
    :visible="visible"
    @cancel="handleCancel"
  >
    <CustomForm
      ref="CustomFormRef"
      :formItem="formItem"
      v-model="form"
      class="custom-form-detail"
    />
  </CustomModal>
</template>

<script>
import { getInfo } from "@/api/resource/resource.js";

export default {
  data() {
    return {
      visible: false,
      form: {
        contact_mobile: "",
        customer_status: "",
        contact_company: "",
        resource_status_name: "",
        contact_name: "",
        remark: "",
      },

      formItem: [
        {
          label: "联系方式",
          field: "contact_mobile",
          type: "span",
        },
        {
          label: "客户姓名",
          field: "contact_name",
          type: "span",
        },
        {
          label: "公司名称",
          field: "contact_company",
          type: "span",
        },
        {
          label: "添加时间",
          field: "add_time_name",
          type: "span",
        },
        {
          label: "资源状态",
          field: "resource_status_name",
          type: "span",
        },
        {
          label: "领取方式",
          field: "receive_way_name",
          type: "span",
        },
      ],
    };
  },

  watch: {
    value: {
      handler(newVal) {
        this.visible = newVal;
        if (this.visible) {
          this.getData();
        }
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
    handleCancel() {
      this.$emit("input", false);
    },
    getData() {
      getInfo({
        resource_id: this.params.resource_id,
      }).then(({ data }) => {
        if (data.code === 200) {
          this.form = data.data;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
