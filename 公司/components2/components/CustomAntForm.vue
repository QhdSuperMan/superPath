<!--
 * @Description: description实现带边框表单，未用到
 * @Author: maowenhao 2862438628@qq.com
 * @Date: 2022-09-21 16:18:59
 * @LastEditors: maowenhao 2862438628@qq.com
 * @LastEditTime: 2022-09-23 17:32:31
-->

<template>
  <div class="custom-ant-form">
    <a-descriptions title="" bordered :column="formCols">
      <a-descriptions-item
        :span="formItem.colSpan || 1"
        v-for="(formItem, index) of formItemRowArr"
        :key="index"
      >
        <span slot="label" class="label">
          {{ formItem.name }}
        </span>
        {{ formItem.value }}
      </a-descriptions-item>
    </a-descriptions>
  </div>
</template>

<script>
import customValidators from "@/utils/custom-validators";
import "moment/locale/zh-cn";
import commonUtil from "@/utils/common-util";
export default {
  name: "CustomAntForm",
  components: {},
  props: {
    formModelValue: { default: () => ({}) },
    // 列数
    formCols: { default: 1 },
    // 标签文字大小
    labelFontSize: { default: 14 },
    // 文字间距
    labelLetterSpace: { default: 1 },
    // 表单项数组
    formItems: { default: () => [], required: true },
    // 文字对齐方式
    align: { default: "inherit" },
  },

  data() {
    return {
      // 表单项数组
      formItemRowArr: [],
      // 表单错误信息
      formError: {},
      // 表单数据对象
      formModel: {},
    };
  },
  computed: {},
  watch: {
    formModelValue: {
      deep: true,
      handler(newVal, oldVal) {
        this.formModel = newVal;
      },
    },
    formItems: {
      deep: true,
      handler(newVal, oldVal) {
        console.log("formItems变化", newVal);
        this.resetForm();
        this.formItemRowArr = [];
        // this.formModel = {}
        // 设置行列
        this.getFormItemRows();
        // 设置表单标签宽度
        // this.setFormLabelWidth();
        // 绑定表单事件
        // this.bindEvents();
      },
    },
  },

  created() {
    this.getFormItemRows();
  },
  mounted() { },
  methods: {
    /**
     * @description: 生成表单行列数据项
     * @return {*}
     * @author: maowenhao
     */
    getFormItemRows() {
      const that = this;
      let colSpanCount = 0;
      let rowIndex = 0;
      let colSpan;
      // 重置表单项数字，防止重复添加
      this.formItemRowArr = [];
      this.formItems.forEach((item, index) => {
        colSpan = item.colSpan || 1;
        if (colSpan > that.formCols) {
          colSpan = that.formCols;
        }

        // 如果同一行前几列+当前列+后一列>总列宽，则换行。如果前几列+当前列=总列宽，则换行。
        let newRow = false;
        let nextColSpan = 0;
        if (index != that.formItems.length - 1) {
          nextColSpan = Math.min(that.formCols, that.formItems[index + 1].colSpan);
        }
        if (colSpanCount + colSpan + nextColSpan > that.formCols) {
          // colSpan = (that.formCols - colSpanCount)
          newRow = true;
        }
        if (colSpan + colSpanCount === that.formCols) {
          newRow = true;
        }
        // 记录计算后colspan
        item.calcColSpan = that.getColSpan(item, that.formCols);
        that.formItemRowArr.push(item);
        if (newRow) {
          rowIndex++;
          item.colSpan = Math.max(that.formCols - colSpanCount, colSpan); //如果下一行放不下，则当前列占剩余宽度
          colSpanCount = 0; //重置
        } else {
          colSpanCount += colSpan;
        }
      });
    },
    /**
     * @description: 设置标签宽度
     * @return {*}
     * @author: maowenhao
     */
    setFormLabelWidth() {
      console.log("setFormLabelWidth");
      // 获取换行标签宽度
      const compareTextWidth = (str1, str2) => {
        str1 = str1.split("<br>");
        str2 = str2.split("<br>");
        let maxInfo = {};
        const strList = str1.concat(str2);
        for (let i = 0; i < strList.length; i++) {
          for (let j = i + 1; j < strList.length; j++) {
            const aWidth = commonUtil.getTextWidth(
              strList[i],
              this.labelFontSize,
              this.labelLetterSpace
            );
            const bWidth = commonUtil.getTextWidth(
              strList[j],
              this.labelFontSize,
              this.labelLetterSpace
            );
            if (aWidth > bWidth) {
              maxInfo = {
                label: strList[i],
                width: aWidth,
              };
            } else {
              maxInfo = {
                label: strList[j],
                width: bWidth,
              };
            }
          }
        }
        return maxInfo;
      };
      // 取最大宽度
      const that = this;
      const labelInfo = {};
      this.formItemRowArr.forEach((item1, i1) => {
        item1.forEach((item2, i2) => {
          if (labelInfo[i2] && item2.formItemContentType == "label" && item2.name) {
            labelInfo[i2] = compareTextWidth.call(that, labelInfo[i2].label, item2.name);
          } else {
            labelInfo[i2] = {
              label: item2.name,
              width: commonUtil.getTextWidth(item2.name, that.labelFontSize), //文字大小需动态，待优化.关于th宽度问题
            };
          }
        });
      });
      // console.log("每列最长文字是",labelInfo)
      this.formItemRowArr.forEach((item1, i1) => {
        item1.forEach((item2, i2) => {
          if (item2.formItemContentType == "label") {
            item2.tdWidth = labelInfo[i2].width;
          }
        });
      });
      // console.log("更新td width 后的列表",this.formItemRowArr)
    },
    /**
     * @description: 获取表单项所占列数
     * @param {*} formItem
     * @param {*} formCols
     * @return {*}
     * @author: maowenhao
     */
    getColSpan(formItem, formCols) {
      const validColSpan = Math.min(formCols, formItem.colSpan);
      return Math.max(validColSpan, 1);
    },
    /**
     * @description: 校验输入框
     * @param {*} formItem
     * @param {*} value
     * @return {*}
     * @author: maowenhao
     */
    commonFormInputValidate(formItem, value) {
      this.commonFormItemValidate(formItem, value);
    },
    /**
     * @description: 校验下拉框
     * @param {*} formItem 表单项
     * @param {*} value 值
     * @return {*}
     * @author: maowenhao
     */
    commonFormSelectValidate(formItem, value) {
      this.commonFormItemValidate(formItem, value);
    },
    /**
     * @description: 校验日期
     * @param {*} formItem 表单项
     * @param {*} value 值
     * @return {*}
     * @author: maowenhao
     */
    commonFormDateValidate(formItem, value) {
      this.commonFormItemValidate(formItem, value);
    },
    /**
     * @description: 文件变化
     * @param {*} formItem 表单项
     * @param {*} value 值
     * @return {*}
     * @author: maowenhao
     */
    commonFileChange(formItem, value) {
      console.log(formItem, value);
      this.formModel[formItem.bindKey] = value;
      this.updateFormModel({ ...this.formModel });
    },
    /**
    * @description: 表单项校验
    * @param {*} formItem 表单项
    * @param {*} value 值
    * @return {*}
    * @author: maowenhao
    */
    commonFormItemValidate(formItem, value) {
      console.log(formItem, value);
      const errorMsg = customValidators.formItemValidate(formItem, value);
      console.log(formItem, errorMsg);
      //   this.formError[formItem.bindKey] = { error: errorMsg }//先声明，否则不会响应式提示
      this.$set(this.formError, formItem.bindKey, { error: errorMsg });
      console.log(this.formError[formItem.bindKey] && this.formError[formItem.bindKey].error);
      return errorMsg;
    },
    /**
     * @description: 校验表单
     * @return {*}
     * @author: maowenhao
     */
    validateForm() {
      /*  const isValid = this.formItems.every(formItem => {//一个不满足就终止，不再循环了
         const errorMsg = this.commonFormItemValidate(formItem, this.formModel[formItem.bindKey])
         return !errorMsg ? true : false;
       }) */
      let isValid = true;
      this.formItems.forEach((formItem) => {
        //一个不满足就终止，不再循环了
        const errorMsg = this.commonFormItemValidate(
          formItem,
          this.formModel[formItem.bindKey]
        );
        if (errorMsg) {
          isValid = false;
        }
      });
      return isValid;
    },
    /**
     * @description: 更新表单数据
     * @param {*} value
     * @return {*}
     * @author: maowenhao
     */
    updateFormModel(value) {
      this.$emit("updateFormModel", value);
    },
    /**
     * @description: 获取表单数据
     * @return {*}
     * @author: maowenhao
     */
    getFormModel() {
      return { ...this.formModel };
    },
    /**
     * @description: todo 清空文件列表
     * @return {*}
     * @author: maowenhao
     */
    clearFilList() { },
    /**
     * @description: 重置表单，待优化
     * @return {*}
     * @author: maowenhao
     */
    resetForm() {
      // this.resetFormModel();
      // this.updateFormModel({});
      /* this.formItems.forEach(formItem => {
        this.$set(this.formError, formItem.bindKey, { error: "" })
      }) */
      this.formError = {};
    },
    /**
     * @description: 重置表单数据
     * @return {*}
     * @author: maowenhao
     */
    resetFormModel() {
      this.$emit("resetFormModel", {});
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/base.scss";
.custom-ant-form {
  .form-item-wrapper {
    padding: 0px px2rem(20px) px2rem(24px) 0;
    position: relative;
    overflow: hidden;
  }

  .form-item-label {
    color: rgba(0, 0, 0, 0.85);
    padding: 0px 0 px2rem(24px) 0;
    font-size: px2rem(14px);
    text-align: right;
    white-space: nowrap;
    &::after {
      content: ":";
      position: relative;
      top: -0.5px;
      margin: 0 px2rem(8px) 0 2px;
    }
  }
  .form-item-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .error-msg {
      color: #f5222d;
      opacity: 1;
      position: absolute;
      top: 100%;
      transform: translateY(#{px2rem(-24px)});
      display: block;
      width: 100%;
    }
  }
  /deep/ .ant-descriptions-bordered .ant-descriptions-item-label {
    background-color: #fafafa;
    white-space: nowrap;
  }
}
</style>