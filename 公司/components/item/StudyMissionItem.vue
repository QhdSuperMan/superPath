<!--
 * @Author: 于智诚
 * @Date: 2021-09-15 14:29:09
 * @LastEditors: 于智诚
 * @LastEditTime: 2021-10-26 18:55:37
 * @description: 文件描述
-->
<template>
  <div :class="$style['style-mission-item']" @click="handleDetailClick(item.id)">
    <div :class="$style['mission-item-info']">
      <div :class="$style['item-info-title']">
        <span :class="$style['label']" :type="item.type"></span>
        <span :class="$style['title']">{{item.name}}</span>
      </div>
      <div :class="$style['item-info-time']" :exam="item.type === 3" :on="item.type === 2">
        <span :class="$style['will-over']" v-if="isWillOver(item.end_time) && item.status !== '已完成'">{{timeToDayLabel(item.end_time,nowTime)}}</span>
        <span :class="$style['time']" v-else>{{getTime(item.start_time)}} - {{getTime(item.end_time)}}</span>
      </div>
    </div>
    <div :class="$style['mission-item-status']" v-if="useLock && item.hasOwnProperty('task_lock') && item.task_lock">
      未解锁
    </div>
    <div :class="$style['mission-item-status']" :on="item.status === '已完成'" v-else>
      <template>
        {{item.status}} <Icon :class="$style['status-icon']" code="&#xe700;"></Icon>
      </template>
    </div>
  </div>
</template>
<script>
import VueTypes from 'vue-types'
import { mapState  } from 'vuex'
import Icon from '@/components/Icon'

import utils from '@geekbang/gkui/src/utils'
import { commonRoute } from '@/utils'
 import { isInApp } from '@/sdk'
export default {
  name: 'study-mission-item',
  props: {
    useLock: VueTypes.bool.def(false),
    item: VueTypes.object.def({})
  },
  components: {
    Icon
  },
  computed: {
    ...mapState(['nowTime']),
    type () {
      let type
      switch (this.item.type) {
        case 1:
          type = '课程任务'
          break
        case 3:
          type = '考试任务'
          break
        case 2:
          type = '测评任务'
          break
        case 4:
          type = '培训计划'
          break
        default:
      }
      return type
    },
    isInApp () {
      return isInApp()
    }
  },
  data () {
    return  {
      dayDuration: 86400000
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
          message: '该任务未解锁'
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
      // if (this.item.type === 1) {
      //   path = `/study/detail/${id}`
      // } else {
      //   path = `/mission/detail/${id}`
      // }
      if (!this.isInApp) {
        this.$router.push({path})
        return
      }

      location.href = '/b' + path
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
  position: relative;
  box-sizing: border-box;
  display: flex; justify-content: space-between; align-items: center;
  padding: 15px 0 16px;
  width: 100%; height: 75px;
  border-bottom: 1px solid rgba(232,232,232,0.5);
  & .mission-item-info {
    display: flex; align-items: center;flex-direction: column;justify-content: flex-start;
    & .item-info-title {
      display: flex;

      & span.title {
        width: 200px;
        margin-left: 1px;
        @include row(1);
        @include font(16, 500);
        line-height: 25px;
        color: $black;
      }
    }

    & .item-info-time {
      align-self: flex-start;
      margin-left: 3px; margin-top: 2px;
      color: $disabledText;
      @include font(12, 400);
    }

    & .will-over {
      color: #F55F4E;
      @include font(12, 400);
    }
  }

  & .mission-item-status {
    flex-shrink: 0;
    display: flex; align-items: center;
    margin-right: 10px;margin-top: 2px;
    @include font(13, 400);
    color: $disabledText;
    line-height: 24px;
    vertical-align: middle;

    &[on] {
      color: $blue;
    }
    & .status-icon {
      margin-left: -5px;
      width: 6px;
      color: #B2B2B2;
    }
  }
}

.style-mission-item:last-child {
  border: none;
}

.label{
  flex-shrink: 0;
  width: 46px; height: 15px;
  margin-right: 4px;margin-top: 5px;
  background-image: url('../../assets/img/studyMission/course.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  &[type="2"] {
    background-image: url('../../assets/img/studyMission/task.png');
  }

  &[type="3"] {
    background-image: url('../../assets/img/studyMission/exam.png');
  }

  &[type="4"] {
    background-image: url('../../assets/img/studyMission/training.png');
  }
}
</style>
