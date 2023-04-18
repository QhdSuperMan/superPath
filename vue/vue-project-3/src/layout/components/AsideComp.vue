<!--
 * @Date: 2023-03-16 10:26:47
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-03-24 18:57:43
-->
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import MenuItem from './MenuItem.vue';
import { useRouterStore } from "@/stores/router.js"
export default defineComponent({
  setup() {
    const routerStore = useRouterStore()
    const router = useRouter()
    const route = useRoute()
    const defaultActive = computed(() => route.path)
    return {
      menus: routerStore.menu,
      router,
      route,
      defaultActive,
    }
  },
  components: {
    MenuItem
  },
  methods: {
    select(index :string, indexPath: Array<string>) {
      console.log('index: ', index, indexPath);
      this.router.push(index)
    },
  }
})
</script>

<template>
  <div class="aside">
    <el-menu  @select="select" active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" :default-active="defaultActive"
      text-color="#fff" >
      <MenuItem v-for="(menu, key) in menus" :key="menu.path" :menu="menu" />
    </el-menu>
  </div>
</template>

<style scoped lang="scss">
.aside {
  height: calc(100vh - 60px);
  overflow-y: scroll;
  color: white;
  background-color: #545c64;

  &::-webkit-scrollbar {
    display: none;
    /* Chrome Safari */
  }
}
</style>