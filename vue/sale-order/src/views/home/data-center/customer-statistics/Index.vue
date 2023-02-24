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
          <p class="card-time">总客户量(个)</p>
          <p class="card-num">{{ dataInfo.total_sum | money }}</p>
        </div>
      </div>

      <div class="data-center-card-item">
        <div>
          <img :src="require('@/assets/img/data-center/phone.png')" alt="" />
        </div>
        <div>
          <p class="card-time">今日添加(个)</p>
          <p class="card-num">{{ dataInfo.today_sum | money }}</p>
        </div>
      </div>
    </div>

    <div class="data-center-canvas">
      <CustomCanvas
        title="本周添加"
        :data="statisticalData"
        :xAxis="xAxis"
        :options="echartsOptions"
        :type="type"
      >
        <div slot="extra" href="#">
          <a-radio-group v-model="type">
            <a-radio-button value="bar"> 柱状图 </a-radio-button>
            <a-radio-button value="line"> 折线图 </a-radio-button>
          </a-radio-group>
        </div>
      </CustomCanvas>
    </div>
  </div>
</template>

<script>
import CustomCanvas from "@/components/CustomCanvas.vue";

import { getCustomerStatistics } from "@/api/home/statistics.js";

import { getDateRange } from '@/utils/date.js'

export default {
  name: "resource-management-My",
  data() {
    return {
      form: {
        date_range: 32,
      },
      type: "bar",
      statisticalData: [],
      dataInfo: {
        total_sum: 0,
        today_sum: 0,
        list: []
      },
      xAxis: [],
      echartsOptions: {
        // yAxis: { minInterval: 1, splitNumber: 5 },
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
      getCustomerStatistics(this.form)
        .then(({ data }) => {
          if (data.code === 200) {
            this.dataInfo = data.data
            this.xAxis = this.dataInfo.list.map(val => val.datetime_simple)
            this.statisticalData = data.data.list.map(val => val.customer_count)
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