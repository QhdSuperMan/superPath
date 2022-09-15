<!--
 * @Author: 于智诚
 * @Date: 2021-09-18 15:35:21
 * @LastEditors: 于智诚
 * @LastEditTime: 2021-10-22 14:26:07
 * @description: 文件描述
-->
<template>
  <div :class="$style['list-mission']">
    <StudyMissionItem
      :key="item + index"
      v-for="(item, index) in list"
      :useLock="useLock"
      :item="item"
    />
  </div>
</template>
<script>
import VueTypes from 'vue-types'
import StudyMissionItem from '../item/StudyMissionItemPc.vue'
export default {
  name: 'list-pc',
  components: {
    StudyMissionItem
  },
  props: {
    useLock: VueTypes.bool.def(false),
    list: VueTypes.array.def([]),
    isEnd: VueTypes.bool.def(false),
    loading: VueTypes.bool.def(false)
  },
}
</script>
<style lang="scss" module>
  .list-mission{
    display:flex; flex-wrap: wrap;
    // margin-top: 10px;
    width: 100%;
}
</style>
