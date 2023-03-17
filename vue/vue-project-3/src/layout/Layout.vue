<!--
 * @Description: 布局组件
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-03-07 15:19:07
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-03-16 14:28:37
-->
<script lang="ts">
import { defineComponent } from 'vue'
import HeaderComp from './components/HeaderComp.vue'
export default defineComponent({
  setup() {

    return {

    }
  },
  components: {
    HeaderComp
  }
})
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <HeaderComp />
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss"></style>