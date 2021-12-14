<!--
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-12-13 14:04:24
 * @LastEditTime: 2021-12-13 16:42:06
 * @info: 描述
-->
<template>
  <div class="hello">
    <button class="add" @click="add">添加</button>
    <button class="del" @click="del">删除</button>
    <button class="getData" @click="getData">删除</button>
    <input type="text" v-model="msg">
    <div>
      <div v-for="val in list" :key="val">
        {{ val }}
      </div>
    </div>
  </div>
</template>

<script >
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5],
      msg: "ss",
    };
  },
  methods: {
    add() {
      this.list.push(this.msg);
    },
    getAction() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(222);
        }, 1000);
      });
    },
    async getData() {
      var a = await this.getAction();
      this.msg = a;
    },
    del() {
      this.list.pop();
    },
  },
};
// import { Component, Prop, Vue } from "vue-property-decorator";

// @Component
// export default class HelloWorld extends Vue {
//   @Prop() private msg!: string;
// }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
