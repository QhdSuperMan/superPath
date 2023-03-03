<!--
 * @Description: 
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-02-23 15:45:07
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-03-03 17:59:48
-->
<script setup lang="tsx">
import { reactive, ref } from 'vue';
let table = ref<any>(null)

const tableData: Array<any> = reactive(new Array(10).fill('').map((val, index) => {
	return {
		id: index,
		val: index
	}
}))

const column: Array<any> = reactive([
	{
		label: '你好',
		type: "selection",
	},
	{
		label: '你好',
		prop: "val",
		align: 'right',
	},
	{
		label: '你好',
		prop: "val",
	},
	{
		label: '你好',
		prop: "val",

	}
])

let a:HaHa = 1
function test() {
	table.value.proxy('toggleAllSelection')
}


</script>

<template>
	<div class="table">
		<CustomTable :data="tableData" ref="table" :dataProxy="{ api: '1' }" :column="column"></CustomTable>
	</div>

	<el-button @click="test">点击</el-button>
</template> 

<style scoped lang="scss">
.table {
	height: 500px;
}
</style>
