<!--
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-12-22 15:29:30
 * @LastEditTime: 2022-02-14 11:16:58
 * @info: 描述
-->
<template>
  <div class="home">
    <router-link to="/about">router-link跳转</router-link>
    <br>
    <a href="/about">a跳转</a>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
