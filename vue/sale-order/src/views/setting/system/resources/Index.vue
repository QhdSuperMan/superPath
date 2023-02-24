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
              <template #resource_max_count>
                <a-row :gutter="5">
                  <a-col :span="12">
                    <customInput
                      v-model="form.resource_max_count"
                    ></customInput>
                  </a-col>
                  <a-col :span="12">个,0为不限 </a-col>
                </a-row>
              </template>

              <template #resource_repeat_add>
                <a-row :gutter="5">
                  <a-col :span="12">
                    <customSelect
                      v-model="form.resource_repeat_add"
                      :options="options"
                    ></customSelect>
                  </a-col>
                  <a-col :span="12"> &nbsp;</a-col>
                </a-row>
              </template>

              <template #resource_auto_release>
                <a-row :gutter="5">
                  <a-col :span="12">
                    <customInput
                      v-model="form.resource_auto_release"
                    ></customInput>
                  </a-col>
                  <a-col :span="12">天释放,0为不释放 </a-col>
                </a-row>
              </template>

              <template #resource_clean_recycle>
                <a-row :gutter="5">
                  <a-col :span="12">
                    <customInput
                      v-model="form.resource_clean_recycle"
                    ></customInput>
                  </a-col>
                  <a-col :span="12">天清空,0为不清空 </a-col>
                </a-row>
              </template>
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
import { getResourceSetting, saveResourceSetting } from "@/api/setting/system.js";

export default {
  name: "account-setting",
  data() {
    return {
      form: {
        resource_max_count: 0,
        resource_repeat_add: -1,
        resource_auto_release: 0,
        resource_clean_recycle: 0,
      },
      options: [
        {
          label: "不限(可重复)",
          value: 0,
        },
        {
          label: "3天内不可重复",
          value: 3,
        },
        {
          label: "7天内不可重复",
          value: 7,
        },
        {
          label: "15天内不可重复",
          value: 15,
        },
        {
          label: "30天内不可重复",
          value: 30,
        },
        {
          label: "永久不可重复",
          value: -1,
        },
      ],
      rules: {
        resource_max_count: [
          {
            required: true
          },
          {
            type: 'numberRangeInteger',
            min: 0,
          },
        ],
        resource_auto_release: [
          {
            required: true
          },
          {
            type: 'numberRangeInteger',
            min: 0,
          },
        ],
        resource_clean_recycle: [
          {
            required: true
          },
          {
            type: 'numberRangeInteger',
            min: 0,
          },
        ],
        resource_repeat_add: [
          {
            required: true
          },
          {
            type: 'numberRangeInteger',
            min: -1,
          },
        ],
      },
      formItem: [
        {
          field: "resource_max_count",
          label: "领取最大数量",
          slot: 'resource_max_count'
        },
        {
          field: "resource_repeat_add",
          label: "重复添加",
          slot: 'resource_repeat_add'
        },
        {
          field: "resource_auto_release",
          label: "自动释放资源池",
          slot: 'resource_auto_release'
        },
        {
          field: "resource_clean_recycle",
          label: "自动清空回收站",
          slot: 'resource_clean_recycle'

        },
      ],
    };
  },
  activated() {
    this.search()
  },
  methods: {
    search() {
      getResourceSetting()
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
          saveResourceSetting(this.form)
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