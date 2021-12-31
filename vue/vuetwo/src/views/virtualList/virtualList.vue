<!--
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-12-22 15:32:23
 * @LastEditTime: 2021-12-22 16:12:10
 * @info: 描述
-->
<template>
  <div>
    <div v-if="items.length">
      <virtual-list style="height: 360px; overflow-y: auto;" data-key="order_id" :data-sources="items" :data-component="itemComponent" />
    </div>
  </div>
</template>

<script>
import Item from "./Item";
import VirtualList from "vue-virtual-scroll-list";

export default {
  name: "root",
  data() {
    return {
      itemComponent: Item,
      items: [],
    };
  },
  components: { "virtual-list": VirtualList },
  created() {
    this.$axios({
      method: "get",
      url: "https://test-www.taijierp.com/v2/sales/SalesOrder/getSalesOrderList",
      params: {
        is_erp: 4,
        auditor_status: 0,
        company_id: 10067,
        page: 1,
        per_page: 500,
        sign: "f2a2c9e419e380ba6045e3866e9e1c4a",
      },
      headers: {
        token: "cdce9eb563900ca718dda0c7b4dd5a60",
      },
    }).then((val) => {
      this.items = val.data.data.data;
      console.log(this.items);
    });
  },
};
</script>