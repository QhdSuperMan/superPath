<!--
 * @Description: h5的头部
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-01-09 22:57:53
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-01-29 23:16:56
-->
<template>
  <div class="h5-header">
    <div class="h5-header-content">
      <div class="content-left">
        <a-icon type="left" />
      </div>
      <div class="content-main">{{ title }}</div>
      <div class="content-right"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.h5-header {
  position: relative;
  height: px2rem(68);

  .h5-header-content {
    box-sizing: border-box;
    position: fixed;
    top: 0;
    width: 100%;
    padding: 0 px2rem(10);
    line-height: px2rem(68);
    z-index: 1000;
    background-color: #edf2ff;
  }

  .content-left {
    float: left;
    color: $darkFontColor;
  }

  .content-main {
    text-align: center;
    font-size: px2rem(36);
    font-weight: bold;
    color: $darkFontColor;
  }
}
</style>