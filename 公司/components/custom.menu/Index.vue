<template>
  <div class="custom-menu">
    <Service />
    <div class="line"></div>
    <Download />
  </div>
</template>

<script setup>
import Download from './Download.vue'
import Service from './Service.vue'

</script>

<style scoped lang="scss">
.custom-menu {
  box-sizing: border-box;
  position: fixed; top: 443px; right: 22px; z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 50px; height: 121px;
  padding: 22px 0;
  // background: $lightGray;
  background: linear-gradient(180deg, #F6F7FB 0%, #FCFCFD 100%);
  border-radius: 23px;
  border: 2px solid $white;
}

.line {
  width: 24px; height: 1px;
  background: #E9EAED;
}
</style>
