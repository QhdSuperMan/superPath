<template>
	<div v-if="!item.hidden">
		<template v-if='isBtn(item)'>
			<el-menu-item :index="item.path">
				<span style="margin-left: 30px;">{{ item.name }} </span>
			</el-menu-item>
		</template>
		<el-submenu v-else ref="subMenu" :index="item.id" popper-append-to-body>
			<template slot="title">
				<span>{{ item.name }} </span>
			</template>
			<sidebar-item v-for="child in item.children" :key="child.path" :item="child" />
		</el-submenu>
	</div>
</template>

<script>
	import path from "path";

	export default {
		name: "SidebarItem",
		props: {
			// route object
			item: {
				type: Object,
				required: true
			}
		},
		data() {
			// To fix https://github.com/PanJiaChen/vue-admin-template/issues/237
			// TODO: refactor with render function
			this.onlyOneChild = null;
			return {};
		},
		methods: {
      isBtn (item) {
        if (!item.children.length || (item.children[0] && item.children[0].page === 'false')) {
          return true
        }
      }
		}
	};
</script>
