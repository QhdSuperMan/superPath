<!--
 * @Description: 可折叠搜索框
 * @Author: maowenhao 2862438628@qq.com
 * @Date: 2022-09-21 16:18:59
 * @LastEditors: maowenhao 2862438628@qq.com
 * @LastEditTime: 2022-09-22 16:50:57
-->
 
<template>
  <div class="toggle-search-box mr30">
    <a-input
      :placeholder="placeholder"
      class="search-input"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <img
      src="@/assets/images/search.png"
      class="search-icon"
      alt=""
      @click="$emit('search')"
    />
  </div>
</template>

<script>
export default {
  components: {},
  name: 'SearchBox',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    // 搜索内容
    value: { default: '' },
    // 提示文字
    placeholder: { default: '' }
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
.toggle-search-box {
  display: flex;
  justify-content: center;
  position: relative;
  .search-input {
    width: px2rem(220px);
    height: px2rem(30px);
    padding: 2px 2px 2px px2rem(40px);
    font-weight: 400;
    font-style: normal;
    font-size: px2rem(13px);
    letter-spacing: normal;
    color: #8c8c8c;
    text-align: left;
    border-radius: px2rem(20px);
    text-transform: none;
    border: 1px solid rgba(140, 140, 140, 1) !important;
  }
  .search-icon {
    width: px2rem(24px);
    height: px2rem(24px);
    position: absolute;
    right: 0;
    background: #dad6d6;
    border-radius: 50%;
    top: 50%;
    transform: translate(0, -50%);
  }
  .search-input:hover .search-input:active,
  .search-input:focus {
    border: 1px solid rgba(0, 128, 128, 1) !important;
    outline: 0 !important;
  }
  .search-button {
    width: px2rem(75px);
    height: px2rem(32px);
    background-color: rgba(0, 128, 128, 1);
    font-size: px2rem(20px);
    border: none;
    border-radius: 0;
    margin-left: -1px;
  }
  .search-button:hover,
  .search-button:active,
  .search-button:focus {
    background: rgba(0, 128, 128, 0.8);
  }
}
</style>