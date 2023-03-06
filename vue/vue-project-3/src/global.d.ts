/*
 * @Description: 
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-02-27 14:45:49
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-03-05 11:42:19
 */
import type { CustomTableProps, ColumnType } from '@/components/global/config/tableProps.js'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    CustomTable: CustomTableProps
  }

  // interface ComponentCustomProperties {
  //   $axios: AxiosInstance;
  // }
}

declare global {
  type GlobalColumnType = ColumnType
}
