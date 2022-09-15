<template>
  <div :class="$style['footer-web']">
    <div :class="$style['footer-warp']">
      <div :class="$style['link-warp']">
        <div :class="$style['left']">
          <img src="../../assets/img/logo-normal.png" alt="" :class="$style['logo-img']" />

          <ul :class="$style['link-ul']">
            <li :key="index" v-for="(item, index) in navList">
              <span @click="handlerClick(item.to)">{{item.text}}</span>
            </li>
          </ul>
        </div>

        <div :class="$style['icon-warp']">
          <span :class="$style['link-we']">联系我们</span>

          <div :class="$style['operation-action']">
            <gkTooltip
              useScrollTop
              color="white"
              :top="-2"
              :arrow="false"
            >
              <img :src="require('../../assets/img/i.gif')" type="phone" />

              <template v-slot:content>
                <div :class="$style['popup-content']">
                  <p :class="$style['popup-title']">400-616-6206（茶茶）</p>
                  <p :class="$style['phone-time']">周一至周五 10:00-17:00</p>
                </div>
              </template>
            </gkTooltip>
          </div>

          <div :class="$style['operation-action']">
            <gkTooltip
              useScrollTop
              color="white"
              :top="-2"
              :arrow="false"
            >
              <img :src="require('../../assets/img/i.gif')" type="email" />

              <template v-slot:content>
                <div :class="$style['popup-content']">
                  <p :class="$style['popup-title']">EEservice@geekbang.org</p>
                </div>
              </template>
            </gkTooltip>
          </div>

          <div :class="$style['operation-action']">
            <gkTooltip
              useScrollTop
              color="white"
              :top="-2"
              :arrow="false"
            >
              <img :src="require('../../assets/img/i.gif')" type="wechat" />

              <template v-slot:content>
                <div :class="$style['wechat-popup-content']">
                  <div :class="$style['wechat-qrcode']">
                    <img :src="require('../../assets/img/contact-qrcode.png')" />
                  </div>

                  <p :class="$style['wechat-label']">周一至周五 10:00-17:00</p>
                </div>
              </template>
            </gkTooltip>
          </div>
        </div>
      </div>

      <div :class="$style['copyright']">
        <div>Copyright © {{ new Date().getFullYear() }}, 极客邦控股（北京）有限公司</div>
        <div :class="$style['bottom']">
          <a href="http://www.beian.miit.gov.cn" target="_blank">京 ICP 备 16027448号-3.</a>
          <a :class="$style['police']" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502037384" target="_blank">
            <img src="https://static001.geekbang.org/static/time/img/geek_elements/beian.png">
            京公网安备 11010502037384号
          </a>
          <a :class="$style['net']" href="https://static001.geekbang.org/resource/image/ab/7b/ab0fad9c05fc91d5b1819da6d449137b.jpg" target="_blank">京网文[2019]6009-706号</a>
          <a :class="$style['license']" href="https://time.geekbang.org/hybrid/certificates" target="_blank">证照中心</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// web端网页底部
import { computed } from 'vue'
import { gkTooltip } from '@geekbang/gkui'

export default {
  name: 'footer-web',
  components: {
    gkTooltip
  },
  setup (props, context) {
    const navList = computed(() => {
      return [
        {text: '企业版官网', to: 'https://b.geekbang.org/'},
        {text: '服务协议', to: 'https://account.geekbang.org/member/agreement'},
        {text: '隐私政策', to: 'https://account.geekbang.org/member/private'}
      ]
    })

    const handlerClick = (link) => {
      window.open(link, '_blank')
    }

    return {
      navList,
      handlerClick
    }
  }
}
</script>
<style lang="scss" module>
.footer-web {
  width: 100%;  height: 140px;
  margin-top: 30px;
  background: #fff;
}

.footer-warp {
  width: 1200px;
  margin: 0 auto;
  color: #7F848C;
}

.link-warp {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  padding: 30px 16px;
  line-height: 30px;
  border-bottom: 1px solid rgba(233, 234, 237, 0.5);
}

.left {
  display: flex;
  align-items: center;
}

.logo-img {
  display: block;
  width: 132px; height: 20px;
  margin-right: 46px;
}

.link-ul {
  display: flex;
  
  & li {
    margin-right: 30px;
    @include font(14, 500);
  }

  & span {
    &:hover {
      cursor: pointer;
      color: $blue;
      text-decoration: underline;
    }
  }
}

.link-we {
  @include font(14, 400);
}

.copyright {
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin: 16px auto;
  font-size: 12px;
  font-weight: 400;
  color: #B9BDC2;
  line-height: 18px;
}

.bottom {
  display: flex;
  margin-left: 14px;

  & a {
    text-decoration: none;
    font-size: 12px;
    font-weight: 400;
    color: #B9BDC2;
    line-height: 18px;
  }
}

.police {
  margin-left: 10px;
  display: flex;
  align-items: center;
}

.police img {
  width: 12px;
  height: 12px;
  vertical-align: text-top;
}

.net {
  margin-left: 10px;
}

.license {
  margin-left: 21px;
}

.icon-warp {
  display: flex;
}

.operation-action {
  width: 30px; height: 30px;
  margin-left: 14px;

  & > img {
    display: block;
    width: 30px; height: 30px;
    background-size: contain;

    &[type="phone"] {
      background-image: url('../../assets/img/footer.web/phone.png');

      &:hover {
        background-image: url('../../assets/img/footer.web/phone-hover.png');
      }
    }

    &[type="email"] {
      background-image: url('../../assets/img/footer.web/email.png');

      &:hover {
        background-image: url('../../assets/img/footer.web/email-hover.png');
      }
    }

    &[type="wechat"] {
      background-image: url('../../assets/img/footer.web/wechat.png');

      &:hover {
        background-image: url('../../assets/img/footer.web/wechat-hover.png');
      }
    }
  }
}

.popup-content {
  padding: 4px 2px;
}

.popup-title {
  height: 22px;
  line-height: 22px;
  @include font(16, 500);
  color: $black;
}

.phone-time {
  height: 20px;
  margin-top: 6px;
  line-height: 20px;
  text-align: center;
  @include font(14);
  color: #7F848C;
}

.wechat-popup-content {
  box-sizing: border-box;
  width: 193px; height: 132px;
  padding: 6px 11px;
}

.wechat-qrcode {
  box-sizing: border-box;
  @extend %center;
  width: 90px; height: 90px;
  margin: 0 auto;
  border: 1px solid #F1F3F7; border-radius: 4px;

  & img {
    display: block;
    width: 84px; height: 84px;
  }
}

.wechat-label {
  height: 20px;
  margin-top: 10px;
  line-height: 20px;
  text-align: center;
  @include font(14);
  color: $lightBlack;
}

</style>