<!-- 布局组件 -->
<template>
  <div class="layout">
    <a-layout>
      <SiderComp />
      <a-layout>
        <HeaderComp />

        <AccessPath />

        <a-layout-content class="layout-contianer-content">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </a-layout-content>
      </a-layout>
    </a-layout>

    <CallPhone />
  </div>
</template>

<script>
import HeaderComp from "./header/Header.vue";
import SiderComp from "./Sider/Sider.vue";
import AccessPath from "./AccessPath.vue";
import CallPhone from './CallPhone.vue'
export default {
  components: {
    HeaderComp,
    SiderComp,
    AccessPath,
    CallPhone
  },
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;

  .layout-contianer-content {
    position: relative;
    padding: $mainContainerPadding;
    padding-bottom: px2rem(65);
    background-color: white;

  }
  ::v-deep .ant-layout {
    background-color: white;
  }
}
</style>