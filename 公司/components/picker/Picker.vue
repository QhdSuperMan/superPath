<template>
  <div :class="$style['qyb-picker']">
    <Popup 
      v-model:show="isShow" 
      v-bind="$attrs"
      @update:show="close"
    >
      <div :class="$style['qyb-picker-header']" qyb-picker-header>
        <slot name="cancel">
          <div :class="$style['qyb-picker-cancel']" qyb-picker-cancel @click="close">
            {{ cancelText }}
          </div>
        </slot>
        <slot name="title">
          <div :class="$style['qyb-picker-title']" qyb-picker-title>
            {{ title }}
          </div>
        </slot>
        <slot name="confirm">
          <div :class="$style['qyb-picker-confirm']" qyb-picker-confirm @click="confirm">
            {{ confirmText }}
          </div>
        </slot>
      </div>
      <div :class="$style['qyb-picker-container']" qyb-picker-container>
        <div :class="$style['qyb-picker-content']" qyb-picker-content>
          <PickerItem 
            :key="key"
            v-for="(val, key) in formattedColumns"
            :value="val"
            :defaultIndex="val.defaultIndex || defaultIndex"
            @change="itemChange"
          />
        </div>
        <div :class="$style['qyb-picker-mask']" qyb-picker-mask></div>
        <div :class="$style['qyb-picker-frame']" qyb-picker-frame></div>
      </div>
    </Popup>
  </div>
</template>

<script>
import VueTypes from 'vue-types'
import { computed, nextTick, ref, watch } from 'vue'
import Popup from '../popup/Popup.vue'
import { useChildren } from '@/utils/hooks/useChildren'
import PickerItem from './PickerItem.vue'
export default {
  name: 'QybPicker',
  components: {
    Popup,
    PickerItem
  },
  props: {
    title: VueTypes.string.def(''), 
    cancelText: VueTypes.string.def('取消'), 
    confirmText: VueTypes.string.def('确定'),
    show: VueTypes.bool.def(false),
    itemHeight: VueTypes.number.def(44), // 
    columns: VueTypes.any, // 数据格式为数组
    visibleItemCount: VueTypes.number.def(5), // 可视区域个数 最好是奇数
    columnsConfig: VueTypes.object.def({
      label: 'label', // label
      value: 'value', // value
      children: 'children' // children
    }),
    fetchData: VueTypes.func.def(undefined), // 异步获取数据
    defaultIndex: VueTypes.number.def(0), // 默认选中
    defaultValue: VueTypes.any.def(undefined), // 默认值
  },
  emits: ['update:show', 'change', 'confirm', 'close'],
  setup (props, { emit }) {
    const isShow = ref(props.show)
    const { children, linkChildren } = useChildren('Picker')
    // eslint-disable-next-line vue/no-setup-props-destructure
    const valuesKey = props.columnsConfig.value
    // eslint-disable-next-line vue/no-setup-props-destructure
    let childrenKey = props.columnsConfig.children
    const boxHeightPx = computed(() => props.visibleItemCount * props.itemHeight + 'px')
    const backgroundSize = computed(() => `100% ${(props.visibleItemCount * props.itemHeight - props.itemHeight) / 4}px`)
    const itemHeightPx = computed(() => props.itemHeight  + 'px')
    const formattedColumns = ref([])
    const dataType = ref()  // 级联选择 还是普通 还是简单

    // 处理级联数据
    const formatCascade = (columns, index = 0) => {
      let cursor = columns
      while (cursor && cursor[childrenKey]) {
        const children = cursor[childrenKey]
        let defaultIndex = cursor.defaultIndex ?? +props.defaultIndex

        while (children[defaultIndex] && children[defaultIndex].disabled) {
          if (defaultIndex < children.length - 1) {
            defaultIndex++
          } else {
            defaultIndex = 0
            break
          }
        }
        formattedColumns.value[index] = {
          qybValueKey: cursor[childrenKey],
          className: cursor.className,
          defaultIndex,
        }
        index++
        cursor = children[defaultIndex]
      }
    }

    const getColumns = (...args) => {
      if (Object.prototype.toString.call(props.columns) === '[object Function]') {
        return props.columns(...args)
      } else {
        return props.columns
      }
    }
    // 格式化数据
    const format = () => {
      if (dataType.value === 'plain') {
        formattedColumns.value = [{ qybValueKey: getColumns() }]
      } else if (dataType.value === 'cascade') {
        formatCascade({
          [childrenKey]: getColumns(),
        })
      } else {
        formattedColumns.value = getColumns()
      }
    }
    // 子组件触发change
    const itemChange = (val, index, ItemIndex) => {
      if (dataType.value === 'plain') {
        emit('change', val, index, ItemIndex)
        return
      }
      if (ItemIndex.value < formattedColumns.value.length - 1) { // 级联需要设置子元素
        if (props.fetchData) {
          getFetchData(() => {
            emit('change', getValue(), getIndex())
          }, ItemIndex.value + 1)
          return
        } else {
          formatCascade(val, ItemIndex.value + 1)
        }
      }
      nextTick(() => {
        emit('change', getValue(), getIndex())
      })
    }
    // 关闭
    const close = () => {
      emit('update:show', false)
      emit('close')
    }
    // 确认
    const confirm = () => {
      if (dataType.value === 'plain') {
        emit('confirm', getValue()[0], getIndex()[0])
      } else {
        emit('confirm', getValue(), getIndex())
      }
      close()
    }
    // 设置子组件的value值
    const setValue = (val) => {
      let valBox = Array.isArray(val) ? val : [val]
      children.map((child, key) => child.setValue(valBox[key]))
    }
    // 设置索引
    const setIndex = (index) => {
      let indexBox = Array.isArray(index) ? index : [index]
      children.map((child, key) => child.setIndex(indexBox[key]))
    }
    // 获取孩子们
    const getChilds = () => {
      return children
    }
    // 获取子组件value的值
    const getValue = () => children.map((child) => child.getValue())
    // 获取子组件value的值
    const getIndex = () => children.map((child) => child.getSelectIndex())
        // 判断是什么类型的选择器
    const getDataType = ((obj) => {
      const firstColumn = obj
      if (typeof firstColumn === 'object') {
        if (childrenKey in firstColumn) {
          dataType.value = 'cascade'
          return
        }
        if (valuesKey in firstColumn) {
          dataType.value = 'object'
        }
      } else {
        dataType.value = 'plain'
      }
    })

    // 获取数据处理数据
    function getData (callback) {
      // 远端获取数据
      if (props.fetchData) {
        formattedColumns.value = []
        getFetchData(() => {
          getDataType(formattedColumns.value && formattedColumns.value[0])
          callback && callback()
        })
      } else {
        getDataType(getColumns()[0])
        // 监听数据变化
        watch(() => props.columns, format, { immediate: true })
      }
    }

    // 监听显示隐藏
    watch(() => props.show, (val) => {
      if (val) {
        // 获取完数据设置默认值
        getData()
        if (props.defaultValue && !props.fetchData) { // 选中默认数据
          nextTick(() => {
            setValue(props.defaultValue)
          })
        }
      }
      isShow.value = val
    })

    // 获取选中索引
    function getSelectedIndex (val, arr) {
      let result = arr.findIndex((item, key) => {
        if (typeof(item) === 'object' && item[valuesKey] === val) {
          return true
        } else if(item === val) {
          return true
        }
      })
      return result < 0 ? undefined : result
    }

    async function getFetchData (callback, index = 0) {
      let result = await props.fetchData(index, getValue(), getIndex())
      formattedColumns.value[index] = {
        qybValueKey: result.columns,
        className: result.className,
        defaultIndex: getSelectedIndex(props.defaultValue[index], result.columns) ?? result.defaultIndex ?? props.defaultIndex,
      }
      index++
      
      nextTick(() => {
        if (result.isFinished) { // 结束标志
          nextTick(() => {
            callback && callback()
          })
        } else {
          getFetchData(callback, index)
        }
      })
    }
    // 处理
    linkChildren(props)
    return {
      isShow,
      valuesKey,
      formattedColumns,
      boxHeightPx,
      itemHeightPx,
      backgroundSize,
      itemChange,
      close,
      confirm,
      setValue,
      getValue,
      getIndex,
      setIndex,
      getChilds
    }
  }
}
</script>

<style lang="scss" module>

.qyb-picker-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 44px;
  padding: 0px 16px;
  // border-bottom: solid 1px  $borderGray;
}

.qyb-picker-container {
  position: relative;
}

.qyb-picker-cancel {
  color: $subGray;
  @include font(14, 500);
}

.qyb-picker-confirm {
  color: $blue;
  @include font(14, 500);
}

.qyb-picker-title {
  flex: 1;
  text-align: center;
  color: $black;
  @include font(16, 500);
}

.qyb-picker-content {
  overflow: hidden;
  display: flex;
  // align-items: center;
  justify-content: space-between;
  height: v-bind(boxHeightPx);
}

.qyb-picker-mask {
  position: absolute; top: 0; left: 0; z-index: 1;
  width: 100%; height: 100%;
  background-image: linear-gradient(180deg, rgba(255, 255, 255, .8), rgba(255, 255, 255, .4)), linear-gradient(0deg, rgba(255, 255, 255, .8), rgba(255, 255, 255, .4));
  background-size: v-bind(backgroundSize);
  background-repeat: no-repeat;
  background-position: top,bottom;
  transform: translateZ(0);
  pointer-events: none;
}

.qyb-picker-frame {
  position: absolute; top: 50%; left: 0; z-index: 2;
  width: 100%; height: v-bind(itemHeightPx);
  border-top: solid 0.5px $borderGray; border-bottom: solid 0.5px $borderGray;
  transform: translateY(-50%);
  pointer-events: none;
}
</style>
