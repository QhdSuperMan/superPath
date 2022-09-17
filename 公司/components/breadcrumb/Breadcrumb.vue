<template>
  <div :class="$style['component-breadcrumb']"> 
    <div :key="index" v-for="(item, index) in list">
      <div>
        <span :key="index" breadcrumb-item :class="$style['item']">
          <a :href="item.to" v-if="item.to">{{item.text}}</a>
          <div v-else>{{item.text}}</div>
        </span>
        <span :key="`separator-${index}`" :class="$style['separator']" v-if="index < list.length - 1">
          <slot name="separator">
            <div :class="$style['arrow']" v-if="arrow" />
            <div v-else>/</div>
          </slot>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import VueTypes from 'vue-types'
export default {
  name: 'component-breadcrumb',
  components: {
  },
  props: {
    list: VueTypes.array.def([]),
    arrow: Boolean
  }
}
</script>
<style lang="scss" module>
.component-breadcrumb {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  @include font(20, 500);
  line-height: 28px;
  color: $black;
}

.item {
  a {
    color: $gray;
    @extend %transition;

    &:hover {
      color: $black;
    }
  }
}

.separator {
  padding: 0 7px 0 8px;
  color: $gray;
  line-height: 1;
}

.arrow {
  display: inline-block;
  width: 6px;
  height: 12px;
  background: no-repeat url('../../assets/img/icon/icon-arrow-right.png') left bottom 0px / 6px 12px;
}

</style>
