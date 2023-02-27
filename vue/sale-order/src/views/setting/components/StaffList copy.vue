<!--
 * @Description: 
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-01-04 20:57:59
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-01-09 22:38:43
-->
<template>
  <CustomModal
    title="员工列表"
    :footer="null"
    :visible="visible"
    :width="500"
    @cancel="handleCancel"
  >
    <CustomTable
      ref="CustomTable"
      rowKey="customer_id"
      :columns="columns"
      :rowSelection="false"
      :isPage="false"
      :params="{
        api: url,
        params: params,
        data: 'data'
      }"
    ></CustomTable>
  </CustomModal>
</template>

<script>

export default {
  data() {
    return {
      columns: [
        {
          title: "员工名称",
          dataIndex: "staff_name",
          width: 120,
        },
        // {
        //   title: "手机号",
        //   dataIndex: "mobile",
        //   width: 120,
        // },
        // {
        //   title: "所属角色",
        //   dataIndex: "role_name",
        //   width: 120,
        // },
        // {
        //   title: "所属部门",
        //   dataIndex: "department_name",
        //   width: 120,
        // },
        // {
        //   title: "添加时间",
        //   dataIndex: "add_time_name",
        //   width: 170,
        // },
      ],
      visible: false,
    };
  },

  watch: {
    value: {
      handler(newVal) {
        this.visible = newVal;
        if (this.visible) {
          this.$nextTick(() => {
            this.search()
          })
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
    url: {
      type: String,
      default: '',
    },
    params: {
      type: Object,
      default: () => {
        return {
        };
      },
    },
  },
  methods: {
    handleCancel() {
      this.$emit("input", false);
    },
    search(num) {
      this.$refs.CustomTable.getData(num);
    },
  },
};
</script>

<style lang="scss" scoped></style>
