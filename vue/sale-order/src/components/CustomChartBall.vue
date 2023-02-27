
<template>
  <div class="custom-chart">
    <div class="custom-chart" :id="id"></div>
    <div v-show="false">
      {{ selfOption.toString() }}
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts/core";
import "echarts-liquidfill";
import { LegendComponent } from "echarts/components";
echarts.use([LegendComponent]);

import { mergeConfig } from "@/utils/";


export default {
  data() {
    return {
      id: Math.random().toString(36).slice(2), // 生成随机id
    };
  },
  props: {
    options: {
      type: Object,
      default: () => {
        return {};
      },
    },
    name: {
      type: String,
      default: "",
    },
    data: {
      type: Array,
      default: () => [0.6],
    },
    title: {
      type: String,
      default: "",
    },
    color: {
      type: Array,
      default: () => ["rgba(0, 153, 153, 1)"],
    },
  },
  computed: {
    selfOption() {
      let config = this.init();
      this.renderChart(config);
      return config;
    },
  },
  mounted() {
    this.myChart = echarts.init(document.getElementById(this.id));
    this.renderChart(this.init());
  },
  methods: {
    init() {
      return mergeConfig(
        {
          title: {
            text: this.title,
            show: true,
            left: "50%",
            textAlign: "center",
            textStyle: {
              fontSize: 12,
            },
            bottom: 0,
          },
          legend: {
            bottom: 0,
          },
          series: [
            {
              type: "liquidFill",
              data: this.data,
              color: this.color,
              radius: "80%",
              label: {
                fontSize: 20,
              },
              itemStyle: {
                width: 150,
              },
              outline: {
                borderDistance: 0,
                itemStyle: {
                  borderWidth: 1,
                  borderColor: this.color[0],
                  // shadowBlur: 20,
                  // shadowColor: 'rgba(255, 0, 0, 1)'
                },
              },
              backgroundStyle: {
                borderWidth: 1,
                color: "white",
              },
            },
          ],
        },
        this.options
      );
    },
    renderChart(config) {
      if (this.myChart) {
        this.myChart.setOption(config);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-chart {
  height: 100%;
  width: 100%;
}
</style>