<!--
  课程列表单个课程组件（移动端）
-->
<template>
  <div :class="$style['course-item-page']" @click="handleDetailClick()">
    <ResourceError
      :class="$style['course-item-avatar']"
      :useText="false"
      type="list"
      :status="info.cover_status"
      v-if="info.sku_type === 4 && info.cover_status !== 1"
    />
    <img :class="$style['course-item-avatar']" :src="(info.sku_type === 4 && info.cover_status === 1) ? info.cover?.square : (info.column_cover_url ? info.column_cover_url : require('../../assets/img/icon/no-image.png'))" v-else />
    <div :class="$style['course-item-content']">
      <div :class="$style['course-item-title']">
        {{info.column_title}}
      </div>
      <slot name="course-item-process">
        <div :class="$style['course-item-progress']" v-if="showProgress">
          共{{info.total_column}}讲｜已学{{info.finish_class_num}}讲
        </div>
      </slot>
      <div :class="$style['progress-container']">
        <Progress :class="$style['progress-width']" :progress="''+info.process" :borderWidth="2" />
        <slot name="course-item-status">
          <p :class="$style['course-item-status']" v-if="info.learn_duration !== undefined">学习时长：{{secToMin(info.learn_duration)}}分钟</p>
          <p :class="$style['course-item-status']" :on="info.finish" v-else-if="info.finish">已完成</p>
          <p :class="$style['course-item-status']" v-else>未完成</p>
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
import VueTypes from 'vue-types'

import Progress from '@/components/common/Progress.vue'
import ResourceError from '@/components/common/ResourceError.vue'
// import Progress from '@/components/progress/Progress.vue'

//  import utils from '@geekbang/gkui/src/utils'
import { jumpLesson } from 'utils'

export default {
  name: 'course-item',
  components: {
    Progress,
    ResourceError
  },
  props: {
    showProgress: VueTypes.bool.def(true),
    info: VueTypes.object.def({})
  },
  created () {
  },
  methods: {
    handleDetailClick () {
      jumpLesson(this.info.column_type, this.info.sku, this.info.article_id || 0, 'task')
    },
    /** 秒转为分钟，向下取整 */
    secToMin (sec) {
      return Math.floor(sec / 60)
    },
  }
}
</script>
<style lang="scss" module>
.course-item-page{
  display: flex;
}

.course-item-avatar {
  flex-shrink: 0;
  display: block;
  width: 90px;
  height: 90px;
  min-height: 90px !important;
  margin-right: 13px;
  border-radius: 4px;

  & [common-empty] {
    min-height: 79px !important;
  }
}

.course-item-content {
  width: 0;
  flex-grow: 1;
}

.course-item-title {
  width: 200px;
  height: 22px;
  margin-top: 3px;
  font-size: 16px;
  color: $reportBlack;
  line-height: 22px;
  @include row(1);
}

.progress-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.course-item-progress {
  height: 17px;
  margin: 4px 0 25px;
  font-size: 12px;
  color: $subDisabled;
  line-height: 17px;
}

.course-item-status {
  margin-left: 15px;
  font-size: 12px;
  color: $gray;
  line-height: 16px;
  @extend %row;

  &[on = true] {
    color: $blue;
  }
}

.progress-width {
  width: 60px;

  [progress-wrap] {
    width: 60px !important;
  }
}
</style>
