/*
 * @Description: 
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-02-27 14:45:49
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-02-28 17:33:48
 */
import type { TableProps } from '@/components/global/config/tableProps.js'
import { ElTable } from 'element-plus'

declare module 'vue' {
  export interface GlobalComponents {
    CustomTable: TableProps & typeof ElTable
  }
}