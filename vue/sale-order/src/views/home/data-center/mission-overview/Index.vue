<template>
  <div class="list-common-style-container">
    <div class="search-input">
      <CustomForm
        ref="CustomFormRef"
        layout="inline"
        :formItem="formItem"
        v-model="form"
      >
        <template v-slot:code>
          <CustomButton type="primary" @click="search(1)">查询</CustomButton>
          <CustomButton @click="reset">重置</CustomButton>
        </template>
      </CustomForm>
    </div>

    <!-- <div class="list-common-card">
      <a-card title="部门总览" :bordered="false">
        <div class="department-overview">
          <a-row>
            <a-col :span="12">
              <div class="department-overview-chart">
                <div>
                  <a-progress
                    type="circle"
                    :percent="100"
                    :strokeColor="{
                      0: '#26E0E9',
                      100: '#5E86F7',
                    }"
                  >
                    <template #format="percent">
                      <span class="department-overview-label">完成度</span>
                      <br />
                      <span class="department-overview-value-primary">{{
                        percent
                      }}</span>
                    </template>
                  </a-progress>
                </div>
                <div>
                  <a-progress
                    type="circle"
                    :percent="75"
                    :strokeColor="{
                      0: '#5433E6',
                      100: '#B584FF',
                    }"
                  >
                    <template #format="percent">
                      <span class="department-overview-label">完成度</span>
                      <br />
                      <span class="department-overview-value-primary">{{
                        percent
                      }}</span>
                    </template>
                  </a-progress>
                </div>
                <div>
                  <a-progress
                    type="circle"
                    :percent="75"
                    :strokeColor="{
                      0: '#FFBCAA',
                      100: '#FF6C44',
                    }"
                  >
                    <template #format="percent">
                      <span class="department-overview-label">完成度</span>
                      <br />
                      <span class="department-overview-value-primary">{{
                        percent
                      }}</span>
                    </template>
                  </a-progress>
                </div>
                <div class="progress-bar">
                  <p>日拨号量</p>
                  <p>日客户量</p>
                  <p>日订单量</p>
                </div>
              </div>
            </a-col>
            <a-col :span="12">
              <div class="department-overview-info">
                <div>
                  <p>
                    <span class="department-overview-label">部门名称</span>
                  </p>
                  <p class="department-overview-value">
                    <span class="department-overview-label">销售一部</span>
                  </p>
                </div>
                <div>
                  <p>
                    <span class="department-overview-label">时间</span>
                  </p>
                  <p class="department-overview-value">
                    <span class="department-overview-label">2022-11-14</span>
                  </p>
                </div>
                <div>
                  <p class="department-overview-label">拨号量/完成量</p>
                  <p class="department-overview-value">
                    <span class="department-overview-value-text">36 / </span>
                    <span class="department-overview-value-primary">66</span>
                  </p>
                </div>
                <div>
                  <p class="department-overview-label">客户量/完成量</p>
                  <p class="department-overview-value">
                    <span class="department-overview-value-text">36 / </span>
                    <span class="department-overview-value-primary">66</span>
                  </p>
                </div>
                <div>
                  <p class="department-overview-label">订单量/完成量</p>
                  <p class="department-overview-value">
                    <span class="department-overview-value-text">36 / </span>
                    <span class="department-overview-value-primary">66</span>
                  </p>
                </div>
              </div>
            </a-col>
          </a-row>
        </div>
      </a-card>
    </div> -->

    <div class="list-common-card finish-contianer">
      <a-card title="个人完成情况" :bordered="false">
        <a-row :gutter="[26, 26]">
          <a-col :span="8" v-for="(val, key) in finishList" :key="key">
            <a-card
              :title="val.staff_name"
              :class="val.finishStatus ? 'finsh-success' : ''"
            >
              <a slot="extra" href="#" class="finsh-status">
                {{ val.finishStatus ? "完成" : "未完成" }}
              </a>
              <div
                class="finish-item"
                v-for="twoVal in val.task_list"
                :key="twoVal.task_id"
              >
                <div class="department-overview-value-primary finish-item-name">
                  {{ twoVal.task_name }}
                </div>
                <div class="finish-progress">
                  <div class="finish-progress-text">
                    <span class="department-overview-value-primary"
                      >{{ twoVal.done_num }}
                    </span>
                    <span class="department-overview-value-text"
                      >/ {{ twoVal.target }}
                    </span>
                  </div>
                  <a-progress :percent="twoVal.done_ratio" :show-info="false" />
                </div>
              </div>
            </a-card>
          </a-col>
        </a-row>
      </a-card>
    </div>
  </div>
</template>

<script>
import CustomChartBall from "@/components/CustomChartBall.vue";
import { configMixins, formModal } from "./config/index";

import { getTaskOverview } from "@/api/home/data-center.js";

export default {
  name: "resource-management-My",
  mixins: [configMixins],
  data() {
    return {
      form: Object.assign({}, formModal),
      finishList: new Array(8).fill("").map((val) => {
        return {
          name: "张三",
          progress: 10,
        };
      }),
    };
  },
  activated() {
    this.search();
  },
  components: {
    CustomChartBall,
  },
  methods: {
    reset() {
      this.form = Object.assign({}, formModal);
      this.search(1);
    },
    search() {

      getTaskOverview(this.form)
        .then(({ data }) => {
          if (data.code === 200) {
            this.finishList = data.data.map((val) => {
              let status = true;
              if (val.task_list.some((task) => task.done_ratio < 100)) {
                status = false;
              }
              val.finishStatus = status; // 完成状态
              return val;
            });
          }
        })
        .catch(() => { });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/css/data-center.scss";

.department-overview {
  .department-overview-chart {
    display: flex;
    align-items: center;
    justify-content: space-around;

    .progress-bar {
      p {
        position: relative;
        margin: px2rem(17) 0;
        font-size: px2rem(16);
        font-weight: 400;
        color: $darkFontColor;
      }

      p:nth-child(1)::before {
        content: " ";
        position: absolute;
        left: px2rem(-20);
        top: 50%;
        width: px2rem(14);
        height: px2rem(14);
        background: linear-gradient(66deg, #0066ff 0%, #63e3ff 100%);
        border-radius: px2rem(3);
        transform: translateY(-50%);
      }

      p:nth-child(2)::before {
        content: " ";
        position: absolute;
        left: px2rem(-20);
        top: 50%;
        width: px2rem(14);
        height: px2rem(14);
        background: linear-gradient(66deg, #5c38e8 0%, #b383fe 100%);
        border-radius: px2rem(3);
        transform: translateY(-50%);
      }

      p:nth-child(3)::before {
        content: " ";
        position: absolute;
        left: px2rem(-20);
        top: 50%;
        width: px2rem(14);
        height: px2rem(14);
        background: linear-gradient(66deg, #ff7049 0%, #ffb8a6 100%);
        border-radius: px2rem(3);
        transform: translateY(-50%);
      }
    }
  }
  .department-overview-info {
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    padding: px2rem(22) 0;
    background-color: $BgColor;
    border-radius: px2rem(20);

    div p:first-child {
      margin-bottom: px2rem(56);
    }
  }
}
.department-overview-label {
  font-size: px2rem(18);
  font-weight: 400;
  color: $moreLightFontColor;
  line-height: px2rem(24);
}

.finish-contianer {
  ::v-deep .ant-card-head-title {
    font-size: px2rem(24);
    font-weight: bold;
  }

  .finsh-status {
    padding: px2rem(9) px2rem(18);
    background: $FailBgColor;
    border-radius: px2rem(18);
    color: $moreLightFontColor;
  }

  .finish-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: px2rem(10);

    .department-overview-value-primary {
      font-size: px2rem(19);
      font-weight: 400;
    }
    .department-overview-value-text {
      font-size: px2rem(19);
    }

    .finish-item-name {
      min-width: px2rem(120);
    }
  }

  .finish-item:first-child {
    margin-top: px2rem(0);
  }

  .finish-progress {
    flex: 1;
    margin-left: px2rem(14);
    padding-bottom: 7px;
    text-align: right;

    .finish-progress-text {
      margin-bottom: px2rem(-10);
    }

    ::v-deep .ant-progress {
      line-height: px2rem(5);

      .ant-progress-bg {
        height: px2rem(5) !important;
      }
    }
  }
  ::v-deep .ant-progress-bg {
    background-color: #29daea;
  }

  .finsh-success {
    .finsh-status {
      color: $primaryColor;
      background: $SuccessBgColor;
    }

    ::v-deep .ant-progress-bg {
      background-color: $primaryColor;
    }
  }
}

.department-overview-value-text {
  font-size: px2rem(22);
  font-weight: 400;
  color: $moreLightFontColor;
  line-height: px2rem(24);
}

.department-overview-value-primary {
  font-size: px2rem(22);
  font-weight: bold;
  color: $darkFontColor;
  line-height: px2rem(24);
}
</style>