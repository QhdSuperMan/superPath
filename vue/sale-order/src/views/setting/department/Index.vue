<!-- 部门管理 -->
<template>
  <div class="list-common-style-container">
    <!-- <div class="search-input">
      <CustomInput
        v-model="form.keyword"
        placeholder="搜索b"
        customType="search"
        @search="search(1)"
      />
    </div> -->

    <!-- <div class="search-form">
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
    </div> -->

    <div class="table-list">
      <div class="table-list-btns">
        <CustomButton icon="user-add" v-if="btnAuthority.s_add" size="small" @click="edit({})"
          >添加部门</CustomButton
        >
      </div>
      <CustomTable
        ref="CustomTable"
        rowKey="customer_id"
        :columns="columns"
        :isPage="false"
        :params="{
          api: getList,
          params: form,
          data: 'data',
        }"
        @selectChange="selectChange"
      ></CustomTable>
    </div>

    <AddDepartment
      v-model="isShowAddDepartment"
      @success="search(1)"
      :params="currentRow"
    />
    <StaffList
      v-model="isShowStaffList"
      :url="getStaffList"
      :params="{
        department_id: currentRow.department_id,
      }"
    />
  </div>
</template>

<script>
import AddDepartment from "./config/AddDepartment.vue";
import StaffList from '../components/StaffList.vue'

import { configMixins, formModal } from "./config/index.js";

import { getList, getStaffList, deleteDepartment } from "@/api/setting/department.js";

export default {
  mixins: [configMixins],
  name: "resource-management-My",
  data() {
    return {
      getList,
      getStaffList,
      currentRow: {},
      isShowAddDepartment: false,
      isShowStaffList: false,
      type: 1,
      form: Object.assign({}, formModal),
      selectedRowKeys: [],
    };
  },
  activated() {
    this.search();
  },
  components: {
    AddDepartment,
    StaffList
  },
  methods: {
    reset() {
      this.form = Object.assign({}, formModal);
      this.search(1);
    },
    edit(row) {
      this.currentRow = row;
      this.isShowAddDepartment = true;
    },
    deleteDepartment(row) {
      let vm = this;
      this.$confirm({
        content: "确认删除部门?",
        cancelText: "取消",
        okText: "确认",
        onOk() {
          deleteDepartment({ department_id: row.department_id }).then(({ data }) => {
            if (data.code === 200) {
              vm.$message.success(data.msg);
              vm.search();
            }
          });
        },
        onCancel() { },
      });
    },
    search(num) {
      this.$refs.CustomTable.getData(num);
    },
    selectChange(selectedRowKeys) {
      this.selectedRowKeys = selectedRowKeys;
    },
  },
};
</script>

<style>
</style>