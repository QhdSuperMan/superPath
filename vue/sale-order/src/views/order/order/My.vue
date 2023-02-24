<template>
  <div class="list-common-style-container">
    <div class="search-input">
      <CustomInput
        v-model="form.keyword"
        placeholder="搜索订单"
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
        <CustomButton
          icon="user-add"
          size="small"
          v-if="btnAuthority.s_add"
          @click="edit({})"
          >添加</CustomButton
        >
        <CustomButton
          icon="delete"
          size="small"
          v-if="btnAuthority.s_delete"
          @click="batchOperation(5)"
          >删除
        </CustomButton>
      </div>
      <CustomTable
        ref="CustomTable"
        rowKey="order_id"
        :columns="columns"
        :params="{
          api: getMyList,
          params: form,
        }"
        @selectChange="selectChange"
      ></CustomTable>
    </div>

    <AddOrder
      v-model="isShowAddOrder"
      :params="currentRow"
      @success="search(1)"
    />
  </div>
</template>

<script>
import SelectEmployee from "@/components/SelectEmployee.vue";
import AddOrder from "./config/AddOrder.vue";

import { configMixins, formModal } from "./config/index.js";

import {
  getMyList,
} from "@/api/order/order.js";

export default {
  mixins: [configMixins],
  name: "order-order-My",
  data() {
    return {
      getMyList,
      currentRow: {},
      isShowAddOrder: false,
      isShowSelectEmployee: false,
      isShowAddContent: false,
      type: 1,
      form: Object.assign({}, formModal),
      selectedRowKeys: [],
    };
  },
  activated() {
    this.search();
  },
  components: {
    AddOrder,
    SelectEmployee,
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
    edit(row) {
      this.currentRow = row;
      this.isShowAddOrder = true;
    },
    batchOperation(type) {
      this.type = type;
      if (this.selectedRowKeys.length) {
        if (type === 1) {
          // 审核订单
          this.auditorPass();
        } else if (type === 2) {
          // 弃审订单
          this.auditorNoPass();
        } else if (type === 3) {
          // 驳回订单
          this.reject();
        } else if (type === 4) {
          // 作废订单
          this.auditorInvalid();
        } else if (type === 5) {
          // 删除订单
          this.deleteOrder();
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