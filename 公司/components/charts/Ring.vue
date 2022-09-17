<template>
  <div ref="chartContainer" chart-ring :class="$style['chart-ring']">
  </div>
</template>

<script>
import VueTypes from 'vue-types'

import { toRaw } from 'vue'
import * as echarts from 'echarts/core'
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
    mobile: VueTypes.bool.def(false),
    lineWidth: VueTypes.number.def(10),
    color: VueTypes.string.def('#4285F4'),
    shadowColor: VueTypes.string.def('rgba(92, 134, 255, 0.25)'),
    isTitleShow: VueTypes.bool.def(true),
    isDetailShow: VueTypes.bool.def(true)
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
          radius: this.mobile ? '100%' : '95%',
          progress: {
            show: true,
            overlap: false,
            roundCap: true,
            clip: false,
            itemStyle: {
              borderWidth: 0,
              shadowColor: this.shadowColor,
              shadowBlur: this.mobile ? 0 : 6,
              color: this.color
              // color: {
              //   type: 'linear',
              //   x: 0,
              //   y: 0,
              //   x2: 0,
              //   y2: 1,
              //   colorStops: [{
              //     offset: 0, color: '#95BBFF' // 0% 处的颜色
              //   }, {
              //     offset: 1, color: '#5C86FF' // 100% 处的颜色
              //   }],
              //   global: false // 缺省为 false
              // }
            }
          },
          axisLine: {
            lineStyle: {
              width: this.mobile ? 5 : this.lineWidth,
              color: [
                [1, '#E9EAED']
              ]
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
              value: this.progress.toFixed(1),
              name: `总分${this.total}`,
              title: {
                show: this.isTitleShow,
                offsetCenter: this.mobile ? ['0%', '40%'] : ['0%', '36%']
              },
              detail: {
                show: this.isDetailShow,
                offsetCenter: this.mobile ? ['0%', '-13%'] : ['0%', '-9%']
              }
            }
          ],
          title: {
            color: '#888',
            fontSize: this.mobile ? 11 : 13
          },
          detail: {
            show: true,
            fontSize: this.mobile ? 20 : 46,
            fontWeight: 400,
            fontFamily: 'PingFangSC-Medium, PingFang SC',
            color: '#4285F4'
          }
        }]
      }
    }
  },
  watch: {
    progress (val, oldVal) {
      if (val !== oldVal) {
        this.option.series[0].data[0].value = val.toFixed(1)
        let progressChart = toRaw(this.chart)
        this.$nextTick(() => {
          progressChart.setOption(this.option)
        })
      }
    },
    total (val, oldVal) {
      if (val !== oldVal) {
        this.option.series[0].data[0].name = `总分${val}`
        let totalchart = toRaw(this.chart)
        this.$nextTick(() => {
          totalchart.setOption(this.option)
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
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
