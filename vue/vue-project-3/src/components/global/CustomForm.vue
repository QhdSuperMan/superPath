<!--
 * @Description: 二次封装表格
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-02-24 15:08:03
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-04-18 17:23:07
-->
<script lang="tsx">
import { defineComponent, getCurrentInstance, ref } from 'vue'
import { useFormItems, useComponents, useRules } from './formConfig/index.js'
import type { FormItemType } from './formConfig/props'
import formProps from './formConfig/props'

export default defineComponent({
  name: 'CustomForm',

  inheritAttrs: false,

  props: formProps,

  setup(props, context) {
    const vm: any = (getCurrentInstance() as any)
    console.log('vm: ', vm);
    const formRef = ref<any>(null) // 表单实例
    const formAttrs = context.attrs
    const components = useComponents()
    // 暴露方法给父组件
    context.expose({
      /**
       * @description: 代理调用form方法
       * @param {*} method url方法
       * @param {array} arg 参数列表
       * @return {*} 
       * @author: wuyurong
       */
      proxy(method: string, ...arg: Array<unknown>) {
        return formRef.value[method](...arg)
      }
    })

    // 渲染动态组件
    function renderAsyncContent(tagName: any, item: GlobalFormItemType) {
      let tagArr: Array<string> = tagName.split("-")
      let ElTag = ''
      tagArr.forEach(tag => {
        ElTag += tag.slice(0, 1).toLocaleUpperCase() + tag.slice(1)
      });
      let tag = vm.appContext.components[ElTag] || components[ElTag] || tagName
      return <tag v-model={(formAttrs.model as ObjectType)[item.prop as string]} {...item.attrs}></tag>
    }

    // 渲染formItem
    function renderFormItem(item: GlobalFormItemType) {
      return <el-form-item {...item.formItemAttrs}
        v-slots={
          item.slots ?
            {
              default: item.slots?.default ? item.slots?.default(item) : null,
              label: item.slots?.label ? item.slots?.label(item) : null,
              error: item.slots?.error ? item.slots?.error(item) : null
            } : null
        }>
        {
          item.is ? renderAsyncContent(item.is, item) : null
        }
      </el-form-item>
    }
    // 表单的配置
    let formItemRowConfig = useFormItems(props.formItems, props, formAttrs)
    console.log('formItemConfig: ', formItemRowConfig);
    let formRules = useRules(props.rules, props.formItems)

    return () => (
      <div >
        <el-form {...context.attrs} rules={formRules} ref={formRef} inline={props.inline} class="custom-form">
          {
            formItemRowConfig.value.map(item => {
              return <el-row {...item.rowAttrs}>
                {
                  item.children.map((twoItem: FormItemType) => {
                    return <el-col {...twoItem.colAttrs}>
                      {
                        renderFormItem(twoItem)
                      }
                    </el-col>
                  })

                }
              </el-row>
            })
          }
        </el-form>
      </div>
    );
  },

})
</script>


<style scoped lang="scss">
.custom-form {
  &.el-form--inline {
    :deep(.el-form-item) {
      margin-right: 0 !important;
      display: flex;
      align-items: center;
    }
  }
}
</style>



