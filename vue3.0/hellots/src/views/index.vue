<!--
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-03-11 18:13:47
 * @LastEditTime: 2021-03-11 18:13:47
 * @info: 描述
-->
<template>
	<div>
		hell {{ msg }}
	</div>
</template>

<script lang="ts">
	export default {
		name: 'HelloWorld'
	}
</script>

<script setup='props' lang="ts">
	import { defineComponent, getCurrentInstance, defineProps, useContext } from 'vue'
	const ctx = useContext()
	console.log(getCurrentInstance())
	defineProps({
		msg: {
			type: String,
			default: '1'
		}
	})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h3 {
		margin: 40px 0 0;
	}
	ul {
		list-style-type: none;
		padding: 0;
	}
	li {
		display: inline-block;
		margin: 0 10px;
	}
	a {
		color: #42b983;
	}
</style>
