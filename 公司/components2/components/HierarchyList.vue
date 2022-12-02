<template>
  <!-- 服务目录层级 -->
  <div class="hierarchy-list">
    <div class="hierarchy-title">
      {{ tabKey == "1" ? "服务目录层级" : "接口目录层级" }}
    </div>
    <div class="menu-list">
      <!-- <div
        class="menu-parent"
        v-for="(item, index) in menuParentList"
        :key="item.midPlatId"
      >
        <div
          @click="showChildrenList(item.midPlatId, item.midPlatName, index)"
          class="parent-title"
          :style="{
            color: item.midPlatId == midPlatId ? '#009999' : '',
            backgroundColor: item.midPlatId == midPlatId ? '#ebfdfd' : ''
          }"
        >
          <img
            :src="
              item.midPlatId == midPlatId
                ? `${require('@/assets/images/zd_icon.png')}`
                : `${require('@/assets/images/sq_icon.png')}`
            "
            alt=""
          />
          <span>{{ item.midPlatName }}</span>
        </div>
        <div class="menu-children-list" v-show="item.midPlatId == midPlatId">
          <div
            class="menu-children"
            v-for="(itemChildren, idx) in leftChildrenList[item.midPlatId]"
            :key="itemChildren.centerId"
          >
            <span class="icon"></span>
            <span
              class="text"
              @click="
                filterChildrenList(
                  itemChildren.centerId,
                  itemChildren.centerName,
                  idx,
                  index
                )
              "
              :style="{
                color: itemChildren.centerId == centerId ? '#009999' : ''
              }"
              >{{ itemChildren.centerName }}</span
            >
            <div class="isShow" v-if="tabKey == '2'">
              <span class="show" @click="showDrawer(idx, itemChildren.centerId)"
                >服务</span
              >
            </div>
          </div>
        </div>
      </div> -->

      <a-menu mode="inline" :open-keys="openKeys" @openChange="openChange">
        <a-sub-menu v-for="(item, index) in menuParentList" :key="item.midPlatId">
          <span
            class="menu-title"
            @click="showChildrenList(item.midPlatId, item.midPlatName, index)"
            slot="title"
            >{{ item.midPlatName }}</span
          >
          <a-menu-item
            v-for="(itemChildren, idx) in menuChildrenList[item.midPlatId]"
            :key="itemChildren.centerId"
            class="menuChildrenList"
          >
            <span
              class="text"
              @click="
                filterChildrenList(
                  itemChildren.centerId,
                  itemChildren.centerName,
                  idx,
                  index
                )
              "
              >{{ itemChildren.centerName }}</span
            >
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    leftList: Array,
    leftChildrenList: Object,
    tabKey: {
      type: String,
      default: "1",
    },
  },
  data() {
    return {
      openKeys: [],
      rootSubmenuKeys: ["1", "2", "3", "4"],
      menuParentList: [],
      menuChildrenList: {},
      midPlatId: "",
      centerId: "",
      isFlag: false,
      showIndex: -1,
    };
  },
  watch: {
    leftList: function (newValue, oldValue) {
      this.menuParentList = newValue;
    },
    leftChildrenList: function (newValue, oldValue) {
      this.menuChildrenList = newValue;
    },
    tabKey: function (newValue, oldValue) {
      (this.midPlatId = ""), (this.centerId = "");
      this.menuParentList.forEach((item) => {
        delete item.flag;
      });
    },
  },
  methods: {
    //左侧导航手风琴效果
    openChange(openKeys, n) {
      var sss = [123];
      console.log(sss.indexOf(123) == -1);
      const latestOpenKey = openKeys.find((key) => this.openKeys.indexOf(key) == -1);
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) == -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
    showChildrenList(midPlatId, name, index) {
      // this.midPlatId = midPlatId;
      // if (this.menuParentList[index].flag) {
      //   this.menuParentList[index].flag = !this.menuParentList[index].flag;
      //   if (!this.menuParentList[index].flag) {
      //     this.midPlatId = "";
      //   }
      // } else {
      //   this.menuParentList[index].flag = true;
      // }
      this.$emit("showChildrenList", midPlatId, name);
    },
    filterChildrenList(centerId, name, idx, index) {
      this.centerId = centerId;
      this.$emit("filterChildrenList", centerId, name, idx, index);
    },
    // showDrawer(idx, centerId) {
    //   this.$emit("showDrawer", idx, centerId);
    // }
  },
};
</script>

<style lang="scss" scoped>
@import "@/base.scss";
.hierarchy-list {
  // overflow-y: scroll;
  width: px2rem(260px);
  height: px2rem(1085px);
  background-color: #fff;
  padding-top: px2rem(22px);
  // padding: px2rem(23px) px2rem(20px) 0;
  position: relative;
  .hierarchy-title {
    font-family: Microsoft YaHei;
    font-weight: 700;
    color: #262626;
    font-size: px2rem(18px);
    border-left: 3px solid #009999;
    text-align: left;
    padding-left: px2rem(10px);
    margin: 0 0 px2rem(14px) px2rem(20px);
  }
  // .menu-list {
  //   width: 100%;
  //   transition: all 0.5s;
  //   .menu-parent {
  //     width: px2rem(228px);
  //     //   height: px2rem(45px);
  //     line-height: px2rem(45px);

  //     font-size: px2rem(16px);
  //     margin-bottom: px2rem(9px);
  //     cursor: pointer;
  //     .parent-title {
  //       width: 100%;
  //       line-height: px2rem(45px);
  //       text-align: left;
  //       background-color: #fff;
  //       font-family: Microsoft YaHei;
  //       font-weight: 700;
  //       color: #4e5050;
  //       padding-left: px2rem(14px);
  //       &:hover {
  //         background-color: #ebfdfd;
  //         color: #009999;
  //       }
  //     }
  //   }
  //   .menu-children {
  //     padding: px2rem(10px) 0;
  //     font-family: Microsoft YaHei;
  //     color: #4e5050;
  //     font-size: px2rem(16px);
  //     border-left: 1px dashed #bcbcbc;
  //     margin-left: px2rem(25px);
  //     display: flex;
  //     flex-direction: row;
  //     align-items: center;
  //     .text:hover {
  //       color: #009999;
  //     }
  //     .icon {
  //       width: px2rem(14px);
  //       height: 0px;
  //       border-bottom: 1px dashed #bcbcbc;
  //       display: inline-block;
  //       margin-right: px2rem(14px);
  //       &:hover {
  //         color: #009999;
  //       }
  //     }
  //     .isShow {
  //       margin-left: px2rem(30px);
  //       &:hover {
  //         color: #009999;
  //       }
  //     }
  //   }
  // }
  // /deep/ .a-menu {
  //   // width: px2rem(260px);
  //   width: 100%;
  // }
  /deep/ .ant-menu-inline,
  .ant-menu-vertical,
  .ant-menu-vertical-left {
    border-right: none;
    .ant-menu-submenu-title {
      text-align: left;
      color: #262626;
      font-size: px2rem(16px);
      padding-left: none !important;
      font-family: Microsoft YaHei;
      :hover {
        color: #009999;
        font-weight: 700;
      }
    }
    .ant-menu-submenu-open {
      color: #038181;
      .menu-title {
        font-weight: 700;
        color: #009999;
      }
    }
    .ant-menu-item-selected {
      background-color: #fff;
      color: #009999;
      &::after {
        display: none;
      }
    }
    .ant-menu-item-active {
      span {
        color: #009999;
      }
      // color: #4e5050;
    }
  }
  .menuChildrenList {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: px2rem(16px);
    color: #4e5050;
  }
  .menu-title {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
}
</style>