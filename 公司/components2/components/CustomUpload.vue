<!--
 * @Description: 表单上传展示
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2022-10-31 17:16:24
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2022-11-16 09:37:21
-->
<template>
  <div class="custom-upload">
    <a-upload
      v-if="operation === 'edit'"
      :accept="accept"
      :file-list="fileList"
      @change="handleFileChange"
      :customRequest="customRequest"
      :multiple="multiple"
      :remove="remove"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <a-button class="upload-button">
        <a-icon type="upload" /> {{ uploadName }}
      </a-button>
    </a-upload>
    <div v-else-if="fileList.length" class="file-list">
      <div class="file-item" v-for="(item, index) of fileList" :key="index">
        <div class="file-name">
          {{ item.name }}
        </div>
        <button class="btn-download" type="primary" @click="download(item)">
          下载文件
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import businessUtil from "@/utils/business-util";
import { uploudMinioFile } from "@/api/serviceApi";
import commonUtil from "@/utils/common-util";
import httpUtil from "@/utils/http-util";
import template from "@/api/my-workbench/multipleLigandsManage";

export default {
  data() {
    return {
      fileList: [],
      isSelfEdit: false, // 是否自己内部修改
      listType: ''
    }
  },
  props: {
    uploadName: {
      type: String,
      default: '上传'
    },
    accept: {// 上传支持的类型
      type: String,
      default: '.txt,.jpg,.jpeg,.png,.rar,.zip,.doc,.docx,.ppt,.xls,.xlsx,.wps,.pdf'
    },
    value: {
      // type: Array | String,
      default: () => []
    },
    operation: {
      type: String,
      default: 'edit'
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value(newVal) {

      if (!this.isSelfEdit && Array.isArray(newVal)) {
        this.fileList = newVal.map((val, index) => {
          val.response = {
            ...val
          }
          val.uid = -1 - index
          val.name = val.fileName
          val.status = 'done'
          val.url = val.fileAccessUrl
          return val
        })
      }
    }
  },
  methods: {
    // 下载文件
    download(item) {
      businessUtil.downloadFile(item.fileId)
    },
    // 自定义预览
    previewFile(file) {
      console.log('file: ', file);
    },
    // 自定义上传
    customRequest(e) {
      const formData = new FormData();
      formData.append("file", e.file);
      // 随机数
      const randomNum = businessUtil.getRandomNum(10);
      const timestamp = {
        "X-Protected-RP": randomNum,
        "Content-Type": "multipart/form-data",
      };
      uploudMinioFile(formData, timestamp).then(
        ({ res }) => {
          if (res && res.data.code == "200") {
            this.$message.success(res.data.message);
            this.fileList[this.fileList.length - 1].status = "done"
            this.fileList[this.fileList.length - 1].response = res.data.data
          } else {
            this.fileList.pop()
            this.$emit('input', this.fileList)
            this.$message.error(res.data.message);
          }
        },
        (error) => {
          this.$message.error("服务异常");
        }
      );
    },
    remove (file) {
      if (file.fileId) {
        this.deleteFile(file.fileId)
      }
    },
    /**
     * @description: 删除附件中的文件
     * @param {*} fileId
     * @return {*}
     * @author: wuyurong
     */
    deleteFile(fileId) {
      commonUtil.request(
        httpUtil.get(template.DELETE, { fileId })
      ).then(({ res }) => {
        // 
      })
    },
    handleFileChange({ file, fileList, event }) {
      this.fileList = fileList
      this.$emit('input', this.fileList)
      this.isSelfEdit = true
      this.$nextTick(() => {
        this.isSelfEdit = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/base.scss";

.file-list {
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #f7f8fa;
  border: 1px solid #eaeaea;
  border-top-width: 1px;
  border-radius: 4px;
  box-sizing: border-box;
  // width: 92.5%;
  .file-item {
    display: flex;
    color: rgba(0, 0, 0, 0.25);
    height: px2rem(40px);
    align-items: center;
    padding: px2rem(10px);
    .file-name {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: left;
    }
    .btn-download {
      padding: 0 px2rem(10px);
      height: px2rem(32px);
      background-color: #009999;
      border-radius: 4px;
      font-family: Microsoft YaHei;
      color: #ffffff;
      border: none;
      cursor: pointer;
    }
  }
}


.custom-upload {

  .upload-button {
    height: 30px;
    background-color: #009999;
    border-radius: 4px;
    border-color: #009999;
    font-family: Microsoft YaHei;
    color: #ffffff;
    font-size: .14rem;
  }

  /deep/ .ant-upload-select-text {
    display: block;
    text-align: right;
  }
}

    
</style>