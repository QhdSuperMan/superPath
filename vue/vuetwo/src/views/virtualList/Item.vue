<!--
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-12-22 15:56:41
 * @LastEditTime: 2021-12-22 16:07:52
 * @info: 描述
-->
<template>
  <div>{{ index }} - {{ source.add_time }}</div>
</template>

<script>
export default {
  name: "item-component",
  props: {
    index: {
      // index of current item
      type: Number,
    },
    source: {
      // here is: {uid: 'unique_1', text: 'abc'}
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>