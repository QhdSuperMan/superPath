<!--
 * @Author: 吴玉荣
 * @LastEditors: Please set LastEditors
 * @Date: 2021-03-09 10:37:52
 * @LastEditTime: 2021-07-06 00:02:24
 * @info: 描述
-->
<template>
  <div>
    <headCompents />
    <div>
      <el-container>
        <asideCompents style="width: 200px" />
        <el-main class="main">
          <keep-alive include="roleList">
            <router-view v-slot='{ Component }'>
              <transition name="fade-transform" mode="out-in">
                <component :is="Component" />
              </transition>
            </router-view>
          </keep-alive>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script lang="ts" setup>
// @ts-nocheck
import { ref, reactive } from "vue";
import headCompents from "./header/header.vue";
import asideCompents from "./nav/nav.vue";
import { defineComponent } from "vue";
const show: Boolean = ref(true);
defineComponent({
  components: {
    headCompents,
    asideCompents,
  },
});
const beforeEnter = (val) => {
  console.log("触发过渡");
};
</script>

<style scoped>
.main {
  overflow: hidden;
}
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>