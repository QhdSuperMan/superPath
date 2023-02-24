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
          <p class="card-time">总时长(min)</p>
          <p class="card-num">{{ dataInfo.total_duration }}</p>
        </div>
      </div>

      <div class="data-center-card-item">
        <div>
          <img :src="require('@/assets/img/data-center/phone.png')" alt="" />
        </div>
        <div>
          <p class="card-time">平均时长(min)</p>
          <p class="card-num">{{ dataInfo.average_duration }}</p>
        </div>
      </div>

      <div class="data-center-card-item">
        <div>
          <img :src="require('@/assets/img/data-center/phone.png')" alt="" />
        </div>
        <div>
          <p class="card-time">拨打量（个）</p>
          <p class="card-num">{{ dataInfo.total_num | money }}</p>
        </div>
      </div>

      <div class="data-center-card-item">
        <div>
          <img :src="require('@/assets/img/data-center/phone.png')" alt="" />
        </div>
        <div>
          <p class="card-time">已接通量（个）</p>
          <p class="card-num">{{ dataInfo.connect_num | money }}</p>
        </div>
      </div>

      <div class="data-center-card-item">
        <div>
          <img :src="require('@/assets/img/data-center/phone.png')" alt="" />
        </div>
        <div>
          <p class="card-time">接通率</p>
          <p class="card-num">{{ dataInfo.connect_ratio }}%</p>
        </div>
      </div>
    </div>

    <div class="data-center-canvas">
      <a-row :gutter="[40, 40]">
        <a-col :span="12">
          <CustomCanvas
            title="时长统计"
            :data="statisticalData"
            :xAxis="xAxis"
            :options="canvasOptions"
            type="line"
          />
        </a-col>
        <a-col :span="12">
          <div class="calls-volume">
            <CustomCanvas
              title="播打量统计"
              :xAxis="xAxis"
              :options="dialOptions"
            />
            <!-- <div class="connection-rate">
              <div class="connection-rate-title">接通率统计</div>
              <div class="connection-rate-content">
                <a-progress :percent="50" />
                <div>本周拨号接通率</div>
              </div>
            </div> -->
          </div>
        </a-col>
      </a-row>
    </div>

    <DurationStatistics v-model="isShowDurationStatistics" />
  </div>
</template>

<script>
import CustomCanvas from "@/components/CustomCanvas.vue";
import DurationStatistics from "./config/DurationStatistics.vue";

import { getCallStatistics } from "@/api/home/statistics.js";

import { getDateRange } from '@/utils/date.js'

let config = {
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
}

export default {
  name: "dialing-statistics",
  data() {
    return {
      form: {
        date_range: 32,
      },
      dataInfo: {
        total_duration: 0, //总时长
        average_duration: 0, //平均时长
        total_num: 0, //拨打量
        connect_num: 0, //已接通量
        connect_ratio: 0, //接通率
        total_duration_data: [],
        average_duration_data: [],
        total_num_data: [],
        connect_ratio_data: [],
      },
      isShowDurationStatistics: false,
      statisticalData: [],
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
  computed: {
    canvasOptions() {
      return Object.assign({}, config, {
        series: [
          {
            name: "总时长",
            type: 'line',
            data: this.dataInfo.total_duration_data,
          },
          {
            name: "平均时长",
            type: 'line',
            data: this.dataInfo.average_duration_data,
          },
        ],
      })
    },

    dialOptions() {
      return Object.assign({}, config, {
        series: [
          {
            name: "拨打量（个）",
            data: this.dataInfo.total_num_data,
          },
          {
            name: "已接通量（个）",
            data: this.dataInfo.connect_ratio_data,
          },
        ],
      })
    }
  },
  components: {
    CustomCanvas,
    DurationStatistics,
  },
  methods: {
    reset() {
      this.form = Object.assign({}, formModal);
      this.search(1);
    },
    search() {
      getCallStatistics(this.form)
        .then(({ data }) => {
          if (data.code === 200) {
            this.dataInfo = data.data
            this.dataInfo.total_duration_data = data.data.list.map(val => val.total_duration)
            this.dataInfo.average_duration_data = data.data.list.map(val => val.average_duration)
            this.dataInfo.total_num_data = data.data.list.map(val => val.total_num)
            this.dataInfo.connect_ratio_data = data.data.list.map(val => val.connect_ratio)

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

// .calls-volume {
//   ::v-deep .custom-chart {
//     // height: px2rem(434);
//   }
// }

// .connection-rate {
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   height: 100px;
//   margin-top: px2rem(200);
//   padding: 0 px2rem(60);
//   border: 1px solid #f2f3f5;
//   box-shadow: 3px 3px 12px 0px rgba(228, 228, 228, 0.5);
//   border-radius: px2rem(9);

//   .connection-rate-title {
//     font-size: px2rem(22);
//     font-weight: bold;
//     color: $darkFontColor;
//   }

//   .connection-rate-content {
//     flex: 1;
//     margin-left: px2rem(50);
//     font-size: px2rem(16);
//     color: $darkFontColor;
//   }

//   ::v-deep .ant-progress-bg {
//     background: linear-gradient(90deg, #5a37e8 0%, #b281fe 100%);
//   }
// }
</style>