<template>
  <div
    ref="imageRef"
    private-image
    :class="$style['private-image']"
    :error="isError"
    :empty-url="!url"
  >
    <template v-if="loading">
      <Loading
        label="资源加载中"
        size="normal"
        :vertical="true"
      />
    </template>
    <template v-if="!url || isError">
      <Empty
        :src="errorImage"
        :text="errorText"
      />
    </template>
    <img
      :class="$style['image']"
      :src="url"
      v-else
    />
  </div>
</template>

<script>
import VueTypes from 'vue-types'
import { ref, onMounted, computed, onBeforeUnmount } from 'vue'
import Empty from '@/components/empty/Empty.vue'
import Loading from '@/components/loading/Loading.vue'
import errorImage from '../../assets/img/empty/image.error.png'
import VisibleListener from '@geekbang/gkui/src/utils/visible.listener'
import { getResource } from '@/service/resource.service'
export default {
  name: 'private-image',
  components: {
    Empty,
    Loading
  },
  props: {
    id: VueTypes.oneOfType([Number, String]).def(0),
    width: VueTypes.number.def(0),
    height: VueTypes.number.def(0)
  },
  setup (props) {
    let observe = null
    const isError = ref(false)
    const url = ref('')
    const loading = ref(true)
    const imageRef = ref(null)
    let io = null
    const status = ref(1)   // 0删除 1正常 2下架 3审核中
    let computedHeight = ref(0)

    const errorText = computed(() => {
      const map = {
        0: '图片已删除，请联系管理员',
        2: '图片已下架，请联系管理员',
        3: '图片已下架'
      }

      return map[status.value]
    })

    const getImage = () => {
      getResource({
        type: 'image',
        files: [{
          id: props.id
        }]
      }).then(list => {
        const image = list[0]
        url.value = image.url
        status.value = image.status
        if (image.status !== 1) {
          isError.value = true
          imageRef.value.style.height = 'auto'
        }
      }).catch(err => {
        console.log('request image error', err)
        isError.value = true
      }).finally(() => {
        loading.value = false
      })
    }

    onMounted(() => {
      io = new VisibleListener({scale: 0.5})

      io.add(imageRef.value, visible => {
        if (visible) {
          getImage()
          io.remove(imageRef.value)
        }
      })

      computedHeight.value = imageRef.value.clientWidth / props.width * props.height + 'px'
      imageRef.value.style.height = computedHeight.value

      const observe = new ResizeObserver(entries => {
        console.log(entries)
        computedHeight.value = imageRef.value.clientWidth / props.width * props.height + 'px'
        imageRef.value.style.height = computedHeight.value
      })
      observe.observe(imageRef.value)
    })

    onBeforeUnmount(() => {
      observe && observe?.disconnect()
    })

    return {
      imageRef,
      url,
      isError,
      errorImage,
      loading,
      errorText,
      computedHeight
    }
  }
}
</script>

<style lang="scss" module>
.private-image {
  position: relative;
  @extend %center;
  flex-direction: column;
  max-width: 100%;
  border-radius: 8px;
  overflow: hidden;

  & [loading] {
    position: absolute; left: 0; right: 0; top: 0; bottom: 0;
    background: $lightGray;
  }

  @include mobileInner () {
    &[error="true"] {
      min-height: 188px;
    }

    & [image-wrap] {
      width: 60px; height: 60px;
    }
  }

  &[error="true"],
  &[empty-url="true"] {
    min-height: 329px;
    background: $lightGray;
  }

  & .image {
    max-width: 100%; height: auto;
    border-radius: 8px;
  }
}
</style>
