
<template>
	<h1>{{ msg }}</h1>
	<span class="text">这是css变量</span>
	<button @click="color = color === 'green' ? 'red' : 'green'">点击 </button>
</template>
<script setup>
	import { ref, reactive } from "vue";
	const color = ref("red");
	defineProps({
		msg: String,
	});

	const count = ref(0);
</script>

<style scoped>
	a {
		color: #42b983;
	}
	.text {
		color: v-bind(color);
	}
</style>
