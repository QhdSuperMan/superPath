<!--
 * @Author: 于智诚
 * @Date: 2021-09-18 15:45:27
 * @LastEditors: 于智诚
 * @LastEditTime: 2021-10-26 19:15:00
 * @description: 文件描述
-->
<template>
  <div :class="$style['style-mission-item']" @click="handleDetailClick(item.id)">
    <div>
      <div
        :class="$style['item-title']"
        :on="item.type == 2"
        :exam="item.type == 3"
        :training="item.type === 4"
      >
        <span>{{type}}</span><i :class="$style['item-title-blue']">{{item.name}}</i>
      </div>
      <div :class="$style['item-time']" v-if="item.start_time && item.end_time">
        <span :class="$style['will-over']" v-if="isWillOver(item.end_time) && item.status !== '已完成'">{{timeToDayLabel(item.end_time, nowTime)}}</span>
        <span :class="$style['time']" v-else>{{getTime(item.start_time)}} - {{getTime(item.end_time)}}</span>
      </div>
    </div>
    <div :class="$style['item-content']">
      <p>任务内容：{{item.task_content}}</p>
      <div :class="$style['item-status']" v-if="useLock && item.hasOwnProperty('task_lock') && item.task_lock">
        <Icon :class="$style['lock-icon']" code="&#xe77f;" />
        未解锁
      </div>
      <div :class="$style['item-status']" v-else>
        <template v-if="item.status === '已完成'">
          <img :src="require('../../assets/img/icon/checked-green.png')" />
          <div :class="$style['item-status-done']">{{item.status}}</div>
        </template>
        <template v-else>
          <div>
            <img :src="require('../../assets/img/checked-gray.png')" alt />
            {{item.status}}
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import VueTypes from 'vue-types'
import { mapState  } from 'vuex'
import dsBridge from 'dsbridge'

 import utils from '@geekbang/gkui/src/utils'
 import { commonRoute } from '@/utils'
import Icon from '@/components/Icon.vue'
import { isInApp } from '@/sdk'

export default {
  name: 'item-pc',
  components: {
    Icon
  },
  props: {
    useLock: VueTypes.bool.def(false),
    item: VueTypes.object.def({})
  },
  data () {
    return  {
      dayDuration: 86400000
    }
  },
  computed: {
    ...mapState(['nowTime']),
    type () {
      let type
      switch (this.item.type) {
        case 1:
          type = '课程'
          break
        case 2:
          type = '测评'
          break
        case 3:
          type = '考试'
          break
        case 4:
          type = '培训'
          break
        default:
      }
      return type
    }
  },
  methods: {
    /**
     * 处理是否快结束
     */
    isWillOver (time) {
      const endTime = utils.timestamp(time)
      const now = utils.timestamp(this.nowTime)
      return endTime > now && (endTime - now <= this.dayDuration * 5)
    },
    handleDetailClick (id) {
      if (this.useLock && Object.hasOwnProperty.call(this.item, 'task_lock') && this.item.task_lock) {
        this.$Message.toast({
          message: '完成上一任务后解锁'
        })
        return
      }

      const map = {
        1: `/member/study/detail/${id}`,
        2: `/member/user/task/detail/${id}`,
        3: `/member/user/task/detail/${id}`,
        4: `/member/training/detail/${id}`
      }
      const path = map[this.item.type]
      commonRoute(path)
      if (isInApp) {
        dsBridge.call('common.routeJump', 'time://nativeWebView?url=' + encodeURIComponent(path), function () {})
        // this.$router.push({path})
        // return
      }

      // location.href = '/b' + path
    },
    getTime (time) {
      if(!time) return
      return utils.date(time, 'YYYY.MM.DD  hh:mm')
    },
      /**
     * 时间转成 n 天后，向上取整
     * @param {Number}    time   毫秒数
     */
    timeToDayLabel (time, nowTime) {
      const endTime = utils.timestamp(time)
      const today = utils.timestamp(nowTime)
      if (utils.date(today, 'YYYY/MM/DD') === utils.date(endTime, 'YYYY/MM/DD')) {
        return '今日到期'
      }
      const diff = endTime - today
      return diff < 0 ? 0 : Math.ceil(diff / 1000 / 3600 / 24) + '天后到期'
    }
  }
}
</script>
<style lang="scss" module>
  .style-mission-item {
    box-sizing: border-box;
    display: flex;
    align-content: space-between;
    flex-wrap: wrap;
    width: 369px; height: 163px;
    padding: 20px; margin: 0 16px 16px 0;
    background: $white;
    box-shadow: 0px 0px 6px 0px rgba(238, 242, 245, 0.8);
    border-radius: 5px;
    cursor: pointer;

    .item-title-blue{
      width: 290px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-style: normal !important;
    }

    &:hover {
      .item-title-blue{
        color: $blue;
      }
      box-shadow: 0px 7px 15px 0px rgba(238, 242, 245, 0.8);
    }

    & .item-time {
      margin-top: 10px;
      @include font(14);
      color: $gray;

      & .will-over {
        color: #F55F4E;
        @include font(14, 400);
      }
    }
  }

  .style-mission-item:nth-child(3n) {
    margin-right: 0;
  }

  .style-mission-item:nth-child(1) {
    margin-right: 16px;
  }

  .item-title {
    display: flex;
    align-items: center;
    margin-top: 1px;
    @include font(16, 500);
    color: $reportBlack;

    &[on=true] span {
      background: linear-gradient(90deg, #F9C451 0%, #F6B225 100%);
    }

    &[exam=true] span {
      background: linear-gradient(90deg, #40DB83 0%, #00C656 100%);
    }

    &[training=true] span {
      background: linear-gradient(90deg, #FFA852 0%, #FA8919 100%);
    }

    & span{
      vertical-align: middle;
      margin-right: 6px;
      width: 32px; height: 16px;
      background: linear-gradient(90deg, #4F9CFA 0%, #4285F4 100%);
      border-radius: 5px 3px 5px 3px;
      text-align: center;
      @include font(12, 500);
      line-height: 16px;
      color: $white;
    }
  }

  .item-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    @include font(14);
    color: $gray;

    & div {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      @include font(13, 400);
      color: $subGray;

      & img {
        width: 16px; height: 16px;
        margin-right: 5px;
      }
    }

    & .progress {
      margin-right: 5px;
    }

    & .item-status {
      color: $subGray;
    }

    & .lock-icon {
      margin-right: 4px;
      margin-top: -1px;
      line-height: 1;
    }

    & .item-status-done {
      color: #4c4c4c;

    }
  }
</style>
