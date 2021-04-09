<!--
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-03-30 19:15:07
 * @LastEditTime: 2021-04-09 17:49:58
 * @info: 描述
-->
<template>
  <transition name='fade-transform' mode='out-in'>
    <div>
      用户新增
    </div>
  </transition>
</template>

<script setup lang='ts'>
</script>

<style>
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