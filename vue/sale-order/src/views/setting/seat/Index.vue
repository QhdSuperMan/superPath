<template>
  <div class="list-common-style-container">
    <div class="search-input">
      <a-input-group compact>
        <div>
          <CustomSelect
            v-model="form.key_type"
            :allKey="false"
            :allowClear="false"
            :options="searchType"
          >
          </CustomSelect>
        </div>
        <CustomInput
          v-model="form.keyword"
          placeholder="搜索员工名称，坐席编号"
          customType="search"
          @search="search(1)"
        />
      </a-input-group>
    </div>

    <a-descriptions title="提示：" :column="1" style="margin-top: 10px">
      <a-descriptions-item label="">
        座席开通后需绑定员工到座席才可以正常使用</a-descriptions-item
      >
      <a-descriptions-item label="">
        为了不影响你使用系统，请及时续费已到期的座席
      </a-descriptions-item>
    </a-descriptions>

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
      <CustomTable
        ref="CustomTable"
        rowKey="resource_id"
        :rowSelection="false"
        :columns="columns"
        :params="{
          api: getList,
          params: form,
        }"
        @selectChange="selectChange"
      ></CustomTable>
    </div>

    <Binding
      v-model="isShowBinding"
      v-if="isShowBinding"
      :row="currentRow"
      @success="search"
    />

    <LogOperation
      v-model="isShowLogOperation"
      v-if="isShowLogOperation"
      :row="currentRow"
    />
  </div>
</template>

<script>
import Binding from './config/Binding.vue'
import LogOperation from './config/LogOperation.vue'

import { configMixins, formModal, searchType } from "./config/index.js";

import {
  getList,
  exportTemplate,
  unbind,
} from "@/api/setting/seat.js";

export default {
  mixins: [configMixins],
  name: "resource-management-My",
  data() {
    return {
      searchType,
      getList,
      currentRow: {},
      isShowBinding: false,
      isShowLogOperation: false,
      type: 1,
      form: Object.assign({}, formModal),
      selectedRowKeys: [],
    };
  },
  activated() {
    this.search();
  },
  components: {
    Binding,
    LogOperation
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
    unbindSite(row) {
      let vm = this;
      this.$confirm({
        content: "确认解绑坐席?",
        cancelText: "取消",
        okText: "确认",
        onOk() {
          unbind({
            seat_id: row.seat_id,
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
  },
};
</script>

<style>
</style>