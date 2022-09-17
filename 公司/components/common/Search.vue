<template>
  <div :class="$style['common-search']" @click="handleClick">
    <div :class="$style['icon']"></div>
    <input
      ref="input"
      v-model="key"
      :class="$style['input']"
      :placeholder="placeholder"
      enterkeyhint="search"
      @keyup.enter="handleSearch"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
    />
    <div :class="$style['clear-btn']" @click="clear" v-if="key.length">
      <div :class="['iconfont', $style['clear-icon']]">&#xe786;</div>
    </div>
  </div>
</template>

<script>
import VueTypes from 'vue-types'
export default {
  name: 'common-search',
  components: {
  },
  props: {
    placeholder: VueTypes.string.def('搜索 课程/每日一课/QCon+ 名称'),
    /**
     * 虚假的，点击会跳转页面
     */
    fake: VueTypes.bool.def(false),
    query: VueTypes.string.def('')
  },
  emits: ['active', 'search', 'input', 'clear'],
  data () {
    return {
      key: '',
      isFocus: false
    }
  },
  computed: {
  },
  watch: {
    isFocus (focus) {
      this.$emit('active', focus)
    },
    query: {
      handler (nv) {
        this.key = nv
      },
      immediate: true
    }
  },
  created () {
  },
  methods: {
    handleClick () {
      if (this.fake) {
        this.$router.push({name: 'search'})
      }
    },
    handleSearch () {
      this.$emit('search', this.key)
      this.blur()
    },
    focus () {
      this.$refs.input.focus()
      this.isFocus = true
    },
    blur () {
      this.$refs.input.blur()
      this.onBlur()
    },
    onFocus () {
      this.isFocus = true
    },
    onBlur () {
      this.isFocus = false
    },
    onInput () {
      this.$emit('input', this.key)
    },
    clear () {
      this.key = ''
      this.onInput()
      this.$emit('clear')
    }
  }
}
</script>
<style lang="scss" module>
.common-search {
  box-sizing: border-box;
  @extend %center;
  height: 36px;
  padding: 0 11px;
  background: #F6F7FB;
  border-radius: 18px;
}

.icon {
  width: 14px; height: 14px;
  margin-right: 8px;
  background: url('../../assets/img/icon/icon-search.png') no-repeat center / 14px 14px;
}

.input {
  flex: 1;
  width: 0;
  height: 100%;
  padding: 0; margin: 0;
  background: transparent;
  border: none;
  @include font(14);
  line-height: 20px;
  color: $black;
  outline: none;

  &::-webkit-input-placeholder {
    color: $lightGray;
  }
}
.iconfont {
  color: #B9BDC2;
}

.clear-icon {
  font-size: 16px;
  font-weight: 600;
  color: #B9BDC2;
}
</style>
