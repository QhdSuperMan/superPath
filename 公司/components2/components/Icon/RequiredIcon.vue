<!--
 * @Description: 必填图标
 * @Author: maowenhao 2862438628@qq.com
 * @Date: 2022-09-21 16:18:59
 * @LastEditors: maowenhao 2862438628@qq.com
 * @LastEditTime: 2022-09-22 16:29:40
-->

<template>
  <span class="required-icon">* </span>
</template>

<script>
export default {
  components: {},
  name: 'RequiredIcon',
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
.required-icon {
  display: inline-block;
  margin-right: 4px;
  color: #f5222d;
  font-size: 14px;
  font-family: SimSun, sans-serif;
  line-height: 1;
  // content: "*";
}
</style>