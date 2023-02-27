<template>
  <div class="login">
    <div class="login-content">
      <div class="login-title">销易通</div>
      <div class="login-tab">
        <div
          :class="form.login_type === 2 ? 'active' : ''"
          @click="changeLoginType(2)"
        >
          密码登录
        </div>
        <div class="line"></div>
        <div
          :class="form.login_type === 1 ? 'active' : ''"
          @click="changeLoginType(1)"
        >
          验证码登录
        </div>
      </div>

      <div class="login-form">
        <CustomForm
          ref="CustomFormRef"
          :formItem="formItem"
          v-model="form"
          @keyup.enter="() => {}"
          :wrapperCol="{ span: 24 }"
          :rules="rules"
        >
          <template v-slot:code>
            <div class="verify-code">
              <CustomInput
                v-model="form.verify_code"
                placeholder="验证码"
              ></CustomInput>

              <CustomButton placeholder="验证码" @click="sendCode"
                >获取验证码</CustomButton
              >
            </div>
          </template>
        </CustomForm>
      </div>

      <div class="login-operation">
        <CustomButton type="sumbit" lock placeholder="验证码" @click="login"
          >登录</CustomButton
        >
        <div class="login-sum-operation">
          <span @click="goRegister">注册</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

import { jumpBackPage } from "@/utils/index.js";

import { login, sendCode } from "@/api/system/system.js";

export default {
  name: "Login",
  data() {
    return {
      rules: {
        mobile: [
          {
            required: true,
            message: "用户名必填!",
          },
          {
            type: "phone",
          },
        ],
        verify_code: {
          required: true,
          message: "验证码必填!",
        },
        password: {
          required: true,
          message: "密码必填!",
        },
      },
      passwordRef: '',
      form: {
        mobile: "",
        verify_code: "", // 验证码
        password: "", // 密码
        login_type: 2, // 1|验证码登录，2|密码登录
      },
      formItem: [
        {
          field: "mobile",
          type: "customInput",
          attrs: {
            placeholder: "用户名",
          },
          events: {
            keyup: function (event) {
              if (event.keyCode === 13) {
                const dom = this.passwordEl.getElementsByTagName('input')
                dom[0] && dom[0].focus()
              }
            }.bind(this)
          }
        },
        {
          field: "password",
          type: "a-input-password",
          hidden: false,
          attrs: {
            placeholder: "密码",
            ref: function (vm) {
              this.passwordEl = vm && vm.$el
            }.bind(this)
          },
          events: {
            keyup: function (event) {
              if (event.keyCode === 13) {
                this.login({})
              }
            }.bind(this)
          }
        },
        {
          field: "verify_code",
          hidden: false,
          slot: "code",
        },
      ],
    };
  },
  created() {
    this.changeLoginType(this.form.login_type);
  },
  components: {},
  methods: {
    ...mapMutations({
      setUserInfo: "setUserInfo",
    }),
    sendCode() {
      this.$refs.CustomFormRef._proxy("validateField", "mobile", (isErr) => {
        if (!isErr) {
          sendCode({
            mobile: this.form.mobile,
            send_type: "admin_login",
          }).then(({ data }) => {
            if (data.code === 200) {
              this.$message.success("发送成功");
            }
          });
        }
      });
    },
    goRegister() {
      this.$router.push("/register");
    },
    login({ close }) {
      this.$refs.CustomFormRef._proxy("validate", (isPass) => {
        if (isPass) {
          login(this.form)
            .then(({ data }) => {
              if (data.code === 200) {
                this.$message.success("登录成功");
                this.setUserInfo(data.data);

                setTimeout(() => {
                  jumpBackPage("/");
                }, 500);
              }
              close && close();
            })
            .catch(() => close());
        } else {
          close && close();
        }
      });
    },
    changeLoginType(type) {
      this.form.login_type = type;
      if (this.form.login_type === 2) {
        this.formItem[2].hidden = true;
        this.formItem[1].hidden = false;
      } else {
        this.formItem[2].hidden = false;
        this.formItem[1].hidden = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  position: relative;
  height: 100vh;
  width: 100vw;
  background-image: url("~@/assets/img/layout/loginbg.png");
  background-size: cover;

  .login-content {
    position: absolute;
    width: px2rem(482);
    top: 50%;
    left: 70%;
    padding: px2rem(45) px2rem(75) px2rem(68);
    transform: translate(-50%, -50%);
    background: white;
  }

  .login-title {
    text-align: center;
    color: $darkPrimaryColor;
    @include font(34, 500);
  }

  .login-tab {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: px2rem(54);

    div {
      position: relative;
      color: $moreLightFontColor;
      cursor: pointer;
      user-select: none;
      @include font(20, 500);
    }

    .line {
      width: px2rem(2);
      height: px2rem(20);
      background: #d8d8d8;
      border-radius: 2px;
    }

    .active {
      color: $darkPrimaryColor;
    }

    .active::after {
      content: "";
      position: absolute;
      bottom: px2rem(-6);
      left: 50%;
      width: px2rem(30);
      height: px2rem(2);
      background: $darkPrimaryColor;
      border-radius: 2px;
      transform: translateX(-50%);
    }
  }
}

.login-form {
  margin-top: px2rem(54);

  ::v-deep .ant-input {
    height: px2rem(52);
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

.login-operation {
  padding-top: px2rem(13);

  .login-sum-operation {
    display: flex;
    justify-content: space-between;
    margin-top: px2rem(35);
    color: #007fe1;
    cursor: pointer;
    @include font(18);
  }
}
</style>