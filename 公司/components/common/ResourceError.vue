<template>
  <div
    resourse-error
    :type="type"
    :class="$style['resourse-error']"
  >
    <Empty
      :src="errorImage"
      :text="errorText"
    >
      <template v-slot:content v-if="!useText">
        <p></p>
      </template>
    </Empty>
  </div>
</template>

<script>
import { computed } from 'vue'
import VueTypes from 'vue-types'

import Empty from '../empty/Empty.vue'
import imageError from '../../assets/img/empty/image.error.png'
import videoError from '../../assets/img/empty/video.error.png'
import articleError from '../../assets/img/empty/course-off2.png'
import listImageError from '../../assets/img/empty/list-image-error.png'
export default {
  name: 'resourse-error',
  components: {
    Empty
  },
  props: {
    useText: VueTypes.bool.def(true),
    type: VueTypes.oneOf(['image', 'video', 'article', 'list']).def('image'),
    status: VueTypes.number.def(0)
  },
  setup (props) {
    const imageMap = {
      image: imageError,
      video: videoError,
      article: articleError,
      list: listImageError
    }

    const errorTextMap = {
      image: {
        0: '图片已删除，请联系管理员',
        2: '图片已下架，请联系管理员',
        3: '图片已下架'
      },
      video: {
        0: '视频已删除，请联系管理员',
        2: '视频已下架，请联系管理员',
        3: '视频审核中'
      },
      article: {
        0: '文章已删除，请联系管理员',
        2: '文章已下架，请联系管理员'
      },
      list: {
        0: '图片已删除，请联系管理员',
        2: '图片已下架，请联系管理员',
        3: '图片已下架'
      }
    }

    const errorImage = computed(() => {
      return imageMap[props.type]
    })

    const errorText = computed(() => {
      const map = errorTextMap[props.type]
      return map[props.status]
    })

    return {
      errorImage,
      errorText
    }
  }
}
</script>

<style lang="scss" module>
.resourse-error {
  @extend %center;
  min-height: 329px;
  background: $lightGray;

  &[type="video"] {
    min-height: 382px;
  }

  @include mobileInner () {
    min-height: 188px;

    &[type="video"] {
      min-height: 188px;
    }
  }
}
</style>
