<template>
  <CustomModal
    :title="params.department_id ? '编辑部门' : '添加部门'"
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
import { editDepartment, addDepartment } from "@/api/setting/department.js";

let formModal = {
  department_name: "",
};

export default {
  data() {
    return {
      confirmLoading: false,
      visible: false,
      form: Object.assign({}, formModal),
      rules: {
        department_name: [
          {
            required: true,
          },
        ],
      },
      formItem: [
        {
          label: "部门名称",
          field: "department_name",
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

          let request = addDepartment;
          if (this.params.department_id) {
            request = editDepartment;
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
