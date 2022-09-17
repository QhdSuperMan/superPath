<template>
  <gkModalLayer
    v-model:visible="visible"
    color="common-message"
    :title="title"
    :needClose="needClose"
    :class="$style['dialog-message']"
    @close="close"
  >
    <template #content>
      <div dialog-content :class="$style['content']" :center="center">
        <p v-html="message" v-if="renderHtml"></p>
        <p :key="index" v-for="(text, index) in content" v-else>{{text}}</p>
      </div>

      <slot name="footer">
        <div :class="$style['footer']">
          <!-- <slot name="footer"> -->
          <gkButton
            :class="$style['cancel']"
            color="common-light-blue" 
            size="common-big"
            @click="hide"
          >
            取消
          </gkButton>
          <gkButton
            :class="$style['ok']"
            color="common-blue"
            size="common-big"
            useLock
            @click="handleOk"
          >
            {{confirmText}}
          </gkButton>
        </div>
      </slot>
    </template>
  </gkModalLayer>
</template>

<script>
import VueTypes from 'vue-types'
// import gkModalLayer from 'gkuiV2/modal'
import { gkModalLayer } from '@geekbang/gkui'
import { gkButton } from '@geekbang/gkui'
export default {
  name: 'dialog-message',
  components: {
    gkModalLayer,
    gkButton
  },
  props: {
    title: VueTypes.string.def(''),
    renderHtml: VueTypes.bool.def(false),
    message: VueTypes.oneOfType([String, Array]).def(''),
    confirmText: VueTypes.string.def('确认'),
    center: VueTypes.bool.def(false),
    needClose: VueTypes.bool.def(false)
  },
  emits: ['close', 'ok'],
  data () {
    return {
      visible: false
    }
  },
  computed: {
    content () {
      if (typeof this.message === 'string') {
        return [this.message]
      }
      return this.message
    }
  },
  created () {
  },
  methods: {
    show () {
      this.visible = true
    },
    hide () {
      this.visible = false
    },
    close () {
      this.$emit('close')
      this.hide()
    },
    handleOk ({clear}) {
      this.$emit('ok', {
        clear: () => {
          clear && clear()
        },
        close: () => {
          this.hide()
        }
      })
    }
  }
}
</script>

<style lang="scss" module>
.dialog-message {
  box-sizing: border-box;
  width: 492px;
  padding: 34px 50px;
  background: #FFF;
  border-radius: 14px;
}

.content {
  margin: 12px auto 18px;
  
  & p {
    @include font(14);
    line-height: 20px;
    color: $gray;
    margin-bottom: 11px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &[center='true'] {
    & p {
      text-align: center;
    }
  }
}

.footer {
  display: flex;
  justify-content: center;

  & [gk-button] {
    width: 118px; height: 36px;
    box-shadow: none;
    border-radius: 10px;
  }

  .cancel {
    margin-right: 19px;
  }

  .ok {
    background: $blue;
  }
}
</style>
