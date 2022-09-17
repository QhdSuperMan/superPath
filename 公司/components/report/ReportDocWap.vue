<template>
  <Modal
    :visible="visible"
    :class="$style['report-wap-doc-modal']"
    :layerClose="false"
    transition="gk-fade-up"
    :useClose="false"
  >
    <div :class="$style['modal-title']">报告阅读说明</div>
    <div :class="$style['modal-content']">
      <gkScrollbar ref="scrollBar" :class="$style['scroll-bar']">
        <p :key="index" v-for="(line, index) in list" :class="$style['text']">{{line}}</p>
      </gkScrollbar>
    </div>
    <template #footer>
      <div>
        <div :class="$style['btn-wrap']">
          <gkButton color="blue" size="big" @click="close">我知道了</gkButton>
        </div>
      </div>
    </template>
  </Modal>
</template>

<script>
import VueTypes from 'vue-types'
// import { fixedBody } from '@geekbang/gkui/src/utils'
// import gkModal from 'gkuiV2/modal'
import Modal from '@/components/modal/Modal.vue'
import { gkButton, gkScrollbar } from '@geekbang/gkui'
// import gkScrollBar from 'gkui/scrollbar/Scrollbar'
export default {
  name: 'report-wap-doc-modal',
  components: {
    // gkModalLayer,
    Modal,
    gkButton,
    gkScrollbar
  },
  props: {
    list: VueTypes.array.def([])
  },
  data () {
    return {
      visible: false
    }
  },
  computed: {
  },
  watch: {
    visible (show) {
      // show ? fixedBody.open() : fixedBody.close()
    }
  },
  methods: {
    show () {
      this.visible = true
    },
    close () {
      this.visible = false
    }
  }
}
</script>

<style lang="scss" module>
.report-wap-doc-modal {
  width: 305px;
  // padding: 30px 24px 35px;
  padding: 0;

  & [modal-container] {
    padding: 30px 24px 35px;
  }

  & [modal-main] {
    padding-top: 0;
    padding-bottom: 26px;
  }
}

.modal-title {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  @include font(18, 500);
  line-height: 22px;
  color: $reportBlack;

  &:before {
    content: '';
    display: inline-block;
    width: 4px; height: 12px;
    margin-right: 7px;
    background: #5C86FF;
    border-radius: 2px;
  }
}

.modal-content {
  // margin: 16px 0 26px;

  & [gkscrollbar-color=base] [bar=y] {
    right: -8px;
    opacity: 0;
  }
}

.scroll-bar {
  height: 335px;
}

.text {
  margin-bottom: 8px;
  @include font(14, 400);
  line-height: 22px;
  color: $subBlack;
}

.btn-wrap {
  & [gk-button] {
    width: 155px; height: 39px;
    margin: 0 auto;
    border-radius: 20px;
  }
}
</style>
