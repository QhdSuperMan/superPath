<template>
  <div :class="$style['common-header-wap']">
    <div :class="$style['shim']"></div>
    <div :class="$style['header']">
      <div :class="$style['logo']">
        <a href="/member/">
          <img src="../../assets/img/logo-wap.png" alt="极客时间企业版" />
        </a>
      </div>
      <div :class="$style['menu-icon']" @click="toggle">
        <Icon code="&#xe762;" />
      </div>
      <div :class="$style['placeholder']"></div>
      <div :class="$style['account']">
        <!-- <span>打开APP</span>
        <span :class="$style['line']">|</span> -->
        <Icon code="&#xe761;" @click="routeUserCenter" v-if="user && user.uid" />
        <span @click="handleLogin" v-else>登录</span>
      </div>
    </div>
    <transition name="fade">
      <div :class="$style['header-mask']" @click="open = false" v-if="open"></div>
    </transition>
    <transition name="slide-bottom">
      <div :class="$style['popup-content']" v-if="open">
        <div :class="$style['search-wrap']">
          <SearchInput :class="$style['search']" placeholder="搜索" @click="goSearch" />
        </div>
        <ul :class="$style['menu-list']">
          <template :key="menu.alias" v-for="menu in navList">
            <li
              :class="$style['menu-item']"
              :on="menu.scene === route.meta.scene"
              @click.prevent="handleRoute(menu)"
              v-if="!menu.extra"
            >
              <Icon :class="$style['link-icon']" :code="menu.icon" v-if="menu.icon" />
              <a :class="$style['link']" :href="menu.path" @click.prevent>{{menu.label}}</a>
            </li>
          </template>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import VueTypes from 'vue-types'
import { useRouter, useRoute } from 'vue-router'
import { commonRoute, login } from '@/utils'

import Icon from '@/components/Icon.vue'
import SearchInput from '@/components/search/SearchInput.vue'
import navConfig from './nav.config'
export default {
  name: 'CommonHeaderWap',
  components: {
    Icon,
    SearchInput
  },
  props: {
    user: VueTypes.object.def({})
  },
  setup (props) {
    const open = ref(false)
    const router = useRouter()
    const route = useRoute()

    const navList = computed(() => navConfig)

    const toggle = () => {
      open.value = !open.value
    }

    const goSearch = () => {
      router.push('/search')
    }

    const handleRoute = nav => {
      if (nav.open) {
        commonRoute(nav.path, nav.open)
      } else {
        let path = nav.path
        if (nav.alias === 'user-center') {
          path = '/user'
        }
        if (path === route.path) {
          toggle()
          return
        }
        router.push(path)
      }
    }

    const handleLogin = () => {
      login()
    }

    const routeUserCenter = () => {
      router.push('/user')
    }

    return {
      open,
      toggle,
      goSearch,
      route,
      handleRoute,
      navList,
      handleLogin,
      routeUserCenter
    }
  }
}
</script>

<style lang="scss" module>
$headerHeight: 52px;
.common-header-wap {
  position: relative;
  width: 100%;
  background: #FFF;
}

.shim {
  height: $headerHeight;
}

.header {
  box-sizing: border-box;
  position: fixed; top: 0; left: 0; z-index: 2003;
  display: flex;
  align-items: center;
  width: 100%; height: $headerHeight;
  padding: 0 15px;
  background: #FFF;
}

.header-mask {
  position: fixed; top: $headerHeight; left: 0; right: 0; bottom: 0; z-index: 2001;
  background: rgba($color: #000000, $alpha: 0.6);
}

.popup-content {
  position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 2002;
  // min-height: 300px;
  height: fit-content;
  padding: 62px 0 15px;
  background: #FFF;
}

.search-wrap {
  padding: 0 15px;

  & input::-webkit-input-placeholder {
    font-weight: 400 !important;
  }
}

.search {
  flex-direction: row-reverse;
  justify-content: flex-end;
  width: 100%; height: 36px;
  padding: 0 20px 0 3px;
  background: $lightGray;
  border-radius: 36px;

  & input {
    padding-left: 0;

    &::-webkit-input-placeholder {
      font-weight: 500;
      color: $subGray;
    }
  }

  & [icon] {
    width: 30px; height: 36px;
    line-height: 36px;
    font-size: 14px;
    color: $subGray;
  }
}

.menu-list {
  padding-top: 15px;
}

.menu-item {
  height: 48px;
  padding: 0 20px;

  &[on="true"] {
    & .link {
      color: $blue;
    }
  }

  &:active {
    background: $lightBlueBackground;

    & .link {
      color: $blue;
    }
  }
}

.link {
  line-height: 48px;
  @include font(14, 500);
  color: $gray;
  user-select: none;

  &:active,
  &:hover {
    text-decoration: none;
  }
}

.logo {
  width: 145px; height: 20px;
  // margin-right: 10px;

  & img {
    width: 100%; height: 100%;
  }
}

.menu-icon {
  @extend %center;
  width: 38px; height: 38px;
  color: $gray;

  & [icon] {
    position: relative; top: 1px;
    @include font(18, 500);
    line-height: 1;
    color: $gray;
  }
}

.placeholder {
  flex-grow: 1;
}

.account {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  height: 30px;
  padding: 0 13px;
  background: $lightBlueBackground;
  border-radius: 15px;
  @include font(13, 500);
  color: $blue;

  & .line {
    margin: 0 10px;
    line-height: 1;
  }

  & [icon] {
    line-height: 1;
    font-size: 14px;
  }
}
</style>
