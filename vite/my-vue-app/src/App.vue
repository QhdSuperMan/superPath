<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import className from './css.module.css'
import css from './css.css'
import img from './haha.png'
console.log(img);
</script>

<template>
  <img alt="Vue logo"  src="./assets/logo.png" />
  <span :class="className.className" >411111</span>
  <img :src="img" alt="">
  <span class="title" >411111</span>
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
