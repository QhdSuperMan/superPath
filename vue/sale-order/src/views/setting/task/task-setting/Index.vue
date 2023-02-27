<!--
 * @Description: 任务管理
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2022-12-11 20:59:04
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-01-30 22:09:00
-->
<template>
  <div class="list-common-style-container">
    <div class="table-list">
      <CustomTable
        :columns="columns"
        :isPage="false"
        :dataSource="dataSource"
        :rowSelection="false"
        @selectChange="selectChange"
      ></CustomTable>
    </div>
    <div class="operation-btn-group">
      <CustomButton type="primary" @click="submit">保存</CustomButton>
    </div>
  </div>
</template>

<script>
import { configMixins, tableRules } from "./config/index.js";
import { tableValidator } from "@/utils/customValidator.js";
import { getList, saveTask, toggleEnable } from "@/api/task/task.js";

export default {
  mixins: [configMixins],
  name: "resource-management-My",
  data() {
    return {
      getList,
      dataSource: [],
    };
  },
  activated() {
    this.search();
  },
  methods: {
    switch(row) {
      let vm = this;
      let message = "确认停用任务？";
      if (row.is_enable == 0) {
        message = "确认启动任务？";
      }
      this.$confirm({
        content: message,
        cancelText: "取消",
        okText: "确认",
        onOk() {
          toggleEnable({
            task_id: row.task_id,
          }).then(({ data }) => {
            if (data.code === 200) {
              vm.$message.success(data.msg);
              vm.search();
            }
          });
        },
        onCancel() { },
      });
    },
    submit() {
      tableValidator(this.dataSource, tableRules, this.columns).then((err) => {
        if (err) return;
        saveTask({
          task_list: JSON.stringify(this.dataSource)
        })
          .then(({ data }) => {
            if (data.code === 200) {
              this.$message.success(data.msg);
              this.search()
            }
          })
          .catch(() => {
          });
      });
    },
    search() {
      getList()
        .then(({ data }) => {
          if (data.code === 200) {
            this.dataSource = data.data;
          }
        })
        .catch(() => { });
    },
    selectChange(selectedRowKeys) {
      this.selectedRowKeys = selectedRowKeys;
    },
    exportFile() {
      exportTemplate();
    },
  },
};
</script>

<style>
</style>