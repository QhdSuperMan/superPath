'use strict';

module.exports = app => {
  const { validator } = app;
  // 自定义校验规则
  validator.addRule('userName', (rule, value) => {
    console.log('自定义校验');
    if (value.length < 8 || value.length > 20) {
      return '用户名的长度应该在8-20之间';
    }
  });
  validator.addRule('note', (rule, value) => {
    if (value.length > 100) {
      return '备注不超过100字';
    }
  });
  validator.addRule('email', (rule, value) => {
    const re = RegExp(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/);
    if (!re.test(value)) {
      return '邮箱格式不正确';
    }
  });
  validator.addRule('phone', (rule, value) => {
    const reg = /^1[3|4|5|6|7|8][0-9]\d{8}$/;
    if (!reg.test(value)) {
      return '手机号格式不正确';
    }
  });
};
