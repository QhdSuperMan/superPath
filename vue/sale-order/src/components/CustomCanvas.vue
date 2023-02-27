<template>
  <div class="custom-chart">
    <a-card :title="title" v-if="title">
      <template v-for="(index, name) in $slots" :slot="name">
        <slot :name="name" />
      </template>
      <div class="custom-chart">
        <div class="custom-chart" :id="id"></div>
        <div v-show="false">
          {{ selfOption.toString() }}
        </div>
      </div>
    </a-card>

    <div class="custom-chart" v-else>
      <div class="custom-chart" :id="id"></div>
      <div v-show="false">
        {{ selfOption.toString() }}
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts/core";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  DataZoomComponent
} from "echarts/components";
import { BarChart, LineChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

import { mergeConfig } from "@/utils/";
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  BarChart,
  CanvasRenderer,
  LineChart,
  DataZoomComponent,
]);

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
    title: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "bar",
    },
    xAxis: {
      type: Array,
      default: () => ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    },
    data: {
      type: Array,
      default: () => [18203, 23489, 29034, 104970, 131744, 630230, 630230],
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
    let vm = this;
    this.myChart = echarts.init(document.getElementById(this.id));
    window.addEventListener("resize", function () {
      vm.renderChart(vm.selfOption);
    });

    setTimeout(() => {
      this.myChart.resize();
    }, 50);

    this.renderChart(this.init());

  },
  methods: {
    init() {
      let config = mergeConfig(
        {
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
          },
          legend: {
            bottom: 0,
          },
          grid: {
            top: "10%",
            left: "10%",
            right: "4%",
            bottom: "15%",
          },
          xAxis: {
            data: this.xAxis,
            axisLabel: {
              fontSize: 12,
              interval: 0,
            },
          },
          yAxis: {
            type: "category",
            type: "value",
          },
        },
        this.options
      );
      let obj = {
        name: this.title || this.name,
        type: this.type,
        data: this.data,
        itemStyle: {
          color: "#64cdd8",
        },
        emphasis: {
          itemStyle: {
            color: "#4d8cff",
            borderColor: "transparent",
          },
        },
        label: {
          show: true,
          position: "top",
        },
      };

      if (Array.isArray(config.series)) {
        config.series = config.series.map((val) => {
          return Object.assign({}, obj, val);
        });
      } else {
        config.series = [obj];
      }

      return config;
    },
    renderChart(config) {
      // if (document.getElementById(this.id)) {
      //   this.myChart = echarts.init(document.getElementById(this.id));
      // }

      if (this.myChart) {
        this.myChart.setOption(config, true);
        this.myChart.resize();
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