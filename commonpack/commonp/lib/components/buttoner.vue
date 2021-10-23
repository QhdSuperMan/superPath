<template>
	<span>
    buttoner
		<Button type='primary'>{{ msg }}</Button>
	</span>
</template>

<script>
	import { Button } from "element-ui";
	export default {
    name: 'Buttoner',
		data() {
			return {
				msg: "点击"
			};
		},
		components: {
			Button
		}
	};
</script>

<style>
</style>