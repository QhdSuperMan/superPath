<template>
  <CustomModal
    title="领取资源"
    :visible="visible"
    :footer="null"
    @cancel="handleCancel"
    @ok="ok"
  >
    <div class="receive-resource">
      <p class="receive-resource-primary">
        今日领取资源:<span class="receive-resource-total">{{ total }}</span
        >份
      </p>
      <p class="receive-resource-num">
        <span>你想领取</span>

        <custom-input v-model="num" :disabled="total <= 0"></custom-input>
        <CustomButton type="link" @click="num = total">(输入全部)</CustomButton>
      </p>
      <CustomButton
        lock
        type="primary"
        @click="receiveResource"
        :disabled="total <= 0"
        >立即领取</CustomButton
      >
    </div>
  </CustomModal>
</template>

<script>
import { getCanReceiveCount, receive } from "@/api/resource/resource.js";
import { customValidator } from "@/utils/customValidator.js";

export default {
  data() {
    return {
      visible: false,
      total: 0,
      num: "",
    };
  },

  watch: {
    value: {
      handler(newVal) {
        this.visible = newVal;
        this.init();
      },
      immediate: true,
    },
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    init() {
      getCanReceiveCount().then(({ data }) => {
        if (data.code === 200) {
          this.total = data.data.resource_count;
        }
      });
    },
    receiveResource({ close }) {
      let err = customValidator("numberRange", {
        value: this.num,
        min: 1,
        max: this.total,
      });
      if (err) {
        this.$message.warning(err);
        close();
      } else {
        receive({
          receive_count: this.num,
        })
          .then(({ data }) => {
            if (data.code === 200) {
              this.message.success(data.msg);
              this.handleCancel();
              this.$emit("success");
            }
            close();
          })
          .catch(() => {
            close();
          });
      }
    },
    ok() {
      this.$refs.CustomFormRef._proxy("validate", (status) => {
        if (status) {
          let params = {
            ...this.form,
            resource_id: this.params.join(","),
          };
          this.confirmLoading = true;

          let ajax = dispatch;
          if (this.type === 2) {
            ajax = transfer;
          }

          ajax(params)
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
.receive-resource {
  text-align: center;
  font-size: px2rem(18);

  .receive-resource-primary {
    color: $darkFontColor;

    .receive-resource-total {
      margin: 0 px2rem(5);
      color: $warningColor;
    }
  }

  .receive-resource-num {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: px2rem(29) 0 px2rem(51);

    ::v-deep .ant-input {
      width: px2rem(92);
      margin: 0 px2rem(16);
    }
  }
}
</style>
