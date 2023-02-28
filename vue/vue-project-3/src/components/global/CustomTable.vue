<!--
 * @Description: 
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-02-24 15:08:03
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-02-28 17:56:57
-->
<!--
 * @Description: 二次封装表格
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-02-24 15:08:03
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-02-28 15:41:36
-->
<script lang="tsx">
import { defineComponent, reactive } from 'vue'
import type { VNode } from 'vue'

import { usePagination } from './config/CustomTable.js'
import tableProps from './config/tableProps'

export default defineComponent({
  name: 'CustomTable',

  inheritAttrs: false,

  // props: {
  //   column: { // 表格的列配置
  //     type: definePropType<Array<any>>(Array),
  //     required: true,
  //   },
  // },

  props: tableProps,

  setup(props, context) {
    console.log('props: ', props, context);
    /**
     * @description: 渲染分页组件
     * @author: wuyurong
     */
    let pagination = reactive({
      currentPage: 1,
      pageSize: 10,
      total: 400,
    })
    let paginationConfig = usePagination(props.paginationConfig)
    function renderPagination(): VNode {
      // v-model={[pagination.pageSize, 'page-size']}
      return <div class="table-pagination">
        <el-pagination
          {...paginationConfig.value}
          total={pagination.total}
          page-size={pagination.pageSize}
          current-page={pagination.currentPage}
          onUpdate:current-page={(currentPage: number) => {
            pagination.currentPage = currentPage
          }}
          onUpdate:page-size={(size: number) => {
            pagination.pageSize = size
          }}
        ></el-pagination>
      </div>
    }

    return () => (
      <div >
        <el-table {...context.attrs}>
          {
            props.column.map(item => {
              return <el-table-column {...item} >
                {
                  {
                    default: item.customRender ? (...arg: Array<unknown>) => item.customRender!(...arg) : null,
                    header: item.customHeaderRender ? (...arg: Array<unknown>) => item.customHeaderRender!(...arg) : null,
                  }
                }
              </el-table-column>
            })
          }
        </el-table>
        {
          renderPagination()
        }
        {/* <el-pagination
          v-model:current-page="currentPage4"
          v-model:page-size="pageSize4"
      page-sizes="[100, 200, 300, 400]"
        :small="small"
        :disabled="disabled"
        :background="background"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    /> */}
      </div>
    );
  },

  methods: {
    hahaha() {

    }
  }
})
</script>


<style scoped lang="scss">
.table-pagination {
  margin-top: 10px;

  ::v-deep .el-pagination {
    justify-content: flex-end;
  }
}
</style>



