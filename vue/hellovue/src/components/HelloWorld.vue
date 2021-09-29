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
	import { defineComponent, getCurrentInstance, defineProps } from 'vue'
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
