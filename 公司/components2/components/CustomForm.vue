<!--
 * @Description: 表单组件
 * @Author: maowenhao 2862438628@qq.com
 * @Date: 2022-07-11 10:27:17
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2022-11-21 17:02:12
-->

<template>
  <div class="custom-form">
    <table
      :style="{
        margin: align === 'center' ? 'inherit' : 'initial',
        'table-layout': isTableFixed ? 'fixed' : 'inherit'
      }"
    >
      <tr v-for="(rowItems, rowIndex) of this.formItemRowArr" :key="rowIndex">
        <td
          v-for="(formItem, index) of rowItems"
          :key="index"
          class="col-td"
          v-bind="bindColWidth(formItem)"
          :style="bindStyle(formItem)"
        >
          <!-- 标签 -->
          <div
            class="form-item-label"
            v-if="formItem.formItemContentType === 'label'"
          >
            <slot
              :name="formItem.slots.slotName"
              v-if="formItem.slots && formItem.slots.slotName"
            >
            </slot>
            {{ formItem.name }}
          </div>

          <!-- 表单控件 -->
          <div
            class="form-item-wrapper"
            :class="[formItem.itemWrapClass]"
            :style="[formItem.itemWrapStyle]"
            v-if="formItem.formItemContentType !== 'label'"
          >
            <!-- 外部传入内容 -->
            <div v-if="formItem.customSlot">
              <slot :name="formItem.scopedSlots.customRender"> </slot>
            </div>

            <template v-else>
              <!-- 输入框 -->
              <a-input
                v-if="formItem.widgetType === 'input'"
                v-model="formModel[formItem.bindKey]"
                :disabled="formItem.disabled"
                :placeholder="formItem.placeholder || ''"
                @blur="commonFormInputValidate(formItem, $event.target.value)"
                :style="formItem.widgetStyle"
                :class="{
                  'has-error':
                    formError[formItem.bindKey] &&
                    formError[formItem.bindKey].error
                }"
              ></a-input>
              <!-- 数字输入框 -->
              <a-input-number
                v-if="formItem.widgetType === 'input-number'"
                v-model="formModel[formItem.bindKey]"
                :disabled="formItem.disabled"
                :max="formItem.max || Infinity"
                :min="formItem.min || -Infinity"
                @blur="commonFormInputValidate(formItem, $event.target.value)"
                :style="formItem.widgetStyle"
                :class="{
                  'has-error':
                    formError[formItem.bindKey] &&
                    formError[formItem.bindKey].error
                }"
              ></a-input-number>

              <!-- 下拉框 -->
              <a-select
                v-if="formItem.widgetType === 'select'"
                v-model="formModel[formItem.bindKey]"
                :style="formItem.widgetStyle"
                :default-value="formItem.defaultValue || []"
                :disabled="formItem.disabled"
                :allowClear="formItem.allowClear"
                :showSearch="formItem.showSearch"
                :placeholder="
                  formItem.placeholder === undefined
                    ? '请选择'
                    : formItem.placeholder
                "
                :default-active-first-option="false"
                :show-arrow="false"
                :filter-option="false"
                :not-found-content="null"
                :mode="formItem.mode"
                @search="commonFormSelectSearch(formItem, $event)"
                @change="
                  commonFormSelectValidate(
                    formItem,
                    formModel[formItem.bindKey]
                  )
                "
                :class="{
                  'has-error':
                    formError[formItem.bindKey] &&
                    formError[formItem.bindKey].error,
                  'has-mode': formItem.mode
                }"
              >
                <a-select-option
                  v-for="option of formItem.options"
                  :key="option.key"
                  >{{ option.value }}</a-select-option
                >
              </a-select>

              <!-- 字典表select -->
              <dict-select
                v-if="formItem.widgetType === 'dictSelect'"
                v-model="formModel[formItem.bindKey]"
                v-bind="formItem.attrs"
                v-on="formItem.events"
                @change="
                  commonFormSelectValidate(
                    formItem,
                    formModel[formItem.bindKey]
                  )
                "
              />

              <!-- 级联下拉框 -->
              <a-cascader
                v-if="formItem.widgetType === 'cascader'"
                :default-value="formItem.defaultValue || []"
                v-model="formModel[formItem.bindKey]"
                :style="formItem.widgetStyle"
                :disabled="formItem.disabled"
                :fieldNames="formItem.fieldNames || []"
                :allowClear="formItem.allowClear"
                :placeholder="
                  formItem.placeholder === undefined
                    ? '请选择'
                    : formItem.placeholder
                "
                @change="
                  commonFormCascaderValidate(
                    formItem,
                    formModel[formItem.bindKey]
                  )
                "
                :class="{
                  'has-error':
                    formError[formItem.bindKey] &&
                    formError[formItem.bindKey].error
                }"
                :options="formItem.options"
              >
              </a-cascader>
              <!-- 评分 -->
              <a-rate
                v-if="formItem.widgetType === 'rate'"
                v-model="formModel[formItem.bindKey]"
                :defaultValue="formItem.defaultValue"
                :disabled="formItem.disabled"
                :style="formItem.widgetStyle"
                :class="{
                  'has-error':
                    formError[formItem.bindKey] &&
                    formError[formItem.bindKey].error
                }"
              >
              </a-rate>
              <!-- 文本域 -->
              <a-textarea
                v-if="formItem.widgetType === 'textarea'"
                v-model="formModel[formItem.bindKey]"
                :disabled="formItem.disabled"
                :placeholder="formItem.placeholder || '请输入'"
                :rows="formItem.rows || 3"
                :style="formItem.widgetStyle"
                @change="
                  commonFormInputValidate(formItem, formModel[formItem.bindKey])
                "
                :class="{
                  'has-error':
                    formError[formItem.bindKey] &&
                    formError[formItem.bindKey].error
                }"
              >
              </a-textarea>
              <!-- 富文本 -->
              <tinymce-editor
                v-if="formItem.widgetType === 'editor'"
                v-model="formModel[formItem.bindKey]"
                ref="tinymceEditor"
                :placeholder="formItem.placeholder || '请输入'"
                :toolbar="formItem.toolbar"
                :menubar="formItem.menubar"
                :inline="formItem.inline"
                :width="formItem.width"
                :height="formItem.height"
                :disabled="formItem.disabled"
                :style="formItem.widgetStyle"
                @blur="
                  commonFormInputValidate(formItem, formModel[formItem.bindKey])
                "
                @focus="editorFocus(formItem, formModel[formItem.bindKey])"
                :class="{
                  'has-error':
                    formError[formItem.bindKey] &&
                    formError[formItem.bindKey].error
                }"
                v-bind="formItem.attrs"
              ></tinymce-editor>
              <!-- 单选按钮 -->
              <a-radio-group
                v-if="formItem.widgetType === 'radio'"
                :name="formItem.bindKey"
                v-model="formModel[formItem.bindKey]"
                :defaultValue="formItem.defaultValue"
                :disabled="formItem.disabled"
                :style="formItem.widgetStyle"
                :class="{
                  'has-error':
                    formError[formItem.bindKey] &&
                    formError[formItem.bindKey].error
                }"
                @change="
                  commonFormInputValidate(formItem, formModel[formItem.bindKey])
                "
              >
                <a-radio
                  v-for="(item, index) of formItem.options"
                  :key="index"
                  :value="item.key"
                  >{{ item.value }}</a-radio
                >
              </a-radio-group>
              <!-- 复选框 -->
              <a-checkbox-group
                v-if="formItem.widgetType === 'checkbox'"
                :name="formItem.bindKey"
                v-model="formModel[formItem.bindKey]"
                :defaultValue="formItem.defaultValue"
                :disabled="formItem.disabled"
                :style="formItem.widgetStyle"
                @change="
                  commonFormCheckboxValidate(
                    formItem,
                    formModel[formItem.bindKey]
                  )
                "
                :class="{
                  'has-error':
                    formError[formItem.bindKey] &&
                    formError[formItem.bindKey].error
                }"
              >
                <a-checkbox
                  v-for="(item, index) of formItem.options"
                  :key="index"
                  :value="item.key"
                  >{{ item.value }}
                </a-checkbox>
              </a-checkbox-group>
              <!-- 日期 -->
              <a-date-picker
                v-if="formItem.widgetType === 'date'"
                v-model="formModel[formItem.bindKey]"
                :disabledDate="disabledDate"
                :disabled="formItem.disabled"
                :style="formItem.widgetStyle"
                @change="
                  commonFormDateValidate(formItem, formModel[formItem.bindKey])
                "
                :class="{
                  'has-error':
                    formError[formItem.bindKey] &&
                    formError[formItem.bindKey].error
                }"
              >
              </a-date-picker>
              <!-- 日期时间 -->
              <a-date-picker
                v-if="formItem.widgetType === 'time'"
                v-model="formModel[formItem.bindKey]"
                show-time
                v-bind="formItem.attrs"
                v-on="formItem.events"
                :valueFormat="
                  (formItem.attrs && formItem.attrs.valueFormat) ||
                    'YYYY-MM-DD hh-mm-ss'
                "
              />
              <!-- 日期范围 -->
              <a-range-picker
                v-if="formItem.widgetType === 'date-range'"
                v-model="formModel[formItem.bindKey]"
                :style="formItem.widgetStyle"
                @change="
                  commonFormDateValidate(formItem, formModel[formItem.bindKey])
                "
                :class="{
                  'has-error':
                    formError[formItem.bindKey] &&
                    formError[formItem.bindKey].error
                }"
              />
              <!-- 颜色选择器 -->
              <div
                v-if="formItem.widgetType === 'colorPicker'"
                :style="formItem.widgetStyle"
                @change="
                  commonFormColorValidate(formItem, formModel[formItem.bindKey])
                "
                :class="{
                  'has-error':
                    formError[formItem.bindKey] &&
                    formError[formItem.bindKey].error
                }"
              >
                <el-color-picker
                  v-model="formModel[formItem.bindKey]"
                  :defaultValue="formItem.defaultValue"
                ></el-color-picker>
              </div>

              <!-- 文件上传 -->
              <a-upload
                v-if="formItem.widgetType === 'file'"
                :file-list="formItem.fileList"
                :remove="handleRemove"
                :before-upload="beforeUpload"
                @change="handleFileChange(formItem, $event)"
                :name="formItem.field || 'file'"
                :multiple="formItem.multiple || false"
              >
                <a-button>
                  <a-icon type="upload" /> {{ formItem.uploadName || "上传" }}
                </a-button>
              </a-upload>

              <!-- 文件上传列表 -->
              <CustomUpload
                v-if="formItem.widgetType === 'fileList'"
                v-model="formModel[formItem.bindKey]"
                v-bind="formItem.attrs"
                v-on="formItem.events"
              >
              </CustomUpload>

              <!-- 按钮组 -->
              <div
                class="btn-group"
                v-if="formItem.widgetType === 'buttonGroup'"
                :style="{
                  'justify-content':
                    formItem.align === 'right' ? 'flex-end' : 'flex-start'
                }"
              >
                <template v-for="(btnItem, index) of formItem.list">
                  <custom-button
                    :key="index"
                    v-if="btnItem.btnType && btnItem.btnType === 'query'"
                    type="img"
                    :url="searchIconUrl"
                    bgColor="#359a9a"
                    text="查询"
                    @click="commonBtnClick(btnItem.key, index)"
                  ></custom-button>
                  <custom-button
                    :key="index"
                    v-if="btnItem.btnType && btnItem.btnType === 'reset'"
                    type="img"
                    :url="refreshIconUrl"
                    bgColor="white"
                    theme="dashed"
                    @click="commonBtnClick(btnItem.key, index)"
                    text="重置"
                  ></custom-button>

                  <custom-button
                    :key="index"
                    v-if="!btnItem.btnType || btnItem.btnType === 'custom'"
                    bgColor="#359a9a"
                    :text="btnItem.label"
                    @click="commonBtnClick(btnItem.key, index)"
                  ></custom-button>
                </template>
              </div>

              <!-- 错误信息 -->
              <div
                class="error-msg"
                :style="{
                  opacity:
                    formError[formItem.bindKey] &&
                    formError[formItem.bindKey].error
                      ? 1
                      : 0
                }"
              >
                {{
                  formError[formItem.bindKey] &&
                    formError[formItem.bindKey].error
                }}
              </div>
            </template>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import searchIconUrl from "@/assets/images/search_icon.png";
import refreshIconUrl from "@/assets/images/refresh_icon.png";
import customValidators from "@/utils/custom-validators";
import TinymceEditor from "@/components/TinymceEditor";
import CustomButton from "@/components/CustomButton";
import moment from "moment";
import "moment/locale/zh-cn";
import { message } from "ant-design-vue";
import DictSelect from "@/components/DictSelect";
import CustomUpload from "@/components/CustomUpload";

import businessUtil from "../utils/business-util";

import commonUtil from "@/utils/common-util";
import httpUtil from "@/utils/http-util";
import template from "@/api/my-workbench/multipleLigandsManage";

export default {
  name: "CustomForm",
  components: { TinymceEditor, CustomButton, DictSelect, CustomUpload },
  props: {
    formModelValue: { default: () => ({}) }, //表单值
    remainOldVal: { default: false }, //是否保留表单外的其他值
    formCols: { default: 1 }, //最大列数
    labelFontSize: { default: 14 }, //标签字体大小
    labelLetterSpace: { default: 1 }, //标签文字间距
    formItems: { default: () => [], required: true }, //表单项
    align: { default: "inherit" }, //标签对齐方式
    isTableFixed: { default: true }, //是否固定table列
    showColon: { default: true }, //是否显示冒号
    labelLeftPadding: { default: 5 }, //标签左边距
    labelRightPadding: { default: 12 }, //标签右边距
    colonWidth: { default: 4 }, //冒号宽度
    metaData: { default: "" }, // 元数据校验
    message: { default: "" }
  },
  data() {
    return {
      data: [],
      value: undefined,

      DATEFORMAT: "YYYY-MM-DD", //日期格式
      formItemRowArr: [], //表单项数组
      formError: {}, //表单错误信息
      formModel: {}, //表单数据
      requireIconWidth: 12, //必填图标宽度
      fileList: [], //文件列表
      uploading: false, //是否上传中
      copyFormItems: [], //备份表单数据
      // 图标路径
      searchIconUrl,
      refreshIconUrl
    };
  },
  computed: {},
  watch: {
    formModelValue: {
      deep: true,
      handler(newVal, oldVal) {
        console.log("watch formModelValue变化", newVal, oldVal);
        this.formModel = newVal;
      },
      immediate: true
    },
    formItems: {
      deep: true,
      handler(newVal, oldVal) {
        console.log("watch formItems变化", newVal, oldVal);
        this.initForm(newVal);
      },
      immediate: true
    }
  },
  created() {
    // 获取表单项数组
    this.getFormItemRows();
    // 获取标签宽度
    this.setFormLabelWidth();
    // 初始化元数据校验
    this.initMetadata();
  },
  methods: {
    async initMetadata() {
      if (this.metaData) {
        let metadataRules = await businessUtil.getMetadataRules(
          this.metaData + "_FormMetaData",
          this.metaData
        );
        businessUtil.setFormDynamicRules(this.formItems, metadataRules);
        this.initForm(this.formItems);
      }
    },
    async commonFormSelectSearch(formItem, value) {
      this.formModel[formItem.bindKey] = value;
      this.updateFormModel({ ...this.formModel });
      console.log("表单组件 commonFormSelectSearch", value);
      this.$emit("commonFormSelectSearch", value);
    },

    disabledDate(current) {
      return (
        current &&
        current <
          moment()
            .subtract(1, "days")
            .endOf("day")
      );
    },
    /**
     * @description: 清空文件列表
     * @param {*} formItem
     * @return {*}
     * @author: maowenhao
     */
    clearFilList(formItem) {},
    /**
     * @description: 初始化表单
     * @param {*} formItems
     * @return {*}
     * @author: maowenhao
     */
    initForm(formItems) {
      //表单项变化，清空其他多余动态表单项字段值。
      this.copyFormItems = formItems.filter(item => !item.hidden);
      const newFormValue = {};
      this.copyFormItems.forEach(item => {
        if (
          item.widgetType != "buttonGroup" &&
          item.widgetType != "button" &&
          item.bindKey
        )
          newFormValue[item.bindKey] = this.formModel[item.bindKey];
      });
      this.formModel = newFormValue;
      // this.resetForm();
      this.formItemRowArr = [];
      // this.formModel = {}
      // 设置行列
      this.getFormItemRows();
      // 设置表单标签宽度
      this.setFormLabelWidth();
      // 绑定表单事件
      // this.bindEvents();
    },
    /**
     * @description: 获取标签宽度
     * @param {*} formItem
     * @return {*}
     * @author: maowenhao
     */
    getTdLabelWidth(formItem) {
      let width;
      if (formItem.formItemContentType == "label" && formItem.tdWidth) {
        const colonWidth = this.showColon ? this.colonWidth : 0;
        const requireWidth =
          formItem.slots && formItem.slots.slotName === "required-icon"
            ? this.requireIconWidth
            : 0;
        width =
          requireWidth +
          this.labelLeftPadding +
          formItem.tdWidth +
          colonWidth +
          this.labelRightPadding +
          "px";
      }
      return width;
    },
    /**
     * @description: 绑定列宽
     * @param {*} formItem
     * @return {*}
     * @author: maowenhao
     */
    bindColWidth(formItem) {
      if (formItem.formItemContentType == "label" && formItem.tdWidth) {
        if (this.isTableFixed) {
          return { colSpan: 1 };
        } else {
          return {};
        }
      } else {
        return { colSpan: formItem.calcColSpan || 1 };
      }
    },
    /**
     * @description: 绑定表单项样式
     * @param {*} formItem
     * @return {*}
     * @author: maowenhao
     */
    bindStyle(formItem) {
      let tdStyle = formItem.tdStyle || {};
      if (!this.isTableFixed) {
        return tdStyle;
      }
      if (formItem.formItemContentType == "label" && formItem.tdWidth) {
        const width = this.getTdLabelWidth(formItem);
        return { ...tdStyle, width };
      } else {
        return tdStyle;
      }
    },
    /**
     * @description: 更新表单项
     * @param {*} formItem
     * @return {*}
     * @author: maowenhao
     */
    updateFormItem(formItem) {
      let pos = -1;
      this.copyFormItems.forEach((item, index) => {
        if (item.bindKey === formItem.bindKey) {
          pos = index;
          return true;
        }
      });
      if (pos !== -1) {
        this.$set(this.copyFormItems, pos, formItem);
      }
    },
    /**
     * @description: 获取表单项数组
     * @return {*}
     * @author: maowenhao
     */
    getFormItemRows() {
      const that = this;
      let colSpanCount = 0;
      let startPos = 0;
      let endPos = 0;
      let rowIndex = 0;
      let colSpan;
      // 重置表单项数字，防止重复添加
      this.formItemRowArr = [];
      this.copyFormItems.forEach((item, index) => {
        colSpan = item.colSpan || 1;
        if (colSpan > that.formCols) {
          colSpan = that.formCols;
        }
        if (!that.formItemRowArr[rowIndex]) {
          that.formItemRowArr[rowIndex] = [];
        }
        // 如果当前列+后一列>总列宽，则换行。如果前几列+当前列=总列宽，则换行。
        let newRow = false;
        let nextColSpan = 0;
        if (index != that.formItems.length - 1) {
          nextColSpan = Math.min(
            that.formCols,
            that.formItems[index + 1].colSpan
          );
        }
        if (colSpanCount + colSpan + nextColSpan > that.formCols) {
          // colSpan = (that.formCols - colSpanCount)
          newRow = true;
        }
        if (colSpan + colSpanCount === that.formCols) {
          newRow = true;
        }
        // if (colSpan +nextColSpan> that.formCols || colSpanCount === that.formCols) {
        // 记录计算后colspan
        item.calcColSpan = that.getColSpan(item, that.formCols);
        if (newRow) {
          if (!item.noLabel && item.name) {
            that.formItemRowArr[rowIndex].push({
              ...item, //新增，待测试
              formItemContentType: "label",
              name: item.name,
              slots: item.slots
            });
          }
          that.formItemRowArr[rowIndex].push(item);
          rowIndex++;
          colSpanCount = 0; //重置
        } else {
          if (!item.noLabel && item.name) {
            that.formItemRowArr[rowIndex].push({
              ...item, //新增，待测试
              formItemContentType: "label",
              name: item.name,
              slots: item.slots
            });
          }
          that.formItemRowArr[rowIndex].push(item);
          colSpanCount += colSpan;
        }
        // 设置默认值
        // console.log("设置表单默认值", item.bindKey, this.formModel[item.bindKey], item.defaultValue)
        if (
          item.widgetType != "buttonGroup" &&
          item.widgetType != "button" &&
          item.bindKey
        ) {
          this.formModel[item.bindKey] =
            this.formModel[item.bindKey] || item.defaultValue;
        }
      });
    },
    /**
     * @description: 校验是否包含空标签
     * @param {*} str1
     * @param {*} str2
     * @return {*}
     * @author: maowenhao
     */
    checkEmptryLabel(str1, str2) {
      let maxLabelInfo = {};
      let str;
      if (str1 && str2) {
        return { hasEmpty: false };
      } else {
        str = str1 ? str1 : str2;
        if (str) {
          const width = this.getTextWidth(
            str,
            this.labelFontSize,
            this.labelLetterSpace
          );
          maxLabelInfo = {
            label: str,
            width
          };
          return { hasEmpty: true, maxLabelInfo };
        } else {
          maxLabelInfo = {
            label: str,
            width: 0
          };
          return { hasEmpty: true, maxLabelInfo };
        }
      }
    },
    /**
     * @description: 设置标签宽度
     * @return {*}
     * @author: maowenhao
     */
    setFormLabelWidth() {
      //获取换行标签宽度
      const compareTextWidth = (str1, str2) => {
        let maxInfo = {};
        const { hasEmpty, maxLabelInfo } = this.checkEmptryLabel(str1, str2);
        if (hasEmpty) {
          return maxLabelInfo;
        }
        str1 = str1.split("<br>");
        str2 = str2.split("<br>");
        const strList = str1.concat(str2);
        for (let i = 0; i < strList.length; i++) {
          for (let j = i + 1; j < strList.length; j++) {
            const aWidth = this.getTextWidth(
              strList[i],
              this.labelFontSize,
              this.labelLetterSpace
            );
            const bWidth = this.getTextWidth(
              strList[j],
              this.labelFontSize,
              this.labelLetterSpace
            );
            if (aWidth > bWidth) {
              maxInfo = {
                label: strList[i],
                width: aWidth
              };
            } else {
              maxInfo = {
                label: strList[j],
                width: bWidth
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
          if (item2.formItemContentType == "label" && item2.name) {
            if (labelInfo[i2]) {
              labelInfo[i2] = compareTextWidth.call(
                that,
                labelInfo[i2].label,
                item2.name
              );
            } else {
              labelInfo[i2] = {
                label: item2.name,
                width: this.getTextWidth(item2.name, that.labelFontSize) //文字大小需动态，待优化.关于th宽度问题
              };
            }
          }
        });
      });
      console.log("每列最长文字：", labelInfo);
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
      if (formItem.formItemContentType === "label") {
        return 1;
      } else {
        const validColSpan = Math.min(formCols, formItem.colSpan);
        return formItem.name ? Math.max(validColSpan - 1, 1) : validColSpan;
      }
    },
    /**
     * @description: 获取文字宽度
     * @param {*} str 文本
     * @param {*} fontSize 字体
     * @param {*} letterSpace 字间距
     * @return {*}
     * @author: maowenhao
     */
    getTextWidth(str, fontSize, letterSpace) {
      const canvasContext = document.createElement("canvas").getContext("2d");
      canvasContext.font =
        fontSize + 'px "Avenir", Helvetica, Arial, sans-serif'; //自己需要的字体什么的，为啥宽度不准确呢，待优化
      // canvasContext.fontSize=fontSize;//自己需要的字体什么的
      if (str || str === 0) {
        letterSpace = letterSpace ? letterSpace * str.length : 0;
        return canvasContext.measureText(str + "").width + letterSpace; //letter-space宽度
      } else {
        return 0;
      }
    },
    /**
     * @description: 编辑器获取焦点
     * @param {*} formItem
     * @param {*} value
     * @return {*}
     * @author: maowenhao
     */
    editorFocus(formItem, value) {
      this.$emit("editorFocus", { formItem, value });
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
      this.$emit("selectChange", { formItem, value });
    },
    /**
     * @description: 校验级联下拉框
     * @param {*} formItem 表单项
     * @param {*} value 值
     * @return {*}
     * @author: maowenhao
     */
    commonFormCascaderValidate(formItem, value) {
      this.commonFormItemValidate(formItem, value);
      // this.$emit("selectChange", { formItem, value });
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
     * @description: 校验颜色选择器，待优化
     * @param {*} formItem 表单项
     * @param {*} value 值
     * @return {*}
     * @author: maowenhao
     */
    commonFormColorValidate(formItem, value) {
      this.commonFormItemValidate(formItem, value);
    },
    /**
     * @description: 校验文件
     * @param {*} formItem 表单项
     * @param {*} value 值
     * @return {*}
     * @author: maowenhao
     */
    commonFileValidate(formItem, value) {
      this.commonFormItemValidate(formItem, value);
    },
    /**
     * 文件变化,未用到
     */
    commonFileChange(formItem, value) {
      console.log(formItem, value);
      this.formModel[formItem.bindKey] = value;
      this.updateFormModel({ ...this.formModel });
      this.$emit("commonFileChange", value);
    },

    /**
     * 未用到
     */
    customRequest(res) {},
    /**
     * @description: 校验复选框
     * @param {*} formItem 表单项
     * @param {*} value 值
     * @return {*}
     * @author: maowenhao
     */
    commonFormCheckboxValidate(formItem, value) {
      // this.formModel[formItem.bindKey] = value;
      this.commonFormItemValidate(formItem, value);
      console.log(this.formModel);
    },
    /**
     * @description: 校验表单项
     * @param {*} formItem 表单项
     * @param {*} value 值
     * @return {*}
     * @author: maowenhao
     */
    commonFormItemValidate(formItem, value) {
      this.$emit("radioVlue", formItem, value);
      if (
        formItem.widgetType === "date" &&
        value &&
        typeof value === "object"
      ) {
        value = value.format(this.DATEFORMAT);
      }
      const errorMsg = customValidators.formItemValidate(formItem, value);
      //   this.formError[formItem.bindKey] = { error: errorMsg }//先声明，否则不会响应式提示
      this.$set(this.formError, formItem.bindKey, { error: errorMsg });
      console.log(
        formItem.bindKey,
        this.formError[formItem.bindKey] &&
          this.formError[formItem.bindKey].error
      );
      return errorMsg;
    },
    /**
     * @description: 校验表单
     * @return {*}
     * @author: maowenhao
     */
    validateForm() {
      let isValid = true;
      console.log("校验表单-->formModel", this.formModel);
      this.copyFormItems.forEach(formItem => {
        //一个不满足就终止，不再循环了
        let value = this.formModel[formItem.bindKey];
        if (formItem.widgetType === "file") {
          value = formItem.fileList;
        }
        const errorMsg = this.commonFormItemValidate(formItem, value);
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
      let newVal = value;
      if (this.remainOldVal) {
        newVal = { ...this.formModel, ...value };
      }
      this.$emit("updateFormModel", newVal);
    },
    /**
     * @description: 获取表单数据
     * @return {*}
     * @author: maowenhao
     */
    getFormModel() {
      let formValue = { ...this.formModel };
      console.log("getFormModel", formValue);
      for (let key in formValue) {
        if (formValue[key] && formValue[key]._isAMomentObject) {
          formValue[key] = formValue[key].format(this.DATEFORMAT);
        }
      }
      return formValue;
    },
    /**
     * @description: 重置表单，待优化
     * @return {*}
     * @author: maowenhao
     */
    resetForm() {
      // this.resetFormModel();
      // this.updateFormModel({});
      /* this.copyFormItems.forEach(formItem => {
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
    /**
     * @description: 移除文件
     * @param {*} file
     * @return {*}
     * @author: maowenhao
     */
    handleRemove(file) {
      const index = this.fileList.indexOf(file);
      const newFileList = this.fileList.slice();
      newFileList.splice(index, 1);
      this.fileList = newFileList;
    },
    /**
     * @description: 上传前处理
     * @param {*} file
     * @return {*}
     * @author: maowenhao
     */
    beforeUpload(file) {
      this.fileList = [...this.fileList, file];
      console.log("beforeUpload", file, this.fileList);
      return false;
    },
    /**
     * @description: 文件变化
     * @param {*} formItem
     * @param {*} info
     * @return {*}
     * @author: maowenhao
     */
    handleFileChange(formItem, info) {
      if (formItem.supportFileType) {
        const fileSuffix = info.file.name.substring(
          info.file.name.lastIndexOf(".")
        );
        if (!formItem.supportFileType.includes(fileSuffix)) {
          message.info(this.message == "" ? "文件类型不支持" : this.message);
          return;
        }
      }
      if (info.fileList.length > 1 && !formItem.multiple) {
        message.info(`只能上传一个文件`);
        return;
      }

      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      /*  if (info.file.status === 'done') {
         message.success(`${info.file.name} file uploaded successfully`);
       } else if (info.file.status === 'error') {
         message.error(`${info.file.name} file upload failed.`);
       } */
      console.log("handleFileChange", info, this.message);
      // formItem.fileList = info.fileList;
      this.$set(formItem, "fileList", info.fileList);
      this.updateFormItem(formItem);

      if (info.file.status === "removed") {
        this.$emit("handleFileRemove", info);
        if (info.file.fileId) {
          this.deleteFile(info.file.fileId);
        }
        this.$forceUpdate();
        return true;
      }
      if (info.fileList.length > 0) {
        this.$emit("handleFileChange", info);
      }
      this.commonFileValidate(formItem, info.fileList);
    },
    /**
     * @description: 处理文件上传
     * @return {*}
     * @author: maowenhao
     */
    handleUpload() {
      const { fileList } = this;
      const formData = new FormData();
      fileList.forEach(file => {
        formData.append("files[]", file);
      });
      this.uploading = true;

      // You can use any AJAX library you like
      /*    reqwest({
           url: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
           method: 'post',
           processData: false,
           data: formData,
           success: () => {
             this.fileList = [];
             this.uploading = false;
             this.$message.success('upload successfully.');
           },
           error: () => {
             this.uploading = false;
             this.$message.error('upload failed.');
           },
         }); */
    },
    /**
     * @description: 删除附件中的文件
     * @param {*} fileId
     * @return {*}
     * @author: wuyurong
     */
    deleteFile(fileId) {
      commonUtil
        .request(httpUtil.get(template.DELETE, { fileId }))
        .then(({ res }) => {
          //
        });
    },
    commonBtnClick(action) {
      this.$emit("commonBtnClick", action);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/base.scss";
.custom-form {
  width: 100%;
  table {
    margin: initial;
    table-layout: fixed;
    width: 100%;
    td {
      word-break: break-all;
      vertical-align: middle;
    }
  }
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
  /deep/ .form-item-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .ant-input:hover,
    .ant-input-active,
    .ant-select:hover,
    .ant-input-active,
    .ant-input:focus {
      border-color: $header-bg-green !important;
      box-shadow: 0 0 0 2px rgba(0, 153, 153, 1 / 20%) !important;
    }
    .ant-select-focused .ant-select-selection,
    .ant-select-selection:hover,
    .ant-select-selection:focus,
    .ant-select-selection:active {
      border-color: $header-bg-green !important;
      box-shadow: 0 0 0 2px rgba(0, 153, 153, 1 / 20%) !important;
    }

    .ant-select-selection-selected-value,
    .ant-select-selection__choice {
      font-size: px2rem(14px) !important;
    }
    .tox-tinymce {
      border: 1px solid #d9d9d9 !important;
      border-radius: 4px !important;
    }

    .ant-cascader-picker:focus .ant-cascader-input {
      border-color: $header-bg-green !important;
    }
    .ant-cascader-picker.has-error {
      .ant-cascader-input {
        border: none !important;
      }
    }

    // 错误边框
    .has-error:hover,
    .has-error:active,
    .has-error:focus {
      border-color: $error-text-color !important;
      box-shadow: none !important;
    }
    .has-error {
      .tox-tinymce {
        border: none !important;
      }
      &.ant-calendar-picker {
        //防止border重复
        border: none !important;
      }
      .ant-input:focus,
      .ant-input:hover,
      .ant-input:active {
        border-color: $error-text-color !important;
      }

      .ant-select-focused .ant-select-selection,
      .ant-select-selection:hover,
      .ant-select-selection:focus,
      .ant-select-selection:active {
        border-color: $error-text-color !important;
      }
    }

    .error-msg {
      color: $error-text-color !important;
      border: 1px solid $error-text-color !important;
      opacity: 1;
      position: absolute;
      top: 100%;
      transform: translateY(-#{px2rem(24px)});
      display: block;
      width: 100%;
      text-align: left;
      font-size: px2rem(14px);
      border: none !important;
    }

    .ant-radio-wrapper .ant-radio-inner {
      border-color: $header-bg-green !important;
      &::after {
        background-color: $header-bg-green !important;
      }
    }

    .btn-group {
      display: flex;
      .custom-button {
        &:not(:last-of-type) {
          margin-right: px2rem(30px) !important;
        }
      }
    }
  }
  .ant-select,
  .ant-select.ant-select-enabled .ant-select-selection__placeholder {
    color: rgba(49, 49, 49, 1);
  }
}
/deep/ .has-error {
  border: 1px solid #f5222d !important;
  border-radius: 4px;
}
/deep/ .ant-select-enabled {
  border: none !important;
}
// 文件列表左对齐
/deep/ .ant-upload-list .ant-upload-list-item-info {
  text-align: left !important;
  font-size: px2rem(14px) !important;
  line-height: px2rem(22px);
}
</style>
