/*
 * @Description: 
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-04-11 10:29:20
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-04-18 17:24:13
 */
import { defineAsyncComponent } from 'vue';
import { computed } from 'vue'
import { defaultObj } from '@/utils/customValidator.js'
import { filterObj } from '@/utils/index.js'
import type { FormItemType } from './props.js'

// 处理表单布局
function dealLayout(formItems: Array<FormItemType>, props: ObjectType, attrs: ObjectType) {
  let result: Array<any> = []
  let prev: boolean = false
  let totalSpan: number = 0
  formItems.forEach((item, index) => {

    let row = Object.assign({}, props.rowAttrs, item.rowAttrs)

    if (props.inline) { // 行内布局
      if (index === 0 || item.row || prev) {
        result.push({
          rowAttrs: row,
          children: []
        })
        totalSpan = 0
        if (prev) {
          prev = false
        }
        if (item.row) {
          prev = true
        }
      }

      totalSpan += item?.colAttrs?.span || 0
      // 浮动布局
      if (item.float === 'right') {
        let restSpan = 24 - (totalSpan % 24)
        if (restSpan > 0 && restSpan < 24) {
          result[result.length - 1].children.push({
            is: 'span',
            colAttrs: {
              span: 24 - (totalSpan % 24)
            },
            
            props: 'span' + item.prop + index // 不重复即可
          })
        }
      } 
    } else {
      result.push({
        rowAttrs: row,
        children: []
      })
    }

    result[result.length - 1].children.push(item)
  })
  return result
}
/**
 * @description: 获取 formItems 配置
 * @param {any} formItemss
 * @return {*}
 * @author: wuyurong
 */
export function useFormItems(formItems: Array<FormItemType>, props: ObjectType, attrs: ObjectType) {
  return computed(() => {
    let dealformItems = formItems.map(item => {
      let result = {
        ...item,
        rules: item.rules ? dealRule(item.rules) : null,
        formItemAttrs: filterObj(item, ['prop', 'label', 'label-width', 'required', 'rules', 'error', 'show-message', 'inline-message', 'size', 'for', 'validate-status']),
        colAttrs: Object.assign({}, item.attrs, {
          span: item.span || props.span
        }),
        attrs: Object.assign({}, item.attrs, {
          props: item.prop
        })
      }
      return result
    })
    return dealLayout((dealformItems), props, attrs)
  })
}
// 处理校验规则
function dealRule(rules: ObjectType, formItem: ObjectType = {}): any {
  if (Array.isArray(rules)) {
    return rules.map((rule) => dealRule(rule, formItem));
  } else if (typeof rules === "object") {
    rules.trigger = rules.trigger || "blur"
    if (rules.required) {
      rules.message = rules.message || `${formItem.label}必填 !`;
    }

    let type = rules.type || rules.customType
    if ((defaultObj as ObjectType)[type]) {
      // 自定义校验规则
      rules.validator = (defaultObj as ObjectType)[type];
      rules.customType = type
      delete rules.type;
    }
    return rules;
  }
}

/**
 * @description: 处理rules
 * @param {any} rules
 * @return {*}
 * @author: wuyurong
 */
export function useRules(rules: ObjectType, formItems: Array<FormItemType>) {
  return computed(() => {
    let result: ObjectType = {}

    for (const key in rules) {
      result[key] = dealRule(rules[key], formItems.find(item => item.prop === key))
    }

    return result
  })
}


const components = import.meta.glob('@/components/formComp/*.vue');
export function useComponents() {
  let result: ObjectType = {}
  for (const [key, value] of Object.entries(components)) {
    const name = key.slice(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));
    result[name] = defineAsyncComponent<any>(value)
  }
  return result
}