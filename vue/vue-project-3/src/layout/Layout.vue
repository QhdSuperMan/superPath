<!--
 * @Description: 布局组件
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-03-07 15:19:07
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-04-11 10:14:33
-->
<script lang="ts">
import { defineComponent } from 'vue'
import TabsComp from './components/TabsComp.vue'
import HeaderComp from './components/HeaderComp.vue'
import AsideComp from './components/AsideComp.vue'
export default defineComponent({
  setup() {

    return {

    }
  },
  components: {
    HeaderComp,
    AsideComp,
    TabsComp
  }
})
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <HeaderComp />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <AsideComp />
        </el-aside>
        <el-main>
          <TabsComp />
          <div class="main-content">
            <router-view v-slot="{ Component }">
              <keep-alive>
                <component v-if="$route.meta.keepAlive" :is="Component" :key="$route.name"></component>
              </keep-alive>
              <component v-if="!$route.meta.keepAlive" :is="Component" :key="$route.name"></component>
            </router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.common-layout {
  :deep(.el-header) {
    padding: 0;
  }

  :deep(.el-main) {
    padding: 0;
  }

  .main-content {
    padding: 0px 20px 20px 20px;
  }
}
</style>