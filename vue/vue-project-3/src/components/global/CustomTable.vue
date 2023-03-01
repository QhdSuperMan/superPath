<!--
 * @Description: 二次封装表格
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-02-24 15:08:03
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-03-01 14:51:53
-->
<script lang="tsx">
import { defineComponent, reactive, getCurrentInstance, ref } from 'vue'
import type { VNode } from 'vue'

import { usePagination, useColumn, useDataProxy } from './config/CustomTable.js'
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
    const vm: any = (getCurrentInstance() as any)
    const tableRef = ref<any>(null) // 表格实例
    // 暴露方法给父组件
    context.expose({
      /**
       * @description: 代理调用table方法
       * @param {*} method url方法
       * @param {array} arg 参数列表
       * @return {*} 
       * @author: wuyurong
       */
      proxy(method: string, ...arg: Array<unknown>) {
        return tableRef.value[method](...arg)
      }
    })
    /**
     * @description: 渲染分页组件
     * @author: wuyurong
     */
    let pagination = reactive({
      currentPage: 1,
      pageSize: 10,
      total: 400,
    })
<<<<<<< HEAD
    let paginationConfig = usePagination(props.paginationConfig)
    function renderPagination(): VNode {
      // v-model={[pagination.pageSize, 'page-size']}
      return <div class="table-pagination">
=======
    function renderPagination(): VNode {
      
      let paginationConfig = usePagination()
      // v-model={[pagination.pageSize, 'page-size']}
      return <div>
        { pagination.currentPage }
>>>>>>> 8fdb8506a169489c8e92fa7b2e05729431716cc3
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

    // 表格的配置
    let columnConfig = useColumn(props.column)
    let dataProxyConfig = useDataProxy(props.dataProxy)
    console.log('dataProxyConfig: ', dataProxyConfig);
    return () => (
      <div >
        <el-table {...context.attrs} ref={tableRef}>
          {
            columnConfig.value.map(item => {
              return <el-table-column {...item} >
                {
                  {
                    default: item.customRender ? (...arg: any) => item.customRender!(...arg) : null,
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
<<<<<<< HEAD
=======
        
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
>>>>>>> 8fdb8506a169489c8e92fa7b2e05729431716cc3
      </div>
    );
  },

})
</script>


<style scoped lang="scss">
.table-pagination {
  margin-top: 10px;

  :deep(.el-pagination) {
    justify-content: flex-end;
  }
}
</style>



