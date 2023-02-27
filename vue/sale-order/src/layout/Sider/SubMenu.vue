
<template functional>
  <a-sub-menu :key="props.menu.path">
    <span slot="title">
      <a-icon :type="props.menu.meta.icon || 'appstore'" /><span>{{
        props.menu.meta.title
      }}</span>
    </span>
    <template v-for="item in props.menu.children">
      <sub-menu
        v-if="item.children && item.children.length && !item.meta.hidden"
        :key="item.path"
        :menu="item"
        :itemClick="props.itemClick"
      />
      <a-menu-item
        v-else-if="!item.meta.hidden"
        :key="item.path"
        @click="props.itemClick(item)"
      >
        <a-icon :type="item.meta.icon || 'appstore'" />
        <span>{{ item.meta && item.meta.title }}</span>
      </a-menu-item>
    </template>
  </a-sub-menu>
</template>

<script>
export default {
  props: {
    menu: {
      type: Object,
      default: () => {},
    },
    itemClick: {
      type: Function,
      default: () => {},
    }
  },
};
</script>

<style>
</style>
