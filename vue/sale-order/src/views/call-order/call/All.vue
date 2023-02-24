<!--
 * @Description: 
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-01-04 20:37:43
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-01-09 22:40:29
-->
<template>
  <div class="list-common-style-container">
    <div class="search-input">
      <CustomInput
        v-model="form.callee_number"
        placeholder="搜索被叫号码"
        customType="search"
        @search="search(1)"
      />
    </div>

    <div class="search-form">
      <CustomForm
        ref="CustomFormRef"
        layout="inline"
        :formItem="formItem"
        v-model="form"
      >
        <template v-slot:code>
          <CustomButton type="primary" @click="search(1)">查询</CustomButton>
          <CustomButton @click="reset">重置</CustomButton>
        </template>
      </CustomForm>
    </div>

    <div class="table-list">
      <div class="table-list-btns">
        <!-- <CustomButton icon="delete" size="small" @click="batchOperation(3)"
          >删除</CustomButton
        > -->
      </div>
      <CustomTable
        ref="CustomTable"
        rowKey="customer_id"
        :columns="columns"
        :params="{
          api: getList,
          params: form,
        }"
        @selectChange="selectChange"
      ></CustomTable>
    </div>

    <CallDetails
      v-model="isShowDetails"
      v-if="isShowDetails"
      :row="currentRow"
    />
  </div>
</template>

<script>
import CallDetails from './config/CallDetails.vue'

import { configMixins, formModal } from "./config/index.js";

import { getList } from "@/api/call-order/call.js";
export default {
  mixins: [configMixins],
  name: "call-order-call-All",
  data() {
    return {
      getList,
      currentRow: {},
      isShowDetails: false,
      type: 2,
      form: Object.assign({}, formModal),
      selectedRowKeys: [],
    };
  },
  components: {
    CallDetails
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
  },
};
</script>

<style>
</style>