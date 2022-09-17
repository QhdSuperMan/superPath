<template>
  <div :class="$style['permissions']">
    <div :class="$style['container']">
      <img src="../../assets/img/report/permissions.png" alt="没有权限" />
      <p>{{tip}}</p>
    </div>
  </div>
</template>

<script>
import VueTypes from 'vue-types'
export default {
  name: 'permissions',
  props: {
    tip: VueTypes.string.def('当前账号未被授权查看该报告')
  }
}
</script>
<style lang="scss" module>
.permissions {
  @extend %center;
  flex-direction: column;
  width: 1000px; height: 590px;
  margin: 50px auto;
  box-shadow: 0px 5px 35px -5px rgba(206, 211, 226, 0.25);
  border-radius: 10px;

  & img {
    width: 86px; height: 62px;
    margin-bottom: 23px;
  }

  & p {
    @include lineFont(15);
    color: #8c8c8c;
  }

  @include mobileInner () {
    width: 100%;
  }

  @include mobileInner () {
    height: calc(100vh - 44px);
    margin-top: 0;
  }
}

.container {
  @extend %center;
  flex-direction: column;
  margin-top: -100px;

  @include mobileInner () {
    & p {
      width: 239px;
      margin: 0 auto;
      text-align: center;
      line-height: 1.5;
    }
  }
}
</style>
