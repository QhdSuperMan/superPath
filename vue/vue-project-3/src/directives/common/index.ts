import type { VNode, DirectiveBinding } from "vue";
/*
 * @Description: 
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-02-24 16:13:03
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-02-24 18:11:58
 */

type aaa = {
  a: string
}

type test<T> = {
   readonly [P in keyof T]: T[P]
};

type ClickOutsideEl = test<aaa & {}>

export default {
  'click-outside': {
    mounted: function(el: ClickOutsideEl, binding: DirectiveBinding, vnode: VNode) {
      let context = vnode.ctx;
      let handle: Function;
      if (typeof binding.value === "function") {
        handle = binding.value;
      } else {
        handle = new Function(binding.value);
      }
      el.__click_outside__ = function(event :Event) {
        if (el.contains(event.target)) {
          return false;
        }
        if (
          binding.arg &&
          context.refs[binding.arg] &&
          context.refs[binding.arg].contains(event.target)
        ) {
          return false;
        }
        try {
          handle.call(context);
        } catch (error) {
          console.log(error);
        }
      };
  
      document.addEventListener("click", el.__click_outside__);
      // 当指令第一次绑定到元素时调用，常用来进行一些初始化设置
    },
    unmounted: function(el: Element) {
      document.removeEventListener("click", el.__click_outside__);
      delete el.__click_outside__;
    }
  }
}