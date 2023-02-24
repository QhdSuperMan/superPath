<template>
  <!-- 导入弹出框 -->
  <a-modal
    v-bind="$attrs"
    :title="title"
    :visible="visible"
    :confirm-loading="confirmLoading"
    @ok="ok"
    @cancel="cancel"
    width="500px"
    :footer="null"
  >
    <div v-if="!isShowError" class="important-container">
      <CustomButton icon="download" @click="download">下载模板</CustomButton>
      <a-upload
        :accept="accept"
        :multiple="false"
        :file-list="fileList"
        listType="text"
        :customRequest="uploading"
        ref="upload"
      >
        <CustomButton type="primary">上传</CustomButton>
      </a-upload>
    </div>
    <div v-else>
      <!-- 错误导入表格 -->
      <custom-table
        :rowSelection="false"
        :pagination="false"
        :columns="columns"
        :data-source="dataSource"
      ></custom-table>
    </div>
  </a-modal>
</template>

<script>
import axios from "@/utils/service.js";
import file from '@/api/common/file.js'

export default {
  name: "CustomImport",
  props: {
    importUrl: { // 导入模板url
      type: String,
      default: "",
    },
    downloadUrl: { // 导入模板url
      type: String,
      default: "",
    },
    downloadName: {
      type: String,
      default: "模板",
    },
    title: {
      type: String,
      default: "导入",
    },
    value: {
      type: Boolean,
      default: false,
    },
    accept: {
      // 上传支持的类型
      type: String,
      default: ".xls,.xlsx",
      // default: '.txt,.xls,.xlsx'
    },
    importParams: {
      // 导入的参数
      type: Object,
      default: () => { },
    },
    importBefore: {
      // 导入之前的函数
      type: Function,
      default: () => true,
    },
  },

  computed: {
    computedImportUrl() {
      return file[this.importUrl]
    },
    computedDownloadUrl() {
      return file[this.downloadUrl]
    }
  },

  data() {
    return {
      dataSource: [],
      columns: [
        {
          title: "序号",
          dataIndex: "index",
          key: "index",
          align: "center",
          width: "70px",
          customRender: (text, row, index) => {
            return {
              children: index + 1,
              attrs: {
                colSpan: 1,
                rowSpan: 1,
              },
            };
          },
        },
        {
          title: "错误行数",
          dataIndex: "rowNum",
          key: "rowNum",
          align: "center",
          width: "100px",
          ellipsis: true,
          customRender: function (value) {
            return {
              children: `第${value}行`,
              attrs: {
                colSpan: 1,
                rowSpan: 1,
              },
            };
          }.bind(this),
        },
        {
          title: "错误原因",
          dataIndex: "rowTip",
          key: "rowTip",
          align: "center",
          width: "100px",
          ellipsis: true,
        },
      ],

      fileList: [],
      isShowError: false,
      visible: false,
      confirmLoading: false,
    };
  },

  watch: {
    value: {
      handler(newVal) {
        if (newVal) {
          this.isShowError = false;
        }
        this.visible = newVal;
      },
      immediate: true,
    },
  },

  methods: {
    beforeUpload() {
      if (!this.importBefore()) return;
      this.$refs.upload.$el.getElementsByTagName("input")[0].click();
    },
    download() {
      axios(
        {
          method: "post",
          url: this.computedDownloadUrl,
          responseType: "blob",
        },
        {
          downloadName: this.downloadName,
        }
      );
    },
    uploading(e) {
      const formData = new FormData();
      formData.append("file", e.file);
      this.confirmLoading = true;
      axios({
        method: "post",
        url: this.computedImportUrl,
        data: formData,
      })
        .then(({ data }) => {
          if (data.code === 200) {
            this.$message.success(data.msg);
            this.$emit("success");
            this.close();
          }
          this.confirmLoading = false;
        })
        .catch(() => {
          this.confirmLoading = false;
        });
    },
    close() {
      this.$emit("input", false);
    },
    cancel() {
      this.$emit("cancel", false);
      this.close();
    },
    ok() {
      this.$emit("ok", false);
    },
  },
};
</script>

<style lang="scss" scoped>

.important-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>