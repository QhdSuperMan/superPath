<!--
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2022-02-11 17:37:13
 * @LastEditTime: 2022-02-11 17:43:47
 * @info: 描述
-->
<template>
  <div>
    <button @click="test">点击</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {
        a: 1,
        b: 1,
      },
    };
  },
  methods: {
    test() {
      this.obj.a += 1;
    },
  },
  watch: {
    'obj.a': {
      deep: true,
      handler(a, b) {
        console.log(a, b);
      },
    },
  },
};
</script>

<style>
</style>