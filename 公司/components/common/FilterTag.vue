<template>
  <transition name="fade" :class="$style['category-filter-bar']" v-if="show">
    <div :class="$style['filter-mask']" @click="handleUntouch"></div>
  </transition>
  <div :class="$style['page-study-content']">
    <Tabs v-model:active="active" :class="$style['tabs']" @change="changeActive(active)">
      <Tab 
        :key="item.value"
        v-for="(item) in taskTypeTabs"
        :value="item.type"
      >
        {{item.label}}
      </Tab>
    </Tabs>
    <div :class="$style['filter-content']">
      <div :class="$style['type-content']" @click="open">
        <span :on="show" :class="$style[currentTabWords !== '全部分类' ? 'on' : '']">{{currentTabWords}}</span>
        <Icon :on="show" :class="$style['arrow']" code="&#xe773;" />
      </div>
      <div :class="$style['num']">{{num}}个任务</div>
    </div>
    <transition name="move-down" v-if="show">
      <ul :class="$style['sel-options']">
        <li
          :key="index" 
          v-for="(item, index) in config" 
          :class="$style[status === index ? 'current' : '']"
          @click="handeChangeStatus(index, item)"
        >
          {{item.name}}
          <Icon :class="$style['right-arrow']" code="&#xe76b;" v-if="status === index" />
        </li>
      </ul>
    </transition>
  </div>
</template>
<script>
import VueTypes from 'vue-types'
import Tabs from '@/components/tab/Tabs.vue'
import Tab from '@/components/tab/Tab.vue'
import Icon from '@/components/Icon.vue'
import {ref} from 'vue'
export default {
  name: 'filter-tag',
  components: {
    Icon,
    Tabs,
    Tab
  },
  props: {
    config: VueTypes.array.def([]),
    taskTypeTabs: VueTypes.array.def([]),
    num: VueTypes.number.def(0),
    current: VueTypes.number.def(0)
  },
  emits: ['changeActive'],
  setup (props, cxt) {
    let show = ref(false)
    // 当前选中的任务类型
    let active = ref(props.current)
    // 分类选中的状态
    let status = ref(0)
    //保存选中文字
    let currentTabWords = ref('全部分类')

    const changeActive = (active)=>{
      status.value = 0
      currentTabWords.value = '全部分类'
      cxt.emit('changeActive', {type: active, status: 0})
      show.value = false
      
    }

    const handeChangeStatus = (index, item)=>{
      status.value = index
      currentTabWords.value = item.name
      cxt.emit('changeActive', {type: active.value, status: index})
      show.value = false
    }

    const handleUntouch = ()=>{
      show.value = false
    }

    const open = ()=>{
      show.value = !show.value
    }

    return {
      changeActive,
      handeChangeStatus,
      handleUntouch,
      active,
      status,
      show,
      open,
      currentTabWords
    }
  },
  
}
</script>
<style lang="scss" module>
.category-filter-bar {
  position: relative;
  display: flex;
  width: 100%; height: 43px;
  background: #FFF;
}

.filter-mask {
  position: fixed; height:100%; left: 0; top: 0; right: 0; bottom: 0; z-index: 1;
  background: rgba(0, 0, 0, 0.5);

}

.page-study-content {
  position: fixed;
  padding: 0 16px 4px;
  width: calc( 100% - 30px );
  z-index: 31;
  background: #fff;

  .tabs {
    margin-top: 4px;
    margin-bottom: 4px;

    [qyb-tabs] {
      width: 22px !important;
      bottom: -3px;
    }
  }
}

.filter-content {
  display: flex;
  justify-content: space-between;
  padding-top: 13px;

  div {
    @include font(15, 500);
    color:  $subBlack;
  }

  .num {
    line-height: 32px;
    @include font(12, 400);
    color:  $gray;
  }
}

.type-content {
  display: flex;
  align-items: center;
  cursor: pointer;
   
  & [on=true] {
    color: $blue;
    // transform: rotate(180deg);
  }
}

.arrow {
  width: 14px;
  @include font(13);
  color: #7f848c;
  margin-left: 3px;
  @extend %transition;

  &[on=true] {
    color: $blue;
    transform: rotate(180deg);
  }

  &[on=false] {
   transform: rotate(0deg);
  }
}

.on {
  color: $blue
}

.sel-options {
  margin-top: 18px;
  background: $white;
  @include font(14, 500);
  color: #7F848C;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 23px;
    cursor: pointer;
  }

  .current {
    color: $blue
  }

  .right-arrow {
    margin-right: -2px;
    font-size: 22px;
    line-height: 0;
  }

}
</style>
