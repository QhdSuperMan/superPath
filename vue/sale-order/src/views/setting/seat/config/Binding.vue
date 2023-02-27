<template>
  <CustomModal
    :title="isChange ? '变更坐席' : '绑定座席'"
    :visible="visible"
    :confirm-loading="confirmLoading"
    @cancel="handleCancel"
    @ok="ok"
  >
    <CustomForm
      ref="CustomFormRef"
      :formItem="formItem"
      v-model="form"
      :rules="rules"
    />
  </CustomModal>
</template>

<script>
import { bind, change } from "@/api/setting/seat.js";

export default {
  data() {
    return {
      confirmLoading: false,
      visible: false,
      form: {
        staff_id: "",
      },
      rules: {
        staff_id: [
          {
            required: true,
          },
        ],
      },
      isChange: false,
      formItem: [
        {
          label: "员工",
          field: "staff_id",
          type: "customSelect",
          attrs: {
            allKey: false,
            api: "getNotBindStaffList",
            returnStr: 'data.data',
            config: { value: "staff_id", label: "staff_name" },
          },
        },
      ],
    };
  },

  watch: {
    value: {
      handler(newVal) {
        this.visible = newVal;
        if (this.row.staff_id) {
          this.isChange = true
        }
      },
      immediate: true,
    },
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    row: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  methods: {
    ok() {
      this.$refs.CustomFormRef._proxy("validate", (status) => {
        if (status) {
          let params = {
            seat_id: this.row.seat_id,
            staff_id: this.form.staff_id,
          };
          this.confirmLoading = true;

          let API = bind

          if (this.isChange) {
            API = change
          }

          API(params)
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
</style>
