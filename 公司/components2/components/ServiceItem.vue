<template>
  <!-- 服务目录服务展示 -->
  <div class="service-main">
    <div class="service-item" v-for="(item, index) in serviceList" :key="index">
      <div @click="handleJumpDetail(item)">
        <div class="item-title">
          <div class="tit-icon">
            <img src="@/assets/images/fw_xz_icon.png" alt="" />
          </div>
          <div class="tit-content">
            <div class="text">
              {{ item.srvName ? item.srvName : item.infName }}
            </div>
            <div class="data">{{ item.createTime }}</div>
          </div>
        </div>
        <div class="describe">
          {{ item.srvDescr ? item.srvDescr : item.infDescr }}1
        </div>
      </div>

      <div class="footer">
        <div class="thumb-up">
          <img
            @click="giveALike(item)"
            class="heart"
            src="@/assets/images/like.png"
            alt=""
            v-if="item.thumbUpCountStatus"
          />
          <img
            v-else
            @click="giveALike(item)"
            class="heart"
            src="@/assets/images/like_tow.png"
            alt=""
          />
          <div class="text">{{ item.thumbUpCount }}</div>
        </div>
        <div class="collect-count">
          <img
            @click="collection(item)"
            class="heart"
            src="@/assets/images/collect.png"
            alt=""
            v-if="item.collectCountStatus"
          />
          <img
            v-else
            @click="collection(item)"
            class="heart"
            src="@/assets/images/collect_tow.png"
            alt=""
          />
          <div class="text">{{ item.collectCount }}</div>
        </div>
        <div class="score-sum">
          <div class="text">评分:</div>
          <div class="num">{{ item.avgScore }}</div>
        </div>
        <div class="times">
          <div class="text">调用次数:</div>
          <div class="num">{{ item.invocCount ? item.invocCount : "-" }}</div>
        </div>
      </div>
      <div class="label">
        <img src="@/assets/images/jt_ty_icon.png" alt="" />
        <div class="text">{{ item.belongProvince }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { debounce } from '@/utils/common-util.js'
export default {
  props: {
    ServiceList: Array,
    tabKey: {
      type: String,
      default: "1",
    },
  },
  data() {
    return {
      serviceList: [],
    };
  },
  watch: {
    ServiceList: {
      handler(newValue, oldValue) {
        this.serviceList = newValue;
      },
      immediate: true
    },
  },
  methods: {
    handleJumpDetail(item) {
      if (this.tabKey == "1") {
        let id = item.srvId;
        this.$emit("handleJumpDetail", id);
      } else {
        let id = item.infId;
        this.$emit("handleJumpDetail", id);
      }
    },
    giveALike: debounce(function (item) {
      this.$emit("giveALike", this.tabKey, item);
    }),
    collection: debounce(function (item) {
      this.$emit("collection", this.tabKey, item);
    }),
  },
};
</script>

<style lang="scss" scoped>
@import "@/base.scss";
.service-main {
  display: flex;
  flex-wrap: wrap;
  .service-item {
    width: 32.5%;
    margin-bottom: px2rem(20px);
    margin-right: px2rem(15px);
    &:nth-of-type(3n) {
      margin-right: 0;
    }
    height: px2rem(220px);
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 4px;
    padding: px2rem(24px) 0 0 px2rem(24px);

    position: relative;
    &:hover {
      background-color: #f8ffff;
      border: 1px solid;
      border-color: #7cc0c0;
      box-shadow: 0px 3px 6px rgba(49, 49, 49, 0.16);
      cursor: pointer;
    }
    .item-title {
      display: flex;
      flex-direction: row;
      align-items: center;
      text-align: left;
      margin-bottom: px2rem(20px);
      .tit-icon {
        width: px2rem(50px);
        height: px2rem(50px);
        img {
          width: 100%;
          height: 100%;
          vertical-align: middle;
        }
      }
      .tit-content {
        margin-left: px2rem(20px);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .text {
          font-family: Microsoft YaHei;
          font-weight: 700;
          color: #262626;
          font-size: px2rem(16px);
        }
        .data {
          font-family: Microsoft YaHei;
          color: #7d7d7d;
          font-size: px2rem(14px);
        }
      }
    }
    .describe {
      text-align: left;
      width: px2rem(402px);
      height: px2rem(60px);
      // padding-right: px2rem(24px);
      font-family: Microsoft YaHei;
      color: #7d7d7d;
      font-size: px2rem(14px);
      line-height: px2rem(28px);
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      // white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      // margin-bottom: px2rem(20px);
      letter-spacing: PX2rem(27px);
      border-bottom: 1px solid #eee;
    }
    .footer {
      width: 95%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: px2rem(20px) 0;
      & > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: px2rem(14px);
        font-family: Microsoft YaHei;
        color: #7d7d7d;
        border-right: 1px solid #eee;
        padding-right: px2rem(23px);
        &:last-of-type {
          border: none;
          padding-right: 0;
        }
        .heart,
        .like {
          font-size: px2rem(18px);
          margin-bottom: 1px;
          margin-right: px2rem(6px);
        }
        .num {
          margin-left: px2rem(6px);
        }
        .heart {
          width: px2rem(20px);
          height: px2rem(18px);
        }
      }
    }
    .label {
      position: absolute;
      right: px2rem(-8px);
      top: 0;
      width: px2rem(78px);
      height: px2rem(48px);
      img {
        width: 100%;
        height: 100%;
        vertical-align: top;
      }
      .text {
        position: absolute;
        left: px2rem(25px);
        top: px2rem(10px);
        font-family: Microsoft YaHei;
        color: #ffffff;
        font-size: px2rem(14px);
        text-align: center;
      }
    }
  }
}
</style>
