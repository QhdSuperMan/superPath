<template>
  <div :class="$style['com-filter-bar']" :style="filterStyle">
    <div :class="$style['filter-warp']" :style="filterHeight">
      <div :class="$style['shim']" :style="filterHeight"></div>
      <div :class="$style['filter-option']" :style="filterHeight">
        <div
          :key="opt.id"
          v-for="opt in list"
          filter-normal
          :class="$style['option']"
          :on="currentOpen && currentOpen.alias == opt.alias || (filterStatus[opt.alias] && !filterStatus[opt.alias].def)"
          :open="currentOpen && currentOpen.alias == opt.alias"
          @click="handleFilter(opt)"
        >
          <span>{{(filterStatus[opt.alias] && (filterStatus[opt.alias].currentLabel || filterStatus[opt.alias].label)) || opt.label}}</span>
          <Icon :class="$style['arrow']" code="&#xe773;" />
        </div>

        <slot name="end" />
      </div>
    </div>
    <transition name="move-down">
      <div :class="$style['current-option-list']" :style="{top: height + 'px'}" v-if="contentShow">
        <div
          :key="item.value"
          v-for="item in currendFilterOptionList"
          :class="$style['item']"
          :on="filterValue[currentOpen.alias] == item.value"
          @click="handleFilterItem(item)"
        >
          {{item.label}}
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div 
        :class="$style['cover']"
        :style="coverStyle"
        @click="close"
        v-if="open"
      ></div>
    </transition>
  </div>
</template>

<script>

import VueTypes from 'vue-types'
import Icon from '@/components/Icon.vue'
import filterConfig from './filterConfig'
export default {
  name: 'com-filter-bar',
  components: {
    Icon
  },
  props: {
    config: VueTypes.array.def([]),
    height: VueTypes.number.def(44)
  },
  emits: ['filter'],
  data () {
    return {
      currentOpen: null,
      open: false,
      contentShow: false,
      coverStyle: {},
      filterValue: {}, // 记录筛选项目的value值，需要传递到父组件用
      filterStatus: {} // 记录筛选条的打开收起状态
    }
  },
  computed: {
    list () {
      // filterConfig 是调试配置，需要从外部传入  config
      return this.config.length ? this.config : filterConfig
    },
    filterHeight () {
      return {
        height: this.height + 'px'
      }
    },
    filterStyle () {
      return this.open ? {
        // zIndex: 10000,
        height: this.height + 'px'
      } : {
        height: this.height + 'px'
      }
    },
    currendFilterOptionList () {
      return this.currentOpen ? this.currentOpen.options : []
    }
  },
  watch: {
    list: {
      handler (config) {
        // 初始化filterValue
        if (!config.length) {
          return {}
        }

        const filterValue = {}

        config.map(item => {
          if (Array.isArray(item.options) && item.options.length) {
            filterValue[item.alias] = item.options.find(opt => opt.def).value || 0
          }
        })

        this.filterValue = filterValue
      },
      immediate: true
    },
    open (show) {
      if (show) {
        this.$nextTick(() => {
          this.contentShow = true
        })
      }
    },

    contentShow (show) {
      if (!show) {
        this.$nextTick(() => {
          this.open = false
        })
      }
    }
  },
  created () {
  },
  mounted () {
    this.calcCoverHeight()
  },
  methods: {
    init () {
      const filterValue = {}

      this.list.map(item => {
        if (Array.isArray(item.options) && item.options.length) {
          filterValue[item.alias] = item.options.find(opt => opt.def).value || 0
        }
      })

      this.filterValue = filterValue
      this.filterStatus = {}
    },
    calcCoverHeight () {
      const $elOffsetTop = this.$el && this.$el.offsetTop
      const h = window.innerHeight - $elOffsetTop
      this.coverStyle = {
        height: h + 'px'
      }
    },
    close () {
      this.contentShow = false
      this.currentOpen = null
    },
    handleFilter (item) {
      if (this.currentOpen && this.currentOpen.alias === item.alias) {
        this.close()
        return
      }
      this.currentOpen = item

      this.$nextTick(() => {
        if (!this.open) {
          this.open = true
        }
      })
    },
    /**
     * 点击筛选项
     */
    handleFilterItem (item) {
      this.filterValue[this.currentOpen.alias] = item.value
      this.filterStatus[this.currentOpen.alias] = item
      // this.$set(this.filterValue, this.currentOpen.alias, item.value)
      // this.$set(this.filterStatus, this.currentOpen.alias, item)

      this.close()

      this.$nextTick(() => {
        this.$emit('filter', this.filterValue)
      })
    }
  }
}
</script>

<style lang="scss" module>
.com-filter-bar {
  position: relative;
  background: #FFF;
}

.filter-warp {
  position: relative; z-index: 30;
}

.shim {
  width: 100%;
}

.cover {
  position: absolute; top: 0; left: 0; right: 0; z-index: 10;
  background: rgba($color: #000000, $alpha: 0.6);
}

.filter-option {
  position: absolute; z-index: 30; left: 0; top: 0; right: 0;
  display: flex;
  padding: 0px 15px;
  background: #FFF;
}

.option {
  display: flex;
  align-items: center;
  width: 33%;
  @include font(15, 500);
  line-height: 21px;
  color: $black;

  & > span {
    @extend %row;
  }

  &:last-child {
    justify-content: flex-end;
  }

  &:nth-child(2) {
    justify-content: center;
  }

  & .arrow {
    flex-shrink: 0;
    @extend %transition;
  }

  &[on=true] {
    color: $blue;
  }

  &[open=true] {
    & .arrow {
      transform: rotate(-180deg);
    }
  }
}

.current-option-list {
  position: absolute; top: 50px; left: 0; right: 0; z-index: 20;
  display: flex;
  flex-wrap: wrap;
  padding: 0 9px 15px;
  background: #fff;

  & .item {
    @extend %center;
    height: 30px;
    padding: 0 24px; margin: 7px 6px;
    background: #F6F7FB;
    border-radius: 15px;
    line-height: 1;
    font-size: 13px;
    font-weight: 400;
    color: #353535;

    &[on=true] {
      background: $lightBlue;
      font-weight: 500;
      color: $blue;
    }
  }
}
</style>
