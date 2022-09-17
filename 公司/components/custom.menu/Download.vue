<template>
  <div class="icon-wrap">
    <gkIcon code="&#xe7a8;" class="download-icon"></gkIcon>
    <QRCode type="download" class="qr-code" />
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
    & .download-icon {
      color: $blue;
    }

    & .qr-code {
      display: block;
    }
  }
}
.download-icon {
  position: relative;
  top: -7px;
  font-size: 20px;
  color: $black;
}

.qr-code {
  display: none;
  position: absolute;
  top: -97px;
  left: -167px;
}
</style>
