<template>
  <div class="list-common-style-container">
    <div class="search-input">
      <CustomInput
        v-model="form.keyword"
        placeholder="搜索"
        customType="search"
        @search="search(1)"
      />
    </div>

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
          >添加员工</CustomButton
        >
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

    <AddEmployee
      v-model="isShowAddEmployee"
      v-if="isShowAddEmployee"
      @success="search(1)"
      :params="currentRow"
    />
  </div>
</template>

<script>
import AddEmployee from "./config/AddEmployee.vue";

import { configMixins, formModal } from "./config/index.js";

import { getList, togglePause } from "@/api/setting/employee.js";

export default {
  mixins: [configMixins],
  name: "resource-management-My",
  data() {
    return {
      getList,
      currentRow: {},
      isShowAddEmployee: false,
      type: 1,
      form: Object.assign({}, formModal),
      selectedRowKeys: [],
    };
  },
  activated() {
    this.search();
  },
  components: {
    AddEmployee,
  },
  methods: {
    reset() {
      this.form = Object.assign({}, formModal);
      this.search(1);
    },
    switch(row) {
      let vm = this;
      let message = "确认停用员工？";
      if (row.is_pause) {
        message = "确认启用员工？";
      }
      this.$confirm({
        content: message,
        cancelText: "取消",
        okText: "确认",
        onOk() {
          togglePause({
            staff_id: row.staff_id,
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
    edit(row) {
      this.currentRow = row;
      this.isShowAddEmployee = true;
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