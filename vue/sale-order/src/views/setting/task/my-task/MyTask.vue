<template>
  <div class="list-common-style-container">
    <div class="table-list">
      <CustomTable
        :columns="columns"
        :isPage="false"
        :dataSource="dataSource"
        :rowSelection="false"
      ></CustomTable>
    </div>
  </div>
</template>

<script>
import { configMixins } from "./config/index.js";
import { getMyList } from "@/api/task/task.js";

export default {
  mixins: [configMixins],
  name: "resource-management-My",
  data() {
    return {
      dataSource: [],
    };
  },
  activated() {
    this.search();
  },
  methods: {
    search() {
      getMyList()
        .then(({ data }) => {
          if (data.code === 200) {
            this.dataSource = data.data;
          }
        })
        .catch(() => {});
    },
  },
};
</script>

<style>
</style>