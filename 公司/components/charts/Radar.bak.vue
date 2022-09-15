<template>
  <div ref="chartContainer" :class="$style['chart-radar']">
  </div>
</template>

<script>
import VueTypes from 'vue-types'
import * as echarts from 'echarts/core'
import {
  LegendComponent
} from 'echarts/components'
import {
  RadarChart
} from 'echarts/charts'
import {
  CanvasRenderer
} from 'echarts/renderers'

echarts.use(
  [LegendComponent, RadarChart, CanvasRenderer]
)
export default {
  name: 'chart-radar',
  components: {
  },
  props: {
    /**
     * {
     *    labels: [{text: 'xxxx'}],
     *    values: [10, 203]
     * }
     */
    data: VueTypes.shape({
      labels: VueTypes.array.def([]),
      values: VueTypes.array.def([])
    }).loose.def({
      labels: [],
      values: []
    }),
    mobile: VueTypes.bool.def(false)
  },
  data () {
    return {
      chart: null,
      option: {
        color: ['#5C86FF', 'rgb(255, 0, 59)'],
        legend: {
          show: false,
          align: 'left',
          x: 'right',
          orient: 'vertical',
          icon: 'circle',
          itemWidth: 6,
          itemHeight: 6,
          itemRadius: '50%',
          data: ['平均正确率']
        },
        radar: [
          {
            indicator: this.data.labels,
            center: this.mobile ? ['50%', '50%'] : ['50%', '50%'],
            radius: this.mobile ? '60%' : 200,
            startAngle: 90,
            splitNumber: 5,
            shape: 'circle',
            name: {
              formatter: (value, index) => {
                if (this.mobile && value.length > 6) {
                  return value.substring(0, 6) + '\n' + value.substring(6)
                }

                return value
              },
              textStyle: {
                color: '#353535',
                lineHeight: 16
              }
            },
            splitArea: {
              areaStyle: {
                color: ['rgba(255, 255, 255, 0.2)']
              }
            },
            axisLine: {
              lineStyle: {
                color: '#EFF0F2'
              }
            },
            splitLine: {
              lineStyle: {
                color: '#EFF0F2',
                type: 'solid'
              }
            }
          }
        ],
        series: [
          {
            name: '雷达图',
            type: 'radar',
            emphasis: {
              lineStyle: {
                width: 2
              }
            },
            lineStyle: {
              width: 1
            },
            data: [
              {
                value: this.data.values,
                name: '平均正确率',
                // symbol: 'triangle',
                symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAA9ElEQVQ4T6WSMUhCURSGvzNrNDuIUA+axNyiJYi24LnY5tQsDtIWBApt0RDNTW01PWiTwEXc3oMmQQRxcJZsvnLuey8uCA98nunec893/nvP/QUnjDEHwB3gA15yNAUC4ElEftNySRfGmEvgDai4zZz1HLgVkW/NWTCBBrqfLOBrDLNljByV4PoMTsp2a4ArhSW53o8qBSP4HManbmj35gX45zarylUFe8CDKj2+b0Pum+5b/8p9BSOg9vwBoY4hI+oedG9sQaSgTqrYfoHVXzZ4WIDXjq1Z7wWGwGmeq+Yejrpl9+/IbYC9LOfAqckbwHGWyTd5HXyX7h2C6QAAAABJRU5ErkJggg==',
                symbolSize: 6,
                areaStyle: {
                  opacity: 0.2
                }
              }
            ]
          }
        ]
      }
    }
  },
  watch: {
    data (data) {
      this.option.radar.indicator = data.labels
      this.option.series[0].data[0].value = data.values
      this.$nextTick(() => {
        this.chart.setOption(this.option)
      })
    }
  },
  mounted () {
    this.initChart()
  },
  methods: {
    initChart () {
      this.chart = echarts.init(this.$refs.chartContainer)
      this.chart.setOption(this.option)
    }
  }
}
</script>
<style lang="scss" module>
.chart-radar {
  position: relative;
  width: 100%; height: 461px;
  // padding: 22px 0 0;

  &:after {
    content: '';
    position: absolute; top: 24px; left: 50%;
    width: 410px; height: 410px;
    border: 1px dashed $borderGray;
    border-radius: 50%;
    // transform: translate(-206px, -197px);
    transform: translateX(-50%);
    pointer-events: none;
  }

  @include mobileInner () {
    height: 282px;

    &:after {
      display: none;
    }
  }
}
</style>
