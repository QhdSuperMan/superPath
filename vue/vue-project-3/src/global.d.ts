/*
 * @Description: 
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-02-27 14:45:49
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-04-12 09:46:03
 */
import type { CustomTableProp, ColumnType } from '@/components/global/tableConfig/tableProps.js'
import type { CustomFormProp, FormItemType } from '@/components/global/formConfig/props.js'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    CustomTable: CustomTableProp
    CustomForm: CustomFormProp
  }

  // interface ComponentCustomProperties {
  //   $axios: AxiosInstance;
  // }
}

declare global {
  type GlobalColumnType = ColumnType
  type GlobalFormItemType = FormItemType
  interface ObjectType {
    [key: string]: any
  }
}
