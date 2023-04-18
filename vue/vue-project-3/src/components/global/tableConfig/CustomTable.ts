import { computed } from 'vue'
import type { PaginationProps } from 'element-plus'
import type { ColumnType, DataProxy } from './tableProps.js'
/**
 * @description: 获取分页配置
 * @param {any} config
 * @return {*}
 * @author: wuyurong
 */
export function usePagination(config?: PaginationProps) {
  return computed(() => {
    return Object.assign({}, {
      'page-sizes': [10, 20, 30, 50],
      "layout": "total, sizes, prev, pager, next, jumper",
      "background": false,
      "small": true
    }, config)
  })
}

/**
 * @description: 获取column 配置
 * @param {any} columns
 * @return {*}
 * @author: wuyurong
 */
export function useColumn(column: Array<ColumnType>) {
  return computed(() => {
    return column.map(item => {
      return item
    })
  })
}

/**
 * @description: 获取数据代理配置
 * @param {any} config
 * @return {*}
 * @author: wuyurong
 */
export function useDataProxy(config: DataProxy) {
  return computed(() => {
    return Object.assign({}, {
      total: '',
      result: ''
    }, config)
  })
}