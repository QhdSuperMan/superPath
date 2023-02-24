<template>
  <CustomModal
    :title="!this.isAdd ? '编辑员工' : '添加员工'"
    :visible="visible"
    :confirm-loading="confirmLoading"
    @cancel="handleCancel"
    @ok="ok"
  >
    <CustomForm
      :labelCol="{ span: 6 }"
      :wrapperCol="{ span: 18 }"
      ref="CustomFormRef"
      :formItem="formItem"
      v-model="form"
      :rules="rules"
    >
      <template v-slot:code>
        <div class="verify-code">
          <CustomInput
            v-model="form.verify_code"
            placeholder="验证码"
          ></CustomInput>

          <CustomButton placeholder="验证码" lock @click="sendCode"
            >获取验证码</CustomButton
          >
        </div>
      </template>
      <template v-slot:avatar>
        <div class="avatar">
          <img :src="form.image_path" alt="" />
          <CustomButton type="primary" @click="isShowAvatar = true"
            >选择头像</CustomButton
          >
        </div>
      </template>
    </CustomForm>

    <Avatar
      v-model="isShowAvatar"
      v-if="isShowAvatar"
      @success="success"
      :src="form.image_path"
    />
  </CustomModal>
</template>

<script>
import Avatar from '@/components/Avatar.vue'

import { addStaff, editStaff, getInfo } from "@/api/setting/employee.js";
import { sendCode } from "@/api/system/system.js";
import { formModal, configMixins } from './addEmployee'

export default {
  mixins: [configMixins],
  data() {
    return {
      confirmLoading: false,
      visible: false,
      isAdd: true,
      isShowAvatar: false,
      form: Object.assign({}, formModal),
    };
  },

  watch: {
    value: {
      handler(newVal) {
        this.visible = newVal;
        if (this.params.staff_id) {
          this.isAdd = false
        } else {
          this.isAdd = true
        }
        this.getCustomerInfo();
      },
      immediate: true,
    },
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    params: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  components: {
    Avatar
  },
  methods: {
    success(data) {
      this.form.image_id = data.image_id
      this.form.image_path = data.image_path
    },
    getCustomerInfo() {
      if (!this.isAdd) {
        getInfo({
          staff_id: this.params.staff_id,
        }).then(({ data }) => {
          if (data.code === 200) {
            this.form = data.data;
          }
        });
      } else {
        this.form = Object.assign({}, formModal);
      }
    },
    sendCode({ close }) {
      this.$refs.CustomFormRef._proxy("validateField", "mobile", (isErr) => {
        if (!isErr) {
          sendCode({
            mobile: this.form.mobile,
            send_type: "common",
          })
            .then(({ data }) => {
              close();
              if (data.code === 200) {
                this.$message.success("发送成功");
              }
            })
            .catch(() => close);
        } else {
          close();
        }
      });
    },
    ok() {
      this.$refs.CustomFormRef._proxy("validate", (status) => {
        if (status) {
          this.confirmLoading = true;
          let request = addStaff;
          if (!this.isAdd) {
            request = editStaff;
          }

          request(this.form)
            .then(({ data }) => {
              if (data.code === 200) {
                this.$message.success(data.msg);
                this.$emit("success");
                this.handleCancel();
              }
              this.confirmLoading = false;
            })
            .catch(() => {
              this.confirmLoading = false;
            });
        }
      });
    },
    handleCancel() {
      this.$emit("input", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.verify-code {
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    margin-left: px2rem(11);
    height: px2rem(40);
    border-radius: px2rem(20);
    border-color: $darkPrimaryColor;
    color: $darkPrimaryColor;
  }
}

.avatar {
  img {
    margin-right: px2rem(10);
    width: px2rem(50);
    height: px2rem(50);
    border-radius: 50%;
    vertical-align: middle;
  }
}
</style>
