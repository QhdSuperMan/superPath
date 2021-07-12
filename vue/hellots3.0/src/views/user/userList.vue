<!--
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-03-30 19:16:06
 * @LastEditTime: 2021-07-02 16:52:08
 * @info: 描述
-->
<template>
  <div>
    用户列表
    <div v-for='(val,key) in arr' :key='key' :ref='setRef'>
      <p>{{ val }}</p>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { useContext, getCurrentInstance, ref, onMounted } from "vue";
var a = getCurrentInstance();
const arr = ref([1, 2, 3]);
var getDom: ref = ref([]);
const setRef = el => {
  getDom.value.push(el);
};
console.log(useContext(), getCurrentInstance());

onMounted(() => {
  console.log(getDom.value);
});
</script>

<style>
</style>