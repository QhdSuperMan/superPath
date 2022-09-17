<!--
  使用示例：
  <DoughnutChart :style="{width: '126px', height: '126px'}" :value="[3,7,2]" :color="['#F9AA6D', '#E996F2', '#87A2F9']" />
-->

<template>
  <div ref="chart" class="doughnut-chart"></div>
</template>

<script>
import * as echarts from 'echarts/core'
import { TooltipComponent, LegendComponent } from 'echarts/components'
import { PieChart } from 'echarts/charts'
import { LabelLayout } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import VueTypes from 'vue-types'

echarts.use([
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout
])

export default {
  props: {
    value: VueTypes.array.def([]), // 数据 [3,7,2]
    color: VueTypes.array.def([]), // 颜色
    resize: Boolean // 是否需要监听 resize 事件
  },
  data () {
    return {
      chart: null
    }
  },
  mounted () {
    this.init()
    this.resize && window.addEventListener('resize', this.onResize, {passive: false})
  },
  beforeUnmount () {
    this.chart.dispose()
    this.resize && window.removeEventListener('resize', this.onResize, {passive: false})
  },
  methods: {
    init () {
      const option = {
        series: [
          {
            name: '',
            type: 'pie',
            radius: ['77%', '100%'],
            avoidLabelOverlap: false,
            legendHoverLink: false,
            scale: false,
            cursor: 'pointer',
            color: this.color,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: false,
                fontSize: '40'
              },
              itemStyle: {
                color: 'inherit',
              }
            },
            labelLine: {
              show: false
            },
            itemStyle: {
              borderWidth: 1.8, // 设置border的宽度有多大
              borderColor: '#fff',
              // borderRadius: 8 
            },
            data: Array.isArray(this.value) ? this.value.map(item => ({value: item})) : [],
          }
        ]
      }

      this.chart = echarts.init(this.$refs.chart)
      this.chart.setOption(option)
    },
    onResize () {
      this.resize && this.chart.resize()
    }
  }
}
</script>
