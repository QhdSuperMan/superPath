<!--
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2022-02-14 09:37:20
 * @LastEditTime: 2022-02-16 16:07:42
 * @info: 描述
-->
<template>
  <div>homesdsdssd</div>
  <button @click="btnClick">btnClick</button>
  <button @click="b++">b++</button>
  <div>{{ test }}</div>
  <div>{{ a }}</div>
  <div>{{ b }}</div>
</template>
<script setup lang="ts">
import { computed,onRenderTriggered,onRenderTracked, ref,watchEffect  } from "vue";
import { useHStore } from "@/store/hook";
const store = useHStore();
const a: string = ref('a');
const b: string = ref(1);
const test = computed(() => {
  return store.state.user.loading;
});
const btnClick = ()=> {
  a.value += 1
}
setTimeout(() => {
  a.value += 1
  console.log(222);
  
},1000)
watchEffect(() => {
  a.value+= 2
  console.log(a.value, 'a.value');
})
onRenderTriggered((event) => {
  console.log(event,'onRenderTriggered'); 
},null)
onRenderTracked((event) => {
    console.log(event,'onRenderTracked');
},null)
</script>

<style  lang='less'>
body {
  & div {
    color: red;
  }
}
</style>

