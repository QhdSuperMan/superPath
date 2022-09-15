<template>
  <div ref="searchInput" com-search-input :class="[$style['com-search-input'], {'focus': isFocus}]">
    <input
      v-model.trim="value"
      :class="$style['input']"
      type="text"
      :placeholder="placeholder"
      @focus="onFocus"
      @blur="onBlur"
      @input="onInput"
      @keyup.enter="search"
    />
    <!-- <div
      :class="$style['clear-btn']"
      clear-btn
      @click="clear"
      v-if="value.length"
    >
      <Icon
        code="&#xe786;"
        :class="$style['clear-icon']"
        @click="clear"
        v-if="value"
      />
    </div>
    <Icon
      code="&#xe749;"
      :class="$style['search-btn']"
      @click="search"
      v-else
    /> -->
    <Icon
      code="&#xe749;"
      :class="$style['search-btn']"
      @click="search"
    />
  </div>
</template>

<script>
import VueTypes from 'vue-types'
import Icon from '@/components/Icon.vue'
export default {
  name: 'ComSearchInput',
  components: {
    Icon
  },
  props: {
    placeholder: VueTypes.string.def(''), // 支持placeholder
    val: VueTypes.string.def(''), // 支持回填val值
  },
  emits: ['search', 'focus', 'blur', 'input', 'clear'],
  data () {
    return {
      value: this.val || '',
      isFocus: false
    }
  },
  watch: {
    val (value) {
      this.value = value
    }
  },
  methods: {
    clear () {
      this.value = ''
      this.$emit('clear')
    },
    search () {
      this.isFocus = false
      this.value && this.$emit('search', this.value)
    },
    onFocus (e) {
      this.isFocus = true
      this.$emit('focus', e.target.value)
    },
    onBlur (e) {
      this.isFocus = false
      this.$emit('blur', e.target.value)
    },
    onInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>
<style lang="scss" module>

.com-search-input {
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  width: 250px; min-height: 36px;
  background: $lightBackground;
  border-radius: 6px;
  transition: all 0.3s;

  // &.focus {
  //   border-color: $green;
  //   &:before {
  //     background: $green;
  //   }
  // }

  & input {
    width: calc(100% - 38px);
    background: $lightBackground;
    padding-left: 12px;
    border: none;
    @include font(14, 400);
    line-height: 25px;
    // color: $gray;
    color: $black;
    outline: none;

    &::-webkit-input-placeholder {
      font-weight: 400;
      color: $subGray;
    }
  }

  & .search-btn {
    flex: none;
    display: inline-block;
    width: 38px; height: 38px;
    text-align: center;
    line-height: 38px;
    font-size: 16px;
    color: $gray;
    cursor: pointer;
    user-select: none;

    &:hover {
      color: $blue;
    }
  }
}

@media screen and (max-width: 768px) {
  .com-search-input {
    & input {
      padding-left: 17px;
    }
  }
}

.clear-btn {
  position: absolute; right: 12px;
  cursor: pointer;
}

.clear-icon {
  font-size: 16px;
  color: $subGray;
}

</style>
