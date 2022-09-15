<template>
  <Modal
    v-model:visible="currentVisible"
    :custom="custom"
    :title="title"
    :useClose="false"
    :useCancel="useCancel"
    :submitText="submitText"
    :sing-btn="checkProps(!useCancel)"
    :class="$style['gk-modal-confirm']"
    @submit="submit"
    @cancel="cancel"
    @close="close"
  >
    <p :key="ind" v-for="(msg, ind) in list" :class="$style['message']">{{ msg }}</p>
  </Modal>
</template>

<script>
import { computed } from 'vue'
import VueTypes from 'vue-types'
import Modal from './Modal.vue'
import { useModalEvent } from '@geekbang/gkui/components/modal/modal.helper.js'
import { checkProps } from '@geekbang/gkui/src/filters/index.js'
export default {
  name: 'modal-confirm',
  components: {
    Modal
  },
  props: {
    custom: VueTypes.string.def('modal-confirm'),
    title: VueTypes.string.def(''),
    message: VueTypes.oneOfType([String, Array]).def(''),
    submitText: VueTypes.string.def('确认'),
    useCancel: VueTypes.bool.def(true)
  },
  setup (props, { emit }) {

    const list = computed(() => {
      if (typeof props.message === 'string') {
        return [props.message]
      }

      return props.message
    })

    const {
      visible,
      show,
      close,
      submit,
      cancel
    } = useModalEvent(props, emit)

    const currentVisible = visible

    return {
      list,
      show,
      close,
      submit,
      cancel,
      checkProps,
      currentVisible
    }
  },
  // render () {
  //   return (
  //     <Modal
  //       custom="modal-confirm"
  //       title={this.title}
  //       useClose={false}
  //       submitText={this.submitText}
  //       v-model:visible={this.visible}
  //     >
  //       {
  //         this.list.map(item => {
  //           return (
  //             <p className="message">{item}</p>
  //           )
  //         })
  //       }
  //     </Modal>
  //   )
  // },
  // methods: {
  //   show () {
  //     this.visible = true
  //   },
  //   hide () {
  //     this.visible = false
  //   }
  // }
}
</script>

<style lang="scss" module>
.modal-confirm {}

.message {
  text-align: center;
  color: $lightBlack;
}

.gk-modal-confirm,
[modal-confirm] {
  width: 428px;

  &[sing-btn] {
    & [modal-submit-btn] {
      min-width: 300px;
    }
  }

  @include mobileInner () {
    box-sizing: border-box;
    width: 311px;

    .message {
      line-height: 20px;
      font-size: 14px;
    }

    & [modal-container] {
      padding: 24px 28px 20px;

      & [modal-main] {
        padding: 12px 0 18px;
      }

      & [modal-title] {
        line-height: 25px;
        font-size: 19px;
      }

      & [gk-button] {
        min-width: 118px; height: 40px;
      }
    }
  }
}
</style>
