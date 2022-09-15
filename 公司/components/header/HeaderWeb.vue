<template>
  <div common-header :shadow="useShadow" :class="$style['common-header']">
    <div :class="$style['shim']"></div>
    <div :class="$style['header']">
      <div :class="$style['header-inner']">
        <div :class="$style['header-logo']">
          <a href="/member/" :class="$style['header-logo']">
            <img :src="logoSrc" alt="logo" />
          </a>
        </div>
        <div :class="$style['menu-wrap']">
          <ul :class="$style['menu-list']">
            <template :key="menu.alias" v-for="menu in navList">
              <li
                :class="$style['menu-item']"
                :on="menu.scene === currentRoute.meta.scene"
                @click.prevent="handleRoute(menu)"
                v-if="!menu.extra"
              >
                <Icon :class="$style['menu-icon']" :code="menu.icon" v-if="menu.icon" />
                <a :href="menu.path">{{menu.label}}</a>
              </li>
            </template>
          </ul>
          <div :class="$style['menu-placeholder']"></div>
          <ul :class="$style['menu-list']" extra v-if="extraMenu.length">
            <li
              :key="menu.alias"
              v-for="menu in extraMenu"
              :class="$style['menu-item']"
              @click.prevent="handleRoute(menu)"
            >
              <Icon :class="$style['menu-icon']" :code="menu.icon" v-if="menu.icon" />
              <a :href="menu.path">{{menu.label}}</a>
            </li>
          </ul>
        </div>
        <div :class="$style['search-wrap']" v-if="!currentRoute.query.search_key">
          <gkTooltip
            v-model:visible="tooltipVisible"
            search-tooltip
            :class="$style['search-tooltip']"
            color="white"
            position="bottom"
            trigger="custom"
            transition="dropdown-slide"
            hideTrigger="custom"
            :arrow="false"
            :top="2"
          >
            <SearchInput
              @search="onSearch"
              @focus="onSearchFocus"
              @blur="onSearchBlur"
              @input="onSearchInput"
            />
            <template v-slot:content>
              <div :class="$style['tooltip-content']">
                <!-- 判断 请求内容为空 并且 值为null 时展示 -->
                <div :class="$style['hot-key-container']" v-if="searchResult.length === 0 && !searchValue">
                  <h4 :class="$style['hot-title']">同事都在搜</h4>
                  <div :class="$style['hot-key-list']">
                    <span
                      :key="index"
                      v-for="(item,index) in searchHotReault"
                      :class="$style['hot-key']"
                      @click="searchList(item)"
                    >{{item}}</span>
                  </div>
                </div>
                <div :class="$style['search-result']" v-else>
                  <ul :class="$style['search-result-list']">
                    <li
                      :key="res.id"
                      v-for="res in searchResult"
                      v-html="formatSearchResult(res)"
                      @click="searchList(res.value)"
                    ></li>
                  </ul>
                </div>
              </div>
            </template>
          </gkTooltip>
        </div>
        <!-- :on="!!currentRoute.params.type" -->
        <div
          :class="$style['message-box']"
          @click="handleMessage"
          v-if="message && user && user.uid"
        >
          <Icon :class="$style['message-icon']" code="&#xe795;" />
          <!-- <span :class="$style['message-num']" v-if="message?.count && messageVisible ">{{message && message?.count > 99 ? '99+' : message?.count}}</span> -->
          <span :class="$style['message-num']" v-if="message?.count">{{message && message?.count > 99 ? '99+' : message?.count}}</span>
          <!-- <span :class="$style['message-num']">{{1}}</span> -->
        </div>
        <div :class="$style['account']">
          <template v-if="user && user.uid">
            <div :class="$style['user-info']">
              <gkTooltip
                v-model:visible="popupVisible"
                color="account-popup"
                position="bottom-end"
                trigger="click"
                hideTrigger="outerClick"
                transition="dropdown-slide"
                :top="8"
                :arrow="false"
              >
                <Avatar :size="36" :url="user.avatar || defaultAvatar" @click="showAccountPopup"></Avatar>
                <template v-slot:content="{close}">
                  <div :class="$style['user-popup']">
                    <div :class="$style['user-name']">
                      <span :class="$style['name']">
                        {{ user.nick }}
                      </span>
                    </div>
                    <div :class="$style['vip-box']" v-if="svipInfo?.count > 0">
                      <div
                        :key="index"
                        v-for="(item,index) in svipInfo?.list"
                        :class="$style['vip-distance']"
                      >
                        <gkTooltip
                          color="white"
                          position="top-end"
                          trigger="hover"
                          :left="0"
                          :arrow="false"
                          :label="item.name"
                          v-if="item.has_own && item.has_expire_status === 1"
                        >
                          <div
                            :vip-state="item.goods_type"
                            :class="$style['vip-item']"
                          >
                          </div>
                        </gkTooltip>
                      </div>
                    </div>
                    <div :class="$style['popup-menu']">
                      <template :key="menu.alias" v-for="menu in popupMenu">
                        <div :class="$style['popup-menu-item']" @click="handleRoutePopup(menu, close)">
                          {{ menu.label }}
                        </div>
                      </template>
                    </div>

                    <div :class="$style['logout']" @click="handleLogout">
                      退出登录
                    </div>
                  </div>
                </template>
              </gkTooltip>
            </div>
          </template>
          <template v-else>
            <a :class="$style['login-link']" @click="handleLogin">登录</a>
            <span :class="$style['link-line']"> / </span>
            <a :class="$style['login-link']" @click="handleRegister">注册</a>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import VueTypes from 'vue-types'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import * as types from '@/store/mutations-type'

import { commonRoute, date, logout, debounce } from '@/utils'

import { gkTooltip } from '@geekbang/gkui'

import SearchInput from '../search/SearchInput.vue'
import Icon from '../Icon.vue'
import Avatar from '@/components/avatar/Avatar.vue'

import logoImage from '@/assets/img/logo-normal.png'
import defaultAvatar from '@/assets/img/default-avatar.png'
import navConfig from './nav.config'

import { getSearchHot, getSearchSuggest } from '../../service/search.service'

export default {
  name: 'HeaderWeb',
  components: {
    gkTooltip,
    SearchInput,
    Icon,
    Avatar
  },
  props: {
    useShadow: VueTypes.bool.def(true),
    user: VueTypes.object.def({}),
    message: VueTypes.object.def({}),
  },
  setup (props) {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()

    const tooltipVisible = ref(false)
    const popupVisible = ref(false)
    const searchHotReault = ref([]) // 输入框获取焦点的时候 请求数据结果
    const searchResult = ref([]) // 搜索输入之后的联想结果
    const messageVisible = computed(() => store.state.messageNumFlag) // 消息 数字是否提示
    const currentRoute = computed(() => route)

    const logoSrc = computed(() => logoImage)
    const navList = computed(() => navConfig)
    // const svipInfo = computed(() => store.state.userBaseInfo?.svip || {})
    const svipInfo = computed(() => store.state.userVipInfo?.vip || {})
    const popupMenu = computed(() => {
      return [
        {
          alias: 'user-center-rights',
          path: '/user/rights',
          label: '我的权益'
        },
        {
          alias: 'user-center-lesson',
          path: '/user/lesson',
          label: '我的课程'
        },
        {
          alias: 'user-center',
          path: '/user/lesson',
          label: '个人中心'
        }
      ]
    })

    const extraMenu = computed(() => {
      return navList.value.filter(nav => {
        if (nav.extra) {
          return nav
        }
      })
    })

    const handleRoute = nav => {
      if (nav.open) {
        commonRoute(nav.path, nav.open)
      } else {
        router.push(nav.path)
      }
    }

    const handleRoutePopup = (menu, close) => {
      if (route.name === menu.alias) {
        popupVisible.value = false
        return
      }
      router.push(menu.path)
      close()
      popupVisible.value = false
    }

    const showAccountPopup = () => {
      popupVisible.value = true
    }

    /**
     *  点击查看消息列表
     */
    const handleMessage = () => {
      // 清除闹钟上的数字提示
      store.commit(types.MESSAGE_NUM_FLAG, false)
      // 跳转
      router.push({name: 'message-center', params: {type: '1'}})
    }

    /**
     * 剪辑搜索按钮
     */
    const onSearch = key => {
      router.push({
        name: 'search',
        query: {
          search_key: key
        }
      })
    }
    /**
     * 输入框获取焦点时 请求数据
     */
    const onSearchFocus = (key) => {
      // 这里请求搜索方法方法
      getSearchHot().then(res => {
        searchHotReault.value = res
        // 判断输入框获取焦点 有值 但是搜索内容为空 不展示tooltip
        if(key && searchResult.value.length === 0){
          tooltipVisible.value = false
        } else {
          tooltipVisible.value = true
        }
      }).catch(err => {
        if (err.code + '' === '-2006') {
          return
        }
      })
      handleScroll() // 启动监听事件
    }

    /**
     * 点击获取焦点展示 搜索内容
     * @param {*} val
     */
    const searchList = (val) => {
      onSearch(val)
    }

    const onSearchBlur = () => {
      // 失去焦点 注销监听滚动事件
      window.removeEventListener('scroll', () => {})
      // input 失去焦点
      setTimeout(() => {
        tooltipVisible.value = false
      }, 200)
    }
    // 获取搜索输入框内容
    const searchValue = ref(null)
    const onSearchInput = debounce((value) => {
      if (!value) {
        searchResult.value = []
        searchValue.value = null
      } else {
        searchValue.value = value
        searchResult.value = []
        const searinfo = {
          keyword: value,
          size: 6
        }
        getSearchSuggest(searinfo).then(res => {
          let resArray = []
          res.forEach((item, index) => {
            let arrItem = {
              id: index + 1,
              value: item,
              key: value || ''
            }
            resArray.push(arrItem)
          })
          searchResult.value.push(...resArray)
          // 触发搜索请求值为空 不展示tooltip
          if(res.length === 0) {
            tooltipVisible.value = false
          } else {
            tooltipVisible.value = true
          }
        }).catch(err => {
          if (err.code + '' === '-2006') {
            return
          }
        })
      }
    })

    const formatSearchResult = (data) => {
      const reg = new RegExp(data.key)
      const res = data.value.replace(reg, `<span class="search-key">${data.key}</span>`)
      return res
    }

    const handleLogout = () => {
      // logout().finally(() => {
      //   window.location.reload()
      // })
      logout()
    }

    // 获取焦点的时候监听页面混动事件
    function handleScroll () {
      window.addEventListener('scroll', () => {
        tooltipVisible.value = false
      })
    }

    return {
      defaultAvatar,
      searchHotReault,
      messageVisible,
      searchResult,
      tooltipVisible,
      popupVisible,
      currentRoute,
      logoSrc,
      navList,
      svipInfo,
      popupMenu,
      extraMenu,
      handleRoute,
      handleRoutePopup,
      showAccountPopup,
      onSearch,
      onSearchFocus,
      onSearchBlur,
      onSearchInput,
      formatSearchResult,
      handleLogout,
      handleMessage,
      date,
      searchList,
      searchValue
    }
  }
}
</script>

<style lang="scss">
.search-key {
  color: $blue;
}
</style>

<style lang="scss" module>
$headerHeight: 64px;
.common-header {
  position: relative;

  &[shadow="true"] {
    box-shadow: 0px 0px 20px 4px rgba(238, 242, 245, 0.4);
  }
}

.shim {
  width: 100%; height: $headerHeight;
}

.header {
  position: fixed; left: 0; right: 0; top: 0; z-index: 2000;
  // backdrop-filter: saturate(180%) blur(20px);
  background: rgba(255, 255, 255, 1);
}

.header-inner {
  display: flex;
  align-items: center;
  width: 1200px; height: $headerHeight;
  margin: 0 auto;
}

.header-logo {
  width: 159px; height: 24px;
  cursor: pointer;

  & img {
    display: block;
    width: 159px; height: 24px;
  }
}

.menu-wrap {
  display: flex;
  flex-grow: 1;
  margin-left: 49px;
}

.menu-placeholder {
  flex-grow: 1;
}

.menu-list {
  @extend %flex-row;

  &[extra] {
    margin-right: 24px;

    & li:last-child {
      padding-right: 0;
    }
  }
}

.message-box {
  position: relative;
  // padding-left: 16px;
  // margin-left: 16px;
  color: $gray;
  cursor: pointer;

  &:hover {
    color: $blue;
  }

  // &[on="true"] {
  &[on="true"] {
    color: $blue;
  }

  .message-icon {
    @include font(22);
  }

  .message-num {
    // box-sizing: border-box;
    position: absolute; top:0; left: 10px;
    min-width: 8px; height: 16px;
    padding: 0px 4px;
    background: $red;
    border-radius: 8px;
    text-align: center;
    line-height: 16px;
    @include font(12,500);
    color: $white;
  }
}

.menu-item {
  padding: 0 21px;
  font-family: 'PingFangSC-Regular', 'PingFang SC';
  cursor: pointer;
  @extend %transition;
  user-select: none;

  &[on="true"] {
    font-family: 'PingFangSC-Medium', 'PingFang SC';
    color: $blue;

    & a {
      font-weight: 500;
      color: $blue;
    }
  }

  & > a {
    text-decoration: none;
    @include font(16);
    color: $black;
    @extend %transition;
  }

  &:hover {
    color: $blue;

    & a {
      color: $blue;
    }
  }
}

.menu-icon {
  margin-right: 3px;
}

.search-wrap {
  // margin-left: 24px;
  margin-right: 16px;

  & [com-search-input] {
    width: 251px;
  }
}

.tooltip-content {
  width: 226px;
  padding: 0 2px;
}

.hot-key-container {
  & .hot-title {
    position: relative;
    padding-left: 12px;
    @include font(12);
    line-height: 17px;
    color: $gray;

    &:before {
      content: '';
      position: absolute; left: -6px; top: 50%;
      width: 20px; height: 22px;
      margin-top: -11px;
      background: url('./img/search-hot-icon.png') no-repeat center / 20px 22px;
    }
  }
}

.hot-key-list {
  display: flex;
  flex-wrap: wrap;
  margin: 7px -6px 0;
}

.hot-key {
  height: 30px;
  padding: 0 12px; margin: 7px 6px;
  background: $lightGray;
  border-radius: 15px;
  @include font(13);
  line-height: 30px;
  color: $lightBlack;
  user-select: none;
  cursor: pointer;

  &:hover {
    color: $blue;
  }
}

.search-result-list {
  margin: 0 -16px;

  & li {
    height: 38px;
    padding: 0 16px;
    @include font(13);
    line-height: 38px;
    color: $lightBlack;
    @extend %transition;
    cursor: pointer;

    &:hover {
      background: $lightGray;
    }
  }
}
.account {
  margin-left: 16px;
}

.user-info {
  width: 36px; height: 36px;
  border-radius: 50%;
  cursor: pointer;
}

.login-link {
  @include font(14);
  color: $black;
  cursor: pointer;
}

.link-line {
  font-size: 14px;
}

.user-popup {
  width: 200px;
}

.user-name {
  display: flex;
  align-items: center;
  line-height: 26px;
  @include font(20, 500);
  color: $black;

  & .name {
    @extend %row;
  }

  & .vip-icon {
    flex-shrink: 0;
    width: 72px; height: 23px;
    margin-left: 3px;
    background: url('../../assets/img/icon-svip.png') no-repeat center / 72px 23px;
  }
}

.vip-box {
  // margin-top: 4px;
  // line-height: 20px;
  // @include font(14);
  // color: #A65F07;
  position: relative;
  display: flex;
  padding-top: 9px;
  padding-bottom: 15px;

  &:after {
    content: '';
    position: absolute; left: 0; bottom: 0;
    width: 200px; height: 1px;
    background: url('../../assets/img/popup-line.png') no-repeat center / cover;
  }
}

.vip-item {
  position: relative;
  width: 20px;
  height: 20px;
  margin-right: 3px;
  cursor: pointer;

  &[vip-state='64'] {
    background: url('../../assets/img/rights/pc/rights_vip_svip.png');
    background-size: 100% 100%;
  }
  &[vip-state='4'] {
    background: url('../../assets/img/rights/pc/rights_vip_mryk.png');
    background-size: 100% 100%;
  }
  &[vip-state='32'] {
    background: url('../../assets/img/rights/pc/rights_vip_dcal.png');
    background-size: 100% 100%;
  }
  &[vip-state='8'] {
    background: url('../../assets/img/rights/pc/rights_vip_txk.png');
    background-size: 100% 100%;
  }
}

.popup-menu {
  position: relative;
  padding: 10px 0 11px;

  &:after {
    content: '';
    position: absolute; left: 0;
    width: 200px; height: 1px;
    background: url('../../assets/img/head-vip-line.png') no-repeat center / cover;
  }

  &:after {
    bottom: 0;
  }
}

.popup-menu-item,
.logout {
  // padding: 10px 7px;
  padding: 10px 0;
  line-height: 24px;
  @include font(16);
  color: $lightBlack;
  cursor: pointer;
  @extend %transition;

  &:hover {
    color: $blue;
  }
}

.logout {
  margin-top: 5px;
}
</style>
