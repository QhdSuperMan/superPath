<template>
  <div class="balance">
    <div class="balance-total">
      <span>账户余额</span>
      <span class="balance-primary">162.23</span>
      <span class="balance-unit">元</span>

      <CustomButton type="primary" @click="goCharge">充值记录</CustomButton>
      <CustomButton type="primary" @click="goRecord">消费记录</CustomButton>
    </div>

    <div class="balance-package">
      <a-row :gutter="[50, 20]">
        <a-col :span="6" v-for="(val, key) in balancePackageList" :key="key">
          <div
            :class="[
              'balance-package-item',
              active === key ? 'balance-package-item-active' : '',
            ]"
            @click="active = key"
          >
            <div class="balance-package-title">1000</div>
            <div class="balance-package-container">
              <div class="balance-package-original-price">原价1300元</div>
              <div class="balance-package-price">现价1000元</div>
              <div class="balance-package-count">17000条</div>
              <div class="balance-package-count">(0.06元/条)</div>
              <div class="balance-package-btn">立即充值</div>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      balancePackageList: new Array(8).fill("").map((val) => {
        return {
          name: "张三",
          progress: 10,
        };
      }),
    };
  },
  methods: {
    goCharge() {
      this.$router.push("/setting/charge");
    },
    goRecord() {
      this.$router.push("/setting/consumption");
    },
  },
};
</script>

<style lang="scss" scoped >
.balance-total {
  display: flex;
  align-items: center;
  height: px2rem(90);
  margin-top: px2rem(47);
  padding-left: px2rem(41);
  font-size: px2rem(18);
  font-weight: 400;
  color: $moreLightFontColor;
  box-shadow: 0px 7px 19px 0px rgba(131, 131, 131, 0.07);
  border-radius: 1px;

  .balance-primary {
    margin-left: px2rem(23);
    font-size: px2rem(36);
    font-weight: bold;
    color: $darkFontColor;
  }

  .balance-unit {
    margin: 0 px2rem(87) 0 px2rem(8);
    font-size: px2rem(18);
    font-weight: bold;
    color: $moreLightFontColor;
  }

  button {
    margin-right: px2rem(24);
  }
}

.balance-package {
  margin-top: px2rem(22);

  .balance-package-item {
    box-sizing: border-box;
    border: 1px solid $primaryColor;
    border-radius: px2rem(20);
    padding: 0 px2rem(25);
  }

  .balance-package-title {
    height: px2rem(83);
    line-height: px2rem(83);
    font-size: px2rem(28);
    font-weight: 800;
    color: $darkFontColor;
    text-align: center;
  }

  .balance-package-container {
    text-align: center;
    border-top: 1px solid rgba(91, 139, 255, 0.3);
    padding: px2rem(40) 0 px2rem(20);

    .balance-package-original-price {
      font-size: px2rem(18);
      font-weight: 400;
      text-decoration: line-through;
      color: $moreLightFontColor;
    }

    .balance-package-price {
      margin: px2rem(8) 0 px2rem(22) 0;
      font-size: 20px;
      font-weight: 800;
      color: $redColor;
    }

    .balance-package-count {
      font-size: px2rem(18);
      font-weight: 400;
      color: $darkFontColor;
      line-height: px2rem(26);
    }

    .balance-package-btn {
      width: px2rem(120);
      height: px2rem(44);
      margin: px2rem(33) auto 0;
      line-height: px2rem(44);
      background: $SuccessBgColor;
      border-radius: px2rem(22);
      color: $primaryColor;
      text-align: center;
    }
  }
  .balance-package-item-active {
    box-shadow: 0px 7px 7px 0px rgba(92, 137, 246, 0.13);
    border-color: transparent;
    .balance-package-btn {
      color: white;
      background: linear-gradient(90deg, #26e0e9 0%, #5e86f7 100%);
    }
  }
}
</style>