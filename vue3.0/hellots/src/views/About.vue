<!--
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-03-05 10:59:39
 * @LastEditTime: 2021-03-05 18:13:43
 * @info: 描述
-->
<template>
	<div class="about">
		<el-input v-model="obj.id" @input="inputChange"></el-input>
		<p>
			{{obj.id }}
		</p>
		<p>
			obj.name:{{obj.name}}
		</p>
		<p>
			index:{{ index }}
		</p>
		<p>
			计算属性:{{ aDouble}}
		</p>
		<button @click="btnClick">点击</button>
	</div>
</template>

<script setup lang='ts' >
	import { reactive, onMounted, ref, unref, toRef, toRefs, customRef, computed, watch } from "vue";
	import { mapState } from 'vuex'
	console.log()

	const obj: Object = reactive({ id: 1, two: 4 });
	const index: Object = ref(1);
	const inputChange: Function = function () {
		console.log(obj)
	};
	const fooRef = toRefs(obj)
	// fooRef.value++
	// const stateAsRefs = toRefs(obj);
	function btnClick<T>(one: T): void {
		console.log(obj);
	}
	const aDouble = computed(() => {
		return '计算属性'
	})
	watch(obj, (newValue: any, oldValue: any) => {
		console.log(newValue, oldValue)
	})
	onMounted(() => {
		console.log('mounted')
	})
	function useDebouncedRef(value: any, delay = 200) {
		let timeout: any
		return customRef((track, trigger) => {
			return {
				get() {
					track()
					return value
				},
				set(newValue) {
					console.log(newValue)
					value = newValue
					trigger()
				}
			}
		})
	}
	const text = useDebouncedRef('hello')
</script>