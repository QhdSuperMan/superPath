<!--
 * @Description: 通用按钮
 * @Author: maowenhao 2862438628@qq.com
 * @Date: 2022-07-20 15:28:03
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2022-11-09 18:47:01
-->
<!-- 按钮 -->
<template>
  <a-button
    type="primary"
    class="custom-button"
    :class="{
      'custom-button-fill': theme === 'fill',
      'custom-button-dashed': theme === 'dashed',
    }"
    :style="bgColor ? { background: `${bgColor}!important` } : {}"
    @click="$emit('click')"
  >
    <template>
      <span class="btn-content">
        <a-icon v-if="type === 'icon'" :type="url"></a-icon>
        <img v-if="type === 'img'" :src="url" alt="" class="btn-icon" />
        <span
          class="btn-text"
          :style="textColor ? { color: `${textColor}!important` } : {}"
          >{{ text }}</span
        >
      </span>
    </template>
  </a-button>
</template>

<script>
export default {
  components: {},
  name: "CustomButton",
  props: {
    // 背景色
    bgColor: { type: String },
    // 按钮主题
    theme: { default: "fill" },
    // 图标类型
    type: { default: "icon" },
    // 图标路径
    url: { type: String },
    // 按钮文本
    text: { type: String },
    // 文本颜色
    textColor: { type: String },
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
@import "@/base.scss";
.custom-button {
  padding: px2rem(10px) px2rem(25px);
  border-radius: 2px;
  height: px2rem(40px);
  line-height: 1;
  .btn-content {
    display: flex;
    align-items: center;
    .btn-icon {
      width: px2rem(16px);
      height: px2rem(16px);
      margin-right: 2px;
    }
    .btn-text {
      font-size: px2rem(16px);
      font-family: Microsoft YaHei, Microsoft YaHei-Regular;
      font-weight: 400;
      text-align: left;
    }
  }
}
.custom-button-fill {
  border: none;
  .btn-text {
    color: #ffffff;
  }
}
.custom-button-dashed {
  border: 1px solid #ececec !important;
  .btn-text {
    color: #878889 !important;
  }
}
</style>
