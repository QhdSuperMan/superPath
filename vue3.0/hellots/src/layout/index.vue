<!--
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-03-09 10:37:52
 * @LastEditTime: 2021-04-09 17:59:50
 * @info: 描述
-->
<template>
  <div>
    <headCompents />
    <div>
      <el-container>
        <asideCompents style='width: 200px;' />
        <el-main class='main'>
          <router-view v-slot="{ Component }">
            <transition  name='fade-transform' mode='out-in'>
              <component :is="Component" />
            </transition>
          </router-view>
          
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script lang="ts" setup>
// @ts-nocheck
import { ref } from "vue";
import headCompents from "./header/header";
import asideCompents from "./nav/nav";
import { defineComponent } from "vue";
const show: Boolean = ref(true);
defineComponent({
  components: {
    headCompents,
    asideCompents
  }
});
const beforeEnter = val => {
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