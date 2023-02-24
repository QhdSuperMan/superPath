<!--
 * @Description: 
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2022-12-11 20:59:04
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-01-29 21:02:32
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
import { getList, saveRank } from "@/api/setting/rank.js";
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
    submit() {
      tableValidator(this.dataSource, tableRules, this.columns).then((err) => {
        if (err) return;
        saveRank({
          data_list: JSON.stringify(this.dataSource)
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
            this.dataSource = data.data.staff_list;
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