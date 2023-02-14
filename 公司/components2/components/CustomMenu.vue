<!-- 菜单组件 -->
<template>
  <div>
    <a-menu
      :mode="mode"
      @click="handleClick"
      :inline-collapsed="collapsed"
      :openKeys="copyOpenKeys"
      v-model="copySelectedKeys"
      @openChange="openChange"
      :inlineIndent="4"
    >
      <template v-for="item in menus">
        <template v-if="!(item.meta && item.meta.hidden)">
          <a-menu-item
            v-if="!item.children"
            :key="item.path"
            :path="item.path"
            @click="menuClick(item)"
          >
            {{ item && ((item.meta && item.meta.title) || item.title) }}
          </a-menu-item>
          <sub-menu
            :key="item.path"
            v-else
            :path="item.path"
            :menu-info="item"
            @titleClick="titleClick"
          />
        </template>
      </template>
    </a-menu>
  </div>
</template>

<script>
import { Menu } from "ant-design-vue";
const SubMenu = {
  template: `
      <a-sub-menu  v-if="!(menuInfo.meta&&menuInfo.meta.hidden)" :key="menuInfo.path" v-bind="$props" v-on="$listeners"  @titleClick="titleClick">
        <span slot="title">
       <a-icon type="mail" v-if="menuInfo.icon" />
      <span>{{ menuInfo&&(menuInfo.meta&&menuInfo.meta.title||menuInfo.title) }}</span>
        </span>
        <template v-for="item in menuInfo.children">
          <a-menu-item v-if="!(item.children||(item.meta&&item.meta.hidden))" :key="item.path" @click="subMenuClick(path,item)">
            <a-icon type="mail" v-if="item.icon" />
            <span>{{ item&&(item.meta&&item.meta.title||item.title) }}</span>
          </a-menu-item>
          <sub-menu v-else-if="!(!item.children||(item.meta&&item.meta.hidden))" :key="item.path" :path="path+'/'+item.path" :menu-info="item" />
        </template>
      </a-sub-menu>
    `,
  name: "SubMenu",
  // must add isSubMenu: true
  isSubMenu: true,
  props: {
    ...Menu.SubMenu.props,
    path: { default: "" },
    // Cannot overlap with properties within Menu.SubMenu.props
    menuInfo: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    /**
     * @description: 点击子菜单
     * @param {*} parentPath
     * @param {*} item
     * @return {*}
     * @author: maowenhao
     */
    subMenuClick(parentPath, item) {
      console.log("subMenuClick", parentPath, item);
      if (this.isFullPath) {
        this.$router.push(item.path)
      } else {

        this.$router.push({ name: item.name, query: item.query })//公用组件不同path,无法根据path跳转。
      }
    },
    /**
     * @description: 点击菜单标题
     * @param {*} e
     * @return {*}
     * @author: maowenhao
     */
    titleClick(e) {
      console.log("titleClick", e);
      this.$emit("titleClick", e);
    }
  }
};
export default {
  props: {
    menus: {//菜单
      default: () => {
        return [];
      }
    },
    mode: { default: "inline" },//菜单模式
    openKeys: { default: () => { return [] } },//展开key
    selectedKeys: { default: () => { return [] } },//选中key
    isFullPath: { default: false },//是否全路径
  },
  computed: {
  },
  components: {
    "sub-menu": SubMenu
  },
  data() {
    return {
      defaultKeys: [],//默认key
      collapsed: false,//是否折叠
      copyOpenKeys: [],//备份展开key
      copySelectedKeys: []//备份选中key
    };
  },
  watch: {
    $route(val) {
      console.log("watch route", val);
      this.copySelectedKeys = [val.path]
    },
    menus() {
      this.openFarther()
    },
    openKeys(val) {
      console.log("watch openKeys", val);
      this.copyOpenKeys = [...val];
    },
    copyOpenKeys(val) {
      console.log("watch copyOpenKeys", val);
    },
    selectedKeys(val) {
      console.log("watch selectedKeys", val);
      this.copySelectedKeys = [...val];
    }
  },
  mounted() {
    console.log('custommenu mounted! menus:', this.menus, 'openKeys:', this.openKeys, "menus:", this.menus, "selectedKeys:", this.selectedKeys, "defaultKeys:", this.defaultKeys, "当前route:", this.$route.path)
    // 默认key为第一个菜单
    this.defaultKeys = [this.menus && this.menus[0] && this.menus[0].name || '']
    // 根据路由设置选中的菜单
    this.copySelectedKeys = [this.$route.path]
  },
  methods: {
    // 展开父节点
    openFarther() {
      let result = []
      this.openFartherAction(this.menus, result)
      this.copyOpenKeys = result
    },
    openFartherAction(menus, arr) {
      if (Array.isArray(menus)) {
        for (let i = 0; i < menus.length; i++) {
          let item = menus[i]
          if (Array.isArray(item.children) && this.openFartherAction(item.children, arr)) {
            arr.push(item.path)
            return true
          } else if (this.copySelectedKeys.includes(item.path)) {
            return true
          }
        }
      }
    },
    /**
     * @description:展开折叠
     * @return {*}
     * @author: maowenhao
     */
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    /**
     * @description: 折叠展开变化
     * @param {*} e
     * @return {*}
     * @author: maowenhao
     */
    openChange(e) {
      console.log("openChange", e);
      this.copyOpenKeys = e;
    },
    /**
     * @description: 点击菜单项
     * @param {*} e
     * @return {*}
     * @author: maowenhao
     */
    titleClick(e) {
      console.log("customMenu titleClick", e);
    },
    /**
     * @description: 点击菜单项
     * @param {*} item
     * @return {*}
     * @author: maowenhao
     */
    menuClick(item) {
      console.log("menuClick", item);
      if (this.isFullPath) {
        this.$router.push(item.path)
      } else {

        this.$router.push({ name: item.name, query: item.query })//公用组件不同path,无法根据path跳转。
      }
    },
    /**
     * @description: 点击菜单
     * @param {*} e
     * @return {*}
     * @author: maowenhao
     */
    handleClick(e) {
      console.log("click", e);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/base.scss";
/deep/ .ant-menu {
  width: 100%;
  font-size: px2rem(16px);
  background-color: $menu-bg-green !important;
  color: $menu-text !important;
  .ant-menu-submenu,
  .ant-menu-item {
    background-color: $menu-bg-green !important;
    color: $menu-text !important;
  }
  .ant-menu-item,
  .ant-menu-submenu .ant-menu-submenu-title {
    font-size: px2rem(16px);
    // text-align: left !important;
  }
  // 解决最后一个submenu不对齐问题
  /* .ant-menu-submenu:last-child .ant-menu-submenu-title {
    padding: 0 16px 0 24px;
  } */
  // 左右菜单项边距
  .ant-menu-submenu .ant-menu-submenu-title {
    padding: 0 4px !important;
  }

  .ant-menu-item {
    padding: 0 4px !important;
  }
  // 设置菜单标题和箭头颜色
  .ant-menu-submenu .ant-menu-submenu-title {
    background-color: $menu-bg-green !important;
    color: $menu-text !important;
    .ant-menu-submenu-arrow {
      ::before,
      ::after {
        background: $menu-text !important;
      }
    }
  }
  .ant-menu-submenu-active,
  .ant-menu-item-selected,
  .ant-menu-item-active {
    background-color: $menu-item-bg !important;
    color: $menu-text-selected !important;
  }
  .ant-menu-item-selected::after {
    border-right: 3px solid $menu-text-selected !important;
  }

  .ant-menu-submenu-active > .ant-menu-submenu-title {
    background-color: $menu-item-bg !important;
    color: $menu-text-selected !important;
    .ant-menu-submenu-arrow {
      &::before,
      &::after {
        background: $menu-text-selected !important;
      }
    }
  }
}
</style>
