/*
 * @Description: table props文件
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-02-28 14:08:33
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-04-18 17:22:45
 */
import { definePropType } from '@/utils/ts/runtime.js'
import type { DelRequired } from '@/utils/ts/index.js'
import type { FormItemProps, FormProps, FormItemRule, RowProps } from 'element-plus'

const props = {
  formItems: { // 表格的列配置
    type: definePropType<Array<FormItemType>>(Array),
    default: () => []
  },
  rules: {
    type: definePropType<Array<CustomFormItemRule>>(Array),
    default: () => []
  },
  inline: {
    type: Boolean,
    default: true
  },
  span: { // 每行占据的份数  一行总共24份
    type: Number,
    default: 6
  },
  rowAttrs: {
    type: definePropType<Array<RowProps>>(Object),
    default: () => {
      return {
        gutter: 10
      }
    }
  }
}

// FormItem类型
export type FormItemType = DelRequired<Omit<FormItemProps, 'rules'>> & {
  slots?: {
    default?: (...arg: Array<unknown>) => JSX.Element,
    label?: (...arg: Array<unknown>) => JSX.Element,
    error?: (...arg: Array<unknown>) => JSX.Element,
  },
  span?: number, // 行内表单 每个表单占据的份数
  // is?: IsKeys // 封装通用组件
  is?: string // 可选为 全局组件 src/components/formComp文件夹内组件 基本dom元素  
  row?: Boolean, // 是否单独成行
  attrs?: { // is组件的attrs
    [K: string]: any
  },
  float?: 'right', // 可以浮动到右侧
  colAttrs?: {
    [K: string]: any
  },
  rowAttrs?: {
    [K: string]: any
  },
  rules?: Array<CustomFormItemRule>,
  formItemAttrs?: {
    [K: string]: any
  }
}  

// type IsKeys = keyof HTMLElementTagNameMap | 'el-input' | 'el-select'
// 
type PropsTypes = {
  formItems?: Array<FormItemType>,
  span?: number,
  rowAttrs?: RowProps
}

interface CustomFormItemRule extends Omit<FormItemRule, 'type'> {
  type: 'phone' | FormItemRule['type']
}

// type Z = A<O, 'type'>
// type O = {
//   type: 'string' | 'number' | 'boolean'
//   a: number
// }
// type A<T, K extends string | number | symbol> = T extends { [P in K]: infer O } ? O : never

// 检验规则类型
export type CustomFormProp = PropsTypes & DelRequired<FormProps>
export default props