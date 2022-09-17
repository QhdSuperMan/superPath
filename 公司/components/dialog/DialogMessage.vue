<template>
  <gkModalLayer
    v-model:visible="visible"
    color="common-message"
    :maskClickClose="maskClickClose"
    :title="currentTitle"
    transition="gk-fade-up"
    :needClose="needClose"
    loading
    @close="close"
  >
    <!-- <slot name="title">
      <h6 v-if="currentTitle" :class="$style['message-title']">{{currentTitle}}</h6>
    </slot> -->

    <slot name="message">
      <p :class="$style['message-content']">{{message}}</p>
    </slot>

    <template #footer>
      <slot name="footer">
        <gkButton
          :class="$style['message-button']"
          size="normal"
          :label="btnLabel"
          @click="handleSubmit"
        />
      </slot>
    </template>
  </gkModalLayer>
</template>

<script>
import VueTypes from 'vue-types'
// import gkModal from 'gkuiV2/modal'
// import gkButton from 'gkui/button'
import { gkButton, gkModalLayer} from '@geekbang/gkui'
import { fixedBody } from '@geekbang/gkui/src/utils'

export default {
  name: 'dialog-common-message',
  components: {
    gkModalLayer,
    gkButton
  },
  props: {
    type: VueTypes.oneOf(['message', 'warning']).def('message'),
    title: VueTypes.string.def(''),
    btnLabel: VueTypes.string.def('我知道了'),
    maskClickClose: VueTypes.bool.def(false),
    needClose: VueTypes.bool.def(false)
  },
  emits: ['close'],
  data () {
    return {
      visible: false,
      message: '',
      defer: null,
      currentTitle: this.title
    }
  },
  computed: {
  },
  methods: {
    /**
     * 显示设置弹框
     * @param {String}  data          显示时配置的数据
     * @param {HTML}    data.message  消息内容
     */
    show (data = {}) {
      this.visible = true
      this.message = data.message
      this.currentTitle = data.title ? data.title : this.title
      fixedBody.open()

      return new Promise(resolve => {
        this.defer = resolve
      })
    },
    /**
     * 关闭设置弹框
     */
    close () {
      this.$emit('close')
      this.visible = false
      fixedBody.close()
    },
    /**
     * 确认忽略
     */
    handleSubmit () {
      this.close()
      this.defer && this.defer()
    }
  }
}
</script>

<style lang="scss" module>
// @import '~@geekbang/geek.ui/src/v2/modal/base';

.message-content {
  width: 270px;
  margin: 32px 0 42px;
  line-height: 24px;
  text-align: center;
  @include font(16, 400);
  color: #404040;

  @include mobileInner {
    width: auto;
    margin: 20px 0 30px;
    @include font(15, 400);
    color: $gray;
  }
}

.message-button {
  width: 220px; height: 38px;
  margin: 0 auto;
  border-radius: 3px;
  background: $orange;
  @include font(16, 500);
  color: #FFF;

  @include mobileInner {
    width: 120px; height: 40px;
    border-radius: 20px;
    font-size: 17px;
  }
}
</style>
