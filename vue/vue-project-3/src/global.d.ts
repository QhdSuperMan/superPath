/*
 * @Description: 
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-02-27 14:45:49
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-02-27 15:35:33
 */
import CustomTable from '@/components/global/CustomTable.vue'
import { ElTable } from 'element-plus'

declare module 'vue' {
  export interface GlobalComponents {
    CustomTable: typeof CustomTable & typeof ElTable
  }
}