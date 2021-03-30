<!--
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-03-30 16:12:31
 * @LastEditTime: 2021-03-30 19:06:09
 * @info: 描述
-->
<template>
  <el-header class='header'>
    <div>
      <div class="headerLeft">
        <span>logo</span>
      </div>
      <div class='headerRight'>
        name {{  usename }}
      </div>
    </div>
  </el-header>

</template>

<script lang="ts" setup >
import { reactive, ref } from "vue";
const usename = ref("heiehi");
</script>


<style scoped lang='less'>
.header {
  background-color: #6b9bb8;
  line-height: 60px;
  width: 100%;
  color: white;
  .headerLeft {
    float: left;
  }
  .headerRight {
    float: right;
  }
}
</style>