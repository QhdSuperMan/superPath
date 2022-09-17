<template>
  <div paper-item :class="$style['paper-item']" @click="routePaper">
    <span arrow :class="$style['arrow']"></span>
    <div :class="$style['paper-box']">
      <h4
        paper-name
        :class="$style['paper-name']"
      >
        {{info.name}} 
      </h4>      
      <h4 :class="$style['paper-name-title']" :data-status="info.statusLabel" :show-model="model">{{info.statusLabel}}</h4>
    </div>

    <div paper-info :class="$style['paper-info']">
      <p num-time :class="$style['num-time']">共 {{info.count}} 题 / 限时 {{secToMin(info.duration)}} 分钟</p>
      <!-- <div :class="$style['status']">{{info.statusLabel}}</div> -->
    </div>
  </div>
</template>

<script>
import VueTypes from 'vue-types'
// import { isWxTime } from '@/utils'
import { isInApp } from '@/sdk'
import { commonRoute } from '@/utils'
import { openInWebview } from '@/utils/appBridge'
import config from '@/config'
export default {
  name: 'paper-item',
  components: {
  },
  props: {
    info: VueTypes.object.def({}),
    model: VueTypes.string.def(''),
  },
  // computed: {
  //   isWxTime () {
  //     return isWxTime()
  //   }
  // },
  methods: {
    secToMin (sec){
      return Math.floor(sec / 60)
    },
    routePaper () {
      const host = config.zhijiHost
      const url = `${host}exam/index?id=${this.info.uuid || this.info.id}&source=enterprise`
      if (isInApp()) {
        // 跳转第三方链接
        // openInWebview(url, false, true)
        openInWebview(url, true, true) 
        return 
      }
      // window.open(url)
      commonRoute(url, true)
    }
  }
}
</script>
<style lang="scss" module>
.paper-item {
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%; height: 72px;
  // padding: 13px 40px 18px 20px;
  padding: 13px 0 18px;
  @extend %bottomLineBg;

  &:last-child:after {
    display: none;
  }

  @include mobileInner () {
    height: auto;
    min-height: 72px;
  }
}

.arrow {
  position: absolute; top: 50%; right: 0;
  width: 12px; height: 12px;
  background: url('../../assets/img/icon/icon-right.png') no-repeat center / 12px 12px;
  transform: translateY(-50%);
  
}

.paper-box {
  display: flex;
  align-items: center;
  height: 22px;
  line-height: 22px;
  @include font(15, 500);

  .paper-name {
    height: 22px;
    @include font(15, 500);
    line-height: 22px;
    cursor: pointer;
  }

  .paper-name-title {
    height: 16px;
    padding: 1px 5px; margin-left: 9px;
    background: $lightGray;
    border-radius: 4px;
    line-height: 16px;
    @include font(11, 500);

    @include mobileInner () {
      margin-left: -14px; padding: 9px 6px;
      height: 14px; line-height: 14px;
      font-size: 20px;
      border-radius: 6px;
      transform: scale(0.5);
    }

    &[data-status=已提交] {
      // color: $blue;
      &[show-model=pc] {
        color: $blue;
        background-color: $lightBlueBackground;
      }  

      &[show-model=wap] {
        color: #66CC00; 
        background-color:rgba(102,204,0,0.06);
      }  
    }
    
    &[data-status=无效作答] {
      background:rgba(243,103,73,0.1);
      color: $red;

      &[show-model=wap] {
        margin-left: -20px;
      }        
    }

    &[data-status=未提交] { 
      color: $subGray;

    }
  }
}

.paper-info {
  display: flex;
  justify-content: space-between;
  // margin-top: 10px;

  & .num-time,
  & .status {
    @include lineFont(12);
    color: $subGray;
  }

  @include mobileInner () {
    margin-top: 9px;
  }
}
</style>
