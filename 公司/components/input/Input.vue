<template>
  <div g-input :class="[$style['g-input'], round ? $style['round'] : '']">
    <span :class="$style['g-input-prefix']" g-input-prefix v-if="$slots.prefixIcon || prefixIcon">
      <slot name="prefixIcon">
        <Icon :code="prefixIcon" />
      </slot>
    </span>
    <template v-if="type !== 'textarea'">
      <input 
        ref="inputEl"
        v-model="bindValue"
        :type="type" 
        v-bind="$attrs"
        :readOnly="readOnly"
        :placeholder="placeholder"
        :disabled="disabled"
        :class="$style['g-input-inner']"
        g-input-inner
        @focus="eventFocus"
        @input="eventInput"
        @keydown="keydown"
        @keyup="keyup"
        @change="change"
      />
    </template>
    
    <template v-else>
      <textarea 
        ref="inputEl"
        v-model="bindValue"
        :type="type" 
        v-bind="$attrs" 
        :readOnly="readOnly"
        :disabled="disabled"
        :class="$style['g-input-inner']"
        g-input-inner
        :placeholder="placeholder"
        @focus="eventFocus"
        @input="eventInput"
        @keydown="keydown"
        @keyup="keyup"
        @change="change"
      ></textarea>
    </template>
    <span :class="$style['g-input-suffix']" g-input-suffix v-if="$slots.prefixIcon || prefixIcon">
      <slot name="suffixIcon">
        <Icon :code="suffixIcon" />
      </slot>
    </span>
    <span :class="$style['g-input-clearable']" g-input-clearable v-if="clearable">
      <Icon code="&#xe629;" @click="clear" />
    </span>
    <span :class="[disabled ? $style['g-input-disabled'] : '', $style['g-input-word-limit'], type === 'textarea' ? $style['g-input-word-limit-position']: '']" g-input-word-limit v-if="showWordLimit">
      {{ bindValue ? getTrueLength(bindValue) : 0 }}/{{maxlength}} {{maxlengthDesc}}
    </span>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import vueTypes from 'vue-types'
import Icon from '@/components/Icon.vue'
import { getTrueLength } from '@/utils'

export default {
  name: 'GInput',
  components: {
    Icon
  },
  props: {
    styleAttr: vueTypes.string.def('g-input-css-default'), // 属性样式选择器
    modelValue: vueTypes.string.def(''), // 接收v-model的值
    readOnly: vueTypes.bool.def(false), // 是否是只读
    disabled: vueTypes.bool.def(false), // 是否禁用
    type: vueTypes.string.def('text'),  // input 的type值
    prefixIcon: vueTypes.string.def(''), // 输入框头部图标	
    suffixIcon: vueTypes.string.def(''), // 输入框尾部图标
    clearable: vueTypes.bool.def(false), // 是否可清空
    round: vueTypes.bool.def(false), // 是否是圆角
    showWordLimit: vueTypes.bool.def(false), // 是否展示字数限制
    maxlength: vueTypes.number, // 字数限制长度
    maxlengthDesc: vueTypes.string.def('字符'), // 字数限制长度描述
    placeholder: vueTypes.string.def('')
  },
  emits: ['input', 'clear', 'update:modelValue', 'focus'],

  setup (props, { emit }) {
    // const bindValue = computed(() => props.modelValue)
    const bindValue = ref(props.modelValue)
    const inputEl = ref(null)

    function keyup (event) {
      
    }

    // 减停props.modelValue然后重新复制bindValue
    watch (() => props.modelValue, (newVal) => {
      bindValue.value = newVal
    })

     // 字符长度超出不可输入
    function keydown (event) {
      if (props.maxlength && getTrueLength(bindValue.value) >= props.maxlength && event.keyCode !== 8) {
        event.preventDefault()
      }
    }

    // 字符长度超出然后截取
    watch (() => bindValue.value, (newVal) => {
      if (props.maxlength) {
        const len = newVal.length
        let truelen = 0
        for (let x = 0; x < len; x++) {
          if (truelen >= props.maxlength || (x + 1 < len && newVal.charCodeAt(x + 1) > 128 && truelen + 2 > props.maxlength)) {
            bindValue.value = bindValue.value.slice(0, x)
            break
          }
          if (newVal.charCodeAt(x) > 128) {
            truelen += 2
          } else {
            truelen += 1
          }
        }
      }
    })

    function eventInput (e) {
      emit('input', e.target.value)
      emit('update:modelValue', e.target.value)
    }

    function change (event) {
    }

    function clear () {
      if (!props.readOnly && !props.disabled) {
        emit('update:modelValue', '')
        emit('clear', '')
      }
    }

    function focus () {
      inputEl.value.focus()
    }

    function eventFocus () {
      emit('focus')
    }

    return { 
      bindValue,
      inputEl,
      getTrueLength,
      eventInput,
      clear, 
      keydown,
      keyup,
      change,
      focus,
      eventFocus
    }
  }
}
</script>

<style lang="scss" module>
.round {
  border-radius: 18px;
}

.g-input {
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px solid $borderGray;

  & textarea {
    height: 100%;
  }
}

.g-input-inner {
  box-sizing: border-box;
  padding: 6px 10px;
  flex: 1;
  background-color: white;
  border: none;
  @include font(14);

  &[disabled] {
    -webkit-opacity:1; opacity: 1;
    &::placeholder {
      color: #dadcdf;
    }
  }
}

.g-input-word-limit {
  color: $subGray;
  @include font(14);
}

.g-input-disabled {
  color: #dadcdf;
}

.g-input-inner::placeholder {
  line-height: 24px;
  font-size: 15px;
  color: $subGray;
}

.g-input-inner:focus {
  outline:none;
}

.g-input-prefix {
  margin: 0px 6px 0px 4px;
  @include font(14);
}

.g-input-suffix {
  margin: 0px 4px;
  @include font(14);
}

.g-input-clearable {
  margin: 0px 4px;
  @include font(14);
}

.g-input-word-limit-position {
  position: absolute; bottom: 5px; right: 10px;
}
</style>
