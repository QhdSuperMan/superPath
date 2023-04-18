<template>
  <a-form-model
    ref="formRef"
    :model="value"
    :rules="rulesSelf"
    :labelCol="labelColSelf"
    :layout="layout"
    :wrapperCol="wrapperColSelf"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <a-form-model-item
      v-for="item in formItemSelf"
      v-on="item.itemEvents"
      v-bind="item.itemAttrs"
      :key="item.field"
      :prop="item.field"
    >
      <!-- 插槽 -->
      <slot v-if="item.slot" :name="item.slot"></slot>
      <span class="form-span-value" v-else-if="item.type === 'span'">{{
        value[item.field]
      }}</span>
      <component
        v-else
        :is="item.type"
        v-model="value[item.field]"
        v-on="item.events"
        v-bind="item.attrs"
      />
    </a-form-model-item>
  </a-form-model>
</template>
<script>
import customValidator from "@/utils/customValidator.js";

export default {
  name: "CustomForm",
  data() {
    return {
      formModel: {},
    };
  },
  props: {
    formItem: {
      type: Array,
      default: () => [],
    },
    rules: {
      type: Object,
      default: () => {
        return {};
      },
    },
    value: {
      type: Object,
      default: () => { },
    },
    layout: {
      type: String,
      default: "horizontal",
    },
    labelCol: {
      type: Object,
      default: () => {
        return {};
      },
    },
    wrapperCol: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  computed: {
    formItemSelf() {
      return this.initFormItem();
    },
    rulesSelf() {
      return this.initRules();
    },
    labelColSelf() {
      let result = {};
      // 不是内联表单
      if (this.layout !== "inline") {
        result.span = 5;
      }
      return Object.assign(result, this.labelCol);
    },
    wrapperColSelf() {
      let result = {};
      // 不是内联表单
      if (this.layout !== "inline") {
        result.span = 18;
      }
      return Object.assign(result, this.wrapperCol);
    },
  },
  watch: {},
  methods: {
    // 代理执行所有事件
    _proxy(methodName, ...args) {
      this.$refs.formRef[methodName](...args);
    },
    // 处理校验规则
    dealRule(rules, formItem = {}) {
      if (Array.isArray(rules)) {
        return rules.map((rule) => this.dealRule(rule, formItem));
      } else if (typeof rules === "object") {
        rules.trigger = rules.trigger || "blur"
        if (rules.required) {
          rules.message = rules.message || `${formItem.label}必填 !`;
        }

        let type = rules.type || rules.customType
        if (customValidator[type]) {
          // 自定义校验规则
          rules.validator = customValidator[type];
          rules.customType = type
          delete rules.type;
        }
        return rules;
      }
    },
    //
    initRules() {
      let result = {};
      for (let i in this.rules) {
        let item = this.formItemSelf.filter((val) => val.field === i);
        result[i] = this.dealRule(this.rules[i], item && item[0]);
      }
      return result;
    },
    initFormItem() {
      let result = [];
      for (const item of this.formItem) {
        item.itemAttrs = Object.assign({ label: item.label }, item.itemAttrs);
        if (!item.hidden) {
          result.push(
            Object.assign(
              {
                hidden: false,
              },
              item
            )
          );
        }
        item.itemAttrs.colon =
          item.itemAttrs.colon !== undefined ? item.itemAttrs.colon : false;
      }

      return result;
    },
  },
};
</script>

<style lang="scss">
</style>
