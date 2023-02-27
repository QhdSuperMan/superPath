import Vue from "vue";

// 全局组件
const components = require.context("@/components/global", true, /\.vue/);
components.keys().forEach((fileName) => {
  // 组件实例
  const reqCom = components(fileName);
  Vue.component(reqCom.default.name, reqCom.default);
});
