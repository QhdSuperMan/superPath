import { computed } from 'vue'
import type { PaginationProps } from 'element-plus'
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