<template>
  <div class="list-common-style-container">
    <div class="search-input">
      <div class="search-input-label">统计时间</div>
      <CustomSelect
        v-model="form.date_range"
        customType="search"
        :options="options"
        :allKey="false"
        @change="search"
      />
    </div>

    <div class="data-center-card-container">
      <div class="data-center-card-item">
        <div>
          <img :src="require('@/assets/img/data-center/phone.png')" alt="" />
        </div>
        <div>
          <p class="card-time">订单量(个)</p>
          <p class="card-num">{{ dataInfo.order_count | money }}</p>
        </div>
      </div>

      <div class="data-center-card-item">
        <div>
          <img :src="require('@/assets/img/data-center/phone.png')" alt="" />
        </div>
        <div>
          <p class="card-time">订单金额(元)</p>
          <p class="card-num">{{ dataInfo.order_price | money }}</p>
        </div>
      </div>

      <!-- <div class="data-center-card-item">
        <div>
          <img :src="require('@/assets/img/data-center/phone.png')" alt="" />
        </div>
        <div>
          <p class="card-time">总客户量(个)</p>
          <p class="card-num">12456</p>
        </div>
      </div> -->
    </div>

    <div class="data-center-canvas">
      <a-row :gutter="[40, 40]">
        <a-col :span="12">
          <CustomCanvas
            title="订单量统计"
            type="line"
            :data="orderCountData"
            :options="canvasOptions"
            :xAxis="xAxis"
          />
        </a-col>
        <a-col :span="12">
          <CustomCanvas
            title="订单金额统计"
            type="line"
            :options="canvasOptions"
            :data="orderPriceData"
            :xAxis="xAxis"
          />
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import CustomCanvas from "@/components/CustomCanvas.vue";

import { getOrderStatistics } from "@/api/home/statistics.js";

import { getDateRange } from '@/utils/date.js'

export default {
  name: "resource-management-My",
  data() {
    return {
      form: {
        date_range: 32,
      },
      dataInfo: {
        order_count: 0, //订单量
        order_price: 0, //订单金额
      },
      canvasOptions: {
        dataZoom: [
          {
            type: 'slider',
            show: true,
            startValue: 0,
            endValue: 11
          },
        ],
        grid: {
          bottom: "22%",
        },
        legend: { bottom: "10%" },
      },
      type: "bar",
      orderCountData: [],
      orderPriceData: [],
      xAxis: [],
      options: [
        {
          label: "本周统计",
          value: 32,
        },
        {
          label: "本月统计",
          value: 34,
        },
        {
          label: "本年统计",
          value: 38,
        },
      ],
    };
  },
  activated() {
    this.search();
  },
  components: {
    CustomCanvas,
  },
  methods: {
    reset() {
      this.form = Object.assign({}, formModal);
      this.search(1);
    },
    search() {
      getOrderStatistics(this.form)
        .then(({ data }) => {
          if (data.code === 200) {
            this.dataInfo = data.data

            this.orderCountData = data.data.list.map(val => val.order_count)
            this.orderPriceData = data.data.list.map(val => val.order_price)
            this.xAxis = this.dataInfo.list.map(val => val.datetime_simple)
          }
        })
        .catch(() => {
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/css/data-center.scss";
</style>