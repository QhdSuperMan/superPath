<template>
  <div class="list-common-style-container">
    <div class="search-input">
      <CustomInput
        v-model="form.keyword"
        placeholder="搜索联系人、公司名称、联系电话"
        @search="search(1)"
        customType="search"
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
          icon="import"
          v-if="btnAuthority.s_dispatch"
          size="small"
          @click="batchOperation(1)"
          >派发</CustomButton
        >
        <CustomButton
          icon="delete"
          v-if="btnAuthority.s_delete"
          size="small"
          @click="batchOperation(4)"
          >删除</CustomButton
        >
      </div>
      <CustomTable
        ref="CustomTable"
        rowKey="resource_id"
        :columns="columns"
        :params="{
          api: getHighSeaList,
          params: form,
        }"
        @selectChange="selectChange"
      ></CustomTable>
    </div>

    <AddCustomer
      v-model="isShowAddCustomer"
      v-if="isShowAddCustomer"
      :params="currentRow"
      @success="search"
    />

    <Transfer v-model="isShowTransfer" :type="type" :params="selectedRowKeys" />

    <GetResource
      v-model="isShowGetResource"
      @success="search"
      v-if="isShowGetResource"
    />

    <ResourceDetails :params="currentRow" v-model="isShowResourceDetails" />
  </div>
</template>

<script>
import AddCustomer from "./config/AddCustomer.vue";
import Transfer from "./config/Transfer.vue";
import GetResource from "./config/GetResource.vue";
import ResourceDetails from "./config/ResourceDetails.vue";

import { configMixins, formModal } from "./config/index.js";

import {
  getHighSeaList,
} from "@/api/resource/resource.js";

export default {
  mixins: [configMixins],
  name: "resource-management-HighSeas",
  data() {
    return {
      getHighSeaList,
      currentRow: {},
      formInline: {},
      isShowAddCustomer: false,
      isShowTransfer: false,
      isShowGetResource: false,
      isShowResourceDetails: false,
      type: 4,
      form: {
        keyword: "",
        resource_status: 0,
        receive_way: 0,
      },
      selectedRowKeys: [],
    };
  },
  components: {
    AddCustomer,
    Transfer,
    GetResource,
    ResourceDetails,
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
    batchOperation(type) {
      this.type = type;
      if (this.selectedRowKeys.length) {
        if (type === 1 || type === 2) {
          this.isShowTransfer = true;
        } else if (type === 3) {
          this.deleteFile();
        } else if (type === 4) {
          this.addRecycleBin();
        } else if (type === 5) {
          this.release();
        } else if (type === 6) {
          this.recovery();
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