<template>
	<span>
    inputer111dsdsdsdds
		<Input v-model="msg" />
	</span>
</template>

<script>
	import { Input } from "element-ui";
	export default {
		name: "Inputer",
		data() {
			return {
				msg: ""
			};
		},
		components: {
			Input
		}
	};
</script>

<style>
</style>