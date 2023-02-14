<!--
 * @Description: 我的服务-通用列表页
 * @Author: maowenhao 2862438628@qq.com
 * @Date: 2022-09-21 16:18:59
 * @LastEditors: maowenhao 2862438628@qq.com
 * @LastEditTime: 2022-09-22 16:31:14
-->
<template>
  <div class="common-service-page">
    <div class="top-box">
      <search-box
        :placeholder="placeholder"
        v-model="searchValue"
        @search="search"
      ></search-box>
      <filter-condition :filterData="filterData"></filter-condition>
    </div>

    <div class="table-box">
      <custom-table
        :selectedRowKeys="selectedRowKeys"
        :columns="columns"
        :data-source="dataSource"
      >
        <a slot="operation" slot-scope="text, index, record">查看</a>
      </custom-table>
    </div>
  </div>
</template>

<script>
import SearchBox from "@/components/SearchBox";
import CustomTable from "@/components/CustomTable";
import FilterCondition from "@/components/FilterCondition";
export default {
  components: {},
  name: 'CommonServicePage',
  components: {
    SearchBox,
    CustomTable,
    FilterCondition
  },
  props: {
    // 表格列数据
    columns: { default: () => [], required: true },
    // 表数据
    dataSource: { default: () => [], required: true },
    // 过滤条件
    filterData: { default: () => [], required: true },
    // 提示信息
    placeholder: { default: "" },
  },
  data() {
    return {
      // 搜索内容
      searchValue: '',
      // 选中行
      selectedRowKeys: [], // Check here to configure the default column
    };
  },
  computed: {},
  watch: {},
  methods: {
    /**
     * @description: 搜索
     * @return {*}
     * @author: maowenhao
     */
    search() {
      console.log('search', this.searchValue);
    },
    /**
     * @description: 下拉框变化
     * @param {*} selectedRowKeys
     * @return {*}
     * @author: maowenhao
     */
    onSelectChange(selectedRowKeys) {
      console.log('selectedRowKeys changed: ', selectedRowKeys);
      this.selectedRowKeys = selectedRowKeys;
    },
    /**
     * @description: 是否有选中行
     * @return {*}
     * @author: maowenhao
     */
    hasSelected() {
      return this.selectedRowKeys.length > 0;
    },
  },
  created() {

  },
  mounted() {

  },
}
</script>
<style lang='scss' scoped>
.common-service-page {
  width: 100%;
  .top-box {
    padding: 20px;
    background-color: white;
    margin-bottom: 20px;
  }
  .table-box {
    background-color: white;
  }
}
</style>