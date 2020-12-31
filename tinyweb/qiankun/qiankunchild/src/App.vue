<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <p>{{ token }}</p>
    <input v-model="msg"  @input="inputChange">
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '',
      token: ''
    };
  },
  created () {
    this.$baseData.onGlobalStateChange((state) => {
      this.token = state.token
    },true)
    console.log(this.$baseData.singleSpa)
  },
  methods: {
    inputChange () {
      this.$baseData.setGlobalState({token: '儿子改变Token' + this.msg, id: 111},true)
    }
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

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
