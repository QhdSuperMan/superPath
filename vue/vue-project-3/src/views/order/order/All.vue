<!--
 * @Description: 
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-03-17 14:10:05
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-04-18 17:56:38
-->
<script lang="tsx">
import { defineComponent, reactive, ref } from 'vue'
export default defineComponent({
  name: 'all-order',
  setup() {
    const formRef = ref<ObjectType | null>(null)
    const model = reactive({
      aaaaaaa: 111111,
      test: '',
    })
    const formItems: Array<GlobalFormItemType> = reactive([
      {
        label: '单据编号',
        prop: "test",
        is: 'el-input',
        // attrs: {
        //   onInput () {
        //     console.log(model.aaaaaaa);
        //     console.log('input事件');
        //   }
        // }
      },
      {
        label: '成果名称',
        prop: "aaaaaaa",
        is: 'el-input',
      },
      {
        label: '成果载体',
        prop: "val",
        is: 'el-input',
      },
      {
        label: '技术领域',
        prop: "val",
        is: 'el-input',
      },
      {
        label: '',
        prop: "val",
        is: 'search-reset',
        float: 'right',
        attrs: {
          onSearch() {
            console.log('onSearch');
            if (formRef.value) {
              formRef.value.proxy('validate')
            }
          },
        }
      },
    ])
    const tableData: Array<unknown> = new Array(10).fill('').map((item, index) => {
      return {
        val: index
      }
    })
    const column: Array<GlobalColumnType> = reactive([
      {
        label: '你好',
        type: "selection",
        width: 100
      },
      {
        label: '你好100',
        prop: "val",
        width: 100
      },
      {
        label: '你好2',
        prop: "val",
        width: 100
      },
      {
        label: '你好3',
        prop: "val",
        width: 100
      }
    ])

    return {
      formItems,
      model,
      formRef,
      tableData,
      column
    }
  }
})
</script>

<template>
  <div class="greetings">
    <CustomList>
      <CustomForm :model="model" :formItems="formItems" ref="formRef" />
      <CustomButton :option="[]"></CustomButton>
      <CustomTable :data="tableData" ref="table" :dataProxy="{ api: '11' }" :columns="column"></CustomTable>
    </CustomList>
  </div>
</template>

<style scoped lang="scss"></style>