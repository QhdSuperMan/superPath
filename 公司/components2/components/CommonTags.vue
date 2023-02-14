<template>
  <div class="tags">
    <a-tag>{{ title }}</a-tag>
    <a-tag
      v-for="(item, index) in tags"
      :class="[item.route == $route.name ? 'hasColor' : '']"
      :key="item.id"
      @click="routePush(item.route, item.query)"
      :closable="tags.length > 1"
      @close="handleClose(item)"
      >{{ item.title }}</a-tag
    >
  </div>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {
      tags: [],
    };
  },
  methods: {
    // 记录路由跳转
    routerHistroy() {
      let obj = {};
      obj.route = this.$route.name;
      obj.title = this.$route.meta.title;
      obj.id = Math.ceil(Math.random() * 10000);
      if (JSON.stringify(this.$route.query) !== "{}") {
        obj.query = JSON.stringify(this.$route.query);
      }
      this.tags.push(obj);
      this.tags = this.unique(this.tags);
      console.log("this.tags", this.tags);
    },
    // 去重方法
    unique(arr) {
      const res = new Map();
      let newArr = arr.filter((arr) => !res.has(arr.route) && res.set(arr.route, 1));
      newArr.filter((item) => {
        if (item.query !== "{}") {
          if (
            item.query !== JSON.stringify(this.$route.query) &&
            item.route == this.$route.name
          ) {
            item.query = JSON.stringify(this.$route.query);
          }
        }
      });
      return newArr;
    },
    routePush(name, query) {
      console.log(name);
      this.$router.push({
        name,
        query: JSON.parse(query),
      });
    },
    // 关闭的回调，如果关闭的是当前页，则自动跳转到所记录的最后一个页面
    handleClose(item) {
      const tags = this.tags.filter((tag) => tag !== item);
      this.tags = tags;
      if (item.route == this.$route.name) {
        this.$router.push({
          name: tags.slice(-1)[0].route,
          query: JSON.parse(tags.slice(-1)[0].query),
        });
      }
      console.log("关闭", tags);
    },
  },
  watch: {
    $route(to, from) {
      this.routerHistroy();
    },
  },
  mounted() {
    this.routerHistroy();
  },
};
</script>

<style lang="scss" scoped>
.tags {
  text-align: left;
  padding: 12px 0 12px;
  font-size: 0;
  .ant-tag {
    cursor: pointer;
    margin-right: 6px;
  }
  .hasColor {
    background-color: #f5b067;
    color: #fff;
    border: none;
    /deep/ .anticon {
      color: #fff;
    }
  }
}
</style>
