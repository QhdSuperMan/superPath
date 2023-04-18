<!--
 * @Description: 
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-03-17 14:10:05
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-03-25 17:14:47
-->
<script lang="ts">
import { defineComponent, reactive, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    type TabType = {
      title: any,
      path: string  | undefined,
      fullPath: string  | undefined,
    }

    const router = useRouter()
    const route = useRoute()
    console.log('route: ', route);

    const tabsValue = ref<string | number | undefined>('')
    const routeBox: Array<TabType> = reactive([])
      // tabs 修改
    function tabClick (pane: any) {
      router.push(pane.paneName)
    }

    watch(() => route, (newVal => {
      console.log('newVal: ', newVal);
      let index = routeBox.findIndex(val => val.path === newVal.path)
      let routeObj = {
        path: newVal.path,
        title: newVal.meta.title,
        fullPath: newVal.fullPath,
      }
      tabsValue.value = newVal.fullPath
      if (index !== -1) {
        routeBox.splice(index, 1, routeObj)
      } else {
        routeBox.push(routeObj)
      }
    }), {immediate: true,deep: true})

    return {
      routeBox,
      tabsValue,
      tabClick
    }
  }
})
</script>

<template>
  <div class="tabs">
    <el-tabs v-model="tabsValue" type="card"  @tab-click="tabClick">
      <el-tab-pane v-for="item in routeBox" :key="item.fullPath" :label="item.title" :name="item.fullPath"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped lang="scss">
.tabs {
  width: 100%;
}
</style>