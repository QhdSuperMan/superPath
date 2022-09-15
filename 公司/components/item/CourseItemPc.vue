<template>
  <div :class="$style['course-page']" @click="handleDetailClick()">
    <ResourceError
      :class="$style['course-avatar']"
      :useText="false"
      type="list"
      :status="info.cover_status"
      v-if="info.sku_type === 4 && info.cover_status !== 1"
    />
    <img :class="$style['course-avatar']" :src="(info.sku_type === 4 && info.cover_status === 1) ? info.cover?.square : (info.column_cover_url ? info.column_cover_url : require('../../assets/img/icon/no-image.png'))" v-else />
    <div :class="$style['course-inner']">
      <div>
        <div :class="$style['course-inner-title']">{{info.column_title}}</div>
        <div :class="$style['course-inner-progess']">共{{info.total_column}}讲｜已学{{info.finish_class_num}}讲</div>
      </div>
      <div :on="type == 'done'" :class="$style['course-inner-status']">
        <Progress :class="$style['course-inner-ring']" :progress="'' + info.process" :borderWidth="2" />
        <p :class="$style['course-inner-duration']" v-if="info.learn_duration !== undefined">已学：{{secToMin(info.learn_duration)}}分钟</p>
        <template v-else-if="info.finish">
          <div>
            <img :src="require('../../assets/img/checked-green.png')" alt />
            <p :on="info.finish" class="status-done">已完成</p>
          </div>
        </template>
        <div v-else>
          <img :src="require('../../assets/img/checked-gray.png')" alt />
          <p>未完成</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueTypes from 'vue-types'
import Progress from '@/components/common/Progress.vue'
import {jumpLesson } from 'utils'
import ResourceError from '@/components/common/ResourceError.vue'
export default {
  name: 'course-item-pc',
  components: {
    Progress,
    ResourceError
  },
  props: {
    info: VueTypes.object.def({})
  },
  computed: {
    type () {
      return 'done'
    }
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
  .course-page{
    // width: 369px;
    // height: 132px;
    // background: #FFFFFF;
    // box-shadow: 0px 0px 6px 0px rgba(238, 242, 245, 0.8);
    // border-radius: 6px;
    box-sizing: border-box;
    display: flex;
    padding: 16px; margin-right: 16px; margin-bottom: 16px;
    width: 369px; height: 132px;
    background: $white;
    box-shadow: 0px 0px 6px 0px rgba(238, 242, 245, 0.8);
    border-radius: 6px;
    cursor: pointer;

    &:nth-child(3n) {
      margin-right: 0;
    }

    &:hover {
      & .course-inner-title {
        color: $blue;
      }
    }

    & .course-avatar{
      flex-shrink: 0;
      width: 100px; height: 100px;
      min-height: 100px !important;
      border-radius: 6px;
    }

  }

  .course-page:hover {
    box-shadow: 0px 7px 15px 0px rgba(238, 242, 245, 0.8);
  }

  .course-inner{
    flex-grow: 1;
    margin-left: 20px; margin-top: 2px;
    width: 0;

    & .course-inner-title {
      height: 25px;
      @include font(18, 500);
      color: $black;
      line-height: 25px;
      @extend %row;
    }

    & .course-inner-title[on=true] {
      color: #404040;
    }

    & .course-inner-progess {
      margin-top: 5px;
      height: 20px;
      @include font(14);
      color: #7F848C;
      line-height: 20px;
    }
  }

  .course-inner-status[on=true]{
    @include font(13, 500);
    color: $blue;

    & div{
      display: flex;
    }

    & img{
      width:16px; height:16px;
      margin: 3px 5px 0 0;
    }
  }

  .course-inner-status{
    display: flex; justify-content: space-between;align-items: center;
    margin-top: 24px;

    & img{
      width:16px; height:16px
    }

    & p{
      @include font(13, 400);
      color: $subGray;
    }

    & p[on=true]{
      color: #4c4c4c;
    }

    .course-inner-duration {
      // margin-left: 15px;
      width: 115px;
      text-align: right;
      color: #7F848C;
      @extend %row;
    }

    // deep
    [percent] {
      margin-left: 10px;
    }
  }

  .course-inner-ring {
    width: 65px;

    [progress-wrap] {
      width: 65px;
    }
  }
</style>
