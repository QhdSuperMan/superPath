<!--
 * @Description: 
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-01-31 21:10:59
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-02-05 19:07:36
-->
<template>
  <CustomModal
    title="坐席日志"
    :footer="null"
    :width="800"
    :visible="visible"
    @cancel="handleCancel"
  >
    <CustomTable
      ref="CustomTable"
      :pagination="{ pageSize: 5 }"
      rowKey="resource_id"
      :rowSelection="false"
      :columns="columns"
      :params="{
        api: getLogList,
        params: { seat_id: row.seat_id },
      }"
    ></CustomTable>
  </CustomModal>
</template>

<script>

import {
  getLogList
} from "@/api/setting/seat.js";
export default {
  data() {
    return {
      getLogList,
      columns: [
        {
          title: "操作时间",
          dataIndex: "add_time",
          width: 170,
        },
        {
          title: "日志内容",
          dataIndex: "content",
        },
      ],
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

<style lang="scss" scoped>
</style>
