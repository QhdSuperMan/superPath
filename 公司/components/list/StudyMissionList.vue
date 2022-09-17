<!--
 * @Author: 于智诚
 * @Date: 2021-09-15 14:26:46
 * @LastEditors: 于智诚
 * @LastEditTime: 2021-09-28 18:30:34
 * @description: 文件描述
-->
<template>
  <div :class="$style['list-mission']">
    <StudyMissionItem
      :key="item.id + index"
      v-for="(item, index) in list"
      :useLock="useLock"
      :item="item"
    />
  </div>
</template>

<script>
import VueTypes from 'vue-types'
import StudyMissionItem from '../item/StudyMissionItem.vue'
export default {
  name: 'list-mission',
  components: {
    StudyMissionItem
  },
  props: {
    useLock: VueTypes.bool.def(false),
    list: VueTypes.array.def([]),
    isEnd: VueTypes.bool.def(false),
    loading: VueTypes.bool.def(false)
  }
}
</script>
<style lang="scss" module>
.list-mission {
  width: 100%;
}
</style>
