<template>
  <div
    ref="popup"
    :class="[$style['note-popup'], {[$style['show']]: visible}]"
    :direction="arrowDirection"
    :style="[menuStyle]"
    :confirm="confirm"
    @click.stop
    @mouseup.stop
    @mousedown.stop
  >
    <div :class="$style['arrow']" :direction="arrowDirection" :style="[arrowStyle]"></div>
    <div :class="$style['note-main']">
      <div :class="$style['confirm']" v-if="confirm">
        <h3 :class="$style['confirm-title']">
          {{ isDel ? '确认删除笔记？' : '确认放弃笔记？'}}
        </h3>
        <p :class="$style['confirm-desc']">
          {{ isDel ? '删除笔记后笔记将不保留' : '放弃后所记笔记将不保留'}}
        </p>
      </div>
      <div :class="$style['note-editor']" v-else>
        <textarea
          ref="textareaRef"
          v-model="noteValue"
          :maxlength="maxLength"
          :class="$style['textarea']"
          placeholder="将学到的知识总结成笔记，方便日后快速查找及复习"
          v-if="noteType === 1 || isEdit"
        ></textarea>
        <div :class="$style['note-view']" v-else>
          {{ noteValue }}
        </div>
        <div :class="$style['count']" v-if="noteType === 1 || isEdit">
          {{ currentLength }} / {{ maxLength }}字符
        </div>
      </div>
      <div :class="$style['footer']">
        <div :class="$style['tips']">
          {{ isDel ? '是否删除本条笔记？' : ''}}
        </div>
        <div :class="$style['btns']">
          <template v-if="noteType === 1">
            <gkButton
              color="gray-text"
              size="common-normal"
              @click="onCancel"
            >
              取消
            </gkButton>
            <gkButton
              :class="$style['main-btn']"
              color="gray"
              size="common-normal"
              @click="onOk"
            >
              {{ confirm ? '确认' : '完成'}}
            </gkButton>
          </template>
          <!-- 预览笔记时按钮状态 -->
          <template v-if="noteType === 2">
            <template v-if="isEdit">
              <gkButton
                color="gray-text"
                size="common-normal"
                @click="quitEdit"
              >
                取消
              </gkButton>
              <gkButton
                :class="$style['main-btn']"
                color="gray"
                size="common-normal"
                @click="submitEdit"
              >
                完成
              </gkButton>
            </template>
            <template v-else-if="isDel">
              <gkButton
                color="gray-text"
                size="common-normal"
                @click="quitDel"
              >
                取消
              </gkButton>
              <gkButton
                :class="$style['main-btn']"
                color="gray"
                size="common-normal"
                @click="removeNote"
              >
                删除
              </gkButton>
            </template>
            <template v-else>
              <gkButton
                color="gray-text"
                size="common-normal"
                @click="onDelConfirm"
              >
                删除
              </gkButton>
              <gkButton
                :class="$style['main-btn']"
                color="gray"
                size="common-normal"
                @click="onEdit"
              >
                编辑
              </gkButton>
            </template>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, nextTick, ref, watchEffect, watch } from 'vue'
import { gkButton } from '@geekbang/gkui'
import { getTrueLength, toast } from '@/utils'
export default {
  name: 'NotePopup',
  components: {
    gkButton
  },
  props: {},
  emits: ['cancel', 'addNote', 'removeNote', 'update'],
  setup (props, { emit }) {
    let maxLength = ref(2000)
    let popup = ref(null)
    let noteValue = ref('')
    let visible = ref(false)
    let arrowStyle = ref({})
    let menuStyle = ref({})
    let arrowDirection = ref('down')
    let noteType = ref(1) // 新建笔记还是查看笔记  1 新建 2 查看
    let confirm = ref(false)
    let isWriting = ref(false)
    let isDel = ref(false)
    let isEdit = ref(false)
    let noteCache = ref('')
    const textareaRef = ref(null)

    const currentLength = computed(() => getTrueLength(noteValue.value))

    const show = ({menuStyle: elStyle, arrowStyle: arrow, position, note}) => {
      menuStyle.value = elStyle
      arrowStyle.value = arrow
      arrowDirection.value = position

      if (note) {
        noteValue.value = note
        noteCache.value = note
        noteType.value = 2
      }

      nextTick(() => {
        visible.value = true
        if (noteType.value === 1) {
          focus()
        }
        document.addEventListener('click', listenerClick, false)
      })
    }

    const hide = () => {
      visible.value = false
      isDel.value = false
      isEdit.value = false
      isWriting.value = false
      confirm.value = false
      noteCache.value = ''
      noteValue.value = ''
      noteType.value = 1
    }

    const focus = () => {
      setTimeout(() => {
        textareaRef.value.focus()
      }, 500)
    }

    const onCancel = (clear = true) => {
      if (confirm.value) {
        confirm.value = false
      } else {
        if (isWriting.value) {
          confirm.value = true
          return
        }

        emit('cancel', {
          hide: () => {
            hide()
            if (clear) {
              clearRange()
            }
          }
        })
      }
    }

    const onOk = () => {
      if (confirm.value) {
        // 确认放弃笔记，清除 nodeValue 关闭弹窗
        noteValue.value = ''
        confirm.value = false
        emit('cancel', {
          hide: () => {
            hide()
          }
        })
      } else {
        if (currentLength.value > maxLength.value) {
          toast({
            position: 'top',
            message: '字数超过最大限制'
          })
          return
        }
        // 发送记笔记请求
        emit('addNote', {
          value: noteValue.value
        })
      }
    }
    // 点击删除进行确认
    const onDelConfirm = () => {
      isDel.value = true
    }

    const onEdit = ({event}) => {
      event.stopPropagation()
      isEdit.value = true
      focus()
    }

    // 退出编辑
    const quitEdit = () => {
      isEdit.value = false
    }

    // 保存更新
    const submitEdit = () => {
      emit('update', {
        value: noteValue.value
      })
    }

    // 放弃删除
    const quitDel = () => {
      isDel.value = false
    }

    // 确认删除笔记
    const removeNote = () => {
      emit('removeNote')
    }

    const clearRange = () => {
      // 手动清空选区内容
      let selections = window.document.getSelection()
      selections.removeAllRanges()
    }

    const listenerClick = (e) => {
      e.stopPropagation()
      if (!popup.value?.contains(e.target)) {
        // alert('点到外边关闭')
        onCancel(false)
      }
    }

    watch(visible, (isVisible) => {
      if (!isVisible) {
        document.removeEventListener('click', listenerClick, false)
      }
    })

    watch(() => noteValue.value, ()=>{
      if(noteValue.value.length >= 500) {
        if(getTrueLength(noteValue.value) > maxLength.value) {
          // toast('字数超过最大限制')
          toast({
            position: 'top',
            message: '字数超过最大限制'
          })
          const length = noteValue.value.length
          const cut = (getTrueLength(noteValue.value) - maxLength.value) / 2
          noteValue.value = noteValue.value.substring(0, length - cut)
        }
      }
    })

    watchEffect(() => {
      if (noteType.value === 1) {
        isWriting.value = !!noteValue.value
      }
      // else {
      //   isWriting.value = noteValue.value !== noteCache.value
      // }
    })

    return {
      textareaRef,
      maxLength,
      currentLength,
      popup,
      noteValue,
      visible,
      isWriting,
      isDel,
      isEdit,
      noteType,
      arrowStyle,
      menuStyle,
      arrowDirection,
      show,
      hide,
      confirm,
      onOk,
      onCancel,
      quitEdit,
      submitEdit,
      quitDel,
      removeNote,
      onDelConfirm,
      onEdit
    }
  }
}
</script>

<style lang="scss" module>
.note-popup {
  position: absolute; z-index: 100; left: 0; top: 0;
  display: flex;
  flex-direction: column;
  width: 534px; height: 350px;
  background: #303135;
  border-radius: 14px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(2px);
  transition: height 0.3s ease, opacity 0.2s ease, transform 0.3s ease;

  &[direction="up"] {
    transform: translateY(2px);
  }

  &[direction="down"] {
    transform: translateY(-2px);
  }

  &[confirm="true"] {
    height: 186px;
  }

  &.show {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
}

.arrow {
  position: absolute; left: 50%;
  width: 18px; height: 8px;
  background: url('./img/menu-arrow.png') no-repeat center / 18px 8px;

  &[direction="up"] {
    top: -8px;
    transform: rotate(180deg);
  }

  &[direction="down"] {
    bottom: -8px;
  }
}

.note-main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 20px 24px 0;
}

.confirm {
  padding-top: 8px;
  flex-grow: 1;
}

.confirm-title {
  @include font(20);
  line-height: 28px;
  color: #D5D5D6;
}

.confirm-desc {
  margin-top: 6px;
  @include font(14);
  line-height: 20px;
  color: #787A7C;
}

.note-editor {
  box-sizing: border-box;
  position: relative;
  flex-grow: 1;
  max-height: 270px;
  padding-bottom: 38px;
}

.count {
  position: absolute; right: 0; bottom: 10px;
  @include font(12);
  line-height: 18px;
  color: #787A7C;
}

.textarea,
.note-view {
  overflow-y: auto;
  width: 100%; height: 100%;
  background: transparent;
  border: none;
  outline: none;
  resize: none;
  white-space: pre-wrap;
  word-break: break-all;
  @include font(16);
  line-height: 26px;
  color: #D5D5D6;
  
  &::-webkit-input-placeholder {
    color: #737577;
  }

  &::-webkit-scrollbar {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    width: 5px;
  }
}

.footer {
  display: flex;
  align-items: center;
  padding: 14px 0 13px;
  border-top: 1px solid rgba($color: $borderGray, $alpha: 0.1);

  & .tips {
    flex-grow: 1;
    @include font(14);
    line-height: 20px;
    color: #787A7C;
  }

  & .btns {
    display: flex
  }
  
  & [gk-button] {
    margin-left: 7px;
  }
}

.main-btn {
  width: 88px; 
}
</style>
