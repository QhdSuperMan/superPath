<template>
  <div class="access-path">
    <div v-for="(val, index) in accessPathList" :key="val.path">
      {{ val.meta.title }}
      {{ index < accessPathList.length - 1 ? "--" : "" }}&nbsp;
    </div>
  </div>
</template>

<script>
export default {
  name: "AccessPath",
  data() {
    return {
      accessPathList: [],
    };
  },
  watch: {
    $route: {
      handler() {
        if (this.$route.meta) {
          this.accessPathList = this.$route.meta.sourceRoute;
        }
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.access-path {
  display: flex;
  align-items: center;
  // height: px2rem(85);
  padding: $mainContainerPadding;
  padding-top: px2rem(30);
  padding-bottom: px2rem(30);
  border-bottom: solid $LigntBgColor px2rem(2);
  background-color: white;
  font-size: px2rem(18);
  color: $LightFontColor;


  div:last-child {
    font-weight: bold;
    color: $darkFontColor;
  }
}
</style>