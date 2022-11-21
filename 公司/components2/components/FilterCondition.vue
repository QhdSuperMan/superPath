<!--
 * @Description: 服务目录顶部筛选条件
 * @Author: maowenhao 2862438628@qq.com
 * @Date: 2022-09-21 16:18:59
 * @LastEditors: maowenhao 2862438628@qq.com
 * @LastEditTime: 2022-09-22 16:40:44
-->

<template>
  <div class="filter-condition">
    <div
      class="filter-condition-item"
      v-for="(filterItem, index) of filterData"
      :key="index"
    >
      <span class="label">{{ filterItem.value }}:</span>
      <span class="value-list">
        <span
          v-for="(item, pos) of filterItem.dataList"
          :key="pos"
          class="value-item"
        >
          <span v-if="filterItem.widgetType === 'label'">
            {{ item.value }}
          </span>
          <span v-if="filterItem.widgetType === 'date-range'">
            <a-range-picker />
          </span>
        </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: 'FilterCondition',
  props: {
    // 过滤条件数据
    filterData: { default: () => ([]) }
  },
  data() {
    return {

    };
  },
  computed: {},
  watch: {},
  methods: {

  },
  created() {

  },
  mounted() {

  },
}
</script>
<style lang='scss' scoped>
@import "@/base.scss";
.filter-condition {
  background-color: white;
  &-item {
    display: flex;
    text-align: left;
    height: px2rem(40px);
    line-height: px2rem(40px);
    &:not(:last-child) {
      border-bottom: 1px solid;
    }
    .label {
      display: inline-block;
      margin-right: px2rem(20px);
      font-weight: bold;
    }
    .value-list {
      flex: 1;
      .value-item {
        display: inline-block;
        margin-right: px2rem(10px);
      }
    }
  }
}
</style>