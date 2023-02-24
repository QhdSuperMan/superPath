<!--
 * @Description: 
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2022-12-11 20:59:04
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-01-30 22:09:00
-->
<template>
  <div class="list-common-style-container">
    <div class="operation-btn-group">
      <a-card title="修改密码">
        <CustomForm
          ref="CustomFormRef"
          layout="inline"
          :formItem="formItem"
          v-model="form"
          :rules="rules"
        />
        <div class="operation-btn-group">
          <CustomButton type="primary" @click="submit">保存</CustomButton>
        </div>
      </a-card>
    </div>
  </div>
</template>

<script>
import { changePassword } from "@/api/setting/account.js";

export default {
  name: "account-setting",
  data() {
    return {
      form: {
        password: ''
      },
      rules: {
        password: [
          {
            required: true,
          },
        ],
      },
      formItem: [
        {
          field: "password",
          label: "密码",
          type: "a-input-password",
          attrs: {
            placeholder: "密码",
          },
        },
      ],
    };
  },
  methods: {
    submit() {
      this.$refs.CustomFormRef._proxy("validate", (status) => {
        if (status) {
          changePassword(this.form)
            .then(({ data }) => {
              if (data.code === 200) {
                this.$message.success(data.msg);
              }
            })
            .catch(() => {
            });
        }
      });
    },
  },
};
</script>

<style>
</style>