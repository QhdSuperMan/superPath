<!--
 * @Description: 
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-02-23 15:45:07
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-02-27 14:52:45
-->
<script setup lang="ts">
import { reactive } from 'vue';


const tableData: Array<any> = reactive(new Array(10).fill('').map((val, index) => {
	return {
		id: index,
		val: index
	}
}))

const column: Array<any> = reactive(new Array(10).fill('').map((val, index) => {
	return {
		label: '你好' + index,
		prop: "val"
	}
}))


const clickFunction = function () {
	console.log(111)
}

</script>

<template>
	<div class="table">
		<CustomTable :data="tableData" :column="column"></CustomTable>
	</div>
	<div></div>
	<button ref="outside">不触发</button>

	<button v-click-outside:outside="clickFunction">点击</button>
</template>

<style scoped lang="scss">
.table {
	height: 500px;
}
</style>
