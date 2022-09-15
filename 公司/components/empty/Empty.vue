<template>
  <div common-empty :class="$style['common-empty']">
    <div image-wrap :class="$style['image-wrap']" :size="size">
      <slot name="image">
        <img :size="size" empyt-img :src="url" />
      </slot>
    </div>
    <slot name="content">
      <div :size="size" empty-text :class="$style['empty-text']">
        <!-- {{text}} -->
        <p :key="index" v-for="(text, index) in emptyText">{{ text }}</p>
      </div>
    </slot>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import VueTypes from 'vue-types'
import defaultImage from '../../assets/img/empty/empty-comment.png'
export default {
  name: 'Empty',
  components: {},
  props: {
    src: VueTypes.string.def(''),
    /**
     * 空状态图片大小分为 3 种大小
     * 整个页面的是 大 比如 404页面
     * 一半屏幕的用 普通  比如个人中心页面，在侧边的页面用 normal
     * 小列表的空状态用小  比如文章详情页下评论的
     */
    size: VueTypes.oneOf(['big', 'normal', 'small']).def('normal'),
    // text: VueTypes.string.def('暂无数据')
    text: VueTypes.oneOfType([String, Array]).def('暂无数据'),
  },
  setup (props) {
    const url = computed(() => {
      return props.src || defaultImage
    })

    const emptyText = computed(() => {
      return typeof props.text === 'string' ? [props.text] : props.text
    })

    return {
      url,
      emptyText,
    }
  },
}
</script>
<style lang="scss" module>
.common-empty {
  @extend %center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  // min-height: 212px;

  & .image-wrap {
    width: 80px;
    height: 80px;

    &[size='big'] {
      width: 140px;
      height: 140px;
    }

    &[size='small'] {
      width: 70px;
      height: 70px;
    }

    & img {
      width: 100%;
      height: 100%;
    }

    @include mobileInner() {
      width: 80px;
      height: 80px;
    }
  }

  & .empty-text {
    min-height: auto;
    margin-top: 8px;
    @include font(14);
    line-height: 20px;
    color: $subGray;

    &[size='big'] {
      font-size: 16px;
      line-height: 22px;
      color: $gray;
    }

    &[size='small'] {
      font-size: 12px;
      line-height: 20px;
      color: #b2b2b2;
    }
  }
}
</style>
