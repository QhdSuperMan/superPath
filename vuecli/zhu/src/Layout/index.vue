<template>
	<div class="app-wrapper">
		<el-container>
			<el-header>
				<headerComponent />
			</el-header>
			<el-container>
				<el-aside width='300px'>
					<Sidebar />
				</el-aside>

				<el-main style='padding: 0'>
					<TagsView />
					<AppMain />
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	import headerComponent from "./components/header";
	import AppMain from "./components/AppMain"; // 主要地方
	import Sidebar from "./components/Sidebar/"; // 侧边栏
	import TagsView from "./components/TagsView/";
	export default {
		name: "Layout",
		components: {
			headerComponent,
			AppMain,
			Sidebar,
			TagsView
		},
		methods: {
			handleClickOutside() {}
		}
	};
</script>

<style lang='less' >
	.app-wrapper,
	.el-aside,
	.el-container {
		height: 100%;
		overflow: hidden;
	}
	.el-aside {
		background-color: #1f2d3d;
	}
</style>
