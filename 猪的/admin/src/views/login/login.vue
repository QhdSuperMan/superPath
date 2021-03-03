<template>
  <div class="login">
    <div class="flex_center">
      <div class="login_top_text">
        <!-- <img src="../../assets/image/logintoptext.png" alt /> -->
      </div>
      <div class="dialog" v-if="loginType">
        <div class="input loginzfzh">
          <el-input
            v-model="value"
            placeholder="请输入执法证号"
            style="background-color:transparent"
            autocomplete="off"
          ></el-input>
        </div>
        <div class="input loginpassword">
          <el-input
            v-model="password"
            placeholder="请输入密码"
            style="background-color:transparent"
            show-password="ture"
            autocomplete="off"
          ></el-input>
        </div>
        <div
          :class="value != '' && password != '' ? 'determine' : 'determineNo'"
          @click="homeSkip"
        >登录</div>
      </div>
    </div>
    <div class="login_back_bottom">
      <!-- <img src="../../assets/image/loginBackbottom.png" alt /> -->
    </div>
  </div>
</template>

<script>
// import api from "@/api/api.js";
// import { get, post } from "@/api/index.js";
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      loginType: true,
      ImageArr: {},
      value: "",
      phone2: "",
      phoneSms: "",
      password: "",
      password2: "",
      graphics: "",
      countdownHtml: "获取验证码",
      times: 60
    };
  },

  methods: {
    getCurrentUserInfo() {
      post(api.getCurrentUserInfo, {
        token: localStorage.getItem("token")
      }).then(
        d => {
          console.log(d.data.name, "dddddddddddd123");
          this.setnameAdmin(d.data);
          localStorage.setItem("uid", d.data.uid);
          localStorage.setItem("zfzh", d.data.zfzh);
          // localStorage.setItem("name", d.data.name);
          // this.ruleForm.uid = d.data.uid;
          // console.log(this.ruleForm.uid);
        },
        err => {
          //error callback
        }
      );
    },
    ...mapMutations({
      setnameAdmin: "setnameAdmin"
    }),
    homeSkip() {
      var pattern = /^[0-9a-zA-Z]{0,8}$/;
      // message: "账号只能输入字母或数字",
      if (this.value == "") {
        this.$message.error("请输入用户名");
        return;
      } else if (!pattern.test(this.value)) {
        this.$message.error(
          "账号必须由字母或数字或字母、数字组合,请输入0-8位！"
        );
        return;
      }

      var passwordreg = /(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,16}/;
      if (this.password == "") {
        this.$message.error("请输入密码");
        return;
      } else if (!passwordreg.test(this.password)) {
        this.$message.error(
          "密码必须由数字、字母、特殊字符组合,请输入8-16位！"
        );
        return;
      }
      //         var regMoblie = /^1[345678]\d{9}$/;
      //         if(!regMoblie.test(this.phone)) {
      //            this.$message.error('该手机号格式错误')
      //            return;
      //         }

      post(api.login, {
        username: this.value,
        password: this.password
        // captchaKey: this.ImageArr.key,
        // captchaCode: this.graphics
      }).then(
        d => {
          console.log(d, 1);
          if (d.code == 200) {
            // this.$message({
            //   message: "登录成功",
            //   type: "success"
            // });
            localStorage.setItem("token", d.data.token);
            this.getCurrentUserInfo();
            this.$router.push({ path: "/" });

            // this.$message({
            //   message: "登录成功",
            //   type: "success"
            // });

            // localStorage.setItem('loginPhone', this.phone);
            // this.$router.push(this.$route.query.redirect);
          } else if (d.code == "-201") {
            // localStorage.setItem("token", '5487be98fad864550bcf5c727ba7dfc5');
            this.$message({
              message: d.msg,
              type: "success"
            });
            // this.$router.push({ path: "/" });
          } else {
            this.$message.error(d.msg);
          }
          console.log(d);

          //success callback
        },
        err => {
          this.$message.error("数据异常!");
          console.log(err.data.msg);
          //error callback
        }
      );
    },
    captchaPost() {
      //   图片验证码
      post(api.captcha, {
        width: 81,
        height: 36
      }).then(
        d => {
          console.log(d, "图片");
          if (d.status === 0) {
            this.ImageArr = d.data;
          } else {
            return console.log(d.msg);
          }
        },
        err => {
          //error callback
        }
      );
    },
    validationSms(moblie) {
      if (this.times != 60) {
        return;
      }
      if (moblie == "") {
        this.$message.error("请输入手机号");
        return;
      }
      //   短信验证码
      var regMoblie = /^1[345678]\d{9}$/;
      if (!regMoblie.test(moblie)) {
        this.$message.error("该手机号格式错误");
        return;
      }
      post(api.smsCode, {
        mobile: moblie
      }).then(
        d => {
          console.log(d, 3);
          if (d.status == 0) {
            this.$message({
              message: "发送成功",
              type: "success"
            });
            this.countdown();
          } else {
            this.$message.error(d.msg);
          }
          //success callback
        },
        err => {
          //error callback
        }
      );
    },
    //60秒倒计时
    countdown() {
      var that = this;
      if (that.times == 0) {
        that.countdownHtml = "获取验证码";
        that.times = 60;
        return false;
      } else {
        that.countdownHtml = "" + that.times + "s";
        that.times--;
      }
      setTimeout(function() {
        that.countdown();
      }, 1000);
    }
  },
  components: {},
  mounted() {
    this.captchaPost();
  }
};
</script>

<style lang="less" scoped>
/*placeholder 修改默认颜色*/

.login {
  width: 100%;
  height: 100%;
  background: url(../../assets/image/loginBack.png) no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: left 30%;
  // background-size: auto 100%;
  box-sizing: border-box;
  position: relative;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // display: -webkit-flex;
  // -webkit-justify-content: center;
  // -webkit-align-items: center;
  .login_back_bottom {
    display: block;
    // width: 100%;
    // height: 2rem;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0;
    // background: url(../../assets/image/loginBackbottom.png) no-repeat;
    // background-size: 100% 100%;
    // position: relative;
    img {
      display: block;
      width: 100%;
      padding: 0;
    }
  }
  .flex_center {
    width: 100%;
    height: 100%;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    -webkit-flex-direction: column;
    justify-content: center;
    -webkit-justify-content: center;
    align-items: flex-end;
    -webkit-align-items: flex-end;
    .login_top_text {
      width: 36.8rem;
      margin-right: 6.2rem;
      margin-bottom: 2rem;
      img {
        display: block;
        width: 36.8rem;
      }
      // height: 0.59rem;
    }
    .dialog {
      position: relative;
      display: flex;
      display: -webkit-flex;
      flex-direction: column;
      -webkit-flex-direction: column;
      // justify-content: space-around;
      // -webkit-justify-content: space-around;
      align-items: center;
      -webkit-align-items: center;
      margin-right: 8.8rem;
      width: 31.55rem;
      height: 25.05rem;
      background: url(../../assets/image/loginbackinput.png) no-repeat;
      background-size: 100% 100%;
      .name {
        // width: 196px;
        // height: 48px;
        font-size: 26px;
        color: rgba(35, 107, 207, 1);
        text-align: left;
        font-weight: 400;
        // line-height: 160px;
      }
      .laber {
        text-align: left;
        font-size: 16px;
        // font-weight: normal;
        color: rgba(101, 101, 101, 1);
        margin: 1.1rem 0 0.7rem 0;
        font-weight: 400;
        // line-height: 160px;
      }
      .loginzfzh {
        margin-top: 5.5rem;
        background-image: url("../../assets/image/loginzfzh.png");
        background-repeat: no-repeat;
        background-size: cover;
        color: #fff;
      }
      .loginpassword {
        margin-top: 1.4rem;
        background-image: url("../../assets/image/loginpassword.png");
        background-repeat: no-repeat;
        background-size: cover;
        color: #fff;
      }
      .input {
        width: 25.85rem;
        height: 3.55rem;
        color: #fff;
        /deep/.el-input__inner:-webkit-autofill {
          -webkit-box-shadow: 0 0 0px 1000px transparent inset !important;
          background-color: transparent !important; //设置input框记住密码背景颜色
          background-image: none;
          transition: background-color 50000s ease-in-out 0s;
          -webkit-text-fill-color: #fff !important; //设置浏览器默认密码字体颜色
          color: #fff;
        }

        /deep/.el-input__inner {
          width: 25.85rem;
          height: 3.55rem;
          background-color: transparent;
          border: none;
          padding-left: 3.1rem;
          color: #fff;

          // border-radius: 39px !important;
          &::placeholder {
            color: #ccc;
          }

          &::-webkit-input-placeholder {
            /* WebKit browsers 适配谷歌 */
            color: #ccc;
          }

          &:-moz-placeholder {
            /* Mozilla Firefox 4 to 18 适配火狐 */
            color: #ccc;
          }

          &::-moz-placeholder {
            /* Mozilla Firefox 19+ 适配火狐 */
            color: #ccc;
          }

          &:-ms-input-placeholder {
            /* Internet Explorer 10+  适配ie*/
            color: #ccc;
          }
        }

        // border-radius: 6px;
        // border: 1px solid rgba(224, 224, 224, 1);
        // margin-top: 9px;
        // line-height: 52px;
        // border: 1px solid rgba(153, 153, 153, 1);
        // background: rgba(245, 245, 245, 1);
        // border-radius: 34px;
      }
      .validation {
        width: 100%;
        height: 52px;
        margin-top: 11px;
        .left {
          float: left;
          width: 257px;
          height: 52px;
          line-height: 52px;
          background: rgba(245, 245, 245, 1);
          border-radius: 6px;
          border: 1px solid rgba(224, 224, 224, 1);
        }
        .right {
          float: right;
          width: 97px;
          height: 52px;
          padding: 8px;
          box-sizing: border-box;
          background: rgba(245, 245, 245, 1);
          div {
            width: 100%;
            height: 100%;
            background-color: #fff;
            cursor: pointer;
          }
        }
        .obtain {
          float: right;
          width: 97px;
          height: 52px;
          line-height: 52px;
          text-align: center;
          background: rgba(245, 245, 245, 1);
          border-radius: 6px;
          border: 1px solid rgba(224, 224, 224, 1);
          font-size: 13px;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
          cursor: pointer;
        }
      }
      .forget {
        width: 100%;
        font-size: 13px;
        font-weight: 400;
        color: rgba(77, 194, 248, 1);
        line-height: 18px;
        text-align: right;
        padding: 11px 13px;
        box-sizing: border-box;
        cursor: pointer;
      }
      .determine {
        width: 25.85rem;
        height: 3.55rem;
        background: #ffce37;
        // border-radius: 39px;
        line-height: 3.55rem;
        text-align: center;
        font-size: 1.4rem;
        // font-weight: 600;
        color: rgba(51, 51, 51, 1);
        margin-top: 4rem;
        cursor: pointer;
      }
      .determineNo {
        width: 25.85rem;
        height: 3.55rem;
        background: #0b55d7;
        // border-radius: 39px;
        line-height: 3.55rem;
        text-align: center;
        font-size: 1.4rem;
        // font-weight: 600;
        color: #88b5ff;
        margin-top: 4rem;
        cursor: pointer;
      }
    }
  }

  .title {
    // width: 22rem;
    // height: 130px;
    font-size: 30px;
    font-weight: bold;
    color: rgba(36, 107, 207, 1);
    text-align: left;
    padding: 2rem 3.2rem;
    // background: #f00;
  }
}
</style>
<style >
/* .login .el-input > .el-input__inner {
  background-color: rgba(245, 245, 245, 1) !important;
  border: none !important;
  border-radius: 39px !important;
} */
</style>

