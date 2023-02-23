<!--
 * @Description: 
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-02-23 15:45:07
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-02-23 17:24:25
-->
<script setup lang="ts">
import { useCounterStore }  from '@/stores/counter'
const store = useCounterStore()

</script>

<template>
    {{ store.count }}
    <button @click="store.increment">增加</button>

</template>

<style scoped>

</style>
