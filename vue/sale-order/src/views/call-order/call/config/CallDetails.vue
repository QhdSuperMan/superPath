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
        api: getDetailList,
        params: {
          group_id: row.id,
        },
      }"
    ></CustomTable>
  </CustomModal>
</template>

<script>
import { getDetailList } from "@/api/call-order/call.js";
import { configMixins } from './call-details'

export default {
  mixins: [configMixins],
  data() {
    return {
      getDetailList,
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
    row: {
      type: Object,
      default: () => {
        return {
          group_id: 3,
        };
      },
    },
  },
  methods: {
    handleCancel() {
      this.$emit("input", false);
    },
    search(num) {
      this.$refs.CustomTable.getData(num);
    },
  },
};
</script>

<style lang="scss" scoped></style>
