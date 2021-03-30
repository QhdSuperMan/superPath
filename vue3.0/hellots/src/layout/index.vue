<!--
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-03-09 10:37:52
 * @LastEditTime: 2021-03-30 19:09:39
 * @info: 描述
-->
<template>
  <div>
    <headCompents />
    <div>
      <el-container>
        <el-aside width="200px">
          <asideCompents />
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </div>
  </div>
</template>

<script lang="ts" setup>
// @ts-nocheck
import headCompents from "./header/header";
import asideCompents from "./nav/nav";
import { defineComponent } from "vue";

defineComponent({
  components: {
    headCompents,
    asideCompents
  }
});
</script>

<style>
</style>