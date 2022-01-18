<!--
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2022-01-06 10:20:26
 * @LastEditTime: 2022-01-06 10:31:54
 * @info: 描述
-->
<template>
  <div>
    <child1 :modelOne.sync="modelOne" :modelTwo.sync="modelTwo"></child1>
    <p>modelOne: {{ modelOne }}</p>
    <p>modelTwo: {{ modelTwo }}</p>
  </div>
</template>

<script>
import child1 from "./child.vue";
export default {
  data() {
    return {
      modelOne: "modelOne",
      modelTwo: "modelTwo",
    };
  },
  components: {
    child1,
  },
};
</script>

<style>
</style>