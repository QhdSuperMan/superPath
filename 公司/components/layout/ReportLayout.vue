<template>
  <Layout :class="$style['layout-report']">
    <div :class="$style['loading-panel']" v-if="loading">
      <Loading color="blue" :size="50" />
    </div>
    <template v-else-if="!error">
      <div :class="$style['report-main']">
        <div :class="$style['report-head']">
          <h1 :class="$style['report-title']">{{title}}</h1>
          <div :class="$style['person-info']">
            <p
              :key="index"
              v-for="(item, index) in fileds"
              :class="$style['filed']"
            >
              {{item.filed}}{{item.value}}
            </p>
            <p :class="[$style['placeholder']]"></p>
            <slot name="head-end" />
          </div>
        </div>
        <slot />
      </div>
    </template>
    <template v-else>
      <Permissions />
    </template>
  </Layout>
</template>

<script>
import VueTypes from 'vue-types'
import Layout from './Layout.vue'
import Loading from '../loading/Loading.vue'
import Permissions from '@/components/report/Permissions.vue'
export default {
  name: 'layout-report',
  components: {
    Layout,
    Loading,
    Permissions
  },
  props: {
    loading: VueTypes.bool.def(false),
    error: VueTypes.oneOfType([Boolean, Object]).def(false),
    title: VueTypes.string.def(''),
    /**
     * {filed: '学员账号', value: 189xxxx0101}
     */
    fileds: VueTypes.array.def([])
  }
}
</script>

<style lang="scss" module>
.layout-report {
  &[common-layout] {
    background: #fafafc;
  }
}

.loading-panel {
  @extend %center;
  width: 100%; height: 500px;
}

.report-main {
  box-sizing: border-box;
  width: 1080px;
  padding: 30px 60px 34px; margin: 30px auto;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 4px 10px 0px rgba(228, 229, 231, 0.4);
}

.report-head {
  padding-bottom: 10px;
  border-bottom: 1px solid #EFF0F2;
}

.report-title {
  margin-bottom: 40px;
  @include lineFont(24, 500);
  color: $reportBlack;
  text-align: center;

  &:before,
  &:after {
    content: '';
    display: inline-block;
    width: 97px; height: 24px;
    background-repeat: no-repeat;
    background-size: 97px 10px;
    background-position: 0 10px;
  }

  &:before {
    margin-right: 14px;
    background-image: url('../../assets/img/report/title-left.png');
  }

  &:after {
    margin-left: 14px;
    background-image: url('../../assets/img/report/title-right.png');
  }
}

.person-info {
  display: flex;

  & .placeholder {
    flex-grow: 1;
  }

  & .filed {
    margin-right: 50px;
    @include font(14);
    line-height: 20px;
  }
}
</style>
