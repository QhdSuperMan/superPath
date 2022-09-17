<template>
  <gkModalLayer
    v-model:visible="visible"
    rank-modal
    color="common-record"
    lockBody
    :maskClickClose="maskClickClose"
    :title="''"
    transition="gk-fade-up"
    :needClose="needClose"
    loading
    @close="close"
  >
    <template #content>
      <slot name="title">
      </slot>
      <header :class="$style['rank-head']">
        <h2 :class="$style['rank-title']">本周任务排行</h2>
        <div :class="$style['mission-name']">
          <span :class="$style['name']" :data-finish="info.isFinish">{{info.missionName || taskName}}</span>
        </div>
        <p data-range>{{info.timeRange}}</p>
        <p data-tip>{{info.taskCondition}}</p>
        <p :class="$style['join-info']">{{userNum}} 位小伙伴参与， {{finishedNum}} 位已完成当周任务</p>
        <span :class="$style.close" @click="close"></span>
      </header>

      <div :class="$style['content']">
        <p :class="$style['rank-tip']">*排名规则：按照学员本周完成任务的时间先后进行排名</p>
        <Empty :class="$style['empty-com']" text="尚未生成排名 请稍后进行查看" v-if="!userList.length" />
        <div :class="$style['rank-list']" v-else>
          <gkScrollbar ref="scrollBar" :class="$style['scroll-bar']">
            <div :class="$style['board-list']">
              <BoardBox useAvatar :info="boardList[1]" type="second" />
              <BoardBox useAvatar :info="boardList[0]" type="first" />
              <BoardBox useAvatar :info="boardList[2]" type="third" />
            </div>
            <ul :class="$style['other-list']">
              <li
                :key="item.rank"
                v-for="item in rankList"
                :class="[{[$style['on']]: item.rank === myRank}]"
                :data-rank="item.rank"
              >
                <div :class="$style['info-avatar']">
                  <img :src="item.avatar" />
                </div>
                <p :class="$style['info-name']">{{item.name}}</p>
              </li>
            </ul>
          </gkScrollbar>
        </div>
      </div>

      <slot name="footer">
        <div></div>
      </slot>
    </template>
  </gkModalLayer>
</template>

<script>
import VueTypes from 'vue-types'
import { gkScrollbar, gkModalLayer } from '@geekbang/gkui'
import Empty from '@/components/empty/Empty.vue'

import BoardBox from '../../views/leaderboard/BoardBox'

import LeaderBoardService from '@/service/leaderboard.service'
import MissionService from '@/service/mission.service'

// 打卡详情弹窗  暂无使用
export default {
  name: 'dialog-rank',
  components: {
    gkModalLayer,
    Empty,
    gkScrollbar,
    BoardBox
  },
  props: {
    maskClickClose: VueTypes.bool.def(true),
    needClose: VueTypes.bool.def(false)
  },
  emits: ['close'],
  data () {
    return {
      loading: false,
      visible: false,
      info: {},
      taskInfo: {},
      userNum: 0,
      myRank: 0,
      repeatNum: 0,
      isUp: false,
      finishedNum: 12,
      taskName: '',
      userList: [],
      currentReference: Date.now(),
      today: Date.now()
    }
  },
  computed: {
    boardList () {
      return this.userList.slice(0, 3)
    },
    rankList () {
      return this.userList.slice(3, this.userList.length)
    }
  },
  methods: {
    /**
     * 显示设置弹框
     * @param {Boolean}   isFinish
     * @param {Numner}    missionId
     * @param {String}    missionName
     * @param {String}    taskCondition
     * @param {String}    timeRange
     * @param {TimeStamp} end
     * @param {TimeStamp} start
     */
    show (data = {}) {
      this.visible = true
      this.info = data
      this.$nextTick(() => {
        this.getLeaderboard(data)
        this.getDetail(data.missionId)
      })
    },
    /**
     * 关闭设置弹框
     */
    close () {
      this.$emit('close')
      this.visible = false
    },
    getLeaderboard ({start, end, missionId}) {
      const postData = {
        plan_id: missionId,
        start_time: start / 1000,
        end_time: end / 1000
      }

      LeaderBoardService.getRankList(postData).then(res => {
        // console.log(res)
        this.userNum = res.userNum
        this.myRank = res.myRank
        this.repeatNum = res.repeatNum
        this.isUp = res.isUp
        this.finishedNum = res.finishNum
        this.taskName = res.taskName

        this.userList = res.list
      })
    },
    getDetail (id) {
      const postData = {
        plan_id: id,
        start_time: this.info.start,
        end_time: this.info.end
      }

      MissionService.getMissionInfo(postData).then(res => {
        this.taskInfo = res
      })
    }
  }
}
</script>

<style lang="scss" module>
// @import '~@geekbang/geek.ui/src/v2/modal/base';

[rank-modal] {
  & [gk-modal-main] {
    width: 510px; height: 723px;
    padding: 0;
    border-radius: 5px;
  }
}

.rank-head {
  box-sizing: border-box;
  width: 100%; height: 223px;
  padding: 34px 40px 0;
  background: #FF902D;
  background-image: url('../../assets/img/clock-in/rank-modal-bg.png');
  background-repeat: no-repeat;
  background-position: 248px 0;
  background-size: 288px 268px;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  color: #fff;

  & .close {
    position: absolute; top: 18px; right: 18px;
    width: 14px; height: 14px;
    background: url('../../assets/img/clock-in/icon-close-white.png') no-repeat center / 14px 14px;
    cursor: pointer;
  }

  & p {
    position: relative;
    padding-left: 17px; margin-bottom: 6px;
    @include font(14);
    line-height: 20px;
  }

  & [data-range=true] {
    &:before {
      content: '';
      position: absolute; left: 0; top: 4px;
      width: 11px; height: 12px;
      background: url('../../assets/img/clock-in/icon-clock.png') no-repeat center / 11px 12px;
    }
  }

  & [data-tip] {
    &:before {
      content: '';
      position: absolute; left: 0; top: 5px;
      width: 11px; height: 11px;
      background: url('../../assets/img/clock-in/icon-label.png') no-repeat center / 11px 11px;
    }
  }

  & .join-info {
    padding-left: 0; margin-top: 24px;
    font-size: 15px;
    line-height: 16px;
  }
}

.rank-title {
  text-align: center;
  @include lineFont(20, 500);
  color: #fff;
}

.mission-name {
  margin: 23px 0 9px;
  & .name {
    display: inline-block;
    @include lineFont(18, 500);
    line-height: 18px;
    &[data-finish] {
      padding-right: 64px;
      background: url('../../assets/img/clock-in/rank-modal-finished.png') no-repeat top right / 58px 18px;
    }
  }
}

.empty-com {
  margin-top: 60px;

  & p {
    margin-top: 24px;
  }
}

.content {
  background: #fff;
  padding: 18px 30px 12px 30px;
}

.rank-tip {
  text-align: center;
  @include font(13);
  line-height: 16px;
  color: $subGray;
}

.rank-list {
  padding-top: 10px;
  height: 430px;

  [gkscrollbar-color=base] [bar=y] {
    right: -20px;
  }
}

.board-list {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 21px;
  padding: 0 30px;

  & [board-box] {
    width: 114px;
  }

  & [line-img] {
    width: 114px;
  }
}

.other-list {
  padding: 17px 30px 0 0;

  & li {
    position: relative;
    display: flex;
    align-items: center;
    height: 56px;
    padding-left: 60px;
    @extend %bottomLine;
    color: $black;

    &:before {
      content: attr(data-rank);
      position: absolute; left: 30px; top: 50%;
      margin-top: -7px;
      @include lineFont(15, 500);
      color: $lightGray;
    }
    &:after {
      left: 60px;
    }
    &:last-child:after {
      display: none;
    }

    &.on {
      &:before {
        color: $blue;
      }

      & .info-name:after {
        content: '我';
        position: absolute; right: 10px; top: 50%;
        margin-top: -7px;
        @include lineFont(14);
        color: $blue;
      }
    }
  }

  & .info-avatar {
    @extend %center;
    width: 35px; height: 35px;
    padding-left: 10px; margin-right: 18px;
    border-radius: 50%;
    @include lineFont(15, 500);
    color: #FFF;

    & img {
      width: 100%; height: 100%;
      border-radius: 50%;
      object-fit: cover;
      object-position: center;
    }
  }

  & .info-name {
    flex: 1;
    position: relative;
    @include lineFont(15, 500);
  }
}
</style>
