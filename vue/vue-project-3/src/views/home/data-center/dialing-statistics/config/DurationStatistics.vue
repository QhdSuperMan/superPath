<template>
  <CustomModal
    title="本周时长统计"
    :footer="null"
    :visible="visible"
    @cancel="handleCancel"
  >
    <CustomTable
      ref="CustomTable"
      rowKey="customer_id"
      :columns="columns"
      :isPage="false"
      :params="{
        api: getList,
        params: form,
        data: 'data',
      }"
    ></CustomTable>
  </CustomModal>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      getList: "",
      form: {},
      columns: [
        {
          title: "时间",
          dataIndex: "role_name",
          width: 120,
        },
        {
          title: "总时长",
          dataIndex: "add_time_name",
          width: 170,
        },
      ],
    };
  },

  watch: {
    value: {
      handler(newVal) {
        this.visible = newVal;
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
    handleCancel() {
      this.$emit("input", false);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
