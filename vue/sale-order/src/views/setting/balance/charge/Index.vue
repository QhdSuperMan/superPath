<template>
  <div class="list-common-style-container">
    <div class="table-list">
      <!-- <div class="table-list-btns">
        <CustomButton icon="delete" size="small" @click="batchOperation(6)"
          >恢复资源</CustomButton
        >
      </div> -->
      <CustomTable
        ref="CustomTable"
        rowKey="resource_id"
        :columns="columns"
        :params="{
          api: getList,
          params: form,
        }"
        @selectChange="selectChange"
      ></CustomTable>
    </div>

    <div class="operation-btn-group">
      <CustomButton type="primary" @click="$router.back()">返回</CustomButton>
    </div>
  </div>
</template>

<script>
import { configMixins, formModal } from "./config/index.js";

import {
  getList,
  downloadTemplate,
  exportTemplate,
  deleteResource,
} from "@/api/resource/resource.js";

export default {
  mixins: [configMixins],
  name: "resource-management-My",
  data() {
    return {
      downloadTemplate,
      getList,
      currentRow: {},
      isShowAddCustomer: false,
      type: 1,
      form: Object.assign({}, formModal),
      selectedRowKeys: [],
    };
  },
  activated() {
    this.search();
  },
  methods: {
    reset() {
      this.form = Object.assign({}, formModal);
      this.search(1);
    },
    search(num) {
      this.$refs.CustomTable.getData(num);
    },
    selectChange(selectedRowKeys) {
      this.selectedRowKeys = selectedRowKeys;
    },
    exportFile() {
      exportTemplate();
    },
    deleteFile() {
      let vm = this;
      this.$confirm({
        content: "确认删除资源?",
        cancelText: "取消",
        okText: "确认",
        onOk() {
          deleteResource({
            resource_id: vm.selectedRowKeys.join(","),
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
    batchOperation(type) {
      this.type = type;
      if (this.selectedRowKeys.length) {
        if (type === 1) {
          this.deleteFile();
        } else if (type === 3) {
          this.deleteFile();
        }
      } else {
        this.$message.warning("请勾选操作行");
      }
    },
  },
};
</script>

<style>
</style>