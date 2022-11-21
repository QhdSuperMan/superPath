<!--
 * @Description: 字典表select
 * @Author: wuyurong 1065229722@qq.com
 * @Date: 2022-10-19 16:16:24
 * @LastEditors: wuyurong 1065229722@qq.com
 * @LastEditTime: 2022-11-09 18:25:56
-->
<template>
  <a-select
    v-bind="$attrs"
    v-on="$listeners"
    :value="value"
    :placeholder="placeholder"
    @change="change"
    :filter-option="filterFunction"
    :dropdownClassName="dropdownClassNameAll"
    :not-found-content="fetching ? undefined : null"
    @search="search"
    @focus="search('')"
  >
    <!-- :not-found-content="fetching ? undefined : null"  -->
    <!-- <a-spin v-if="fetching" slot="notFoundContent" size="small" /> -->
    <a-select-option :value="allKey" :key="allKey" v-if="allKey !== false">
      全部
    </a-select-option>
    <a-select-option
      v-for="item in list"
      :key="item[config.value]"
      :value="item[config.value]"
    >
      {{ item[config.label] }}
    </a-select-option>
    <a-select-option
      value="dictLoading"
      key="dictLoading"
      class="dict-select-loading"
      disabled
      v-if="isScroll && !isEnd"
    >
      <a-spin ref="dictLoading" size="small" />
    </a-select-option>
    <a-select-option
      value="dictEnd"
      key="dictEnd"
      class="dict-select-end"
      disabled
      v-if="isScroll && isEnd"
    >
      没有更多数据
    </a-select-option>
  </a-select>
</template>

<script>
import dict from '@/api/dictAPI.js'
import httpUtil from "@/utils/http-util";
import commonUtil from "@/utils/common-util";
export default {
  data() {
    return {
      query: '',
      list: [],
      isEnd: false, // 没有数据
      pageIndex: 1,
      dropdownClassNameAll: 'dict-select-dropdown-class' + this.dropdownClassName,
      fetching: false
    }
  },
  props: {
    value: {
      default: null
    },
    filterOption: {// 筛选数据
      type: Function || Boolean
    },
    dropdownClassName: {// 下拉选项的class
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '--请选择--',
    },
    isScroll: {// 是否开启滚动加载
      type: Boolean,
      default: false,
    },
    queryKey: { // 远端搜索的key
      type: String,
      default: 'mentionCode',
    },
    allKey: { // 全部的字段 false为不展示
      default: ''
    },
    params: { // 额外参数
      type: Object,
      default: () => { }
    },
    options: { // 不请求接口
      default: () => null
    },
    api: { // 连接或者是请求方法
      type: String | Function,
      default: dict.GET_DICT_ITEM
    },
    code: { // 字典表编码
      type: String,
      default: ''
    },
    config: { // 配置选项
      type: Object,
      default: () => {
        return { value: 'itemCode', label: "itemName" }
      }
    },
    returnStr: { // 返回的层级结构
      type: String,
      default: 'data.items'
    },
    returnTotal: { // 返回的数量层级结构
      type: String,
      default: 'data.total'
    }
  },
  created() {
    this.getList()
  },
  computed: {
    filterFunction() {
      if (!this.filterOption) {
        return function (input, option) {
          return (
            option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
          );
        }
      } else {
        this.filterOption
      }
    }
  },
  watch: {
    options: {
      handler(newVal) {
        this.list = newVal
      },
      immediate: true
    }
  },
  methods: {
    search(query) {
      if (this.isScroll) {
        this.query = query
        this.isEnd = false
        this.list = []
        this.pageIndex = 1
        this.getList(() => {
          if (this.pageIndex === 1) {
            this.$nextTick(() => {
              this.addScroll()
            })
          }
        })
      }
    },

    async getList(callback) {
      if (!this.options) {
        this.fetching = true
        let params = {}
        if (this.code) { // 有code说明是字典表
          params = {
            filter: {
              dictCode: this.code
            },
            pageIndex: 1,
            pageSize: 10
          }
        } else if (this.isScroll) { // 可搜索
          params = {
            filter: {
              [this.queryKey]: this.query
            },
            pageIndex: this.pageIndex,
            pageSize: 10
          }
        }

        params = Object.assign(params, this.params)

        let result = {}

        if (typeof (this.api) === 'string') {
          result = await commonUtil.request(
            httpUtil.post(this.api, params)
          );
        } else {
          result = await this.api(params)
        }

        result = result.res.data
        if (result.code == 200) {

          if (this.isScroll) { // 滚动
            this.list = this.list.concat(this.getReturnList(result, this.returnStr))

            if (this.getReturnList(result, this.returnTotal) <= this.list.length) {
              this.isEnd = true
            }
          } else {
            this.list = this.getReturnList(result, this.returnStr)
          }
          callback && callback()
          this.$emit('getList', this.list)
        }

        this.fetching = false
      }
    },

    // 添加滚动处理
    addScroll() {
      let el = document.querySelector('.dict-select-dropdown-class .ant-select-dropdown-menu')
      if (this.$refs.dictLoading) {
        let dictLoading = this.$refs.dictLoading.$el.parentNode
        let that = this
        el.addEventListener('scroll', function (e) {
          let dom = e.target
          if (dom.offsetHeight + dom.scrollTop > dictLoading.offsetTop + 10 && !that.isEnd && !that.fetching) {
            that.pageIndex++
            that.getList()
          }
        })
      }
    },
    // 获取数据
    getReturnList(result, str) {
      return str.split('.').reduce((a, b) => {
        return a[b]
      }, result)
    },

    change(val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="scss" >
.dict-select-loading {
  text-align: center;
}
.dict-select-end {
  text-align: center;
}
</style>