<template>
  <CustomModal
    :title="params.role_id ? '编辑角色' : '添加角色'"
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
import { addRole, editRole } from "@/api/setting/role.js";

let formModal = {
  role_name: "",
};

export default {
  data() {
    return {
      confirmLoading: false,
      visible: false,
      form: Object.assign({}, formModal),
      rules: {
        role_name: [
          {
            required: true,
          },
        ],
      },
      formItem: [
        {
          label: "角色名称",
          field: "role_name",
          type: "customInput",
        },
      ],
    };
  },

  watch: {
    value: {
      handler(newVal) {
        this.visible = newVal;

        this.form = Object.assign({}, formModal, this.params);
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
  methods: {
    ok() {
      this.$refs.CustomFormRef._proxy("validate", (status) => {
        if (status) {
          this.confirmLoading = true;

          let request = addRole;
          if (this.params.role_id) {
            request = editRole;
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
</style>
