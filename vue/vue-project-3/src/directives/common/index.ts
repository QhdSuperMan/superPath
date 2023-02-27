/*
 * @Description: 顶级dom节点外触发
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-02-24 16:13:03
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-02-27 09:59:34
 */
import type { DirectiveBinding } from "vue";

type ClickOutsideEl = Element & { __click_outside__?: (event: Event) => any }

export default {
  'click-outside': {
    mounted: function (el: ClickOutsideEl, binding: DirectiveBinding, vnode: any) {
      let context = vnode.ctx;
      let handle: Function;
      if (typeof binding.value === "function") {
        handle = binding.value;
      } else {
        handle = new Function(binding.value);
      }
      el.__click_outside__ = function (event: Event) {
        if (el.contains(event.target as Node)) {
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
          console.log('click-outside指令报错',error);
        }
      };

      document.addEventListener("click", el.__click_outside__);
    },
    unmounted: function (el: ClickOutsideEl) {
      document.removeEventListener("click", el.__click_outside__ as (event: Event) => any);
      delete el.__click_outside__;
    }
  }
}