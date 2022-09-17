<template>
  <div :class="$style['com-week-picker']">
    <div
      datepicker-header
      :class="$style['com-week-header']"
      :style="headerPaddingStyle"
      v-if="showHeader"
    >
      {{getNowTime}}
    </div>
    <ul
      datepicker-weeks
      :class="$style['datepicker-weeks']"
      :style="dayPaddingStyle"
    >
      <li
        :key="index"
        v-for="(item, index) in 7"
        :style="{width: `${circleWidth}px`}"
      >
        {{weekOption[index]}}
      </li>
    </ul>
    <div :class="$style['datepicker-days']">
      <TouchElement
        ref="touchElement"
        :class="$style['day-touch-panel']"
        :disabledLeft="dateRange.end.getTime() > endTimeStamp"
        :disabledRight="dateRange.start.getTime() < startTimeStamp"
        @move="handleChangeReference"
        v-if="useSlide"
      >
        <ul
          :key="`${currentReference}_${index}`"
          v-for="(group, index) in dayOptions"
          datepicker-days
          :class="$style['day-list']"
          :style="dayPaddingStyle"
        >
          <template :key="day.timestamp" v-for="(day) in group">
            <li
              :style="{
                width: `${circleWidth}px`,
                height: `${circleWidth}px`,
                'font-size': `${dayFontSize}px`
              }"
              :disabled="validateInRange(day.timestamp)"
              :tag="showTag && day.tag"
              :completed="showTag && day.completed"
              :today="day.today"
              :selected="day.selected"
              @click="handleChooseDay(day)"
            >
              {{day.value == todayValue ? '今' : day.label}}
            </li>
          </template>
        </ul>
      </TouchElement>

      <ul
        datepicker-days
        :class="$style['day-list']"
        :style="dayPaddingStyle"
        v-else
      >
        <li
          :key="index"
          v-for="(day, index) in dayOptions"
          :style="{
            width: `${circleWidth}px`,
            height: `${circleWidth}px`,
            'font-size': `${dayFontSize}px`
          }"
          :disabled="validateInRange(day.timestamp)"
          :tag="showTag && day.tag"
          :completed="showTag && day.completed"
          :today="day.today"
          :selected="day.selected"
          @click="handleChooseDay(day)"
        >
          {{day.value == todayValue ? '今' : day.label}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import VueTypes from 'vue-types'
 import utils from '@geekbang/gkui/src/utils'
import TouchElement from '@/components/common/DatepickerTouchElement.vue'

export default {
  name: 'com-week-picker',
  components: {
    TouchElement
  },
  props: {
    /**
     * 是否可以滑动，滑动的时候需要生成3周数据
     */
    useSlide: VueTypes.bool.def(true),
    /**
     * 是否显示完成学习标记，只有 每周学习n次，每次n小时类型的打卡任务才会显示
     */
    showTag: VueTypes.bool.def(false),
    /**
     * 当天需要学习的学习时长，单位分钟或秒（单位与studyData一致即可）
     */
    duration: VueTypes.number.def(0),
    showHeader: VueTypes.oneOfType([Boolean, Object]).def(false),
    /**
     * 当周学习数据,key 是日期，value 是学习时长，单位分钟
     * {
     *    2021/09/20: 30
     *    2021/09/21: 60
     * }
     */
    studyData: VueTypes.object.def({}),
    /**
     * 任务开始时间 时间戳
     */
    startTime: VueTypes.number.def(0),
    /**
     * 任务结束时间 时间戳
     */
    endTime: VueTypes.number.def(0),
    /**
     * 头部标题月份左右两侧留白距离
     */
    headerPadding: VueTypes.number.def(0),
    /**
     * 左右两侧留白距离
     */
    padding: VueTypes.number.def(0),
    /**
     * 选中后背景圆圈的宽度
     */
    circleWidth: VueTypes.number.def(32),
    /**
     * 星期的字号
     */
    weekFontSize: VueTypes.number.def(14),
    /**
     * 日期的字号
     */
    dayFontSize: VueTypes.number.def(14),
    /**
     * 任务类型  大于0 就是 每周学习n次  每次 n 分钟
     * 等于 0 就是每周学习固定时长，这种不展示成色点，有学习记录就展示灰色点
     */
    taskType: VueTypes.number.def(0)
  },
  emits: ['updated', 'inited', 'choice', 'slided'],
  data () {
    return {
      currentReference: Date.now(),
      today: Date.now(),
      selected: null
    }
  },
  computed: {
    getNowTime () {
      // const time = new Date(utils.date(this.dateRange.start.getTime(), 'YYYY/MM/DD'))
      return utils.date(this.dateRange.start.getTime(), 'YYYY 年 M 月')
    },
    startTimeStamp () {
      return utils.timestamp(this.startTime)
    },
    endTimeStamp () {
      return utils.timestamp(this.endTime)
    },
    todayValue () {
      return utils.date(this.today, 'YYYY/MM/DD')
    },
    selectedValue () {
      return this.selected ? utils.date(this.selected, 'YYYY/MM/DD') : this.todayValue
    },
    weekOption () {
      return {
        0: '一',
        1: '二',
        2: '三',
        3: '四',
        4: '五',
        5: '六',
        6: '日'
      }
    },
    dateReference () {
      return new Date(utils.date(this.currentReference, 'YYYY/MM/DD 08:00:00'))
    },
    dateRange () {
      const reference = this.dateReference
      const startDay = reference.getDate() - (reference.getDay() || 7) + 1
      const year = reference.getFullYear()
      const month = reference.getMonth()
      const range = {
        start: new Date(year, month, startDay, 0, 0, 0),
        end: new Date(year, month, startDay + 6, 23, 59, 59)
      }

      return range
    },
    dayOptions () {
      const options = this.useSlide ? [[], [], []] : []
      const reference = this.dateReference
      const weekDay = reference.getDay() || 7
      const year = reference.getFullYear()
      const month = reference.getMonth()
      const day = reference.getDate()
      const startDay = this.useSlide ? day - 6 - weekDay : day - (weekDay - 1)// 本周开始的第一天
      const {studyData} = this

      const itemCount = this.useSlide ? 21 : 7

      for (let index = 0; index < itemCount; index++) {
        const day = {
          date: new Date(year, month, startDay + index, 0, 0, 0)
        }

        const timestamp = day.date.getTime()
        // 日期在学习时间范围内
        const isInMissionTimeRange = timestamp >= this.startTimeStamp && timestamp <= this.endTimeStamp

        day.group = this.useSlide ? index < 7 ? 0 : index >= 14 ? 2 : 1 : 1
        day.timestamp = timestamp
        day.label = day.date.getDate()
        day.value = utils.date(day.timestamp, 'YYYY/MM/DD')
        day.today = day.value === this.todayValue

        // 日期在学习时间范围内，才显示
        day.tag = isInMissionTimeRange && studyData && studyData[day.value] > 0
        day.completed = this.taskType > 0 && isInMissionTimeRange && studyData && studyData[day.value] >= this.duration
        day.selected = isInMissionTimeRange && day.value === this.selectedValue
        day.studyTime = (isInMissionTimeRange && studyData[day.value]) || 0

        // options.push(day)
        this.useSlide ? options[day.group].push(day) : options.push(day)
      }

      return options
    },
    weekData () {
      if (this.useSlide) {
        return this.dayOptions.find(group => group && group[0] && group[0].timestamp === this.dateRange.start.getTime())
      } else {
        return this.dayOptions
      }
    },
    headerPaddingStyle () {
      const {headerPadding} = this
      if (headerPadding) {
        return {'padding-left': `${headerPadding}px`, 'padding-right': `${headerPadding}px`}
      } else {
        return this.weekPaddingStyle
      }
    },
    weekPaddingStyle () {
      const {padding} = this
      return {'padding-left': `${padding}px`, 'padding-right': `${padding}px`}
    },
    dayPaddingStyle () {
      const {padding, circleWidth, dayFontSize} = this
      const distance = padding - (circleWidth - dayFontSize) / 2 + 2
      return {'padding-left': `${distance}px`, 'padding-right': `${distance}px`}
    }
  },
  watch: {
    // 数据更新时间
    studyData () {
      this.$nextTick(() => {
        const {dateRange, weekData} = this
        this.$emit('updated', {dateRange, weekData})
      })
    }
  },
  mounted () {
    // 初始化完成事件
    const {dateRange, weekData} = this
    this.$emit('inited', {dateRange, weekData})
  },
  methods: {
    /**
     * 检查日期是否在任务有效时间内
     */
    validateInRange (time) {
      const start = utils.timestamp(this.startTime)
      const end = utils.timestamp(this.endTime)
      return time < start || time > end
    },
    /**
     * 选择一天事件
     * @param {Object}     day             天信息
     * @param {Date}       day.date        Date 对象
     * @param {Timestamp}  day.timestamp   时间戳（00:00:00）
     * @param {String}     day.label      日期显示文本
     * @param {String}     day.value      日期的参考值 YYYY/MM/DD
     * @param {Boolean}    day.tag        是否有小圆点
     * @param {Boolean}    day.completed  小圆点是否完成任务
     * @param {Boolean}    day.today      是否今天
     * @param {Boolean}    day.selected   是否选中天
     * @param {Number}     day.studyTime  学习时长
     */
    handleChooseDay (day) {
      this.selected = day.timestamp

      const {weekData, dateRange} = this
      this.$emit('choice', {dateRange, weekData, day})
      this.$emit('updated', {dateRange, weekData, day})
    },
    handleChangeReference (isNext) {
      if (isNext) {
        this.currentReference += 86400000 * 7
      } else {
        this.currentReference -= 86400000 * 7
      }

      this.$refs.touchElement.init()

      // 滑动完成后事件
      this.$nextTick(() => {
        // 最小值不能小于 startTimeStamp
        this.selected = Math.max(this.dateRange.start.getTime(), this.startTimeStamp)

        const {dateRange, weekData} = this
        this.$emit('slided', {dateRange, weekData})
        this.$emit('updated', {dateRange, weekData})
      })
    },
    /**
     * PC 端移动日历
     * 调用 touchElement 组件的 turnPrev turnNext 方法，组件内部会触发 emit,其实就是执行了 handleChangeReference 方法
     * @param {Bollean}   position     上一周 false，  下一周 true
     */
    handleTurn (position) {
      switch (position) {
        case 'prev':
          this.$refs.touchElement && this.$refs.touchElement.turnPrev()
          break
        case 'next':
          this.$refs.touchElement && this.$refs.touchElement.turnNext()
          break
        default:
      }
    }
  }
}
</script>

<style lang="scss" module>
.com-week-header {
  margin: 17px 0 16px;
  @include font(14 ,500);
  color: $black;
}
.datepicker-weeks {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin: 0 auto 8px;

  @include mobileInner {
    justify-content: space-between;
    width: 100%;
  }

  & li {
    position: relative;
    @extend %center;
    width: 36px;
    @include lineFont(12);
    color: $gray;
  }
}

.datepicker-days {
  overflow: hidden;
  position: relative;
  width: 100%;
  margin: 0 auto;
}

.day-touch-panel {
  display: flex;
  position: relative; left: -100%; top: 0;
  width: 300%;
}

.day-list {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 100%;

  @include mobileInner {
    justify-content: space-between;
  }

  & li {
    position: relative;
    // flex: 34px 0 0;
    @extend %center;
    width: 34px; height: 34px;
    margin-bottom: 10px; // 和 tag::after bottom 一样
    border-radius: 50%;
    @include lineFont(14, 500);
    color: $black;
    cursor: pointer;

    &[disabled=true] {
      color: $subGray;
      pointer-events: none;
    }

    &[today=true]:not([selected = true]) {
      background: $lightBlue;
    }

    &[selected=true] {
      @extend %linearBlue;
      // box-shadow: 0 2px 10px rgba(250, 137, 25, 0.2);
      color: #FFF;
    }

    &:hover:not([selected =true]) {
      background: #F3F8FF;
      color: #4285F4;
    }

    &[tag=true] {
      &::after {
        content: '';
        display: block;
        position: absolute; left: 50%; bottom: -10px; // 和父级 li padding-bottom: 10px 一样
        width: 4px; height: 4px;
        margin-left: -2px;
        background: #CFCFCF;
        border-radius: 2px;
      }

      &[completed =true]::after {
        background: $blue;
      }
    }
  }
}
</style>
