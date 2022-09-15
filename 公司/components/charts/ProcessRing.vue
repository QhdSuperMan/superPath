<!--
 * @Author: 于智诚
 * @Date: 2021-09-15 19:02:39
 * @LastEditors: 于智诚
 * @LastEditTime: 2021-10-26 11:39:40
 * @description: 进度条
-->
<template>
  <div ref="chartContainer" chart-ring :class="$style['chart-ring']">
  </div>
</template>

<script>
import VueTypes from 'vue-types'

import * as echarts from 'echarts/core'
import { toRaw } from 'vue'
import {
  GaugeChart
} from 'echarts/charts'
import {
  CanvasRenderer
} from 'echarts/renderers'

echarts.use(
  [GaugeChart, CanvasRenderer]
)

export default {
  name: 'chart-ring',
  components: {
  },
  props: {
    progress: VueTypes.number.def(0),
    total: VueTypes.number.def(0),
    mobile: VueTypes.bool.def(true)
  },
  data () {
    return {
      chart: null,
      option: {
        series: [{
          type: 'gauge',
          startAngle: 90,
          endAngle: -270,
          pointer: {
            show: false
          },
          radius: '100%',
          progress: {
            show: true,
            overlap: false,
            roundCap: true,
            clip: false,
            itemStyle: {
              borderWidth: 0,
              shadowColor: 'rgba(92, 134, 255, 0)',
              shadowBlur: this.mobile ? 0 : 6,
              color: '#4285F4'
            }
          },
          axisLine: {
            lineStyle: {
              width: this.mobile ? 5 : 8,
              color: [
                [1, '#E9EAED']
              ],
              opacity: 1
            }
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false,
            distance: 50
          },
          data: [
            {
              value: this.progress,
              name: '任务进度',
              title: {
                offsetCenter: ['0%', '22%']
              },
              detail: {
                color: '#4285F4',
                offsetCenter: ['0%', '-20%'],
              },
            }
          ],
          title: {
            color: this.mobile ? '#7F848C' : '#888888',
            fontSize: this.mobile ? 10 : 13
          },
          detail: {
            formatter: '{value}%',
            borderRadius: 8,
            show: true,
            fontSize: this.mobile ? 13 : 22,
            fontWeight: 400,
            fontFamily: 'PingFangSC-Medium, PingFang SC',
            itemStyle: {
              color: this.mobile ? '#EAE9ED' : '#4285F4'
            }
          }
        }]
      }
    }
  },
  watch: {
    progress (val, oldVal) {
      if (val !== oldVal) {
        this.option.series[0].data[0].value = val.toFixed(1)
        this.$nextTick(() => {
          this.chart.setOption(this.option)
        })
      }
    },
    total (val, oldVal) {
      if (val !== oldVal) {
        this.option.series[0].data[0].name = `总分${val}`
        this.$nextTick(() => {
          this.chart.setOption(this.option)
        })
      }
    }
  },
  mounted () {
    this.initChart()
  },
  methods: {
    initChart () {
      this.chart = echarts.init(this.$refs.chartContainer)
      const chart = toRaw(this.chart)
      chart.setOption(this.option)
    }
  }
}
</script>
<style lang="scss" module>
.chart-ring {
  // width: 63px; height: 63px;
  & ::before{
    display: none;
  }
}
</style>
