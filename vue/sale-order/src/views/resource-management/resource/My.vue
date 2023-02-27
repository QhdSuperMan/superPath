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
        <CustomButton
          icon="import"
          size="small"
          v-if="btnAuthority.s_receive"
          @click="isShowGetResource = true"
          >领取</CustomButton
        >
        <CustomButton
          icon="export"
          v-if="btnAuthority.s_export"
          size="small"
          @click="exportFile"
          >导出</CustomButton
        >
        <CustomButton
          icon="delete"
          v-if="btnAuthority.s_release"
          size="small"
          @click="batchOperation(5)"
          >释放</CustomButton
        >
        <CustomButton
          icon="delete"
          v-if="btnAuthority.s_release_all"
          size="small"
          @click="releaseMyAll"
          >释放全部</CustomButton
        >
      </div>
      <CustomTable
        ref="CustomTable"
        rowKey="resource_id"
        :columns="columns"
        :params="{
          api: getMyList,
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
  getMyList,
  exportTemplate,
  deleteResource,
  putRecycle,
  releaseMy,
  releaseMyAll,
  recovery,
} from "@/api/resource/resource.js";

export default {
  mixins: [configMixins],
  name: "resource-management-My",
  data() {
    return {
      getMyList,
      currentRow: {},
      formInline: {},
      isShowAddCustomer: false,
      isShowTransfer: false,
      isShowGetResource: false,
      isShowResourceDetails: false,
      isShowCustomImport: false,
      type: 1,
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
    deleteFile() {
      let vm = this;
      this.$confirm({
        content: "确认删除资源?",
        cancelText: "取消",
        okText: "确认",
        onOk() {
          deleteResource({
            resource_id: vm.selectedRowKeys.join(","),
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
    releaseMy() {
      let vm = this;
      this.$confirm({
        content: "确认释放资源?",
        cancelText: "取消",
        okText: "确认",
        onOk() {
          releaseMy({
            resource_id: vm.selectedRowKeys.join(","),
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
    releaseMyAll() {
      let vm = this;
      this.$confirm({
        content: "确认释放全部资源?",
        cancelText: "取消",
        okText: "确认",
        onOk() {
          releaseMyAll({
            resource_id: vm.selectedRowKeys.join(","),
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
    recovery() {
      let vm = this;
      this.$confirm({
        content: "确认恢复资源?",
        cancelText: "取消",
        okText: "确认",
        onOk() {
          recovery({
            resource_id: vm.selectedRowKeys.join(","),
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
    recovery() {
      let vm = this;
      this.$confirm({
        content: "确认恢复资源?",
        cancelText: "取消",
        okText: "确认",
        onOk() {
          recovery({
            resource_id: vm.selectedRowKeys.join(","),
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
    addRecycleBin() {
      let vm = this;
      this.$confirm({
        content: "确认加入回收站?",
        cancelText: "取消",
        okText: "确认",
        onOk() {
          putRecycle({
            resource_id: vm.selectedRowKeys.join(","),
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
          this.releaseMy();
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