<template>
  <div class="call-phone">
    <img
      :src="require('@/assets/img/layout/phone.png')"
      alt=""
      @click="openPhoneCall"
    />

    <a-modal
      title="拨号盘"
      :visible="visible"
      :footer="null"
      width="420px"
      @cancel="visible = false"
    >
      <div class="call-phone-container">
        <div class="call-phone-int">
          <input
            ref="input"
            autofocus
            type="text"
            placeholder="输入手机号"
            :value="phone"
            @input="(el) => (phone = el.target.value)"
          />
        </div>

        <a-row :gutter="[25, 25]">
          <a-col :span="8" v-for="(val, key) in phoneList" :key="key">
            <div
              type="link"
              v-if="val !== ''"
              @click="phoneClick(val)"
              :class="val === 'del' ? 'del-img' : 'call'"
            >
              <img
                :src="require(`@/assets/img/layout/phone/${val}.png`)"
                alt=""
              />
            </div>
          </a-col>
        </a-row>
      </div>
      <div class="loading" v-if="loading">
        <a-spin />
      </div>
    </a-modal>
  </div>
</template>

<script>
import { dialing } from "@/api/system/system.js";
import { customValidator } from "@/utils/customValidator.js";
export default {
  data() {
    return {
      phone: "",
      visible: false,
      loading: false,
      phoneList: [1, 2, 3, 4, 5, 6, 7, 8, 9, "＊", 0, "#", "", "call", "del"],
    };
  },
  methods: {
    openPhoneCall() {
      this.visible = true;
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
    phoneClick(val) {
      if (!isNaN(val)) {
        this.phone += val;
      } else if (val === "del") {
        this.phone = this.phone.slice(0, -1);
      } else if (val === "call") {
        customValidator("phone", { value: this.phone }, (err) => {
          if (err) {
            this.$message.error(err);
          } else {
            this.loading = true
            dialing({
              call_type: 1,
              contact_mobile: this.phone
            })
              .then(({ data }) => {
                if (data.code === 200) {
                  this.$message.success(data.msg);
                }
                this.loading = false
              })
              .catch(() => {
                this.loading = false
              });
          }
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.call-phone {
  position: fixed;
  right: 0;
  bottom: px2rem(0);
  cursor: pointer;
  z-index: 1000;

  img {
    width: px2rem(100);
  }
}

.call-phone-container {
  position: relative;
  text-align: center;
  img {
    width: px2rem(81);
    cursor: pointer;
  }

  .del-img {
    display: block;
    margin: auto;
    height: px2rem(81);
    line-height: px2rem(110);

    img {
      width: px2rem(36);
    }
  }

  .call-phone-int {
    margin: px2rem(40) 0 px2rem(60);

    input {
      display: block;
      width: 100%;
      border: none;
      font-size: px2rem(30);
      font-weight: bold;
      color: $darkFontColor;
      text-align: center;
    }

    input::input-placeholder {
      font-size: px2rem(20);
    }
  }
}

.loading {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>