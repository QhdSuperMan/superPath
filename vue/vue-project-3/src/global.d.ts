/*
 * @Description: 
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-02-27 14:45:49
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-03-03 17:09:02
 */
import type { CustomTableProps } from '@/components/global/config/tableProps.js'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    CustomTable: CustomTableProps
  }

  // interface ComponentCustomProperties {
  //   $axios: AxiosInstance;
  // }
}