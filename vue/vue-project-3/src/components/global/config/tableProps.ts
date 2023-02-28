/*
 * @Description: table props文件
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-02-28 14:08:33
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-02-28 17:49:43
 */
import { definePropType } from '@/utils/ts/runtime.js'
import type { PaginationProps, Column } from 'element-plus'

type CustomType = {
  customRender?: (arg: unknown) => unknown,
  customHeaderRender?: (arg: unknown) => unknown,
} & Column<any>

const props = {
  column: { // 表格的列配置
    type: definePropType<Array<CustomType>>(Array),
    required: true,
    default: () => []
  },
  paginationConfig: {
    type: definePropType<PaginationProps>([Object, undefined]),
    default: () => {
      return {}
    }
  }
}
export type TableProps = typeof props
export default props