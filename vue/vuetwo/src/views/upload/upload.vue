<!--
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2022-02-08 15:56:55
 * @LastEditTime: 2022-02-14 11:14:54
 * @info: 描述
-->
<template>
  <div>
    <router-link to="/about">ssssaaaasdcsd</router-link>
    <br>
    <a href="/about">55</a>
    <input type="file" @change="handleFileChange" />
    <el-button @click="handleUpload">上传</el-button>
  </div>
</template>

<script>
import { request } from "./config.js";
const SIZE = 1024 * 1024; // 切片大小
export default {
  data: () => ({
    request: request,
    container: {
      file: null,
    },
    data: [],
  }),

  methods: {
    handleFileChange(event) {
      this.container.file = event.target.files[0];
    },
    // 生成文件切片
    createFileChunk(file, size = SIZE) {
      const fileChunkList = [];
      let cur = 0;
      while (cur < file.size) {
        fileChunkList.push({ file: file.slice(cur, cur + size) });
        cur += size;
      }
      return fileChunkList;
    },

    async handleUpload() {
      if (!this.container.file) return;
      const fileChunkList = this.createFileChunk(this.container.file);
      this.data = fileChunkList.map(({ file }, index) => ({
        chunk: file,
        hash: this.container.file.name + "-" + index, // 文件名 + 数组下标
      }));
      await this.uploadChunks();
    }, // 上传切片
    async uploadChunks() {
      const requestList = this.data
        .map(({ chunk, hash }) => {
          const formData = new FormData();
          formData.append("chunk", chunk);
          formData.append("hash", hash);
          formData.append("filename", this.container.file.name);
          return { formData };
        })
        .map(async ({ formData }) =>
          this.request({
            url: "http://localhost:3000",
            data: formData,
          })
        );
      await Promise.all(requestList); // 并发切片
      await this.mergeRequest();
    },
    async mergeRequest() {
      await this.request({
        url: "http://localhost:3000/merge",
        headers: {
          "content-type": "application/json",
        },
        data: JSON.stringify({
          size: SIZE,
          filename: this.container.file.name,
        }),
      });
    },
  },
};
</script>



