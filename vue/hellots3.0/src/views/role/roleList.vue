<!--
 * @Author: 吴玉荣
 * @LastEditors: Please set LastEditors
 * @Date: 2021-03-30 19:16:52
 * @LastEditTime: 2021-07-06 00:06:44
 * @info: 描述
-->
<template>
  <div>角色列表 {{ index }}</div>
</template>


<script >
export default {
  name: "roleList",
  data() {
    return {
      index: 1,
    };
  },
  created() {
    setTimeout(() => {
      this.index = 4;
    }, 1000);
  },
};
</script>

 <script >
// import { ref, onMounted } from "vue";
// setup lang='ts'
// let index = ref(1);
// setTimeout(() => {
//   index.value = 4;
// }, 1000);
// onMounted(() => {
//   console.log(11111111);
// });
</script>

<style>
</style>