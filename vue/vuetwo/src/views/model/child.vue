<!--
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2022-01-06 10:20:55
 * @LastEditTime: 2022-01-06 10:29:27
 * @info: 描述
-->
<template>
  <div>
    <input type="text" :value="modelOne" @input="(e)=>$emit('update:modelOne',e.target.value)">
    <input type="text" :value="modelTwo" @input="(e)=>$emit('update:modelTwo',e.target.value)">
  </div>
</template>

<script>
export default {
  // model: {
  //   props: "modelOne",
  //   event: "input",
  // },
  props: ["modelOne", "modelTwo"],
};
</script>

<style>
</style>