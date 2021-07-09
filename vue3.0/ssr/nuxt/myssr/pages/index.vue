<!--
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-07-06 14:30:23
 * @LastEditTime: 2021-07-08 16:21:48
 * @info: 描述
-->
<template>
  <div>
    <nuxt-link to="/about">去 about 页面 {{ about }}</nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { mapGetters, mapMutations } from "vuex";
export default Vue.extend({
  computed: {
    about() {
      return this.$store.state.about ? this.$store.state.about.list.length : 1;
    }
  },
  created() {
    console.log(axios)
  }
});
</script>
