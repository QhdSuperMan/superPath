<template>
  <div class="list-common-style-container">
    <div class="search-input">
      <CustomInput
        v-model="form.keyword"
        placeholder="搜索联系电话"
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
        <CustomButton icon="delete" size="small" @click="batchOperation(3)"
          >删除</CustomButton
        >
      </div>
      <CustomTable
        ref="CustomTable"
        rowKey="customer_id"
        :columns="columns"
        :params="{
          api: getMyList,
          params: form,
        }"
        @selectChange="selectChange"
      ></CustomTable>
    </div>
  </div>
</template>

<script>
import { configMixins, formModal } from "./config/index.js";

import {
  getMyList,
  receive,
  release,
  releaseAll,
  deleteCustomer,
  recovery,
  putRecycle,
  transfer,
  dispatch,
} from "@/api/customer/customer.js";

export default {
  mixins: [configMixins],
  name: "resource-management-My",
  data() {
    return {
      getMyList,
      currentRow: {},
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
    edit(row) {
      this.currentRow = row;
      this.isShowAddCustomer = true;
    },
    submit(id, clear) {
      let request = transfer;
      if (this.type === 7) {
        request = dispatch;
      }
      let vm = this;
      request({
        staff_id: id,
        customer_id: vm.selectedRowKeys.join(","),
      })
        .then(({ data }) => {
          if (data.code === 200) {
            vm.$message.success(data.msg);
            vm.isShowSelectEmployee = true;
            vm.search();
          }
          clear();
        })
        .catch(() => clear());
    },
    // 领取客户
    receiveCustomer() {
      let vm = this;
      this.$confirm({
        content: "确认领取?",
        cancelText: "取消",
        okText: "确认",
        onOk() {
          receive({
            customer_id: vm.selectedRowKeys.join(","),
          }).then(({ data }) => {
            if (data.code === 200) {
              vm.$message.success(data.msg);
              vm.search();
            }
          });
        },
        onCancel() {},
      });
    },
    // 释放全部客户
    releaseAllCustomer() {
      let vm = this;
      this.$confirm({
        content: "确认释放全部客户?",
        cancelText: "取消",
        okText: "确认",
        onOk() {
          releaseAll().then(({ data }) => {
            if (data.code === 200) {
              vm.$message.success(data.msg);
              vm.search();
            }
          });
        },
        onCancel() {},
      });
    },
    // 释放客户
    releaseCustomer() {
      let vm = this;
      this.$confirm({
        content: "确认释放?",
        cancelText: "取消",
        okText: "确认",
        onOk() {
          release({
            customer_id: vm.selectedRowKeys.join(","),
          }).then(({ data }) => {
            if (data.code === 200) {
              vm.$message.success(data.msg);
              vm.search();
            }
          });
        },
        onCancel() {},
      });
    },
    // 删除客户
    deleteCustomer() {
      let vm = this;
      this.$confirm({
        content: "确认删除?",
        cancelText: "取消",
        okText: "确认",
        onOk() {
          deleteCustomer({
            customer_id: vm.selectedRowKeys.join(","),
          }).then(({ data }) => {
            if (data.code === 200) {
              vm.$message.success(data.msg);
              vm.search();
            }
          });
        },
        onCancel() {},
      });
    },
    recoveryCustomer() {
      let vm = this;
      this.$confirm({
        content: "确认恢复?",
        cancelText: "取消",
        okText: "确认",
        onOk() {
          recovery({
            customer_id: vm.selectedRowKeys.join(","),
          }).then(({ data }) => {
            if (data.code === 200) {
              vm.$message.success(data.msg);
              vm.search();
            }
          });
        },
        onCancel() {},
      });
    },
    putRecycleCustomer() {
      let vm = this;
      this.$confirm({
        content: "确认加入回收站?",
        cancelText: "取消",
        okText: "确认",
        onOk() {
          putRecycle({
            customer_id: vm.selectedRowKeys.join(","),
          }).then(({ data }) => {
            if (data.code === 200) {
              vm.$message.success(data.msg);
              vm.search();
            }
          });
        },
        onCancel() {},
      });
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