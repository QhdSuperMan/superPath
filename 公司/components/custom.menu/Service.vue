<template>
  <div class="icon-wrap">
    <gkIcon code="&#xe751;" class="service-icon"></gkIcon>
    <QRCode type="service" class="qr-code" />
  </div>
</template>

<script setup>
import { gkIcon } from '@geekbang/gkui'
import QRCode from './QRCode.vue'
</script>

<style scoped lang="scss">
.icon-wrap {
  position: relative;
  width: 20px;
  height: 20px;
  cursor: pointer;

  &:hover {
    & .service-icon {
      color: $blue;
    }

    & .qr-code {
      display: block;
    }
  }
}
.service-icon {
  position: relative;
  top: -7px;
  font-size: 20px;
  color: $black;
}

.qr-code {
  display: none;
  position: absolute;
  top: -43px;
  left: -167px;
  
}
</style>
