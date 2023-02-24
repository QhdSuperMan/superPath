<!--
 * @Description: 资源
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2022-12-11 20:59:04
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-01-30 22:09:00
-->
<template>
  <div class="list-common-style-container">
    <div>
      <a-card class="">
        <a-row>
          <a-col :span="12">
            <CustomForm
              ref="CustomFormRef"
              :formItem="formItem"
              v-model="form"
              :rules="rules"
            >
            </CustomForm>
          </a-col>
        </a-row>
        <div class="operation-btn-group">
          <CustomButton type="primary" @click="submit">保存</CustomButton>
        </div>
      </a-card>
    </div>
  </div>
</template>

<script>
import { getLhRankSetting, saveLhRankSetting } from "@/api/setting/system.js";

export default {
  name: "account-setting",
  data() {
    return {
      form: {
        lh_rank_period: 1,
      },

      rules: {
        lh_rank_period: [
          {
            required: true
          },

        ],
      },
      formItem: [
        {
          label: "龙虎榜周期",
          field: "lh_rank_period",
          type: "CustomSelect",
          attrs: {
            allKey: false,
            style: {
              width: "200px"
            },
            options: [
              {
                label: "周",
                value: 1,
              },
              {
                label: "月",
                value: 2,
              },
              {
                label: "季",
                value: 3,
              },
              {
                label: "年",
                value: 4,
              },
            ],
          },
        },
      ],
    };
  },
  activated() {
    this.search()
  },
  methods: {
    search() {
      getLhRankSetting()
        .then(({ data }) => {
          if (data.code === 200) {
            this.form = data.data
          }
        })
        .catch(() => {
        });
    },
    submit({ clear }) {
      this.$refs.CustomFormRef._proxy("validate", (status) => {
        if (status) {
          saveLhRankSetting(this.form)
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