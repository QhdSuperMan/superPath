<template>
  <div
    :class="[$style['selection-operation-bar'], $style['note-bar'], {[$style['show']]: visible}]"
    :direction="arrowDirection"
    :style="menuStyle"
    @mousedown.prevent
    @mousedown.stop
    @mouseup.stop
    @touchend.stop
    @touchstart.stop
  >
    <div :class="$style['arrow']" :direction="arrowDirection" :style="arrowStyle"></div>
    <!-- 移动端事件用touchend -->
    <div ref="menu" :class="$style['main']" v-if="isMobile">
      <slot name="content">
        <div
          :class="[$style['menu'], $style['line']]"
          @touchend="swipeLine"
          v-if="type === 1 || type === 3"
        >
          <Icon
            :size="20"
            code="&#xe75f;"
            hover
          />
          <span :class="$style['text']">划线</span>
        </div>
        <div
          :class="[$style['menu'], $style['line']]"
          @touchend="removeLine"
          v-if="type === 2 || type === 4"
        >
          <Icon
            :size="20"
            code="&#xe760;"
            hover
          />
          <span :class="$style['text']">取消划线</span>
        </div>
        <div
          :class="[$style['menu'], $style['comment']]"
          @touchend="showNotePopup"
          v-if="type === 1 || type === 2"
        >
          <Icon
            :size="20"
            code="&#xe74e;"
            hover
          />
          <span :class="$style['text']">笔记</span>
        </div>
        <div
          :class="[$style['menu'], $style['comment']]"
          @touchend="showNotePopup"
          v-if="type === 3 || type === 4"
        >
          <Icon
            :size="20"
            code="&#xe74e;"
            hover
          />
          <span :class="$style['text']">查看笔记</span>
        </div>
        <div
          :class="[$style['menu'], $style['link']]"
          @touchend="handleJump"
          v-if="link"
        >
          <Icon
            :size="20"
            code="&#xe642;"
            hover
          />
          <span :class="$style['text']">访问链接</span>
        </div>
        <div :class="[$style['menu'], $style['copy']]" @touchend="handleCopy">
          <Icon
            :size="20"
            code="&#xe750;"
            hover
          />
          <span :class="$style['text']">复制</span>
        </div>
      </slot>
    </div>
    <div ref="menu" :class="$style['main']" v-else>
      <slot name="content">
        <div
          :class="[$style['menu'], $style['line']]"
          @click.prevent.stop="swipeLine"
          v-if="type === 1 || type === 3"
        >
          <Icon
            :size="20"
            code="&#xe75f;"
            hover
          />
          <span :class="$style['text']">划线</span>
        </div>
        <div
          :class="[$style['menu'], $style['line']]"
          @click.prevent.stop="removeLine"
          v-if="type === 2 || type === 4"
        >
          <Icon
            :size="20"
            code="&#xe760;"
            hover
          />
          <span :class="$style['text']">取消划线</span>
        </div>
        <div
          :class="[$style['menu'], $style['comment']]"
          @click.prevent.stop="showNotePopup"
          v-if="type === 1 || type === 2"
        >
          <Icon
            :size="20"
            code="&#xe74e;"
            hover
          />
          <span :class="$style['text']">笔记</span>
        </div>
        <div
          :class="[$style['menu'], $style['comment']]"
          @click.prevent.stop="showNotePopup"
          v-if="type === 3 || type === 4"
        >
          <Icon
            :size="20"
            code="&#xe74e;"
            hover
          />
          <span :class="$style['text']">查看笔记</span>
        </div>
        <div
          :class="[$style['menu'], $style['link']]"
          @click.prevent.stop="handleJump"
          v-if="link"
        >
          <Icon
            :size="20"
            code="&#xe642;"
            hover
          />
          <span :class="$style['text']">访问链接</span>
        </div>
        <div :class="[$style['menu'], $style['copy']]" @click.prevent.stop="handleCopy">
          <Icon
            :size="20"
            code="&#xe750;"
            hover
          />
          <span :class="$style['text']">复制</span>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import VueTypes from 'vue-types'
import { commonRoute } from '@/utils'
import { isInApp } from '@/sdk'
import { openInWebview } from '@/utils/appBridge'
import Icon from '../Icon.vue'
export default {
  name: 'SelectionMenu',
  components: {
    Icon
  },
  props: {
    /**
     * 三角的位置
     */
    position: VueTypes.oneOf(['top', 'bottom']).def('bottom')
  },
  emits: ['swipeLine', 'removeLine', 'goComment', 'copy', 'showNotePopup'],
  data () {
    return {
      link: null,
      visible: false,
      arrowStyle: {},
      menuStyle: {},
      id: null,
      type: 1, // 显示划线还是取消划线 1: 正常选区，没有划线也没有笔记  2: 取消划线 3: 查看笔记 4:既有划线又有笔记
      arrowDirection: 'down', // 三角方向   down  up
      text: '', // 划线的文本
      completeText: '' // 补充上下文的完整文本
    }
  },
  computed: {
    ...mapState(['isMobile'])
  },
  created () {
  },
  methods: {
    show ({type, menuStyle, arrowStyle, position, link}) {
      this.type = type
      this.menuStyle = menuStyle
      this.arrowStyle = arrowStyle
      this.arrowDirection = position
      // this.link = link
      this.$nextTick(() => {
        this.visible = true
      })
      // setTimeout(() => {
      //   this.visible = true
      // }, 50)
    },
    /**
     * 调用show 之前先设置一下数据让dom 渲染，这样计算位置时就可以准确计算menu的宽度
     */
    setData ({type, link}) {
      this.type = type
      this.link = link
    },
    hide () {
      this.link = null
      this.$nextTick(() => {
        this.visible = false
      })
    },
    goComment () {
      this.$emit('goComment')
      this.hide()
    },
    handleJump (e) {
      if (isInApp()) {
        openInWebview(this.link.href, false)
      } else {
        commonRoute(this.link.href, true)
      }
    },
    handleCopy () {
      this.$emit('copy', {
        hide: () => {
          this.hide()
        }
      })
    },
    removeLine () {
      this.$emit('removeLine')
    },
    /**
     * 点击划线
     */
    swipeLine () {
      this.clearRange()
      this.$emit('swipeLine')
    },
    showNotePopup () {
      // create or view 创建笔记或者查看笔记
      let type = 'create'

      if (this.type === 3 || this.type === 4) {
        type = 'view'
      }
      this.$emit('showNotePopup', type)
    },
    clearRange () {
      // 手动清空选区内容
      let selections = window.document.getSelection()
      selections.removeAllRanges()
    }
  }
}
</script>
<style lang="scss" module>

.selection-operation-bar {
  position: absolute; left: 0%; z-index: 100;
  border-radius: 8px;
  box-shadow: 0px 5px 11px 0px rgba(52, 58, 61, 0.25);
  opacity: 0;
  visibility: hidden;
  transform: translateY(2px);
  // transition: top 0.3s, left 0.3s, opacity 0.2s ease, transform 0.3s ease, visibility 0.3s;
  transition: opacity 0.2s ease, transform 0.3s ease;
  // pointer-events: none;

  &[direction="up"] {
    transform: translateY(2px);
  }

  &[direction="down"] {
    transform: translateY(-2px);
  }

  &.show {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
    // pointer-events: auto;
  }
}

.arrow {
  position: absolute; left: 50%;
  width: 18px; height: 8px;
  background: url('./img/menu-arrow.png') no-repeat center / 18px 8px;

  &[direction="up"] {
    top: -8px;
    transform: rotate(180deg);

    @include mobileInner () {
      top: -7px;
    }
  }

  &[direction="down"] {
    bottom: -8px;

    @include mobileInner () {
      bottom: -7px;
    }
  }
}

.main {
  display: flex;
  padding: 0 7px;
  background: #303135;
  border-radius: 8px;

  & .menu {
    display: flex;
    flex-direction: column;
    width: 52px; height: 40px;
    padding: 14px 0 12px;
    text-align: center;
    cursor: pointer;
    user-select: none;
    @extend %transition;

    &:nth-child(2) {
      margin: 0 6px;
    }

    & [icon] {
      font-size: 18px;
      font-weight: 300;
      line-height: 1;
      color: #FFF;
    }

    @include webInner () {
      &:hover {
        // background: #212227;
        background: linear-gradient(180deg, #212227 0%, #303135 100%);
      }
    }
  }

  & .link {
    & [icon] {
      font-size: 19px;
    }

    & .text {
      margin-top: 3px;
    }
  }

  & .text {
    margin-top: 4px;
    @include font(12, 400);
    line-height: 18px;
    color: #fff;
  }
}
</style>
