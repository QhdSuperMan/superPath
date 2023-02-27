<template>
  <div class="header">
    <div class="header-left">
      <a-tabs v-model="activeKey" @change="goTab">
        <a-tab-pane
          size="large"
          v-for="val in routes"
          v-if="!val.meta.hidden"
          :key="val.path"
          :tab="val.meta && val.meta.title"
        ></a-tab-pane>
      </a-tabs>
    </div>
    <div class="flex-align-center header-right">
      <div class="info flex-align-center">
        <img :src="userInfo.image_path" alt="" />
        <div>{{ userInfo.staff_name }} [{{ userInfo.role_name }}]</div>
      </div>

      <div class="flex-align-center header-icon">
        <a-icon type="logout" @click="logout" />
      </div>

      <div class="flex-align-center header-icon">
        <a-icon type="home" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

import { getActiveRoute, getActiveSourceDate } from "@/utils/route.js";
import { logout } from '@/utils/index'

export default {
  data() {
    return {
      activeKey: "",
      logout,
    };
  },
  computed: {
    ...mapGetters({
      routes: "getRoutes",
      userInfo: "getUserInfo",
    }),
  },
  methods: {
    goTab(route) {
      this.$router.push(route);
    },
    ...mapMutations({
      setSidebarMenu: "setSidebarMenu"
    })
  },
  created() {

    this.$watch(() => {
      return getActiveRoute(this.$route.path)
    }, ({ route }) => {
      this.activeKey = (route && route.path) || "/";
    }, {
      immediate: true
    })

    this.$watch(() => {
      return getActiveSourceDate(this.$route.path)
    }, newval => {
      if (newval) {
        this.setSidebarMenu(newval)
      }
    }, {
      immediate: true
    })
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  height: $headerHeight;
  padding: $mainContainerPadding;
  border-bottom: solid $LigntBgColor px2rem(2);
  background-color: white;

  ::v-deep .ant-logout-header {
    background-color: white;
  }
}

.header-left {
  ::v-deep .ant-tabs-bar {
    margin: 0px;

    .ant-tabs-tab {
      height: $headerHeight;
      padding-top: px2rem(69);
      font-size: px2rem(18);
      color: $LightFontColor;
    }

    .ant-tabs-tab-active {
      font-weight: bold;
      color: $darkFontColor;
      background-color: $LigntBgColor;
    }
  }
}

.header-right {
  > div {
    padding-top: px2rem(49);
  }
}

.info {
  margin-right: 45px;
  cursor: pointer;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 5px;
  }
}

.header-icon {
  height: 100%;
  padding: 0 20px;
  border-left: solid 1px $borderColor;
  i {
    font-size: 28px;
    color: #d1ddf5;
  }
}
</style>