/*
 * @Description:过滤器
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-01-29 22:11:58
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-01-31 20:04:23
 */
import Vue from "vue";

const filter = {
  money: (val) => {
    if (val === undefined) return ''
    return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },
};

/**
 * @description: 金钱计数法
 * @return {*}
 * @author: wuyurong
 */
Vue.filter("money", filter.money);

export default filter;
