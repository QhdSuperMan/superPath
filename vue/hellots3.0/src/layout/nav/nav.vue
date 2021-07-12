<!--
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-03-30 16:56:33
 * @LastEditTime: 2021-04-09 16:45:58
 * @info: 描述
-->
<template>
  <div>
    <el-menu :default-active="activeIndex" router class="el-menu-demo" >
      <navItem :routerBox='routerBox' />
    </el-menu>
  </div>
</template>

<script lang="ts" setup >
import { computed, getCurrentInstance, watch, ref, defineComponent } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import navItem from "./nav-item.vue";
const store = useStore();
const routerBox = computed(() => store.getters.getRouters);
const route = useRoute();
const activeIndex = ref("1");
watch(
  route,
  newVal => {
    activeIndex.value = newVal.path;
  },
  { immediate: true }
);
defineComponent({
  components: {
    navItem
  }
});
</script>


<style scoped lang='less'>
</style>