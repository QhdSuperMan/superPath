<!--
 * @Description: 
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-01-09 22:55:01
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-01-29 23:21:28
-->
<template>
  <div class="h5-layout">
    <div class="h5-layout-container">
      <!-- <H5Header :title="$route?.meta?.title" /> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import H5Header from '@/layout/h5/Header.vue'

export default {
  components: {
    H5Header
  }
}
</script>

<style lang="scss" scoped>
.h5-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .h5-layout-container {
    flex: 1;
    background: linear-gradient(0deg, #f9f9f9 0%, #edf2ff 100%);
  }
}
</style>