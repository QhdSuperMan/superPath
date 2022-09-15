<template>
  <div module-section :class="$style['module-section']">
    <h2 module-title :class="$style['module-title']" @click="handleTitle">
      <span>{{title}}</span>
      <slot name="extra" />
      <span :class="$style['placeholder']"></span>
      <slot name="titleEnd" />
    </h2>
    <template v-if="subTitle || subTitle.length">
      <p
        :key="i"
        v-for="(t, i) in computedSubTitle"
        :class="$style['sub-title']"
        :data-index="i"
      >
        {{t}}
      </p>
    </template>
    <div :class="$style['module-content']">
      <slot />
    </div>
  </div>
</template>

<script>
import VueTypes from 'vue-types'
export default {
  name: 'module-section',
  components: {
  },
  props: {
    title: VueTypes.string.def('标题'),
    subTitle: VueTypes.oneOfType([String, Array]).def('')
  },
  emits: ['click'],
  data () {
    return {

    }
  },
  computed: {
    computedSubTitle () {
      return typeof this.subTitle === 'string' ? [this.subTitle] : this.subTitle
    }
  },
  created () {
  },
  methods: {
    handleTitle () {
      this.$emit('click')
    }
  }
}
</script>
<style lang="scss" module>
.module-section {
  padding: 30px 0;
  color: $reportBlack;
  border-bottom: 1px solid $borderGray;

  &:last-child {
    border-bottom: none;
  }

  &[wx-time] {
    padding: 20px;
  }

  @include mobileInner () {
    padding: 20px;
    border-bottom: 10px solid $lightGray;
    color: $reportBlack;
  }

  @media screen and (max-width: 751px) {
    padding: 20px;
  }

}

.module-title {
  position: relative;
  display: flex;
  align-items: center;
  @include font(16, 500);
  line-height: 22px;
  color: $reportBlack;

  // & span {
  //   flex: 1;
  // }
  & .placeholder {
    flex: 1;
  }

  &:before {
    content: '';
    display: inline-block;
    width: 3px; height: 12px;
    margin-right: 6px;
    background: $blue;
    border-radius: 1.5px;
  }

  @include mobileInner () {
    color: $reportBlack;

    &:before {
      height: 14px;
    }
  }
}

.sub-title {
  margin: 8px 0 0 1px;
  @include font(14);
  line-height: 20px;
  color: $subGray;

  &[data-index="1"] {
    margin-top: 0;
  }

  @include mobileInner () {
    font-size: 13px;
    line-height: 18px;
  }
}

.module-content {}
</style>
