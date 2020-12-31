<template>
  <div id="base">
    <el-menu :router="true" mode='horizontal'>
      <el-menu-item index="/">Home</el-menu-item> |
      <!-- <el-menu-item index="/about">About</el-menu-item> -->
      <el-menu-item index="/vue">vue</el-menu-item>
      <el-menu-item index="/react">react</el-menu-item>
      <el-button @click="tiggle">触发事件</el-button>
      <el-input v-model="msg" @input="tokenChange"></el-input>
    </el-menu>
    <router-view />
    <div id='vue'></div>
    <div id='react'></div>
    <p>token: {{ getToken }}</p>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      msg: ""
    };
  },
  methods: {
    tiggle() {
      console.log(this);
    },
    tokenChange() {
      this.setToken("父亲改变" + this.msg);
    },
    ...mapMutations({
      setToken: "setTokenGlobal"
    })
  },
  computed: {
    ...mapGetters(["getToken"])
  },
  created() {
    console.log(this);
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.el-menu-item-exact-active {
  color: #42b983;
}
</style>
