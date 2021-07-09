<!--
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-07-07 11:02:53
 * @LastEditTime: 2021-07-08 15:41:47
 * @info: 描述
-->
<template>
  <div>
    about 页面
    <nuxt-link to="/">去首页</nuxt-link>
    <!-- <button @click="goHome">去首页</button>
    <el-button @click="switchLayouts">切换布局</el-button> -->
    <!-- <div>是不是红色的</div> -->
    <!-- <img src="~/assets/mi.jpg" /> -->
    <!-- <DemoTest /> -->
    <el-button @click="test">测试 {{ about }}</el-button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  // layout(context) {
  //   console.log('blog')
  //   return "blog";
  // },
  computed: {
    about() {
      return this.$store.state.about ? this.$store.state.about.list.length : 1;
    }
  },
  asyncData(
    { isDev, route, store, env, params, query, req, res, redirect, error },
    callback
  ) {
    setTimeout(() => {
      callback(null,{ title: 'data.title' })
    }, 500)
  },
  async fetch() {
    this.mountains = await fetch("https://api.nuxtjs.dev/mountains").then(
      res => {
        res.json();
      }
    );
  },

  layout: "blog",
  methods: {
    goHome() {
      this.$router.push("/");
    },
    switchLayouts() {
      window.$nuxt.setLayout("demo");
    },
    test() {
      this.add11("111");
    },
    ...mapMutations({
      add11: "about/add"
    })
  }
};
</script>

<style>
@import "~assets/style.less";
</style>