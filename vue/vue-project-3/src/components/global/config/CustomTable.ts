import { computed } from 'vue'
/**
 * @description: 获取分页配置
 * @param {any} config
 * @return {*}
 * @author: wuyurong
 */
export function usePagination(config?: any) {
  return computed(() => {
    return Object.assign({}, {
      'page-sizes': [10, 20, 30, 50],
      "layout": "total, sizes, prev, pager, next, jumper",
      "background": true
    }, config)
  })
}