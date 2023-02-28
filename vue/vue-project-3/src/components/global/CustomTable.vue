<!--
 * @Description: 二次封装表格
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-02-24 15:08:03
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-02-27 17:41:33
-->
<script lang="tsx">
import { defineComponent, reactive } from 'vue'
import type { VNode } from 'vue'

import { usePagination } from './config/CustomTable.js'

export default defineComponent({
  name: 'CustomTable',

  inheritAttrs: false,

  props: {
    column: {
      type: Array<any>,
      required: true,
    },
  },

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
    function renderPagination(): VNode {
      
      let paginationConfig = usePagination()
      // v-model={[pagination.pageSize, 'page-size']}
      return <div>
        { pagination.currentPage }
        <el-pagination
          {...paginationConfig.value}
          total={pagination.total}
          page-size={pagination.pageSize}
          current-page={pagination.currentPage}
          onUpdate:current-page={ (currentPage: number) => {
            pagination.currentPage = currentPage
            console.log('currentPage: ', currentPage, pagination);
          }}
          onUpdate:page-size={ (size: number) => {
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
              return <el-table-column {...item} />
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


<style scoped lang="scss"></style>



