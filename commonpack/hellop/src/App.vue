
<template>
	<div id="app">
		444
		<buttoner />
		<inputer></inputer>
	</div>
</template>

<script>
	import { buttoner, inputer } from "commonp";
	export default {
		name: "App",
		components: {
			buttoner,
			inputer
		},
		created() {
			console.log(buttoner);
		}
	};
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
