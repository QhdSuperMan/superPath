<!--
 * @Description: 
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-02-23 15:45:07
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-02-24 17:03:39
-->
<script setup lang="ts">
import { useCounterStore }  from '@/stores/counter'
const store = useCounterStore()

const clickFunction = function () {
    console.log(111)
}

</script>

<template>
    <CustomTable></CustomTable>
    <div ></div>
    <button ref="outside">不触发</button>

    <button v-click-outside:outside="clickFunction">点击</button>
</template>

<style scoped>

</style>
