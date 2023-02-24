<template>
  <div class="list-common-style-container">
    <div class="search-input">
      <CustomInput
        v-model="form.keyword"
        placeholder="搜索联系人、公司名称、联系电话"
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
        <CustomButton icon="delete" size="small" v-if="btnAuthority.s_delete"  @click="batchOperation(3)"
          >删除</CustomButton
        >
        <CustomButton icon="delete" size="small" v-if="btnAuthority.s_recovery" @click="batchOperation(4)"
          >恢复</CustomButton
        >
      </div>
      <CustomTable
        ref="CustomTable"
        rowKey="customer_id"
        :columns="columns"
        :params="{
          api: getRecycleList,
          params: form,
        }"
        @selectChange="selectChange"
      ></CustomTable>
    </div>

    <AddCustomer
      v-model="isShowAddCustomer"
      :params="currentRow"
      @success="search(1)"
    />

    <AddContent
      v-model="isShowAddContent"
      :params="currentRow"
      @success="search"
    />

    <CallDetail
      v-model="isShowCallDetail"
      :params="currentRow"
      v-if="isShowCallDetail"
    />

    <SelectEmployee
      :title="type === 6 ? '转交' : '派发'"
      v-model="isShowSelectEmployee"
      @submit="submit"
    />
  </div>
</template>

<script>
import SelectEmployee from "@/components/SelectEmployee.vue";
import AddCustomer from "./config/AddCustomer.vue";
import AddContent from "./config/AddContent.vue";
import CallDetail from "./config/CallDetail.vue";

import { configMixins, formModal } from "./config/index.js";

import { getRecycleList } from "@/api/customer/customer.js";

export default {
  mixins: [configMixins],
  name: "customer-RecyclingBin",
  data() {
    return {
      currentPage: "RecyclingBin",
      getRecycleList,
      currentRow: {},
      isShowAddCustomer: false,
      isShowSelectEmployee: false,
      isShowAddContent: false,
      isShowCallDetail: false,
      type: 4,
      form: Object.assign({}, formModal),
      selectedRowKeys: [],
    };
  },
  activated() {
    this.search();
  },
  components: {
    AddCustomer,
    SelectEmployee,
    AddContent,
    CallDetail
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
    batchOperation(type) {
      this.type = type;
      if (this.selectedRowKeys.length) {
        if (type === 1) {
          // 领取客户
          this.receiveCustomer();
        } else if (type === 2) {
          // 释放客户
          this.releaseCustomer();
        } else if (type === 3) {
          // 删除客户
          this.deleteCustomer();
        } else if (type === 4) {
          // 恢复客户
          this.recoveryCustomer();
        } else if (type === 5) {
          // 加入回收站
          this.putRecycleCustomer();
        } else if (type === 6 || type === 7) {
          this.isShowSelectEmployee = true;
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