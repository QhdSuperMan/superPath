<template>
	<span>
    {{ fatherPros }}
		<Button type='primary' @click="$emit('sonAction')">{{ msg }}</Button>
	</span>
</template>

<script>
	import { Button } from "element-ui";
	export default {
    name: 'Buttoner',
    props: ['fatherPros'],
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