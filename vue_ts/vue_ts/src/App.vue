<!--
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2020-04-20 17:51:18
 * @LastEditTime: 2021-03-03 16:15:15
 * @info: 描述
-->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

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
