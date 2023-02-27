<!--
 * @Description: 二次封装表格
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-02-24 15:08:03
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-02-27 14:55:30
-->
<script lang="tsx">
import { defineComponent } from 'vue'

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

    return () => (
      <div >
        <el-table {...context.attrs}>
          {
            props.column.map(item => {
              return <el-table-column {...item} />
            })
          }
        </el-table>
      </div>
    );
  }
})
</script>


<style scoped lang="scss"></style>



