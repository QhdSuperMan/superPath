
<template>
	<div id="app">
		444
    <buttoner fatherPros='父亲组件的' @sonAction='sonAction' />
		<inputer></inputer>
	</div>
</template>

<script>
	import main,{inputer} from "npm-practice";
	export default {
		name: "App",
		components: {
			buttoner:main.buttoner,
			inputer
		},
		created() {
			console.log(main);
		},
    methods: {
      sonAction () {
        console.log('子组件的事件')
      }
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
