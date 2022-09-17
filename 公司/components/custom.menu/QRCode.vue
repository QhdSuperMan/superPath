<template>
  <div class="qr-code">
    <div class="qr-warp">
      <gkImage :src="imgSrc" class="code-img" />
    </div>
    <div class="desc">{{desc}}</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { gkImage } from '@geekbang/gkui'

import serviceImage from '@/assets/img/home/service.png'
import downloadImage from '@/assets/img/home/download.png'

const props = defineProps({
  type: {
    type: String,
    default: 'service' // service 客户服务、 download
  }
})

const imgSrc = computed(() => {
  return props.type === 'service' ? serviceImage : downloadImage
})

const desc = computed(() => {
  return props.type === 'service' ? '添加课程顾问' : '扫码下载app'
})
</script>

<style scoped lang="scss">
.qr-code {
  box-sizing: border-box;
  width: 136px;
  height: 160px;
  padding: 16px 16px 0 16px;
  background-color: $white;
  border-radius: 6px;
  box-shadow: 0px 0px 12px 4px rgba(238, 242, 245, 0.5);
}

.desc {
  margin-top: 8px;
  line-height: 20px;
  font-size: 14px;
  font-weight: 500;
  color: $black;
  text-align: center;
}

.qr-warp {
  box-sizing: border-box;
  @extend %center;
  width: 104px; height: 104px;
  margin: 0 auto;
  border: 1px solid #F1F3F7;
  border-radius: 4px;

  & .code-img {
    display: block;
    width: 94px; height: 94px;
    margin: auto;
  }
}
</style>
