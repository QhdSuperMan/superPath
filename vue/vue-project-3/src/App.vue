<!--
 * @Description: 
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-02-23 15:45:07
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-02-27 17:19:20
-->
<script setup lang="ts">
import { reactive, ref } from 'vue';
let table = ref(null)

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

let currentPage = ref<Number>(0)
let pageSize = ref<Number>(10)
function handleSizeChange () {

}

function handleCurrentChange () {
	
}
</script>

<template>
	<div class="table">
		<CustomTable :data="tableData" :column="column"></CustomTable>
		<el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :page-sizes="[100, 200, 300, 400]"
			layout="total, sizes, prev, pager, next, jumper" :total="400" @size-change="handleSizeChange"
			@current-change="handleCurrentChange" />
	</div>
</template>

<style scoped lang="scss">
.table {
	height: 500px;
}
</style>
