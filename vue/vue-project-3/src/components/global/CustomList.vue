<!--
 * @Description: 
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-03-17 14:10:05
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-04-18 17:31:05
-->
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {

    return {
      
    }
  }
})
</script>

<template>
  <div class="custom-list">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.custom-list {
  padding: 10px;
}
</style>