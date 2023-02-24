<!--
 * @Description: 
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-01-04 20:57:59
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-01-09 22:38:43
-->
<template>
  <CustomModal
    title="通话明细"
    :footer="null"
    :visible="visible"
    :width="1200"
    @cancel="handleCancel"
  >
    <CustomTable
      ref="CustomTable"
      rowKey="customer_id"
      :columns="columns"
      :rowSelection="false"
      :params="{
        api: getCallDetail,
        params: {
          customer_id: params.customer_id,
        },
      }"
    ></CustomTable>
  </CustomModal>
</template>

<script>
import { configMixins } from './call-detail.js'
import { getCallDetail } from "@/api/customer/customer.js";

export default {
  mixins: [configMixins],
  data() {
    return {
      getCallDetail,
      visible: false,
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
    handleCancel() {
      this.$emit("input", false);
    },
  },
};
</script>

<style lang="scss" scoped></style>
