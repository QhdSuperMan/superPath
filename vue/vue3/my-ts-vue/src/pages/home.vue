<!--
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2022-02-14 09:37:20
 * @LastEditTime: 2022-02-16 16:07:42
 * @info: 描述
-->
<template>
  <div>homesdsdssd</div>
  <div>{{ test }}</div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useHStore } from "@/store/hook";
const store = useHStore();
console.log(store);
const a: string = 1;
const test = computed(() => {
  return store.state.user.loading;
});
</script>

<style  lang='less'>
body {
  div {
    color: red;
  }
}
</style>

