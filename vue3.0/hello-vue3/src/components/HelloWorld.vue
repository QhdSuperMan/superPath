<!--
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-03-03 16:59:08
 * @LastEditTime: 2021-03-03 17:52:05
 * @info: 描述
-->
<template>
  <div class="hello">
    {{ msg }}
    <el-input></el-input>
  </div>
</template>


<script setup>
import { reactive, getCurrentInstance } from "vue";
const msg = reactive(1);
const { ctx } = getCurrentInstance();
console.log(ctx);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
