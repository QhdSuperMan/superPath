<template>
  <!-- 导入弹出框 -->
  <a-modal
    v-bind="$attrs"
    :title="title"
    :visible="visible"
    :confirm-loading="confirmLoading"
    @ok="ok"
    @cancel="cancel"
    width="860px"
    :footer="null"
  >
    <div class="search-box">
      <slot name="search"></slot>
    </div>
    <div class="lead-center" v-if="!isShowError">
      <div class="lead-center1">
        <div class="lead-center1-title">{{ subTitle }}</div>

        <div class="lead-center1-img">
          <img src="@/assets/images/expt1.png" alt="" />
        </div>
        <custom-button class="download-button" @click="download" text="下载模板"></custom-button>
      </div>
      <div class="lead-center2"></div>
      <div class="lead-center1">
        <div class="lead-center1-title">2. 上传好编辑的文件</div>
        <div class="lead-center1-img">
          <img src="@/assets/images/expt2.png" alt="" />
        </div>
        <a-upload
          :accept="accept"
          :multiple="false"
          :file-list="fileList"
          listType="text"
          :customRequest="uploading"
          ref="upload"
        >
          <button
            class="custom-button ant-btn  custom-button-fill"
            @click.stop.prevent="beforeUpload"
          >
            上传文件
          </button>
        </a-upload>
      </div>
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
import CustomButton from "@/components/CustomButton";
import CustomTable from "@/components/CustomTable";
import { downloadFile } from '@/utils/download-util.js'

import envConfig from "@/utils/env-config";
import httpUtil from "@/utils/http-util";
import commonUtil from "@/utils/common-util";
export default {
  components: {
    CustomButton,
    CustomTable
  },

  props: {
    downLoadUrl: { // 下载模板url
      type: String | Function,
      default: ''
    },
    importUrl: { // 导入模板url
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: '工单任务模板'
    },
    fileId: { // open下载
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: '导入'
    },
    subTitle: {
      type: String,
      default: '1、下载导入模板,填写信息'
    },
    value: {
      type: Boolean,
      default: false
    },
    accept: {// 上传支持的类型
      type: String,
      default: '.xls,.xlsx'
      // default: '.txt,.xls,.xlsx'
    },
    downLoadParams: {// 下载模板的参数
      type: Object,
      default: () => { }
      // default: '.txt,.xls,.xlsx'
    },
    importParams: { // 导入的参数
      type: Object,
      default: () => { }
    },
    downLoadBefore: {// 下载模板之前的函数
      type: Function,
      default: () => true
    },
    importBefore: {// 导入之前的函数
      type: Function,
      default: () => true
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
      confirmLoading: false
    }
  },

  watch: {
    value(newVal) {
      if (newVal) {
        this.isShowError = false
      }
      this.visible = newVal
    }
  },

  created() {
  },

  methods: {
    download() {
      if (!this.downLoadBefore()) return
      if (this.fileId) {
        const SERVER_URL = envConfig.SERVER_URL;
        window.open(`${SERVER_URL}/ost-manage/upload/downloadFileMinio?fileId=${this.fileId}`);
      } else {
        downloadFile(this.downLoadUrl, this.name, this.downLoadParams, 'get')
      }
    },
    beforeUpload() {
      if (!this.importBefore()) return
      this.$refs.upload.$el.getElementsByTagName('input')[0].click()
    },
    uploading(e) {
      const formData = new FormData();
      formData.append("file", e.file);
      for (let i in this.importParams) {
        formData.append(i, this.importParams[i]);
      }
      commonUtil.request(
        httpUtil.post(this.importUrl, formData).then(res => {
          if (res && res.data.code == "200") {
            this.$message.success(res.data.message)
            this.dataSource = res.data.data
            if (this.dataSource.length) {
              this.isShowError = true
            } else {
              this.$emit('success')
              this.close()
            }
          } else {
            this.$message.error(res.data.message)
          }
        })
      );
    },
    close() {
      this.$emit('input', false)
    },
    cancel() {
      this.$emit('cancel', false)
      this.close()
    },
    ok() {
      this.$emit('ok', false)
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/base.scss";

/deep/ .ant-modal-body {
  .lead-center {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
  }
  .lead-center2 {
    width: 1px;
    height: px2rem(190px);
    border: 1px solid #ededed;
    margin-top: px2rem(30px);
  }
  .lead-center1 {
    width: px2rem(300px);
    text-align: center;
    .lead-center1-title {
      font-size: px2rem(16px);
      font-family: Microsoft YaHei, Microsoft YaHei-Regular;
      font-weight: 400;
      color: #878889;
    }
    .lead-center1-img {
      display: block;
      margin-bottom: px2rem(32px);
      img {
        width: px2rem(100px);
        height: px2rem(100px);
        margin-top: px2rem(30px);
      }
    }
  }
}

.search-box {
  margin: px2rem(0px) px2rem(20px) px2rem(20px) px2rem(20px) ;
}
.download-button{
    background-color: #ffffff !important;
    border: 1px solid #009999;
}
</style>