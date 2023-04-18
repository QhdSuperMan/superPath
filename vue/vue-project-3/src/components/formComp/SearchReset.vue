<!--
 * @Description: 
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-03-17 14:10:05
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-04-18 17:25:37
-->
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup(props, {emit}) {
    return {
      search () {
        emit('search')
      },
      reset () {
        emit('reset')
      },
    }
  }
})
</script>

<template>
  <div class="search-reset">
    <el-button type="primary" @click="search">查询</el-button>
    <el-button @click="reset">重置</el-button>
  </div>
</template>

<style scoped lang="scss">

.search-reset {
  width: 100%;
  text-align: right;
}
</style>