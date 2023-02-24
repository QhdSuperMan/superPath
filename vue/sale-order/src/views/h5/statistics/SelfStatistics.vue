<!--
 * @Description: 
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2023-01-09 22:45:43
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2023-02-01 21:23:47
-->
<template>
  <div class="h5-statistics">
    <div class="h5-tabs">
      <van-tabs
        v-model="active"
        background="transparent"
        color="#3caaf4"
        @change="tabsChange"
      >
        <van-tab title="拨号统计" :name="1"></van-tab>
        <van-tab title="客户统计" :name="2"></van-tab>
        <van-tab title="订单统计" :name="3"></van-tab>
      </van-tabs>
    </div>

    <div class="statistics-content">
      <div class="content-item">
        <div class="content-item-title">
          <van-dropdown-menu active-color="#3caaf4">
            <van-dropdown-item
              v-model="form.date_range"
              :options="dateTypeOption"
              @change="getData"
            />
            <van-dropdown-item
              v-if="active == 2"
              v-model="form.customer_type"
              :options="typeOption"
              @change="getData"
            />
          </van-dropdown-menu>
        </div>
        <div class="content-item-main content-canvas">
          <CustomCanvas :xAxis="xAxis" :options="canvasOptions" />
        </div>
      </div>

      <div class="content-item">
        <van-collapse v-model="activeNames" accordion>
          <van-collapse-item
            v-for="(item, key) in allData"
            :key="key"
            :name="key"
            :title="`${item.datetime}  ${item.week_name}`"
          >
            <div class="content-item-main">
              <div
                v-for="(val, key) in currentConfig"
                :key="key"
                class="item-task"
              >
                <div class="item-task-title">
                  <img :src="val.img" alt="" />
                  <div>{{ val.label }}</div>
                </div>
                <div class="item-task-value">{{ item[val.key] }}</div>
              </div>
            </div>
          </van-collapse-item>
        </van-collapse>
      </div>
    </div>
  </div>
</template>

<script>
import CustomCanvas from '@/components/CustomCanvas.vue'

import { configMixins } from './config/index'
import { getDateRange } from '@/utils/date.js'

import { getCallStatistics, getCustomerStatistics, getOrderStatistics } from '@/api/h5/SelfStatistics.js'

export default {
  mixins: [configMixins],
  data() {
    return {
      active: 1,
      activeNames: [],
      dateTypeOption: [
        {
          text: "本周统计",
          value: 32,
        },
        {
          text: "本月统计",
          value: 34,
        },
        {
          text: "本年统计",
          value: 38,
        },
      ],
      typeOption: [
        { text: '全部', value: '' },
        { text: 'A类', value: 1 },
        { text: 'B类', value: 2 },
        { text: 'C类', value: 3 },
        { text: 'D类', value: 4 },
      ],
      allData: [],
      form: {
        date_range: 32,
        customer_type: ''
      }
    }
  },
  computed: {
    xAxis() {
      if (this.form.date_range === 32) {
        return getDateRange('week')
      } else if (this.form.date_range === 34) {
        return getDateRange('month')
      } else {
        return getDateRange('year')

      }
    },
    canvasOptions() {
      return {
        dataZoom: [
          {
            type: 'slider',
            show: true,
            startValue: 0,
            endValue: 7
          },
        ],
        series: this.canvasSeries,
        grid: {
          bottom: this.canvasSeries.length > 3 ? "33%" : "25%",
          left: '15%'
        },
        legend: { bottom: "12%" },
      }
    }
  },
  components: {
    CustomCanvas
  },
  created() {
    this.getData()
  },
  methods: {
    tabsChange() {
      this.form.date_range = 32
      this.getData()
    },
    getData() {

      let http = getCallStatistics
      let params = {
        date_range: this.form.date_range,
        
      }

      if (this.active === 2) {
        http = getCustomerStatistics
        params.customer_type = this.form.customer_type
      } else if (this.active === 3) {
        http = getOrderStatistics
      }


      http(params)
        .then(({ data }) => {
          if (data.code === 200) {
            this.allData = data.data
            this.renderEcharts(data.data)
          }
        })
        .catch(() => {
          this.confirmLoading = true;
        });
    },
  }
}
</script>

<style lang="scss" scoped>
.h5-statistics {
  .h5-tabs {
    ::v-deep .van-tabs {
      .van-tab--active .van-tab__text {
        font-weight: 800;
        color: $darkFontColor;
      }
    }
  }

  .statistics-content {
    padding: px2rem(20) px2rem(32);

    .content-item {
      overflow: hidden;
      margin-bottom: px2rem(20);
      background: #ffffff;
      box-shadow: 0px 0px 46px 0px rgba(41, 115, 248, 0.09);
      border-radius: px2rem(20);
    }

    .content-item-title {
      height: px2rem(90);
    }

    .content-canvas {
      // height: px2rem(456);
      height: px2rem(700);
    }

    .item-task {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: px2rem(100);
      padding: 0 px2rem(41);
    }

    .item-task-title {
      display: flex;
      align-items: center;
      justify-content: space-between;

      img {
        margin-right: px2rem(22);
        width: px2rem(50);
        height: px2rem(50);
      }
    }

    .item-task-value {
      font-size: px2rem(28);
      font-weight: bold;
      color: $darkFontColor;
    }
  }
}
</style>