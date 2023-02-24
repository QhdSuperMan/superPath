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
          icon="download"
          size="small"
          v-if="btnAuthority.s_import"
          @click="isShowCustomImport = true"
          >导入</CustomButton
        >
        <CustomButton icon="export" v-if="btnAuthority.s_export" size="small" @click="exportFile"
          >导出</CustomButton
        >
        <CustomButton icon="import" v-if="btnAuthority.s_transfer" size="small" @click="batchOperation(2)"
          >转交</CustomButton
        >
        <CustomButton icon="delete" v-if="btnAuthority.s_release" size="small" @click="batchOperation(5)"
          >释放</CustomButton
        >
        <CustomButton icon="delete" v-if="btnAuthority.s_release_all" size="small" @click="releaseAll"
          >释放全部资源</CustomButton
        >
      </div>
      <CustomTable
        ref="CustomTable"
        rowKey="resource_id"
        :columns="columns"
        :params="{
          api: getList,
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

    <ResourceDetails :params="currentRow" v-model="isShowResourceDetails" />

    <CustomImport
      v-model="isShowCustomImport"
      importUrl="resourceImport"
      downloadUrl="resourceDownload"
      @success="search(1)"
    />
  </div>
</template>

<script>
import AddCustomer from "./config/AddCustomer.vue";
import Transfer from "./config/Transfer.vue";
import GetResource from "./config/GetResource.vue";
import ResourceDetails from "./config/ResourceDetails.vue";

import { configMixins, formModal } from "./config/index.js";

import {
  getList,
  exportTemplate,
} from "@/api/resource/resource.js";

export default {
  mixins: [configMixins],
  name: "resource-management-All",
  data() {
    return {
      getList,
      isShowCustomImport: false,
      currentRow: {},
      formInline: {},
      isShowAddCustomer: false,
      isShowTransfer: false,
      isShowGetResource: false,
      isShowResourceDetails: false,
      type: 2,
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