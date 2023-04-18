import { ElMessage } from "element-plus";
import type { FormItemRule } from 'element-plus'

// 自定义校验规则 rule type
// 表单自定义校验
export const defaultObj = {
  phone(rule: FormItemRule, value: any, callback:Function) {
    if (!/^1\d{10}$/.test(value)) {
      callback(new Error("手机号格式不对!"));
    } else {
      callback();
    }
  },
  money(rule: FormItemRule, value: any, callback:Function) {
    if (isNaN(value)) {
      callback(new Error("请输入数字!"));
    }
    if (value < 0) {
      callback(new Error("请输入大于等于0的数字!"));
    }
    callback();
  },
  numberRangeInteger(rule :FormItemRule, value: any, callback:Function) {
    let { min, max } = rule;
    if (isNaN(value) || value === "") {
      callback(new Error("请输入数字！"));
    }
    if (!Number.isInteger(Number(value))) {
      callback(new Error("请输入整数！"));
    }
    if (min !== undefined && value < min) {
      callback(new Error(`请输入大于等于${min}的数字！`));
    }
    if (max !== undefined && value > max) {
      callback(new Error("请输入小于等于${max}的数字！"));
    }
    callback();
  },
};
// 扩展校验
let extendObj = {
  numberRange({ value, min, max, message }) {
    if (!this.isNumber(value) || value === "") {
      return message || "请输入数字！";
    }
    if (value < min || value > max) {
      return message || `请输入${min}-${max}的数字！`;
    }
  },
  // 大于等于0的数
  integer({ value, message }) {
    if (!this.isNumber(value) || value === "") {
      return message || "请输入数字！";
    }
    if (!Number.isInteger(Number(value))) {
      return message || "请输入整数！";
    }
    if (value <= 0) {
      return message || "请输入大于0的数!";
    }
  },
  required({ value, message }) {
    if (value === "" || value === null || value === undefined) {
      return message || `不能为空！`;
    }
  },
  isNumber(value) {
    return !isNaN(value);
  },
};
// 自主校验方法
export function customValidator(type, obj = {}, callback = () => {}) {
  if (defaultObj[type]) {
    defaultObj[type](obj.rule, obj.value, (val) => {
      if (val instanceof Error) {
        callback(val.message);
      } else {
        callback();
      }
    });
  } else {
    if (!extendObj[type]) {
      throw "rules type 类型错误";
    }
    let message = extendObj[type](obj);
    callback(message);
    return message;
  }
}
/**
 * 表格校验方法
 * @param {Array} tableData 表格数据
 * @param {Object} rules 表格校验规则
 * @param {Array} columns 表格列配置
 * @param {function} callback 回调函数
 * @returns
 */
export function tableValidator(tableData, rules, columns, callback) {
  return new Promise((resolve, reject) => {
    let status = true; // 校验状态
    let current = 0;
    let currentKey = null;
    let callbackHandle = (err) => {
      if (err) {
        message.error(
          `表格第${current + 1}行  ${getColumnTitle(
            columns,
            currentKey
          )}  ${err}`
        );

        status = false;
        resolve(err);
        callback(err);
      }
      if (!err && current >= tableData.length) {
        // 没有报错
        resolve();
        callback();
      }
    };
    for (let i = 0; i < tableData.length; i++) {
      if (!status) return;
      current = i;
      for (const ruleKey in rules) {
        currentKey = ruleKey;
        tableValidatorItem(
          tableData[i][ruleKey],
          rules[ruleKey],
          callbackHandle
        );
      }
    }
    current += 1;
    callbackHandle();
  });
}
/**
 * 获取错误列名字
 * @param {*} columns
 * @param {*} key
 */
function getColumnTitle(columns, key) {
  let result = columns.find((val) => val.dataIndex === key);
  return result && result.title;
}
/**
 * 表格校验方法
 * @param {Any} value  value 值
 * @param {Array | Object | String} rule   校验规则
 * @param { function } callbackHandle
 */
export function tableValidatorItem(value, rule, callbackHandle) {
  if (Array.isArray(rule)) {
    rule.forEach((val) => {
      tableValidatorItem(value, val, callbackHandle);
    });
  } else if (typeof rule === "object") {
    customValidator(rule.type, { ...rule, value }, callbackHandle);
  } else {
    customValidator(rule, { value }, callbackHandle);
  }
}

