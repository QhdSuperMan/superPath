<!--
 * @Description: 
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-02-23 15:45:07
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-03-06 17:58:32
-->
<script setup lang="tsx">
import service from '@/utils/service'
import { reactive, ref } from 'vue';
console.log('service: ', service);
let table = ref<any>(null)

const tableData: Array<any> = reactive(new Array(10).fill('').map((val, index) => {
	return {
		id: index,
		val: index
	}
}))

const column: Array<GlobalColumnType> = reactive([
	{
		label: '你好',
		type: "selection",
		width: 10,
	},
	{
		label: '你好',
		prop: "val",
		align: 'right',
		width: 10,
	},
	{
		label: '你好',
		prop: "val",
		width: 10,
	},
	{
		label: '你好',
		prop: "val",
		width: 10,
	}
])

function test() {
	table.value.proxy('toggleAllSelection')
}


</script>

<template>
	<div class="table">
		<CustomTable :data="tableData" ref="table" :dataProxy="{ api: '1' }" :column="column"></CustomTable>
	</div>

	<div class="container">
		222sddsd
		<el-button @click="test">点击</el-button>
	</div>
</template> 

<style scoped lang="scss">
.table {
	height: 500px;
}

.container {
	color: $primaryColor;

}
</style>
