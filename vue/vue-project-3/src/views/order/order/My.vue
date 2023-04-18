<!--
 * @Description: 
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-03-17 14:10:05
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-04-11 16:18:02
-->
<script lang="ts">
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  setup() {
    const tableData: Array<unknown> = new Array(10).fill('').map((item, index) => {
      return {
        val: index
      }
    })
    const column: Array<GlobalColumnType> = reactive([
      {
        label: '你好',
        type: "selection",
        width: 100
      },
      {
        label: '你好100',
        prop: "val",
        width: 100
      },
      {
        label: '你好2',
        prop: "val",
        width: 100
      },
      {
        label: '你好3',
        prop: "val",
        width: 100
      }
    ])
    return {
      tableData,
      column,
    }
  }
})
</script>

<template>
  <div class="greetings">
    页面6
    <CustomTable :data="tableData" ref="table" :dataProxy="{ api: '11' }" :columns="column"></CustomTable>
  </div>
</template>

<style scoped lang="scss"></style>