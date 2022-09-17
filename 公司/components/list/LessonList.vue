<template>
  <div :class="$style['lesson-list-pc']">
    <div :class="$style.list">
      <LessonItem
        :key="lesson.id"
        v-for="lesson in list"
        :info="lesson"
        @toLearn="handleToLearn"
      />
    </div>
    <div :class="$style.loadingPannel" v-if="loading">
      <Loading :size="40" />
    </div>
    <div :class="$style.noMore" v-if="end">
      已经到底了
    </div>
  </div>
</template>

<script>
import VueTypes from 'vue-types'
import { mapState } from 'vuex'
import LessonItem from '../lesson/LessonItemPC'

import Loading from '../Loading'
export default {
  name: 'lesson-list-pc',
  components: {
    LessonItem,
    Loading
  },
  props: {
    loading: VueTypes.bool.def(false),
    end: VueTypes.bool.def(false),
    list: VueTypes.array.def([])
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapState(['isBottom'])
  },
  watch: {
    isBottom (isBottom) {
      isBottom && this.getMore()
    }
  },
  created () {
  },
  methods: {
    getMore () {
      this.$emit('more')
    },
    handleToLearn (info) {
      this.$emit('toLearn', info)
    }
  }
}
</script>
<style lang="scss" module>
.lesson-list-pc {}

.list {}

.loadingPannel {
  @extend %center;
  width: 100%; min-height: 200px;
}

.noMore {
  padding: 30px 0 20px;
  text-align: center;
  @include lineFont(14);
  color: $lightGray;
}
</style>
