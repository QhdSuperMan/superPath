<!--
 * @Description: 
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-02-23 15:45:07
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-02-28 17:41:58
-->
<script setup lang="tsx">
import { reactive, ref } from 'vue';
let table = ref(null)

const tableData: Array<any> = reactive(new Array(10).fill('').map((val, index) => {
	return {
		id: index,
		val: index
	}
}))

const column: Array<unknown> = reactive([
	{
		label: '你好',
		prop: "val"
	},
	{
		label: '你好',
		prop: "val",
		customRender: (a: any) => {
			console.log('a: ', a);
			return (<el-button>哈哈</el-button>)
		},
		customHeaderRender: () => {
			return (<el-button>哈哈</el-button>)
		}
	},
	{
		label: '你好',
		prop: "val",
		
	}
])


</script>

<template>
	<div class="table">
		<CustomTable :data="tableData" :column="column"></CustomTable>
	</div>
</template>

<style scoped lang="scss">
.table {
	height: 500px;
}
</style>
