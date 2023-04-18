<!--
 * @Description: 
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-03-17 14:10:05
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-03-23 17:10:43
-->
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'MenuItem',
  props: {
    menu: {
      type: Object,
      default: () => { }
    }
  },
  setup() {

    return {

    }
  }
})
</script>

<template>
  <el-sub-menu v-if="menu.children?.length" :index="menu.path">
    <template #title>
      <el-icon><Menu /></el-icon>
      <span>{{ menu.meta.title }}</span>
    </template>
    <MenuItem v-for="(item, key) in menu.children" :key="item.path" :menu="item" />
  </el-sub-menu>
  <el-menu-item v-else :index="menu.path">
    <el-icon><Histogram /></el-icon>{{ menu.meta.title }}
  </el-menu-item>
</template>

<style scoped lang="scss">
.menu-item {}
</style>