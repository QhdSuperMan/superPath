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
          >添加角色</CustomButton
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

    <AddRole v-model="isShowAddRole" @success="search(1)" :params="currentRow" />
    <StaffList
      v-model="isShowStaffList"
      :url="getStaffList"
      :params="{
        role_id: currentRow.role_id,
      }"
    />
    <SetPower v-model="isShowSetPower" :params="currentRow" v-if="isShowSetPower" />
  </div>
</template>

<script>
import AddRole from "./config/AddRole.vue";
import SetPower from "./config/SetPower.vue";
import StaffList from '../components/StaffList.vue'

import { configMixins, formModal } from "./config/index.js";

import { getList, deleteRole, getStaffList } from "@/api/setting/role.js";

export default {
  mixins: [configMixins],
  name: "resource-management-My",
  data() {
    return {
      getList,
      getStaffList,
      currentRow: {},
      isShowAddRole: false,
      isShowStaffList: false,
      isShowSetPower: false,
      type: 1,
      form: Object.assign({}, formModal),
      selectedRowKeys: [],
    };
  },
  activated() {
    this.search();
  },
  components: {
    AddRole,
    SetPower,
    StaffList
  },
  methods: {
    reset() {
      this.form = Object.assign({}, formModal);
      this.search(1);
    },
    edit(row) {
      this.currentRow = row;
      this.isShowAddRole = true;
    },
    deleteRole(row) {
      let vm = this;
      this.$confirm({
        content: "确认删除角色?",
        cancelText: "取消",
        okText: "确认",
        onOk() {
          deleteRole({ role_id: row.role_id }).then(({ data }) => {
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