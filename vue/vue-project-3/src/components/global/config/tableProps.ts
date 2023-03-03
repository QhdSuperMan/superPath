/*
 * @Description: table props文件
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-02-28 14:08:33
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-03-03 17:36:15
 */
import type { PropType } from 'vue'
import { definePropType } from '@/utils/ts/runtime.js'
import type { GetPropsTypes } from '@/utils/ts/index.js'
import type { PaginationProps, Column, TableProps } from 'element-plus'


// column类型
export type ColumnType = {
  customRender?: (...arg: Array<unknown>) => unknown,
  customHeaderRender?: (...arg: Array<unknown>) => unknown,
} & Column<any>

// 数据代理类型
export type DataProxy = {
  api: string, // 接口地址
  params?: object, // 查询参数
  total?: string, // 接口返回的总数地址
  result?: string, // 接口返回的数据地址
}

const props = {
  column: { // 表格的列配置
    type: definePropType<Array<ColumnType>>(Array),
    default: () => []
  },
  dataProxy: {
    type: definePropType<DataProxy>([Object, undefined]),
    default: () => {
      return {}
    }
  },
  str: String as PropType<string>,
  paginationConfig: {
    type: definePropType<PaginationProps>([Object]),
    default: () => {
      return {}
    }
  },
}

type a = {
  str: string,
  DataProxy?: DataProxy
}

export type CustomTableProps = GetPropsTypes<typeof props> & TableProps<unknown>
// export type CustomTableProps = a & TableProps<unknown>
export default props