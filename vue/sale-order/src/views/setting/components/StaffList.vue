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
    <a-tag v-for="val in data" :key="val.staff_id" color="blue">
      {{ val.staff_name }}
    </a-tag>
  </CustomModal>
</template>

<script>
import axios from "@/utils/service.js";


export default {
  data() {
    return {
      data: [],
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
    search() {
      axios({
        method: "post",
        url: this.url,
        data: this.params,
      }).then(({ data }) => {
        if (data.code === 200) {
          this.data = data.data
        }
      })
    },
  },
};
</script>

<style lang="scss" scoped></style>
