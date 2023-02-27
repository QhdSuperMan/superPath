/*
 * @Description: 
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-02-27 14:45:49
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-02-27 14:46:29
 */
import CustomTable from '@/components/global/CustomTable.vue'

declare module 'vue' {
  export interface GlobalComponents {
    CustomTable: typeof CustomTable
  }
}