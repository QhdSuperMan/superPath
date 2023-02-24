<template>
  <div class="register">
    <div class="register-content">
      <div class="register-title">欢迎加入</div>

      <div class="register-form">
        <CustomForm
          ref="CustomFormRef"
          :formItem="formItem"
          v-model="form"
          :wrapperCol="{ span: 24 }"
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
        </CustomForm>
      </div>

      <div class="register-operation">
        <CustomButton type="sumbit" lock placeholder="验证码" @click="register"
          >注册</CustomButton
        >
        <div class="register-has"> 
          <CustomButton type="link" @click="goLogin">已有账号，直接登录></CustomButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

import { jumpBackPage } from "@/utils/index.js";

import { register, sendCode } from "@/api/system/system.js";

export default {
  name: "register",
  data() {
    return {
      rules: {
        company_name: {
          required: true,
          message: "公司名称必填!",
        },
        contact: {
          required: true,
          message: "联系人必填!",
        },
        mobile: [
          {
            required: true,
            message: "联系电话必填!",
          },
          {
            type: "phone",
          },
        ],
        verify_code: {
          required: true,
          message: "验证码必填!",
        },
        trade_id: {
          required: true,
          message: "请选择行业类型!",
        },
        password: {
          required: true,
          message: "密码必填!",
        },
      },
      isRegister: false,
      form: {
        company_name: "",
        contact: "",
        mobile: "",
        verify_code: "", // 验证码
        password: "", // 密码
        trade_id: "",
      },
      formItem: [
        {
          field: "company_name",
          type: "customInput",
          attrs: {
            placeholder: "请输入公司名称",
          },
        },
        {
          field: "contact",
          type: "customInput",
          attrs: {
            placeholder: "请输入联系人",
          },
        },
        {
          field: "mobile",
          type: "customInput",
          attrs: {
            placeholder: "请输入联系电话",
          },
        },
        {
          field: "verify_code",
          hidden: false,
          slot: "code",
          attrs: {
            placeholder: "验证码",
          },
        },
        {
          field: "trade_id",
          type: "customSelect",
          attrs: {
            allKey: false,
            placeholder: "行业",
            api: "getTradeList",
            config: { value: "id", label: "name" },
          },
        },
        {
          field: "password",
          type: "a-input-password",
          hidden: false,
          attrs: {
            type: "password",
            placeholder: "密码",
          },
        },
      ],
    };
  },
  methods: {
    ...mapMutations({
      setUserInfo: "setUserInfo",
    }),
    sendCode({ close }) {
      this.$refs.CustomFormRef._proxy("validateField", "mobile", (isErr) => {
        if (!isErr) {
          sendCode({
            mobile: this.form.mobile,
            send_type: "company_reg",
          })
            .then(({ data }) => {
              close();
              if (data.code === 200) {
                this.$message.success("发送成功");
              }
            })
            .catch(() => {
              close();
            });
        } else {
          close();
        }
      });
    },
    goLogin () {
      this.$router.push('/login')
    }, 
    register({ close }) {
      this.$refs.CustomFormRef._proxy("validate", (isPass) => {
        if (isPass) {
          register(this.form)
            .then(({ data }) => {
              close();
              if (data.code === 200) {
                this.$message.success("注册成功");
                this.setUserInfo(data.data);

                setTimeout(() => {
                  jumpBackPage("/");
                }, 500);
              }
            })
            .catch(() => close());
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.register {
  position: relative;
  height: 100vh;
  width: 100vw;
  background-image: url("~@/assets/img/layout/loginbg.png");
  background-size: cover;

  .register-content {
    position: absolute;
    width: px2rem(482);
    top: 50%;
    left: 70%;
    padding: px2rem(45) px2rem(75) px2rem(68);
    transform: translate(-50%, -50%);
    background: white;
  }

  .register-title {
    text-align: center;
    color: $darkPrimaryColor;
    @include font(30, 500);
  }
}

.register-form {
  margin-top: px2rem(35);

  ::v-deep .ant-input {
    height: px2rem(52);
  }

  ::v-deep .ant-select {
    .ant-select-selection--single {
      height: px2rem(52);
    }

    .ant-select-selection__rendered {
      line-height: px2rem(52);
    }
  }

  .verify-code {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    margin-left: px2rem(11);
    height: px2rem(40);
    border-radius: px2rem(20);
    border-color: $darkPrimaryColor;
    color: $darkPrimaryColor;
  }
}

.register-operation {
  padding-top: px2rem(13);
}

.register-has {
  text-align: right;
}
</style>