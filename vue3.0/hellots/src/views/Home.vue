<template>
	<div class="home">
		11
		<HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
	</div>
</template>

<script lang="ts" setup >
	import { defineComponent, getCurrentInstance } from 'vue'
	// import { Options, Vue } from 'vue-class-component';
	console.log(getCurrentInstance())
	// import HelloWorld from '@/components/HelloWorld.vue'
	// @Options({
	// 	components: {
	// 		HelloWorld
	// 	}
	// })
	// export default class Home extends Vue { }
	// defineComponent({
	// 	components: {
	// 		HelloWorld
	// 	}
	// })
</script>
