<!--
 * @Description: 
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2022-11-20 14:36:29
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-01-12 23:34:09
-->
<template>
  <a-locale-provider :locale="locale">
    <div id="app">
      <router-view />
    </div>
  </a-locale-provider>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      locale: zhCN,
    };
  },
  created() {
    this.initRem();
    let vm = this
    window.addEventListener("resize", function () {
      vm.initRem();
    });
  },
  methods: {
    initRem() {
      window.innerWidth;
      /* 获取布局视口的宽度，也就是浏览器宽度*/
      let width = document.documentElement.clientWidth;
      /* 经过换算，动态计算不同设备的font-size值  */
      if (width < 1000) {
        let font_size = width / (750 / 100)
        document.documentElement.style.fontSize = font_size + "px";
        this.setDevice('h5')
      } else {
        document.documentElement.style.fontSize = "80px";
        this.setDevice('pc')
      }
    },
    ...mapMutations({
      setDevice: 'setDevice'
    })
  },
};
</script>


<style>
</style>
