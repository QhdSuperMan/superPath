<!--
 * @Description: 通用流程记录
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2022-10-25 19:34:18
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2022-11-01 16:16:43
-->
<template>
  <!-- ->流程记录  处理流程展示-->
  <div>
    <div class="detail-flow-show1">
      <div class="detail-flow-show1" v-for="(item, index) in list" :key="index">
        <div
          class="detail-flow-show1-1"
          :class="{ offTheStocks: current >= index }"
        >
          <div class="show-top">
            <img :src="item.src" alt="" />
          </div>
          <div class="show-footer">
            <span class="itemNmae">{{ item.title }}</span>
            <span v-if="current >= index" class="itemState">已完成</span>
            <span v-else class="itemStateOne">进行中</span>
            <span v-if="current >= index" class="itemTime">
              {{ item.time }}
            </span>
            <span v-else class="itemTimeOne">----</span>
          </div>
        </div>
        <div class="itemBorder" v-if="index + 1 !== list.length"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProcessRecords",
  props: {
    list: { // 配置的数据
      type: Array,
      default: () => []
    },
    value: {
      default: 0
    }
  },
  computed: {
    current() {
      return this.list.findIndex(val => val.value == this.value)
    }
  },
  data() {
    return {
      // 例子
      config: [
        {
          title: '需求提报',
          time: 'time',
          src: require('../assets/images/flow1 (1).png')
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/base.scss";
.detail-flow-show1 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: px2rem(70px);
  margin-top: px2rem(80px);
  .detail-flow-show1-1 {
    width: px2rem(14px);
    height: px2rem(14px);
    background-color: #009999;
    box-shadow: 0px 0px px2rem(7px) 0px #009999;
    border-radius: 50%;
    margin-left: px2rem(-5px);
    font-size: 0;
    position: relative;
    .show-top {
      position: absolute;
      width: px2rem(56px);
      height: px2rem(56px);
      background-color: #009494;
      top: px2rem(-87px);
      left: px2rem(-22px);
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
      }
    }

    .show-footer {
      position: absolute;
      width: px2rem(80px);
      height: px2rem(50px);
      top: px2rem(20px);
      left: px2rem(-34px);
      text-align: center;
      span {
        font-size: px2rem(12px);
        display: inline-block;
        white-space: nowrap;
        font-family: Microsoft YaHei;
      }
      .itemNmae {
        color: #262626;
        font-size: px2rem(16px);
        margin-top: px2rem(7px);
        font-family: Microsoft YaHei;
      }
      .itemState {
        color: #009999;
        font-size: px2rem(14px);
        margin-top: px2rem(7px);
      }
      .itemStateOne {
        color: #3787f9;
        font-size: px2rem(14px);
        margin-top: px2rem(7px);
      }
      .itemTime {
        color: #7d7d7d;
        font-size: px2rem(14px);
        text-align: center;
        margin-left: px2rem(-26px);
        margin-top: px2rem(7px);
      }
      .itemTimeOne {
        color: #7d7d7d;
        font-size: px2rem(14px);
        text-align: center;
        // margin-left: px2rem(-26px);
        margin-top: px2rem(7px);
        display: block;
      }
    }
  }
  .offTheStocks {
    width: px2rem(14px);
    height: px2rem(14px);
    background-color: #66bfbf;
    border-radius: 50%;
    margin-left: px2rem(-5px);
    font-size: 0;
    position: relative;
    box-shadow: none;
    .show-top {
      position: absolute;
      width: px2rem(56px);
      height: px2rem(56px);
      background-color: #009494;

      top: px2rem(-87px);
      left: px2rem(-22px);
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
        // opacity: 60%;
      }
    }
  }
  .itemBorder {
    width: px2rem(232px);
    height: 0px;
    border-top: 2px dashed;
    border-color: #009999;
  }
}
/deep/ .ant-table-wrapper {
  padding: 0 px2rem(38px) px2rem(50px) px2rem(38px);
}
/deep/ .ant-table-thead {
  .ant-table-column-title {
    font-family: Microsoft YaHei;
    color: #262626;
    font-size: px2rem(16px);
  }
}
/deep/ .ant-table-tbody {
  .ant-table-row {
    font-family: Microsoft YaHei;
    color: #7d7d7d;
    font-size: px2rem(14px);
  }
}
/deep/ .ant-btn-link {
  color: #7d7d7d;
  font-family: Microsoft YaHei;
  font-size: px2rem(14px);
}
/deep/ .ant-btn-link:hover {
  color: #009999;
  font-family: Microsoft YaHei;
  font-size: px2rem(14px);
}
/deep/ .ant-table-expanded-row-level-1 {
  color: #7d7d7d;
  font-family: Microsoft YaHei;
  font-size: px2rem(14px);
}
/deep/ .condition {
  color: #00a372;
}
</style>
