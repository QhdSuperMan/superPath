<template>
  <div class="sider">
    <a-layout-sider>
      <div class="logo"></div>
      <div class="sider-menu">
        <a-menu
          mode="inline"
          :openKeys="openKeys"
          :selectedKeys="selectedKeys"
          @openChange="(val) => (openKeys = val)"
        >
          <template v-for="item in getSidebarMenu.children">
            <template v-if="!item.meta.hidden">
              <a-menu-item
                v-if="
                  !item.children ||
                  (item.children && item.children.length === 0)
                "
                :key="item.path"
                @click="jump(item.routePath)"
              >
                <a-icon :type="item.meta.icon || 'appstore'" />
                <span>{{ item.meta && item.meta.title }}</span>
              </a-menu-item>
              <sub-menu
                v-else
                :key="item.path"
                :menu="item"
                :itemClick="(item) => jump(item.routePath)"
              />
            </template>
          </template>
        </a-menu>
      </div>
    </a-layout-sider>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SubMenu from "./SubMenu.vue";


export default {
  data() {
    return {
      openKeys: [],
      selectedKeys: [],
      menu: [],
    };
  },
  components: {
    SubMenu,
  },
  computed: {
    ...mapGetters({
      getSidebarMenu: 'getSidebarMenu'
    })
  },
  watch: {
    $route: {
      handler() {
        let result = [];
        if (this.$route.meta) {
          result = this.$route.meta.sourceRoute.map((val) => val.path);
        }
        this.openKeys = result.slice(1, -1);
        this.selectedKeys = result.slice(-1);
      },
      immediate: true,
    },
  },

  methods: {
    jump(path) {
      if (this.$route.fullPath !== path) {
        this.$router.push(path);
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.sider {
  background: linear-gradient(0deg, #26e0e9 0%, #5e86f7 100%);
  color: white;
  ::v-deep .ant-menu {
    background-color: transparent;
    color: $moreLightFontColor;

    .ant-layout-sider {
      background-color: transparent;
    }

    .ant-menu-submenu-title,
    .ant-menu-submenu-arrow {
      border-color: white;
      color: white;
    }

    .ant-menu-item {
      margin: 0;
      color: white;
    }

    .ant-menu-item-selected {
      background-color: #6cbcf4;
    }
  }
  ::v-deep .ant-layout-sider {
    background-color: transparent;
  }
}

.logo {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: $headerHeight;
  // border-bottom: solid $LigntBgColor px2rem(2);
  font-size: px2rem(30);
  font-weight: bold;

  img {
    width: px2rem(20);
    height: px2rem(20);
  }
}
</style>