<template>
  <a :class="$style['common-article-title']" @click.prevent="route">
    {{title}}
  </a>
</template>

<script>
import VueTypes from 'vue-types'
import { jumpLesson } from '@/utils'
export default {
  name: 'common-article-title',
  components: {
  },
  props: {
    /**
     * 跳转课程还是详情
     */
    jump: VueTypes.oneOf(['article', 'course']).def('article'),
    type: VueTypes.oneOfType([String, Number]).def(''),
    title: VueTypes.string.def(''),
    sku: VueTypes.number.def(0),
    aid: VueTypes.number.def(0)
  },
  data () {
    return {

    }
  },
  computed: {
    /**
     * 专栏、微课
     */
    isArticle () {
      const map = ['c1', 'c2', 1, 2]
      return map.includes(this.type)
    },
    isVideo () {
      const map = ['c3', 3]
      return map.includes(+this.type)
    }
  },
  created () {
  },
  methods: {
    route () {
      jumpLesson(this.type, this.sku, this.aid)
    }
  }
}
</script>

<style lang="scss" module>
.common-article-title {
  @include font(13, 500);
  line-height: 18px;
  color: $black;
}
</style>
