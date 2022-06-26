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
    <br />
    <a href="/about">a跳转</a>
    <img :src="imgurl" alt="" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import a from "./aa.png";
console.log(11111, a);
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      imgurl: a,
    };
  },
};
</script>
