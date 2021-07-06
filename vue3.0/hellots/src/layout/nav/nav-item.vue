<!--
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-04-09 16:23:19
 * @LastEditTime: 2021-07-02 10:23:05
 * @info: 描述
-->
<template>
  <div>
    <template v-for='(val) in routerBox'>
      <el-submenu v-if='val.children.length' :index='val.path' :key='val.path'>
        <template #title>{{ val.name }}</template>
        <nav-item :routerBox='val.children' />
      </el-submenu>
      <el-menu-item v-else :index='val.path' :key='val.path'>{{ val.name }}</el-menu-item>
    </template>
  </div>
</template>

<script lang="ts" setup >
import {
  computed,
  getCurrentInstance,
  useContext,
  defineComponent,
  defineProps
} from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
defineComponent({
  name: "nav-item"
});
defineProps(["routerBox"]);
const store = useStore();
</script>


<style scoped lang='less'>
</style>