<template>
  <div widget-course-list :class="$style['widget-course-list']" :data-title="title">
    <span :key="index" v-for="(course, index) in list" @click="handleClick(course)">《{{course.sku_name}}》</span>
  </div>
</template>

<script>
import VueTypes from 'vue-types'
import { jumpLesson } from '@/utils'
export default {
  name: 'widget-course-list',
  components: {
  },
  props: {
    title: VueTypes.string.def(''),
    list: VueTypes.array.def([])
  },
  methods: {
    handleClick (course) {
      jumpLesson(course.column_type, course.sku - 0)
    }
  }
}
</script>
<style lang="scss" module>
.widget-course-list {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding-left: 56px;

  &:before {
    position: absolute; left: 0; top: 0;
    content: attr(data-title);
    @include font(14);
    line-height: 20px;
    color: $gray;
  }

  & span {
    margin-bottom: 6px;
    @include font(14);
    line-height: 20px;
    color: #4c4c4c;
    word-break: break-all;
    cursor: pointer;

    &:hover {
      color: $blue;
      text-decoration: underline;
    }
  }

  @include mobileInner () {
    &:before {
      font-size: 13px;
    }

    & span {
      margin-bottom: 8px;
      font-size: 13px;
    }
  }
}
</style>
